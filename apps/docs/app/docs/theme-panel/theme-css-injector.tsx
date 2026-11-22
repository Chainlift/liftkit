"use client";

import { useEffect, useMemo } from "react";
import { useTheme } from "./theme-context";
import { resolveTheme } from "./theme-engine";
import { getCategoryFor } from "./font-catalog";
import { FONT_LINK_ID, FONT_STYLE_ID, STYLE_ID, THEME_CACHE_KEY, type ThemeCssCache } from "./theme-boot";
import type { ColorMode, FontAssignments, FontFamilies, ResolvedTheme } from "./types";

function buildCssBlock(tokens: Record<string, string>, indent: string = "  "): string {
  return Object.entries(tokens)
    .map(([varName, hex]) => `${indent}--lk-${varName}: ${hex};`)
    .join("\n");
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
function buildFontsHref(fontFamilies: FontFamilies): string | null {
  const unique = Array.from(new Set(fontFamilies.filter((f) => f.length > 0)));
  if (unique.length === 0) return null;
  const params = unique
    .map((f) => `family=${encodeURIComponent(f).replace(/%20/g, "+")}:wght@400;500;600;700`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

function buildFontCss(fontFamilies: FontFamilies, fontAssignments: FontAssignments): string {
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

/** Colors and scale factor, for the selected color mode. */
function buildThemeCss(resolved: ResolvedTheme, colorMode: ColorMode, scaleFactor: number): string {
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

/** Creates the <style> with this id if it isn't there yet (the boot script may have added it), then sets its CSS. */
function upsertStyle(id: string, css: string) {
  let styleEl = document.getElementById(id) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = css;
}

export function ThemeCSSInjector() {
  const { state, loaded } = useTheme();

  const resolved = useMemo(
    () => resolveTheme(state),
    [state.seedColors, state.toneOverrides, state.schemeVariant]
  );
  const themeCss = useMemo(
    () => buildThemeCss(resolved, state.colorMode, state.scaleFactor),
    [resolved, state.colorMode, state.scaleFactor]
  );
  const fontCss = useMemo(
    () => buildFontCss(state.fontFamilies, state.fontAssignments),
    [state.fontFamilies, state.fontAssignments]
  );
  const fontsHref = useMemo(() => buildFontsHref(state.fontFamilies), [state.fontFamilies]);

  // Nothing is written until the saved theme has loaded: until then `state` is the defaults, and applying them
  // would replace the saved theme the boot script already put on screen (see theme-boot.ts).
  useEffect(() => {
    if (loaded) upsertStyle(STYLE_ID, themeCss);
  }, [loaded, themeCss]);

  // Font slot overrides and assignment overrides: one style tag of CSS vars.
  useEffect(() => {
    if (loaded) upsertStyle(FONT_STYLE_ID, fontCss);
  }, [loaded, fontCss]);

  // A single <link> that pulls every chosen family from Google Fonts in one request.
  useEffect(() => {
    if (!loaded) return;
    let linkEl = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
    if (!fontsHref) {
      linkEl?.remove();
      return;
    }
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.id = FONT_LINK_ID;
      linkEl.rel = "stylesheet";
      document.head.appendChild(linkEl);
    }
    if (linkEl.href !== fontsHref) linkEl.href = fontsHref;
  }, [loaded, fontsHref]);

  // Keep the boot script's copy in step with what's on screen.
  useEffect(() => {
    if (!loaded) return;
    try {
      const cache: ThemeCssCache = { css: themeCss, fontCss, fontsHref };
      localStorage.setItem(THEME_CACHE_KEY, JSON.stringify(cache));
    } catch {
      // localStorage may be unavailable (private browsing quota)
    }
  }, [loaded, themeCss, fontCss, fontsHref]);

  return null;
}
