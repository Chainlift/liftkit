"use client";

import { useEffect, useMemo } from "react";
import { useTheme } from "./theme-context";
import { resolveTheme } from "./theme-engine";
import { getCategoryFor } from "./font-catalog";
import type { FontAssignments, FontFamilies } from "./types";

const STYLE_ID = "lk-theme-override";
const FONT_STYLE_ID = "lk-theme-fonts";
const FONT_LINK_ID = "lk-theme-fonts-link";

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

export function ThemeCSSInjector() {
  const { state } = useTheme();

  const resolved = useMemo(
    () => resolveTheme(state),
    [state.seedColors, state.toneOverrides, state.schemeVariant]
  );

  // The theme only applies while the Theme Generator is on screen, so remove it when navigating away.
  useEffect(() => {
    return () => {
      document.getElementById(STYLE_ID)?.remove();
      document.getElementById(FONT_STYLE_ID)?.remove();
      document.getElementById(FONT_LINK_ID)?.remove();
    };
  }, []);

  useEffect(() => {
    let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }

    let css: string;

    const scaleRule = `  --lk-scalefactor: ${state.scaleFactor};`;

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
  }, [
    resolved,
    state.colorMode,
    state.scaleFactor,
  ]);

  // Font slot overrides and assignment overrides — one style tag of CSS vars.
  useEffect(() => {
    let styleEl = document.getElementById(FONT_STYLE_ID) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = FONT_STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = buildFontCss(state.fontFamilies, state.fontAssignments);
  }, [state.fontFamilies, state.fontAssignments]);

  // A single <link> that pulls every chosen family from Google Fonts in one request.
  useEffect(() => {
    const href = buildFontsHref(state.fontFamilies);
    let linkEl = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
    if (!href) {
      linkEl?.remove();
      return;
    }
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.id = FONT_LINK_ID;
      linkEl.rel = "stylesheet";
      document.head.appendChild(linkEl);
    }
    if (linkEl.href !== href) linkEl.href = href;
  }, [state.fontFamilies]);

  return null;
}
