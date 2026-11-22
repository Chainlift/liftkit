import { DEFAULT_THEME_STATE } from "./defaults";
import { PRESETS, applyPreset } from "./presets";
import { resolveTheme } from "./theme-engine";
import { buildFontCss, buildFontsHref, buildThemeCss } from "./theme-css";
import type { BootPreset } from "./theme-boot";

/**
 * Every preset's finished CSS (colors, scale, fonts), for the boot script. Runs on the server (in the root layout), so the color library
 * never has to load in the page head. It builds the state the same way the reducer does (applyPreset on the default
 * state, which is what a first-time visitor starts from), so the CSS matches what the injector writes afterwards.
 */
export function bootPresets(): BootPreset[] {
  return PRESETS.map((preset) => {
    const state = applyPreset(DEFAULT_THEME_STATE, preset);
    return {
      id: preset.id,
      css: buildThemeCss(resolveTheme(state), state.colorMode, state.scaleFactor),
      fontCss: buildFontCss(state.fontFamilies, state.fontAssignments),
      fontsHref: buildFontsHref(state.fontFamilies),
    };
  });
}
