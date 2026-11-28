"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { ThemeState, ThemeAction } from "./types";
import { DEFAULT_FONT_FAMILY, DEFAULT_THEME_STATE } from "./defaults";
import { loadTheme, saveTheme } from "./theme-persistence";
import { deriveSeedColors } from "./theme-engine";
import { applyPreset, findPreset } from "./presets";
import { resetSection } from "./reset-section";
import { TOKEN_MAP } from "./token-map";

/**
 * `activePresetId` stays set across edits; the panel compares state to the
 * preset's values to decide whether to show the "(modified)" marker.
 * RESET and APPLY_PRESET are the only actions that change it.
 */
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "SET_MASTER_SEED":
      return {
        ...state,
        masterSeed: action.hex,
        seedColors: deriveSeedColors(action.hex, state.schemeVariant),
      };
    case "SET_SEED":
      return {
        ...state,
        seedColors: { ...state.seedColors, [action.role]: action.hex },
      };
    case "SET_TONE_OVERRIDE": {
      // With same tones on, a tone is set for both modes at once
      const schemes = state.sameTones
        ? (["light", "dark"] as const)
        : [action.scheme];
      const toneOverrides = { ...state.toneOverrides };
      for (const scheme of schemes) {
        toneOverrides[scheme] = {
          ...toneOverrides[scheme],
          [action.token]: action.tone,
        };
      }
      return { ...state, toneOverrides };
    }
    case "CLEAR_TONE_OVERRIDE": {
      const schemes = state.sameTones
        ? (["light", "dark"] as const)
        : [action.scheme];
      const toneOverrides = { ...state.toneOverrides };
      for (const scheme of schemes) {
        const { [action.token]: _, ...rest } = toneOverrides[scheme];
        toneOverrides[scheme] = rest;
      }
      return { ...state, toneOverrides };
    }
    case "SET_SAME_TONES": {
      if (!action.value) return { ...state, sameTones: false };
      // Turning it on gives every token its light tone in dark mode too, so the two modes start out the same
      const dark = { ...state.toneOverrides.dark };
      for (const group of Object.values(TOKEN_MAP)) {
        for (const [token, def] of Object.entries(group.tokens)) {
          dark[token] =
            state.toneOverrides.light[token] ?? def.defaultTone.light;
        }
      }
      return {
        ...state,
        sameTones: true,
        toneOverrides: { ...state.toneOverrides, dark },
      };
    }
    case "SET_COLOR_MODE":
      return { ...state, colorMode: action.mode };
    case "SET_SCHEME_VARIANT":
      return {
        ...state,
        schemeVariant: action.variant,
        seedColors: deriveSeedColors(state.masterSeed, action.variant),
      };
    case "SET_SCALE_FACTOR":
      return { ...state, scaleFactor: action.value };
    case "SET_FONT_FAMILY_SLOT": {
      const fontFamilies = [...state.fontFamilies] as typeof state.fontFamilies;
      // Clearing the Default slot puts Inter back
      fontFamilies[action.slot - 1] =
        action.slot === 1 && !action.family
          ? DEFAULT_FONT_FAMILY
          : action.family;
      return { ...state, fontFamilies };
    }
    case "ADD_FONT_SIZE_STEP":
      return {
        ...state,
        fontSizeSteps: {
          ...state.fontSizeSteps,
          [action.group]: [
            ...(state.fontSizeSteps[action.group] ?? []),
            action.stepOp,
          ],
        },
      };
    case "CLEAR_FONT_CLASS_TOKEN": {
      const { [action.token]: _removed, ...rest } =
        state.fontClassOverrides[action.group] ?? {};
      return {
        ...state,
        fontClassOverrides: {
          ...state.fontClassOverrides,
          [action.group]: rest,
        },
      };
    }
    case "SET_FONT_CLASS_TOKEN":
      return {
        ...state,
        fontClassOverrides: {
          ...state.fontClassOverrides,
          [action.group]: {
            ...state.fontClassOverrides[action.group],
            [action.token]: action.value,
          },
        },
      };
    case "SET_FONT_ASSIGNMENT":
      return {
        ...state,
        fontAssignments: {
          ...state.fontAssignments,
          [action.group]: action.slot,
        },
      };
    case "APPLY_PRESET": {
      const preset = findPreset(action.presetId);
      return preset ? applyPreset(state, preset) : state;
    }
    case "RESET":
      return DEFAULT_THEME_STATE;
    case "RESET_SECTION":
      return resetSection(state, action.section);
    case "LOAD":
      return { ...state, ...action.state };
    default:
      return state;
  }
}

interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
  /** True once the saved theme (if any) has been read from localStorage and is in `state`. */
  loaded: boolean;
  /**
   * True while the visitor has nothing saved and hasn't edited anything, so the theme is just the default. Nothing is
   * saved or cached until this turns false, which any dispatch from the UI does. (Saving the untouched default would
   * pin the visitor to today's defaults even if the site's change.)
   */
  pristine: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, DEFAULT_THEME_STATE);
  const initialized = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [pristine, setPristine] = useState(false);

  // Everything the UI dispatches is an edit, so the first one ends the pristine state (and with it, the saving pause).
  // The provider's own dispatches below use the raw one.
  const dispatchEdit = useCallback((action: ThemeAction) => {
    setPristine(false);
    dispatch(action);
  }, []);

  // Load persisted state on mount. LOAD and setLoaded land in the same render, so `loaded` is never true while
  // `state` is still the defaults.
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const persisted = loadTheme();
    if (persisted) {
      dispatch({ type: "LOAD", state: persisted as ThemeState });
    } else {
      // Nothing saved, so nothing gets saved until the visitor edits something.
      setPristine(true);
    }
    setLoaded(true);
  }, []);

  // Debounced save on state change
  useEffect(() => {
    if (!initialized.current || pristine) return;
    const timeout = setTimeout(() => saveTheme(state), 300);
    return () => clearTimeout(timeout);
  }, [
    state.masterSeed,
    state.seedColors,
    state.toneOverrides,
    state.colorMode,
    state.schemeVariant,
    state.scaleFactor,
    state.fontFamilies,
    state.fontAssignments,
    state.activePresetId,
    pristine,
  ]);

  return (
    <ThemeContext value={{ state, dispatch: dispatchEdit, loaded, pristine }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
