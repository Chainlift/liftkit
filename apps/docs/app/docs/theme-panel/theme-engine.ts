import {
  Hct,
  TonalPalette,
  argbFromHex,
  hexFromArgb,
  SchemeTonalSpot,
  SchemeVibrant,
  SchemeExpressive,
  SchemeNeutral,
  SchemeFidelity,
  DynamicScheme,
} from "@material/material-color-utilities";
import { TOKEN_MAP } from "./token-map";
import { DEFAULT_SEED_COLORS } from "./defaults";
import type { ThemeState, ResolvedTheme, ThemeSeedColors, SchemeVariant } from "./types";

/**
 * Build a TonalPalette from a hex seed color.
 * Extracts hue and chroma via HCT, then creates the palette.
 */
function paletteFromHex(hex: string): TonalPalette {
  const hct = Hct.fromInt(argbFromHex(hex));
  return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
}

/**
 * Create a DynamicScheme from a source color and variant.
 */
function createScheme(sourceHex: string, variant: SchemeVariant): DynamicScheme {
  const hct = Hct.fromInt(argbFromHex(sourceHex));
  switch (variant) {
    case "vibrant":
      return new SchemeVibrant(hct, false, 0);
    case "expressive":
      return new SchemeExpressive(hct, false, 0);
    case "neutral":
      return new SchemeNeutral(hct, false, 0);
    case "fidelity":
      return new SchemeFidelity(hct, false, 0);
    case "tonalSpot":
    default:
      return new SchemeTonalSpot(hct, false, 0);
  }
}

/**
 * Derive all seed colors from a single master seed using a scheme variant.
 * The scheme variant controls how secondary, tertiary, neutral, and
 * neutralVariant palettes are derived from the source color.
 * Custom roles (success, warning, info) are kept at their defaults since
 * M3 scheme variants don't define them.
 */
export function deriveSeedColors(masterHex: string, variant: SchemeVariant): ThemeSeedColors {
  const scheme = createScheme(masterHex, variant);

  // Extract a representative color (tone 40) from each derived palette
  const hexAtTone40 = (palette: TonalPalette) => hexFromArgb(palette.tone(40));

  return {
    primary: hexAtTone40(scheme.primaryPalette),
    secondary: hexAtTone40(scheme.secondaryPalette),
    tertiary: hexAtTone40(scheme.tertiaryPalette),
    error: hexAtTone40(scheme.errorPalette),
    neutral: hexAtTone40(scheme.neutralPalette),
    neutralVariant: hexAtTone40(scheme.neutralVariantPalette),
    // Custom roles: keep defaults (M3 variants don't derive these)
    success: DEFAULT_SEED_COLORS.success,
    warning: DEFAULT_SEED_COLORS.warning,
    info: DEFAULT_SEED_COLORS.info,
  };
}

/**
 * Map seed role names to their corresponding ThemeSeedColors key.
 */
function getPalettes(seedColors: ThemeSeedColors): Record<string, TonalPalette> {
  return {
    primary: paletteFromHex(seedColors.primary),
    secondary: paletteFromHex(seedColors.secondary),
    tertiary: paletteFromHex(seedColors.tertiary),
    error: paletteFromHex(seedColors.error),
    neutral: paletteFromHex(seedColors.neutral),
    neutralVariant: paletteFromHex(seedColors.neutralVariant),
    success: paletteFromHex(seedColors.success),
    warning: paletteFromHex(seedColors.warning),
    info: paletteFromHex(seedColors.info),
  };
}

/**
 * Resolve all 59 color tokens for a single scheme (light or dark).
 */
function resolveScheme(
  palettes: Record<string, TonalPalette>,
  toneOverrides: Record<string, number>,
  mode: "light" | "dark"
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const group of Object.values(TOKEN_MAP)) {
    const palette = palettes[group.seedRole];
    if (!palette) continue;

    for (const [tokenName, def] of Object.entries(group.tokens)) {
      const tone = toneOverrides[tokenName] ?? def.defaultTone[mode];
      result[def.cssVar] = hexFromArgb(palette.tone(tone));
    }
  }

  return result;
}

/**
 * Main entry point: takes the full ThemeState and returns resolved hex values
 * for all tokens in both light and dark schemes.
 */
export function resolveTheme(state: ThemeState): ResolvedTheme {
  const palettes = getPalettes(state.seedColors);

  return {
    light: resolveScheme(palettes, state.toneOverrides, "light"),
    dark: resolveScheme(palettes, state.toneOverrides, "dark"),
  };
}

/**
 * Get the effective tone for a specific token, considering overrides.
 */
export function getEffectiveTone(
  tokenName: string,
  mode: "light" | "dark",
  toneOverrides: Record<string, number>
): number | null {
  for (const group of Object.values(TOKEN_MAP)) {
    const def = group.tokens[tokenName as keyof typeof group.tokens];
    if (def) {
      return toneOverrides[tokenName] ?? def.defaultTone[mode];
    }
  }
  return null;
}
