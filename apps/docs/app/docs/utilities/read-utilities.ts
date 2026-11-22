import fs from "node:fs";
import path from "node:path";

/**
 * Docs-only: reads LiftKit's utility stylesheets at build time and lists their classes. Mirrors how the System tab
 * reads liftkit-core.css, so there is no hand-written data to keep in sync.
 */

const UTILITIES_DIR = path.join(process.cwd(), "node_modules", "liftkit", "src", "css", "utilities");
/** liftkit-core.css holds the tokens (shown in the System tab) and index.css only imports the others. */
const SKIPPED_FILES = new Set(["liftkit-core.css", "index.css"]);

export type UtilityClass = { selector: string; declarations: string[] };
export type UtilityGroup = { file: string; title: string; classes: UtilityClass[] };

/** The top-level `selector { body }` rules of a stylesheet. */
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

function titleFromFile(file: string): string {
  const words = file.replace(/\.css$/, "").replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function readUtilities(): UtilityGroup[] {
  return fs
    .readdirSync(UTILITIES_DIR)
    .filter((file) => file.endsWith(".css") && !SKIPPED_FILES.has(file))
    .sort()
    .map((file) => {
      const css = fs
        .readFileSync(path.join(UTILITIES_DIR, file), "utf8")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/^@import[^;]*;/gm, "");
      const classes = topLevelRules(css)
        .filter(([selector]) => selector.startsWith("."))
        .map(([selector, body]) => ({
          selector,
          declarations: body
            .split(";")
            .map((declaration) => declaration.replace(/\s+/g, " ").trim())
            .filter(Boolean),
        }));
      return { file, title: titleFromFile(file), classes };
    })
    .filter((group) => group.classes.length > 0);
}
