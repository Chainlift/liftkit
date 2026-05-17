"use client";

import { useEffect, useMemo } from "react";
import { useTheme } from "./theme-context";
import { resolveTheme } from "./theme-engine";

const STYLE_ID = "lk-theme-override";

function buildCssBlock(tokens: Record<string, string>, indent: string = "  "): string {
  return Object.entries(tokens)
    .map(([varName, hex]) => `${indent}--lk-${varName}: ${hex};`)
    .join("\n");
}

export function ThemeCSSInjector() {
  const { state } = useTheme();

  const resolved = useMemo(
    () => resolveTheme(state),
    [state.seedColors, state.toneOverrides, state.schemeVariant]
  );

  useEffect(() => {
    let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }

    let css: string;

    const scaleRule = `  --lk-scalefactor: ${state.scaleFactor};\n  --lk-scalefactor-corner: ${state.scaleFactorCorner};\n  --lk-scalefactor-typography: ${state.scaleFactorTypography};\n  --lk-scalefactor-length: ${state.scaleFactorLength};\n  --lk-scalefactor-spacing: ${state.scaleFactorSpacing};`;

    if (state.colorMode === "system") {
      // Inject both schemes; let the browser pick via media query
      css = `:root {\n${scaleRule}\n${buildCssBlock(resolved.light)}\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n${buildCssBlock(resolved.dark, "    ")}\n  }\n}`;
    } else if (state.colorMode === "light") {
      css = `:root {\n${scaleRule}\n${buildCssBlock(resolved.light)}\n}`;
    } else {
      // Force dark: override both the default :root and the media query
      css = `:root {\n${scaleRule}\n${buildCssBlock(resolved.dark)}\n}`;
    }

    styleEl.textContent = css;

    return () => {
      // Cleanup only if unmounting the provider entirely
    };
  }, [resolved, state.colorMode, state.scaleFactor, state.scaleFactorCorner, state.scaleFactorTypography, state.scaleFactorLength, state.scaleFactorSpacing]);

  return null;
}
