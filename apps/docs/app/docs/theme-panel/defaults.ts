import type {
  FontAssignments,
  FontFamilies,
  ThemeSeedColors,
  ThemeState,
} from "./types";

/**
 * Default seed colors extracted from the current liftkit-core.css values.
 * These represent the "stock" LiftKit theme.
 */
export const DEFAULT_SEED_COLORS: ThemeSeedColors = {
  primary: "#0051e0",
  secondary: "#40617f",
  tertiary: "#006878",
  error: "#bb0e45",
  neutral: "#5c5e65", // derived from current surface/background tones
  neutralVariant: "#5c6364", // derived from current outline/surfaceVariant tones
  success: "#006b55",
  warning: "#7d5800",
  info: "#004ee7",
};

export const DEFAULT_MASTER_SEED = "#0051e0";

export const DEFAULT_SCALE_FACTOR = 1.618;

/** What the Monospace slot (slot 3) resolves to while it's empty, matching liftkit-core.css. */
export const MONOSPACE_FALLBACK =
  "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

/** The Default font slot is never empty: it starts as Inter, and falls back to Inter when cleared. */
export const DEFAULT_FONT_FAMILY = "Inter";

/** Empty strings resolve to `inherit`, so Large Text and Monospace follow the Default slot. */
export const DEFAULT_FONT_FAMILIES: FontFamilies = [
  DEFAULT_FONT_FAMILY,
  "",
  "",
];

/** Every group points at slot 1 by default, matching liftkit-core.css. */
export const DEFAULT_FONT_ASSIGNMENTS: FontAssignments = {
  display1: 1,
  display2: 1,
  title1: 1,
  title2: 1,
  title3: 1,
  heading: 1,
  body: 1,
  callout: 1,
  subheading: 1,
  label: 1,
  caption: 1,
  capline: 1,
};

export const DEFAULT_THEME_STATE: ThemeState = {
  masterSeed: DEFAULT_MASTER_SEED,
  seedColors: DEFAULT_SEED_COLORS,
  toneOverrides: { light: {}, dark: {} },
  sameTones: false,
  colorMode: "system",
  schemeVariant: "tonalSpot",
  scaleFactor: DEFAULT_SCALE_FACTOR,
  fontFamilies: DEFAULT_FONT_FAMILIES,
  fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
  fontClassOverrides: {},
  fontSizeSteps: {},
  activePresetId: null,
};
