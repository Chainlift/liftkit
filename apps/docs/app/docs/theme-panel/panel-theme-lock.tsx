import fs from "node:fs";
import path from "node:path";

/**
 * Docs-only: keeps the theme panel on the library's default theme while the rest of the page follows the Theme
 * Generator. Custom properties are inherited from :root, so the panel is pinned by declaring every token again on
 * [data-theme-panel]. Reads liftkit-core.css at build time and re-emits its `:root` block and the dark-mode block
 * under that selector, so the panel always shows whatever liftkit-core.css currently defines, with nothing to
 * maintain here when tokens change.
 */

const CORE_CSS = path.join(process.cwd(), "node_modules", "liftkit", "src", "css", "utilities", "liftkit-core.css");
const PANEL = "[data-theme-panel]";

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

function panelThemeCss(): string {
  const css = fs.readFileSync(CORE_CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const out: string[] = [];
  for (const [selector, body] of topLevelRules(css)) {
    if (selector === ":root") {
      out.push(`${PANEL} {${body}}`);
    } else if (selector.startsWith("@media") && selector.includes("prefers-color-scheme")) {
      // The dark-mode block sets color-scheme on `html` and the dark color tokens on `:root`
      out.push(`${selector} {${body.replace(/(^|\s)(html|:root)\s*\{/g, `$1${PANEL} {`)}}`);
    } else {
      break; // everything after the theme blocks is element styling, not tokens
    }
  }
  return out.join("\n\n");
}

export function PanelThemeLock() {
  return <style>{panelThemeCss()}</style>;
}
