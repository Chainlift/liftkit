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
import {
  loadPickedPresetId,
  loadRandomThemeEnabled,
  loadTheme,
  saveRandomThemeEnabled,
  saveTheme,
} from "./theme-persistence";
import { deriveSeedColors } from "./theme-engine";
import { PRESETS, applyPreset, findPreset } from "./presets";

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
   * True while the visitor has nothing saved and hasn't edited anything: the theme is the random pick, or the
   * default if the random theme is off. Nothing is saved or cached until this turns false, which any dispatch from
   * the UI does.
   */
  pristine: boolean;
  /** Whether a visitor with nothing saved gets a random preset on every page load (the nav bar's switch). */
  randomTheme: boolean;
  /**
   * Turns the random theme on or off. For a visitor who hasn't edited anything this changes the theme right away
   * (off: the default theme, on: a random preset). A saved theme is the visitor's own work and is left alone.
   */
  setRandomTheme: (on: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, DEFAULT_THEME_STATE);
  const initialized = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [pristine, setPristine] = useState(false);
  const [randomTheme, setRandomThemeState] = useState(true);

  // Everything the UI dispatches is an edit, so the first one ends the pristine state (and with it, the saving pause).
  // The provider's own dispatches below use the raw one.
  const dispatchEdit = useCallback((action: ThemeAction) => {
    setPristine(false);
    dispatch(action);
  }, []);

  const setRandomTheme = useCallback(
    (on: boolean) => {
      setRandomThemeState(on);
      saveRandomThemeEnabled(on);
      if (!pristine) return;
      if (on) dispatch({ type: "APPLY_PRESET", presetId: PRESETS[Math.floor(Math.random() * PRESETS.length)].id });
      else dispatch({ type: "RESET" });
    },
    [pristine]
  );

  // Load persisted state on mount. LOAD and setLoaded land in the same render, so `loaded` is never true while
  // `state` is still the defaults.
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const randomEnabled = loadRandomThemeEnabled();
    setRandomThemeState(randomEnabled);
    const persisted = loadTheme();
    if (persisted) {
      dispatch({ type: "LOAD", state: persisted as ThemeState });
    } else {
      // Nothing saved, so nothing gets saved until the visitor edits something. If the random theme is on, the boot
      // script already put a random preset on screen (see theme-boot.ts); start from it. If it's off, the default
      // theme stays.
      setPristine(true);
      const pickedId = randomEnabled ? loadPickedPresetId() : null;
      if (pickedId) dispatch({ type: "APPLY_PRESET", presetId: pickedId });
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
    <ThemeContext value={{ state, dispatch: dispatchEdit, loaded, pristine, randomTheme, setRandomTheme }}>
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
