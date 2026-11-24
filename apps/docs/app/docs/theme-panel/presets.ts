import { DEFAULT_FONT_ASSIGNMENTS } from "./defaults";
import type { FontAssignments, FontFamilies, SchemeVariant, ThemeSeedColors, ThemeState, ToneOverrides } from "./types";

/**
 * A preset is a fixed set of inputs the Theme panel would otherwise collect
 * from its sliders and swatches. Applying one just dispatches the
 * corresponding actions; nothing else changes.
 *
 * Each entry's `id` is stable — it's what the panel remembers so it can tell
 * whether what's on screen still matches the preset it came from.
 */
export interface ThemePreset {
  id: string;
  name: string;
  masterSeed: string;
  seedColors: ThemeSeedColors;
  schemeVariant?: SchemeVariant;
  scaleFactor?: number;
  /** The three font slots, as Google Fonts family names (they must be in content/google-fonts.json). "" = inherit. */
  fontFamilies: FontFamilies;
  /** Which slot (1, 2 or 3) each of the 12 font class groups uses. Start from DEFAULT_FONT_ASSIGNMENTS and override. */
  fontAssignments: FontAssignments;
  /**
   * Tone overrides per scheme, keyed by the token names in token-map.ts (e.g. "onPrimary"). Leave it out for none.
   * A preset that doesn't set them clears any the visitor had.
   */
  toneOverrides?: ToneOverrides;
}

/**
 * Three filler entries while we wait on the real screenshots.
 * Replace freely — the id is what matters for the "modified" marker.
 */
export const PRESETS: ThemePreset[] = [
  {
    id: "cerulean-grove",
    name: "Cerulean Grove",
    masterSeed: "#1e6fb5",
    seedColors: {
      primary: "#1e6fb5",
      secondary: "#4a7c94",
      tertiary: "#2f8f7a",
      error: "#c23e4b",
      neutral: "#5f6366",
      neutralVariant: "#5c6a6b",
      success: "#2e8b57",
      warning: "#c38a1f",
      info: "#2c6ec5",
    },
    schemeVariant: "tonalSpot",
    scaleFactor: 1.618,
    fontFamilies: ["Inter", "Inter", "Inter"],
    fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
  },
  {
    id: "ember-plum",
    name: "Ember Plum",
    masterSeed: "#8b3a62",
    seedColors: {
      primary: "#8b3a62",
      secondary: "#7a4a63",
      tertiary: "#a05231",
      error: "#b41e3c",
      neutral: "#665f61",
      neutralVariant: "#6b5f66",
      success: "#4a7c3a",
      warning: "#c47415",
      info: "#4f4b9c",
    },
    schemeVariant: "expressive",
    scaleFactor: 1.618,
    fontFamilies: ["Inter", "Inter", "Inter"],
    fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
  },
  {
    id: "harbor-mint",
    name: "Harbor Mint",
    masterSeed: "#2a8f6e",
    seedColors: {
      primary: "#2a8f6e",
      secondary: "#4e847a",
      tertiary: "#3b6e8f",
      error: "#b53a3a",
      neutral: "#5e6563",
      neutralVariant: "#5c6a66",
      success: "#2e8b57",
      warning: "#b78419",
      info: "#2f6ab2",
    },
    schemeVariant: "vibrant",
    scaleFactor: 1.618,
    fontFamilies: ["Inter", "Inter", "Inter"],
    fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
  },
  {
    id: "floptropica",
    name: "Floptropica",
    masterSeed: "#e000c2",
    seedColors: {
      primary: "#00fffb",
      secondary: "#e499ff",
      tertiary: "#ffbb00",
      error: "#ba1a1a",
      neutral: "#ff009d",
      neutralVariant: "#ff009d",
      success: "#00ffcc",
      warning: "#ffb300",
      info: "#00b3ff",
    },
    schemeVariant: "fidelity",
    scaleFactor: 1.618,
    fontFamilies: ["Inter", "Inter", "Inter"],
    fontAssignments: DEFAULT_FONT_ASSIGNMENTS,
    // Light scheme only. Read from screenshots of the panel, where the error, neutral and info groups were collapsed,
    // so they are assumed to have none. (Three tokens set to their own default are left out: they change nothing.)
    toneOverrides: {
      light: {
        primary: 95,
        onPrimary: 36,
        secondary: 75,
        secondaryContainer: 75,
        tertiary: 80,
        onTertiary: 30,
        tertiaryContainer: 80,
        onTertiaryContainer: 30,
        onTertiaryFixedVariant: 34,
        surfaceVariant: 40,
        onSurfaceVariant: 8,
        outline: 70,
        outlineVariant: 60,
        warning: 80,
        onWarning: 30,
        warningContainer: 80,
        onWarningContainer: 30,
      },
      dark: {},
    },
  },
];

export function findPreset(id: string | null): ThemePreset | undefined {
  if (!id) return undefined;
  return PRESETS.find((p) => p.id === id);
}

/**
 * True if any field the preset carries (colors, scale, fonts, font mappings, tone overrides) differs from the
 * current state. Used to decide whether to show a "(modified)" marker next to the preset's name.
 */
export function isPresetModified(
  preset: ThemePreset,
  state: {
    masterSeed: string;
    seedColors: ThemeSeedColors;
    schemeVariant: SchemeVariant;
    scaleFactor: number;
    fontFamilies: FontFamilies;
    fontAssignments: FontAssignments;
    toneOverrides: Record<"light" | "dark", Record<string, number>>;
  }
): boolean {
  if (state.masterSeed.toLowerCase() !== preset.masterSeed.toLowerCase()) return true;
  for (const key of Object.keys(preset.seedColors) as (keyof ThemeSeedColors)[]) {
    if (state.seedColors[key].toLowerCase() !== preset.seedColors[key].toLowerCase()) return true;
  }
  if (preset.schemeVariant && state.schemeVariant !== preset.schemeVariant) return true;
  if (preset.scaleFactor !== undefined && state.scaleFactor !== preset.scaleFactor) return true;
  if (preset.fontFamilies.some((family, i) => state.fontFamilies[i] !== family)) return true;
  for (const group of Object.keys(preset.fontAssignments) as (keyof FontAssignments)[]) {
    if (state.fontAssignments[group] !== preset.fontAssignments[group]) return true;
  }
  for (const scheme of ["light", "dark"] as const) {
    const wanted = preset.toneOverrides?.[scheme] ?? {};
    const actual = state.toneOverrides[scheme];
    const tokens = new Set([...Object.keys(wanted), ...Object.keys(actual)]);
    for (const token of tokens) if (wanted[token] !== actual[token]) return true;
  }
  return false;
}

/** The state after applying a preset. The reducer and the server-side boot data both use this, so they can't drift. */
export function applyPreset(state: ThemeState, preset: ThemePreset): ThemeState {
  return {
    ...state,
    masterSeed: preset.masterSeed,
    seedColors: preset.seedColors,
    schemeVariant: preset.schemeVariant ?? state.schemeVariant,
    scaleFactor: preset.scaleFactor ?? state.scaleFactor,
    fontFamilies: preset.fontFamilies,
    fontAssignments: preset.fontAssignments,
    // The visitor's tone overrides do not survive a preset switch: they were tied to the previous palette.
    toneOverrides: preset.toneOverrides ?? { light: {}, dark: {} },
    activePresetId: preset.id,
  };
}
