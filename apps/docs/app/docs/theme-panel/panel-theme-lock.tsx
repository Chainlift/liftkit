import fs from "node:fs";
import path from "node:path";

/**
 * Docs-only: keeps the Theme Generator's own chrome (the panel, the site header, the page background) on the
 * library's default palette and scale while the tabs area follows the generator. It still follows light and dark
 * mode: with System it follows the OS, and the Color Mode toggle forces it through the `data-lk-mode` attribute that
 * ThemeCSSInjector keeps on <html>. The generator writes its theme to :root, so anything it renders into
 * document.body (popups, menus, dialogs) is themed too. Custom properties are inherited, so chrome is pinned by
 * declaring every token again on [data-theme-panel] or [data-theme-locked]; those elements must not contain the
 * themed area. Reads liftkit-core.css at build time and re-emits its `:root` block and its dark-mode block, so the
 * chrome always shows whatever liftkit-core.css currently defines, with nothing to maintain here when tokens change.
 */

const CORE_CSS = path.join(process.cwd(), "node_modules", "liftkit", "src", "css", "utilities", "liftkit-core.css");
const PANEL = "[data-theme-panel], [data-theme-locked]";

/** The top-level rules of a stylesheet, as [selector, body] pairs. */
function topLevelRules(css: string): [string, string][] {
  const rules: [string, string][] = [];
  let depth = 0;
  let selectorStart = 0;
  let bodyStart = 0;
  let selector = "";
  for (let i = 0; i < css.length; i++) {
    if (css[i] === "{") {
      if (depth === 0) {
        selector = css.slice(selectorStart, i).trim();
        bodyStart = i + 1;
      }
      depth++;
    } else if (css[i] === "}") {
      depth--;
      if (depth === 0) {
        rules.push([selector, css.slice(bodyStart, i)]);
        selectorStart = i + 1;
      }
    }
  }
  return rules;
}

/** Splits a rule body into its plain declarations and the declarations inside nested `@media` blocks. */
function splitNestedMedia(body: string): { plain: string; nested: string } {
  let plain = "";
  let nested = "";
  let i = 0;
  while (i < body.length) {
    const at = body.indexOf("@media", i);
    if (at === -1) {
      plain += body.slice(i);
      break;
    }
    plain += body.slice(i, at);
    const open = body.indexOf("{", at);
    let depth = 1;
    let k = open + 1;
    while (k < body.length && depth > 0) {
      if (body[k] === "{") depth++;
      else if (body[k] === "}") depth--;
      k++;
    }
    nested += body.slice(open + 1, k - 1);
    i = k;
  }
  return { plain, nested };
}

function panelThemeCss(): string {
  const css = fs.readFileSync(CORE_CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const out: string[] = [];
  let lightBody = "";
  let darkBody = "";
  for (const [selector, body] of topLevelRules(css)) {
    if (selector === ":root") {
      lightBody = body;
      out.push(`${PANEL} {${body}}`);
    } else if (selector.startsWith("@media") && selector.includes("prefers-color-scheme")) {
      // The dark-mode block sets color-scheme on `html` and the dark color tokens on `:root`
      darkBody = topLevelRules(body).map(([, inner]) => inner).join("\n");
      out.push(`${selector} {${body.replace(/(^|\s)(html|:root)\s*\{/g, `$1${PANEL} {`)}}`);
    } else {
      break; // everything after the theme blocks is element styling, not tokens
    }
  }
  // The Color Mode toggle forces a scheme whatever the OS prefers. These rules are more specific than the media query.
  const light = splitNestedMedia(lightBody);
  const forced = (mode: "light" | "dark", rules: string) =>
    PANEL.split(", ").map((sel) => `:root[data-lk-mode="${mode}"] ${sel}`).join(", ") + ` {\n  color-scheme: ${mode};${rules}}`;
  out.push(forced("light", light.plain));
  out.push(forced("dark", light.plain + light.nested + darkBody));
  // Text color is inherited as a computed value, so it has to be derived again from the pinned tokens
  out.push(`${PANEL} {\n  color: var(--lk-onsurface);\n}`);
  return out.join("\n\n");
}

export function PanelThemeLock() {
  return <style>{panelThemeCss()}</style>;
}
