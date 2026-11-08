// Post-build step for dist/: (1) bundle every stylesheet into styles.css,
// in cascade order: normalize -> tokens -> components -> utilities (utilities win over components);
// (2) ship the global type declarations and reference them from every .d.ts.
import { readFileSync, writeFileSync, mkdirSync, cpSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve, relative, join } from "node:path";
import { createRequire } from "node:module";

const root = resolve(import.meta.dirname, "..");
const css = (p) => resolve(root, "src/css", p);
const require = createRequire(import.meta.url);

function inline(file, skip = []) {
  const dir = dirname(file);
  return readFileSync(file, "utf8").replace(/^@import\s+"([^"]+)";\s*$/gm, (line, spec) => {
    if (skip.includes(spec)) return "";
    const target = spec.startsWith(".") ? resolve(dir, spec) : require.resolve(spec);
    return inline(target, skip);
  });
}

const out = [
  inline(require.resolve("@csstools/normalize.css")),
  inline(css("utilities/liftkit-core.css")),
  inline(css("components/index.css")),
  inline(css("utilities/index.css"), ["@csstools/normalize.css", "./liftkit-core.css"]),
].join("\n");

mkdirSync(resolve(root, "dist"), { recursive: true });
writeFileSync(resolve(root, "dist/styles.css"), out);
console.log(`dist/styles.css  ${(out.length / 1024).toFixed(1)} kB`);

// Global types (LkFontClass, color/shape unions, ...) live in ambient .d.ts files.
cpSync(resolve(root, "src/types"), resolve(root, "dist/types"), { recursive: true });
const typeFiles = readdirSync(resolve(root, "dist/types")).filter((f) => f.endsWith(".d.ts"));
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== "types") walk(p);
    } else if (name.endsWith(".d.ts")) {
      const rel = relative(dir, resolve(root, "dist")) || ".";
      const refs = typeFiles.map((f) => `/// <reference path="${rel}/types/${f}" />`);
      writeFileSync(p, refs.join("\n") + "\n" + readFileSync(p, "utf8"));
    }
  }
}
walk(resolve(root, "dist"));
console.log(`dist/types  ${typeFiles.length} global declaration files`);

// lucide-react has no "exports" map, so the extension-less "lucide-react/dynamic"
// fails to resolve when imported from inside node_modules (Turbopack).
// Point the compiled JS at the real file.
function fixLucide(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) fixLucide(p);
    else if (name.endsWith(".js")) {
      const src = readFileSync(p, "utf8");
      const fixed = src.replaceAll('"lucide-react/dynamic"', '"lucide-react/dynamic.mjs"');
      if (fixed !== src) writeFileSync(p, fixed);
    }
  }
}
fixLucide(resolve(root, "dist"));
