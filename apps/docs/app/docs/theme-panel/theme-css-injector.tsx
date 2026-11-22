"use client";

import { useEffect, useMemo } from "react";
import { useTheme } from "./theme-context";
import { resolveTheme } from "./theme-engine";
import { FONT_LINK_ID, FONT_STYLE_ID, STYLE_ID, THEME_CACHE_KEY, type ThemeCssCache } from "./theme-boot";
import { buildFontCss, buildFontsHref, buildThemeCss } from "./theme-css";

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
  const { state, loaded, pristine } = useTheme();

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

  // Keep the boot script's copy in step with what's on screen, except while it is only a random pick the visitor
  // hasn't touched: caching that would make the next visit replay it instead of rolling again.
  useEffect(() => {
    if (!loaded || pristine) return;
    try {
      const cache: ThemeCssCache = { css: themeCss, fontCss, fontsHref };
      localStorage.setItem(THEME_CACHE_KEY, JSON.stringify(cache));
    } catch {
      // localStorage may be unavailable (private browsing quota)
    }
  }, [loaded, pristine, themeCss, fontCss, fontsHref]);

  return null;
}
