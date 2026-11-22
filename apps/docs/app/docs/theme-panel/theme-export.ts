import type { FontAssignments, FontFamilies, ThemeState } from "./types";
import { resolveTheme } from "./theme-engine";
import { getCategoryFor } from "./font-catalog";

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

function slotValue(family: string): string {
  if (!family) return "inherit";
  const needsQuote = /\s/.test(family);
  const quoted = needsQuote ? `"${family}"` : family;
  return `${quoted}, ${genericFallback(getCategoryFor(family))}`;
}

function buildFontsImport(fontFamilies: FontFamilies): string {
  const unique = Array.from(new Set(fontFamilies.filter((f) => f.length > 0)));
  if (unique.length === 0) return "";
  const params = unique
    .map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`)
    .join("&");
  return `@import url("https://fonts.googleapis.com/css2?${params}&display=swap");\n\n`;
}

function buildFontRules(fontFamilies: FontFamilies, fontAssignments: FontAssignments, indent: string): string {
  const slots = [
    `${indent}--lk-font-family-1: ${slotValue(fontFamilies[0])};`,
    `${indent}--lk-font-family-2: ${slotValue(fontFamilies[1])};`,
    `${indent}--lk-font-family-3: ${slotValue(fontFamilies[2])};`,
  ];
  const assignments = Object.entries(fontAssignments).map(
    ([group, slot]) => `${indent}--lk-${group}-font-family: var(--lk-font-family-${slot});`
  );
  return [...slots, ...assignments].join("\n");
}

/**
 * Generate a complete CSS file with both light and dark schemes.
 */
export function exportThemeCSS(state: ThemeState): string {
  const resolved = resolveTheme(state);

  let css = `/* LiftKit Theme — Generated ${new Date().toISOString()} */\n`;
  css += `/* Seeds: primary=${state.seedColors.primary}, secondary=${state.seedColors.secondary}, tertiary=${state.seedColors.tertiary} */\n\n`;

  css += buildFontsImport(state.fontFamilies);

  const fontRules = buildFontRules(state.fontFamilies, state.fontAssignments, "  ");
  css += `:root {\n  --lk-scalefactor: ${state.scaleFactor};\n${buildCssBlock(resolved.light, "  ")}\n${fontRules}\n}\n\n`;
  css += `@media (prefers-color-scheme: dark) {\n  :root {\n${buildCssBlock(resolved.dark, "    ")}\n  }\n}\n`;

  return css;
}

/**
 * Trigger a file download of the generated CSS.
 */
export function downloadThemeCSS(state: ThemeState): void {
  const css = exportThemeCSS(state);
  const blob = new Blob([css], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "liftkit-theme.css";
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Copy the generated CSS to the clipboard.
 */
export async function copyThemeCSS(state: ThemeState): Promise<void> {
  const css = exportThemeCSS(state);
  await navigator.clipboard.writeText(css);
}
