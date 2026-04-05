import type { ThemeSeedColors, ThemeState } from "./types";

/**
 * Default seed colors extracted from the current liftkit-core.css values.
 * These represent the "stock" LiftKit theme.
 */
export const DEFAULT_SEED_COLORS: ThemeSeedColors = {
  primary: "#0051e0",
  secondary: "#40617f",
  tertiary: "#006878",
  error: "#bb0e45",
  neutral: "#5c5e65",      // derived from current surface/background tones
  neutralVariant: "#5c6364", // derived from current outline/surfaceVariant tones
  success: "#006b55",
  warning: "#7d5800",
  info: "#004ee7",
};

export const DEFAULT_MASTER_SEED = "#0051e0";

export const DEFAULT_THEME_STATE: ThemeState = {
  masterSeed: DEFAULT_MASTER_SEED,
  seedColors: DEFAULT_SEED_COLORS,
  toneOverrides: {},
  colorMode: "system",
  schemeVariant: "tonalSpot",
  isOpen: false,
};
