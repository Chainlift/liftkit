import fs from "node:fs";
import path from "node:path";

/**
 * Docs-only: keeps the theme panel at the default scale factor while the rest of the page follows the theme.
 * The size tokens are computed once at :root and inherited, so overriding --lk-scalefactor on the panel alone does
 * nothing; every token that depends on it has to be redeclared there too. Reads liftkit-core.css at build time and
 * emits those declarations scoped to [data-theme-panel], so the list stays in sync with the core file.
 */

const CORE_CSS = path.join(process.cwd(), "node_modules", "liftkit", "src", "css", "utilities", "liftkit-core.css");

function panelScaleCss(): string {
  const css = fs.readFileSync(CORE_CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const declarations = new Map<string, string>();
  for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    if (!declarations.has(name)) declarations.set(name, value.replace(/\s+/g, " ").trim());
  }

  // Every token that reads --lk-scalefactor, directly or through other tokens
  const dependents = new Set(["--lk-scalefactor"]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const [name, value] of declarations) {
      if (dependents.has(name)) continue;
      const refs = [...value.matchAll(/var\((--[\w-]+)/g)].map(([, ref]) => ref);
      if (refs.some((ref) => dependents.has(ref))) {
        dependents.add(name);
        grew = true;
      }
    }
  }

  const lines = [...dependents].map((name) => `  ${name}: ${declarations.get(name)};`);
  return `[data-theme-panel] {\n${lines.join("\n")}\n}`;
}

export function PanelScaleLock() {
  return <style>{panelScaleCss()}</style>;
}
