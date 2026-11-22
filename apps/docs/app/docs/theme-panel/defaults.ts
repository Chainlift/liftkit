import type { FontAssignments, FontFamilies, ThemeSeedColors, ThemeState } from "./types";

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

export const DEFAULT_SCALE_FACTOR = 1.618;

/** Empty strings resolve to `inherit`, matching the library default. */
export const DEFAULT_FONT_FAMILIES: FontFamilies = ["", "", ""];

/** Every group points at slot 1 by default, matching liftkit-core.css. */
export const DEFAULT_FONT_ASSIGNMENTS: FontAssignments = {
  display1: 1,
  display2: 1,
  title1: 1,
  title2: 1,
  title3: 1,
  heading: 1,
  subheading: 1,
  body: 1,
  callout: 1,
  label: 1,
  caption: 1,
  capline: 1,
};

export const DEFAULT_THEME_STATE: ThemeState = {
  masterSeed: DEFAULT_MASTER_SEED,
  seedColors: DEFAULT_SEED_COLORS,
  toneOverrides: { light: {}, dark: {} },
  colorMode: "system",
  schemeVariant: "tonalSpot",
  scaleFactor: DEFAULT_SCALE_FACTOR,
  fontFamilies: DEFAULT_FONT_FAMILIES,
  fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
  activePresetId: null,
};
