import { getCategoryFor } from "./font-catalog";
import type { ColorMode, FontAssignments, FontFamilies, ResolvedTheme } from "./types";

/** Plain module (no "use client"): the injector uses it in the browser, the root layout on the server. */

export function buildCssBlock(tokens: Record<string, string>, indent: string = "  "): string {
  return Object.entries(tokens)
    .map(([varName, hex]) => `${indent}--lk-${varName}: ${hex};`)
    .join("\n");
}

/** Colors and scale factor, for the selected color mode. */
export function buildThemeCss(resolved: ResolvedTheme, colorMode: ColorMode, scaleFactor: number): string {
  const scaleRule = `  --lk-scalefactor: ${scaleFactor};`;
  if (colorMode === "system") {
    // Inject both schemes; let the browser pick via media query
    return `:root {\n${scaleRule}\n${buildCssBlock(resolved.light)}\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n${buildCssBlock(resolved.dark, "    ")}\n  }\n}`;
  }
  if (colorMode === "light") {
    return `:root {\n${scaleRule}\n${buildCssBlock(resolved.light)}\n}`;
  }
  // Force dark: override both the default :root and the media query
  return `:root {\n${scaleRule}\n${buildCssBlock(resolved.dark)}\n}`;
}

/** CSS generic family to append as a final fallback. */
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

/**
 * CSS value for `--lk-font-family-N`. Empty slot → "inherit" (matches the
 * library default). Named slot → the family quoted (if it contains spaces)
 * followed by its generic fallback.
 */
function slotValue(family: string): string {
  if (!family) return "inherit";
  const needsQuote = /\s/.test(family);
  const quoted = needsQuote ? `"${family}"` : family;
  return `${quoted}, ${genericFallback(getCategoryFor(family))}`;
}

/**
 * Build the <link> href that loads every non-empty slot from the public
 * Google Fonts css2 endpoint. Returns null if no families are chosen.
 */
export function buildFontsHref(fontFamilies: FontFamilies): string | null {
  const unique = Array.from(new Set(fontFamilies.filter((f) => f.length > 0)));
  if (unique.length === 0) return null;
  const params = unique
    .map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

/** The font slot variables and the 12 per-group assignments. */
export function buildFontCss(fontFamilies: FontFamilies, fontAssignments: FontAssignments): string {
  const slotRules = [
    `  --lk-font-family-1: ${slotValue(fontFamilies[0])};`,
    `  --lk-font-family-2: ${slotValue(fontFamilies[1])};`,
    `  --lk-font-family-3: ${slotValue(fontFamilies[2])};`,
  ].join("\n");
  const assignmentRules = Object.entries(fontAssignments)
    .map(([group, slot]) => `  --lk-${group}-font-family: var(--lk-font-family-${slot});`)
    .join("\n");
  return `:root {\n${slotRules}\n${assignmentRules}\n}`;
}
