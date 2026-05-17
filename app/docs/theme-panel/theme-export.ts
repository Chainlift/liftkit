import type { ThemeState } from "./types";
import { resolveTheme } from "./theme-engine";

function buildCssBlock(tokens: Record<string, string>, indent: string): string {
  return Object.entries(tokens)
    .map(([varName, hex]) => `${indent}--lk-${varName}: ${hex};`)
    .join("\n");
}

/**
 * Generate a complete CSS file with both light and dark schemes.
 */
export function exportThemeCSS(state: ThemeState): string {
  const resolved = resolveTheme(state);

  let css = `/* LiftKit Theme — Generated ${new Date().toISOString()} */\n`;
  css += `/* Seeds: primary=${state.seedColors.primary}, secondary=${state.seedColors.secondary}, tertiary=${state.seedColors.tertiary} */\n\n`;

  css += `:root {\n  --lk-scalefactor: ${state.scaleFactor};\n  --lk-scalefactor-corner: ${state.scaleFactorCorner};\n  --lk-scalefactor-typography: ${state.scaleFactorTypography};\n  --lk-scalefactor-length: ${state.scaleFactorLength};\n  --lk-scalefactor-spacing: ${state.scaleFactorSpacing};\n${buildCssBlock(resolved.light, "  ")}\n}\n\n`;
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
