import { defineConfig } from "tsdown";

// Components import their own stylesheet for the docs site. The published
// package ships one bundled styles.css instead (see scripts/postbuild.mjs),
// so those imports are dropped from the compiled JS.
const stripCssImports = {
  name: "strip-css-imports",
  resolveId(id: string) {
    return id.endsWith(".css") ? { id: "\0lk-empty-css", moduleSideEffects: false } : null;
  },
  load(id: string) {
    return id === "\0lk-empty-css" ? "export {}" : null;
  },
};

export default defineConfig({
  entry: ["src/index.ts", "src/components/*/!(index).tsx"],
  format: "esm",
  platform: "neutral",
  dts: true,
  unbundle: true,
  clean: true,
  deps: { neverBundle: [/^react/, /^@base-ui/, /^lucide-react/, "clsx"] },
  plugins: [stripCssImports],
});
