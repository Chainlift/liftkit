/** Seed colors for each color role (hex strings, e.g. "#0051e0") */
export interface ThemeSeedColors {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  neutral: string;
  neutralVariant: string;
  success: string;
  warning: string;
  info: string;
}

/** Sparse map of token name -> tone (0-100). Only overridden tokens appear. */
export type ToneOverrides = Record<string, number>;

export type ColorMode = "system" | "light" | "dark";

export type SchemeVariant =
  | "tonalSpot"
  | "vibrant"
  | "expressive"
  | "neutral"
  | "fidelity";

export interface ThemeState {
  masterSeed: string;
  seedColors: ThemeSeedColors;
  toneOverrides: ToneOverrides;
  colorMode: ColorMode;
  schemeVariant: SchemeVariant;
  isOpen: boolean;
}

/** Fully resolved hex values for every token, keyed by CSS var name (without --lk- prefix) */
export interface ResolvedTheme {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export type ThemeAction =
  | { type: "SET_MASTER_SEED"; hex: string }
  | { type: "SET_SEED"; role: keyof ThemeSeedColors; hex: string }
  | { type: "SET_TONE_OVERRIDE"; token: string; tone: number }
  | { type: "CLEAR_TONE_OVERRIDE"; token: string }
  | { type: "SET_COLOR_MODE"; mode: ColorMode }
  | { type: "SET_SCHEME_VARIANT"; variant: SchemeVariant }
  | { type: "SET_OPEN"; open: boolean }
  | { type: "RESET" }
  | { type: "LOAD"; state: Omit<ThemeState, "isOpen"> };
