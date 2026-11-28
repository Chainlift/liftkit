import type {
  FontClassGroup,
  FontClassOverrides,
  FontClassTokenKey,
  FontSizeStep,
  FontSizeSteps,
} from "./types";

/** The per-font-class tokens in liftkit-core.css that can be edited, in display order. */
export const FONT_CLASS_TOKENS: {
  key: FontClassTokenKey;
  label: string;
  description: string;
  /** The suffix of the CSS variable: --lk-<class>-<cssSuffix>. */
  cssSuffix: string;
  /** Appended to the number in CSS (letter spacing is in em; the others are unitless). */
  unit: string;
  min: number;
  max: number;
  /** Whole numbers only. */
  integer?: boolean;
  /** The slider step, for tokens edited with a RangeField. */
  step?: number;
}[] = [
  {
    key: "fontSize",
    label: "Font Size",
    description: "Size as a multiple of the surrounding text, in em.",
    cssSuffix: "font-size",
    unit: "em",
    min: 0.25,
    max: 10,
  },
  {
    key: "lineHeight",
    label: "Line Height",
    description: "Unitless multiple of the font size.",
    cssSuffix: "line-height",
    unit: "",
    min: 0.5,
    max: 3,
  },
  {
    key: "fontWeight",
    label: "Default Weight",
    description: "Weight of the normal class, from 100 (thin) to 900 (black).",
    cssSuffix: "font-weight",
    unit: "",
    min: 100,
    max: 900,
    integer: true,
  },
  {
    key: "boldFontWeight",
    label: "Bold Weight",
    description: "Weight of the -bold class.",
    cssSuffix: "bold-font-weight",
    unit: "",
    min: 100,
    max: 900,
    integer: true,
  },
  {
    key: "monoFontWeight",
    label: "Mono Weight",
    description:
      "Weight of the -mono class. Follows the default weight until set.",
    cssSuffix: "mono-font-weight",
    unit: "",
    min: 100,
    max: 900,
    integer: true,
  },
  {
    key: "letterSpacing",
    label: "Letter Spacing",
    description: "Space between letters, in em.",
    cssSuffix: "letter-spacing",
    unit: "em",
    min: -0.5,
    max: 1,
    step: 0.001,
  },
];

/**
 * Each class's defaults, as written in liftkit-core.css. The line height is a step of the scale factor, so it moves
 * with it; the other two are plain numbers.
 */
const DEFAULTS: Record<
  FontClassGroup,
  {
    lineHeight: "quarter" | "half" | "whole";
    fontWeight: number;
    boldFontWeight: number;
    letterSpacing: number;
  }
> = {
  display1: {
    lineHeight: "quarter",
    fontWeight: 400,
    boldFontWeight: 700,
    letterSpacing: -0.022,
  },
  display2: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 700,
    letterSpacing: -0.022,
  },
  title1: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.022,
  },
  title2: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.02,
  },
  title3: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.017,
  },
  heading: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.014,
  },
  body: {
    lineHeight: "whole",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.011,
  },
  callout: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.009,
  },
  subheading: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.007,
  },
  label: {
    lineHeight: "half",
    fontWeight: 500,
    boldFontWeight: 700,
    letterSpacing: -0.004,
  },
  caption: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: -0.007,
  },
  capline: {
    lineHeight: "half",
    fontWeight: 400,
    boldFontWeight: 600,
    letterSpacing: 0.0618,
  },
};

const round3 = (n: number) => Math.round(n * 1000) / 1000;

/** The scale factor's steps, rounded the way --lk-wholestep, -halfstep, -quarterstep and -eighthstep are in the CSS. */
export function scaleSteps(scaleFactor: number): {
  whole: number;
  half: number;
  quarter: number;
  eighth: number;
} {
  return {
    whole: scaleFactor,
    half: round3(scaleFactor ** 0.5),
    quarter: round3(scaleFactor ** 0.25),
    eighth: round3(scaleFactor ** 0.125),
  };
}

type StepName = FontSizeStep["step"];
type Exponents = Record<StepName, number>;

const STEP_ORDER: StepName[] = ["whole", "half", "quarter", "eighth"];

const exp = (e: Partial<Exponents>): Exponents => ({
  whole: 0,
  half: 0,
  quarter: 0,
  eighth: 0,
  ...e,
});

/**
 * Each class's font size as powers of the scale factor's steps, times 1em. These are liftkit-core.css's own formulas
 * (display1 is 1em * pow(var(--lk-wholestep), 3), label is 1em / quarterstep / eighthstep, and so on).
 */
const DEFAULT_EXPONENTS: Record<FontClassGroup, Exponents> = {
  display1: exp({ whole: 3 }),
  display2: exp({ whole: 2 }),
  title1: exp({ whole: 1, half: 1 }),
  title2: exp({ whole: 1 }),
  title3: exp({ half: 1 }),
  heading: exp({ quarter: 1 }),
  body: exp({}),
  callout: exp({ eighth: -1 }),
  subheading: exp({ quarter: -1 }),
  label: exp({ quarter: -1, eighth: -1 }),
  caption: exp({ half: -1 }),
  capline: exp({ half: -1 }),
};

/** A class's exponents after the clicks made on it: multiply adds 1 to a step, divide takes 1 off. */
function exponentsAfter(
  group: FontClassGroup,
  steps: FontSizeStep[],
): Exponents {
  const result = { ...DEFAULT_EXPONENTS[group] };
  for (const { op, step } of steps) result[step] += op === "multiply" ? 1 : -1;
  return result;
}

