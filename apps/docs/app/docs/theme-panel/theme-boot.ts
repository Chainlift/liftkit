/**
 * Docs-only: puts a returning visitor's saved theme on the page before first paint, so a full page load never flashes
 * the default one.
 *
 * The theme lives in localStorage, which only the browser can read, and its CSS is worked out by a color library too
 * big to run in the page head. So ThemeCSSInjector saves the finished CSS under THEME_CACHE_KEY whenever the theme
 * changes, and this script (inlined in the root layout's <head>) pastes it straight back. It does nothing for a
 * visitor with no saved theme, who just gets the default. It uses the same element ids as the injector, which takes
 * over once React is up. Nothing here needs a server at request time, so it works with a static export.
 */

export const THEME_STORAGE_KEY = "lk-theme-v1";
export const THEME_CACHE_KEY = "lk-theme-css-v1";
export const STYLE_ID = "lk-theme-override";
export const FONT_STYLE_ID = "lk-theme-fonts";
export const FONT_LINK_ID = "lk-theme-fonts-link";

/** What the injector saves and the boot script replays. */
export interface ThemeCssCache {
  css: string;
  fontCss: string;
  fontsHref: string | null;
}

export const THEME_BOOT_SCRIPT = `(function(){try{
var ls=localStorage;
if(!ls.getItem(${JSON.stringify(THEME_STORAGE_KEY)}))return;
var c=JSON.parse(ls.getItem(${JSON.stringify(THEME_CACHE_KEY)}));
if(!c)return;
var h=document.head;
function s(id,css){if(!css)return;var e=document.createElement("style");e.id=id;e.textContent=css;h.appendChild(e)}
s(${JSON.stringify(STYLE_ID)},c.css);
s(${JSON.stringify(FONT_STYLE_ID)},c.fontCss);
if(c.fontsHref){var l=document.createElement("link");l.id=${JSON.stringify(FONT_LINK_ID)};l.rel="stylesheet";l.href=c.fontsHref;h.appendChild(l)}
}catch(e){}})();`;
