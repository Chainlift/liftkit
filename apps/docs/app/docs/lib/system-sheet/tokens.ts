import fs from "node:fs";
import path from "node:path";
import { simplifiedLatex } from "./to-latex";

/** Docs-only: reads liftkit-core.css and lists the tokens that compute to a length. */

const CORE_CSS = path.join(
  process.cwd(),
  "node_modules",
  "@chainlift",
  "liftkit",
  "src",
  "css",
  "utilities",
  "liftkit-core.css",
);

export type SheetToken = { cssVar: string; latex: string };
export type SheetCategory = { title: string; tokens: SheetToken[] };

const SIZE_ORDER = ["5xs", "4xs", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
// Smallest to largest at the default scale; the sheet keeps this order while the scale factors move.
const FONT_CLASS_ORDER = [
  "caption2",
  "caption",
  "capline",
  "label",
  "subheading",
  "callout",
  "body",
  "heading",
  "title3",
  "title2",
  "title1",
  "display2",
  "display1",
];

const CATEGORIES: { title: string; pattern: RegExp; order: string[] }[] = [
  { title: "Size (spacing)", pattern: /^--lk-size-(?!.*unitless)(.+)$/, order: SIZE_ORDER },
  { title: "Corner radius", pattern: /^--lku-corner-(.+)$/, order: SIZE_ORDER },
  { title: "Length", pattern: /^--lku-length-(.+)$/, order: SIZE_ORDER },
  { title: "Font size", pattern: /^--lk-(.+)-font-size$/, order: FONT_CLASS_ORDER },
  { title: "Font class offset", pattern: /^--lk-(.+)-offset$/, order: FONT_CLASS_ORDER },
  { title: "Font class box height", pattern: /^--lk-(.+)BoxHeight$/, order: FONT_CLASS_ORDER },
];

export function readSheetCategories(): SheetCategory[] {
  const css = fs.readFileSync(CORE_CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const declarations = new Map<string, string>();
  for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    if (!declarations.has(name)) declarations.set(name, value.replace(/\s+/g, " ").trim());
  }

  return CATEGORIES.map(({ title, pattern, order }) => {
    const found: { key: string; token: SheetToken }[] = [];
    for (const [cssVar, value] of declarations) {
      const key = cssVar.match(pattern)?.[1];
      if (key) found.push({ key, token: { cssVar, latex: simplifiedLatex(value, declarations) } });
    }
    const rank = (key: string) => (order.includes(key) ? order.indexOf(key) : order.length);
    found.sort((a, b) => rank(a.key) - rank(b.key));
    return { title, tokens: found.map((entry) => entry.token) };
  }).filter((category) => category.tokens.length > 0);
}
