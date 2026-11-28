import type {
  ColorMode,
  FontAssignments,
  FontClassOverrides,
  FontFamilies,
  FontSizeSteps,
  SchemeVariant,
  ThemeSeedColors,
  ThemeState,
  ToneOverrides,
} from "./types";
import { resolveTheme } from "./theme-engine";
import { getCategoryFor } from "./font-catalog";
import { MONOSPACE_FALLBACK } from "./defaults";
import {
  buildFontClassOverrideRules,
  buildFontSizeRules,
} from "./font-class-tokens";

function buildCssBlock(tokens: Record<string, string>, indent: string): string {
  return Object.entries(tokens)
    .map(([varName, hex]) => `${indent}--lk-${varName}: ${hex};`)
    .join("\n");
}

function genericFallback(category: string | undefined): string {
  switch (category) {
    case "Serif":
      return "serif";
    case "Monospace":
      return "monospace";
    case "Handwriting":
      return "cursive";
    case "Display":
    case "Sans Serif":
    default:
      return "sans-serif";
  }
}

function slotValue(family: string, emptyValue = "inherit"): string {
  if (!family) return emptyValue;
  const needsQuote = /\s/.test(family);
  const quoted = needsQuote ? `"${family}"` : family;
  return `${quoted}, ${genericFallback(getCategoryFor(family))}`;
}

function buildFontsImport(fontFamilies: FontFamilies): string {
  const unique = Array.from(new Set(fontFamilies.filter((f) => f.length > 0)));
  if (unique.length === 0) return "";
  const params = unique
    .map(
      (f) =>
        `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`,
    )
    .join("&");
  return `@import url("https://fonts.googleapis.com/css2?${params}&display=swap");\n\n`;
}

function buildFontRules(
  fontFamilies: FontFamilies,
  fontAssignments: FontAssignments,
  fontClassOverrides: FontClassOverrides,
  fontSizeSteps: FontSizeSteps,
  indent: string,
): string {
  const slots = [
    `${indent}--lk-font-family-1: ${slotValue(fontFamilies[0])};`,
    `${indent}--lk-font-family-2: ${slotValue(fontFamilies[1])};`,
    `${indent}--lk-font-family-3: ${slotValue(fontFamilies[2], MONOSPACE_FALLBACK)};`,
  ];
  const assignments = Object.entries(fontAssignments).map(
    ([group, slot]) =>
      `${indent}--lk-${group}-font-family: var(--lk-font-family-${slot});`,
  );
  return [
    ...slots,
    ...assignments,
    ...buildFontClassOverrideRules(fontClassOverrides, indent),
    ...buildFontSizeRules(fontSizeSteps, indent),
  ].join("\n");
}

/**
 * Generate a complete CSS file with both light and dark schemes.
 */
export function exportThemeCSS(state: ThemeState): string {
  const resolved = resolveTheme(state);

  let css = `/* LiftKit Theme — Generated ${new Date().toISOString()} */\n`;
  css += `/* Seeds: primary=${state.seedColors.primary}, secondary=${state.seedColors.secondary}, tertiary=${state.seedColors.tertiary} */\n\n`;

  css += buildFontsImport(state.fontFamilies);

  const fontRules = buildFontRules(
    state.fontFamilies,
    state.fontAssignments,
    state.fontClassOverrides,
    state.fontSizeSteps,
    "  ",
  );
  css += `:root {\n  --lk-scalefactor: ${state.scaleFactor};\n${buildCssBlock(resolved.light, "  ")}\n${fontRules}\n}\n\n`;
  css += `@media (prefers-color-scheme: dark) {\n  :root {\n${buildCssBlock(resolved.dark, "    ")}\n  }\n}\n`;

  return css;
}

/**
 * Every input the theme panel holds, as a JSON file. The field names match ThemePreset (presets.ts), so an export can
 * become a preset by pasting it in and adding an id and a name. `basedOnPreset` is the preset the theme started from
 * (it may have been modified since), or null.
 */
export interface ThemeExportJSON {
  format: "liftkit-theme";
  version: 1;
  exportedAt: string;
  basedOnPreset: string | null;
  colorMode: ColorMode;
  schemeVariant: SchemeVariant;
  scaleFactor: number;
  masterSeed: string;
  seedColors: ThemeSeedColors;
  toneOverrides: ToneOverrides;
  sameTones: boolean;
  fontFamilies: FontFamilies;
  fontAssignments: FontAssignments;
  fontClassOverrides: FontClassOverrides;
  fontSizeSteps: FontSizeSteps;
}

/** The panel's inputs as JSON text. */
export function exportThemeJSON(state: ThemeState): string {
  const data: ThemeExportJSON = {
    format: "liftkit-theme",
    version: 1,
    exportedAt: new Date().toISOString(),
    basedOnPreset: state.activePresetId,
    colorMode: state.colorMode,
    schemeVariant: state.schemeVariant,
    scaleFactor: state.scaleFactor,
    masterSeed: state.masterSeed,
    seedColors: state.seedColors,
    toneOverrides: state.toneOverrides,
    sameTones: state.sameTones,
    fontFamilies: state.fontFamilies,
    fontAssignments: state.fontAssignments,
    fontClassOverrides: state.fontClassOverrides,
    fontSizeSteps: state.fontSizeSteps,
  };
  return JSON.stringify(data, null, 2) + "\n";
}

function downloadFile(filename: string, text: string, type: string): void {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Trigger a file download of the generated CSS.
 */
export function downloadThemeCSS(state: ThemeState): void {
  downloadFile("liftkit-theme.css", exportThemeCSS(state), "text/css");
}

/**
 * Trigger a file download of the panel's inputs as JSON.
 */
export function downloadThemeJSON(state: ThemeState): void {
  downloadFile(
    "liftkit-theme.json",
    exportThemeJSON(state),
    "application/json",
  );
}

/**
 * The panel's Export: the CSS and the JSON, as two downloads. The second waits a moment, because some browsers drop
 * a download that starts in the same instant as another. (Chrome asks once whether the site may download multiple
 * files.)
 */
export function downloadThemeFiles(state: ThemeState): void {
  downloadThemeCSS(state);
  setTimeout(() => downloadThemeJSON(state), 150);
}

/**
 * Copy the generated CSS to the clipboard.
 */
export async function copyThemeCSS(state: ThemeState): Promise<void> {
  const css = exportThemeCSS(state);
  await navigator.clipboard.writeText(css);
}
