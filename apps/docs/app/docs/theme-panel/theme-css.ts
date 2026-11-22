import type { ColorMode, ResolvedTheme } from "./types";

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
