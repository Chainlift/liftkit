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
import { DEFAULT_THEME_STATE } from "./defaults";
import { loadTheme, saveTheme } from "./theme-persistence";
import { deriveSeedColors } from "./theme-engine";
import { applyPreset, findPreset } from "./presets";

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
    case "SET_TONE_OVERRIDE":
      return {
        ...state,
        toneOverrides: {
          ...state.toneOverrides,
          [action.scheme]: { ...state.toneOverrides[action.scheme], [action.token]: action.tone },
        },
      };
    case "CLEAR_TONE_OVERRIDE": {
      const { [action.token]: _, ...rest } = state.toneOverrides[action.scheme];
      return {
        ...state,
        toneOverrides: { ...state.toneOverrides, [action.scheme]: rest },
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
      fontFamilies[action.slot - 1] = action.family;
      return { ...state, fontFamilies };
    }
    case "SET_FONT_ASSIGNMENT":
      return {
        ...state,
        fontAssignments: { ...state.fontAssignments, [action.group]: action.slot },
      };
    case "APPLY_PRESET": {
      const preset = findPreset(action.presetId);
      return preset ? applyPreset(state, preset) : state;
    }
    case "RESET":
      return DEFAULT_THEME_STATE;
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
