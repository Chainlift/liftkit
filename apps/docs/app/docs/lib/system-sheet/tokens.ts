import fs from "node:fs";
import path from "node:path";
import { cssToLatex, simplifiedLatex } from "./to-latex";

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

/** `width` is the CSS that draws the token's line. Unitless tokens (`unitlessVar`) are drawn as that many em, and read out as a plain number. */
export type SheetToken = { name: string; latex: string; width: string; unitlessVar?: string };
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

const CONSTANTS = [
  "--lk-scalefactor",
  "--lk-scalefactor-corner",
  "--lk-scalefactor-spacing",
  "--lk-scalefactor-typography",
  "--lk-scalefactor-length",
];

export function readSheetCategories(): SheetCategory[] {
  const css = fs.readFileSync(CORE_CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const declarations = new Map<string, string>();
  for (const [, name, value] of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    if (!declarations.has(name)) declarations.set(name, value.replace(/\s+/g, " ").trim());
  }

  // The foundation everything else derives from: the root font size, then the scale factors (as their declared defaults)
  const rootFontSize = css.match(/:root\s*\{[^}]*?\bfont-size:\s*([^;]+);/)?.[1].trim() ?? "1rem";
  const constants: SheetCategory = {
    title: "Constants",
    tokens: [
      { name: "font-size", latex: cssToLatex(rootFontSize), width: rootFontSize },
      ...CONSTANTS.filter((name) => declarations.has(name)).map((name) => ({
        name,
        latex: cssToLatex(declarations.get(name)!),
        width: `calc(var(${name}) * 1em)`,
        unitlessVar: name,
      })),
    ],
  };

  const derived = CATEGORIES.map(({ title, pattern, order }) => {
    const found: { key: string; token: SheetToken }[] = [];
    for (const [cssVar, value] of declarations) {
      const key = cssVar.match(pattern)?.[1];
      if (key) found.push({
          key,
          token: { name: cssVar, latex: simplifiedLatex(value, declarations), width: `var(${cssVar})` },
        });
    }
    const rank = (key: string) => (order.includes(key) ? order.indexOf(key) : order.length);
    found.sort((a, b) => rank(a.key) - rank(b.key));
    return { title, tokens: found.map((entry) => entry.token) };
  }).filter((category) => category.tokens.length > 0);

  return [constants, ...derived];
}
