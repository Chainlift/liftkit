"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import type { ThemeState, ThemeAction } from "./types";
import { DEFAULT_THEME_STATE } from "./defaults";
import { loadTheme, saveTheme } from "./theme-persistence";
import { deriveSeedColors } from "./theme-engine";

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
        toneOverrides: { ...state.toneOverrides, [action.token]: action.tone },
      };
    case "CLEAR_TONE_OVERRIDE": {
      const { [action.token]: _, ...rest } = state.toneOverrides;
      return { ...state, toneOverrides: rest };
    }
    case "SET_COLOR_MODE":
      return { ...state, colorMode: action.mode };
    case "SET_SCHEME_VARIANT":
      return {
        ...state,
        schemeVariant: action.variant,
        seedColors: deriveSeedColors(state.masterSeed, action.variant),
      };
    case "SET_OPEN":
      return { ...state, isOpen: action.open };
    case "RESET":
      return { ...DEFAULT_THEME_STATE, isOpen: state.isOpen };
    case "LOAD":
      return { ...state, ...action.state };
    default:
      return state;
  }
}

interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, DEFAULT_THEME_STATE);
  const initialized = useRef(false);

  // Load persisted state on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const persisted = loadTheme();
    if (persisted) {
      dispatch({ type: "LOAD", state: persisted as Omit<ThemeState, "isOpen"> });
    }
  }, []);

  // Debounced save on state change
  useEffect(() => {
    if (!initialized.current) return;
    const timeout = setTimeout(() => saveTheme(state), 300);
    return () => clearTimeout(timeout);
  }, [state.masterSeed, state.seedColors, state.toneOverrides, state.colorMode, state.schemeVariant]);

  return (
    <ThemeContext value={{ state, dispatch }}>
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