/** One step as a CSS term, e.g. var(--lk-wholestep) or pow(var(--lk-wholestep), 3). */
function term(step: StepName, power: number): string {
  const v = `var(--lk-${step}step)`;
  return power === 1 ? v : `pow(${v}, ${power})`;
}

/** The exponents as a calc: steps with a positive exponent multiplied in, steps with a negative one divided out. */
function formulaFor(exponents: Exponents): string {
  const parts = [
    ...STEP_ORDER.filter((s) => exponents[s] > 0).map(
      (s) => `* ${term(s, exponents[s])}`,
    ),
    ...STEP_ORDER.filter((s) => exponents[s] < 0).map(
      (s) => `/ ${term(s, -exponents[s])}`,
    ),
  ];
  return parts.length === 0 ? "1em" : `calc(1em ${parts.join(" ")})`;
}

/**
 * A class's font size formula after the clicks made on it. Clicks are worked out as exponents, so a multiply and a
 * divide by the same step cancel, repeats collapse into pow(), and the result stays short and readable, e.g. display1
 * multiplied by the whole step and divided by the half step is
 * calc(1em * pow(var(--lk-wholestep), 4) / var(--lk-halfstep)).
 */
export function buildFontSizeFormula(
  group: FontClassGroup,
  steps: FontSizeStep[],
): string {
  return formulaFor(exponentsAfter(group, steps));
}

/** Whether the clicks add up to no change, so the class keeps liftkit-core.css's own formula. */
function isDefaultSize(group: FontClassGroup, steps: FontSizeStep[]): boolean {
  const after = exponentsAfter(group, steps);
  return STEP_ORDER.every((s) => after[s] === DEFAULT_EXPONENTS[group][s]);
}

/** The CSS rules for font sizes that have been stepped, one per line. */
export function buildFontSizeRules(
  fontSizeSteps: FontSizeSteps,
  indent: string,
): string[] {
  return Object.entries(fontSizeSteps).flatMap(([group, steps]) =>
    steps && steps.length > 0 && !isDefaultSize(group as FontClassGroup, steps)
      ? [
          `${indent}--lk-${group}-font-size: ${buildFontSizeFormula(group as FontClassGroup, steps)};`,
        ]
      : [],
  );
}

const STEP_NAMES = ["whole", "half", "quarter", "eighth"];

/** Keeps only well-formed clicks for known classes, so a damaged save can't write bad CSS. */
export function sanitizeFontSizeSteps(saved: unknown): FontSizeSteps {
  const out: FontSizeSteps = {};
  if (!saved || typeof saved !== "object") return out;
  for (const group of Object.keys(DEFAULTS) as FontClassGroup[]) {
    const list = (saved as Record<string, unknown>)[group];
    if (!Array.isArray(list)) continue;
    const valid = list.filter(
      (item): item is FontSizeStep =>
        !!item &&
        typeof item === "object" &&
        ((item as FontSizeStep).op === "multiply" ||
          (item as FontSizeStep).op === "divide") &&
        STEP_NAMES.includes((item as FontSizeStep).step),
    );
    if (valid.length > 0) out[group] = valid;
  }
  return out;
}

/** The value a token has when it isn't overridden. */
export function defaultFontClassToken(
  group: FontClassGroup,
  token: FontClassTokenKey,
  scaleFactor: number,
): number {
  const d = DEFAULTS[group];
  if (token === "fontWeight" || token === "monoFontWeight") return d.fontWeight;
  if (token === "boldFontWeight") return d.boldFontWeight;
  if (token === "letterSpacing") return d.letterSpacing;
  // Mirrors --lk-wholestep / --lk-halfstep / --lk-quarterstep in liftkit-core.css
  if (d.lineHeight === "whole") return scaleFactor;
  return round3(scaleFactor ** (d.lineHeight === "half" ? 0.5 : 0.25));
}

/** The CSS rules for the tokens the visitor changed, one per line. */
export function buildFontClassOverrideRules(
  overrides: FontClassOverrides,
  indent: string,
): string[] {
  const rules: string[] = [];
  for (const [group, tokens] of Object.entries(overrides)) {
    for (const def of FONT_CLASS_TOKENS) {
      // Font size is edited as steps (buildFontSizeRules), not as a number
      if (def.key === "fontSize") continue;
      const value = tokens?.[def.key];
      if (typeof value === "number")
        rules.push(
          `${indent}--lk-${group}-${def.cssSuffix}: ${value}${def.unit};`,
        );
    }
  }
  return rules;
}

/** Keeps only valid numbers for known classes and tokens, so a damaged save can't write bad CSS. */
export function sanitizeFontClassOverrides(saved: unknown): FontClassOverrides {
  const out: FontClassOverrides = {};
  if (!saved || typeof saved !== "object") return out;
  for (const group of Object.keys(DEFAULTS) as FontClassGroup[]) {
    const record = (saved as Record<string, unknown>)[group];
    if (!record || typeof record !== "object") continue;
    for (const def of FONT_CLASS_TOKENS) {
      if (def.key === "fontSize") continue;
      const value = (record as Record<string, unknown>)[def.key];
      if (
        typeof value === "number" &&
        Number.isFinite(value) &&
        value >= def.min &&
        value <= def.max
      ) {
        out[group] = { ...out[group], [def.key]: value };
      }
    }
  }
  return out;
}
