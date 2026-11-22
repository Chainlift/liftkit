/**
 * Docs-only: puts the right theme on the page before first paint, so a full page load never flashes the default one.
 *
 * The theme lives in localStorage, which only the browser can read, and its CSS is worked out by a color library
 * too big to run in the page head. So:
 *  - A returning visitor with a theme: ThemeCSSInjector saves the finished CSS under THEME_CACHE_KEY whenever the
 *    theme changes, and the boot script (inlined in the root layout's <head>) pastes it straight back.
 *  - A visitor with nothing saved: the layout precomputes every preset's CSS on the server and embeds it in the
 *    script. The script picks one at random, pastes it, and hands the pick to ThemeProvider on window[PICKED_GLOBAL].
 *    The pick is also kept for the tab's session (sessionStorage, THEME_PICK_KEY), so refreshing or browsing the
 *    docs doesn't change it, while a new visit rolls again. It is NOT saved: nothing is written to localStorage, and
 *    the injector doesn't cache it, until the visitor makes their first edit, which saves the whole theme.
 * The script uses the same element ids as the injector, which takes over once React is up. Nothing here needs a
 * server at request time, so it works with a static export.
 */

export const THEME_STORAGE_KEY = "lk-theme-v1";
export const THEME_PICK_KEY = "lk-theme-pick";
/** Where the boot script leaves this load's random pick (a preset id) for ThemeProvider. */
export const PICKED_GLOBAL = "__lkPick";
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

/** A preset's finished CSS, computed on the server. */
export interface BootPreset {
  id: string;
  css: string;
}

export function themeBootScript(presets: BootPreset[]): string {
  // "<" is escaped so nothing in the data can close the script tag
  const list = JSON.stringify(presets).replace(/</g, "\\u003c");
  return `(function(){try{
var ls=localStorage,h=document.head;
function s(id,css){if(!css)return;var e=document.createElement("style");e.id=id;e.textContent=css;h.appendChild(e)}
var c=JSON.parse(ls.getItem(${JSON.stringify(THEME_CACHE_KEY)}));
if(c){
s(${JSON.stringify(STYLE_ID)},c.css);
s(${JSON.stringify(FONT_STYLE_ID)},c.fontCss);
if(c.fontsHref){var l=document.createElement("link");l.id=${JSON.stringify(FONT_LINK_ID)};l.rel="stylesheet";l.href=c.fontsHref;h.appendChild(l)}
return}
if(ls.getItem(${JSON.stringify(THEME_STORAGE_KEY)}))return;
var p=${list};if(!p.length)return;
var id=null,q=null;try{id=sessionStorage.getItem(${JSON.stringify(THEME_PICK_KEY)})}catch(e){}
for(var i=0;i<p.length;i++)if(p[i].id===id)q=p[i];
if(!q){q=p[Math.floor(Math.random()*p.length)];try{sessionStorage.setItem(${JSON.stringify(THEME_PICK_KEY)},q.id)}catch(e){}}
window[${JSON.stringify(PICKED_GLOBAL)}]=q.id;
s(${JSON.stringify(STYLE_ID)},q.css);
}catch(e){}})();`;
}
