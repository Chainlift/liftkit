/**
 * Turns a CSS token value (the `calc()` / `round()` / `pow()` / `var()` subset liftkit-core.css uses) into LaTeX.
 * Docs-only: part of the System tab, not the LiftKit library.
 */

type Tex = { tex: string; prec: 0 | 1 | 2 }; // 0 = sum, 1 = product, 2 = atom (never needs parentheses)

const SCALE_SUBSCRIPTS: Record<string, string> = {
  "--lk-scalefactor-corner": "corner",
  "--lk-scalefactor-length": "length",
  "--lk-scalefactor-spacing": "spacing",
  "--lk-scalefactor-text": "type",
};

function varToTex(name: string): Tex {
  if (name === "--lk-scalefactor") return { tex: "s", prec: 2 };
  if (SCALE_SUBSCRIPTS[name]) return { tex: `s_{\\mathrm{${SCALE_SUBSCRIPTS[name]}}}`, prec: 2 };
  return { tex: `\\text{${name.replace(/^--lk-(base-)?/, "")}}`, prec: 2 };
}

function tokenize(input: string): string[] {
  return input.match(/--[\w-]+|\d*\.?\d+(?:em|rem|px|%)?|[a-z]+|[(),*/+-]/g) ?? [];
}

function wrap(node: Tex, minPrec: 0 | 1 | 2): string {
  return node.prec >= minPrec ? node.tex : `\\left(${node.tex}\\right)`;
}

export function cssToLatex(value: string): string {
  const tokens = tokenize(value);
  let pos = 0;
  const peek = () => tokens[pos];
  const take = () => tokens[pos++];

  function expr(): Tex {
    let acc = term();
    while (peek() === "+" || peek() === "-") {
      const op = take() === "+" ? "+" : "-";
      acc = { tex: `${acc.tex} ${op} ${wrap(term(), 1)}`, prec: 0 };
    }
    return acc;
  }

  function term(): Tex {
    let acc = factor();
    while (peek() === "*" || peek() === "/") {
      if (take() === "*") acc = { tex: `${wrap(acc, 1)} \\times ${wrap(factor(), 1)}`, prec: 1 };
      else acc = { tex: `\\frac{${acc.tex}}{${factor().tex}}`, prec: 2 };
    }
    return acc;
  }

  function factor(): Tex {
    const token = take();
    if (token === "-") return { tex: `-${wrap(factor(), 2)}`, prec: 1 };
    if (token === "(") {
      const inner = expr();
      take(); // ")"
      return inner;
    }
    if (token?.startsWith("--")) return varToTex(token);
    if (token && /^\d|^\./.test(token)) {
      const unit = token.match(/(em|rem|px|%)$/)?.[1];
      const number = unit ? token.slice(0, -unit.length) : token;
      return { tex: unit ? `${number}\\,\\mathrm{${unit}}` : number, prec: 2 };
    }
    // A function call: name ( args )
    take(); // "("
    const args: Tex[] = [expr()];
    while (peek() === ",") {
      take();
      args.push(expr());
    }
    take(); // ")"
    if (token === "var") return args[0];
    if (token === "calc") return args[0];
    if (token === "pow") return { tex: `${wrap(args[0], 2)}^{${args[1].tex}}`, prec: 2 };
    if (token === "round") {
      return { tex: `\\operatorname{round}\\left(${args[0].tex},\\ ${args[1].tex}\\right)`, prec: 2 };
    }
    return { tex: `\\text{${token}}`, prec: 2 };
  }

  return expr().tex;
}

// ─── Simplified form ────────────────────────────────────────────────────
// A token is `1em` times a product of other names, each to some power. The em unit and the `round()` step are
// dropped, but names stay as written in the CSS: a token that uses `--lk-eighthstep` shows `eighthstep`, not what
// that step works out to. Only the scale factors themselves show as powers (s^-2, the half step is a square root).

const EIGHTHS = 8;
/** Exponent of each name the value multiplies together, in eighths. */
type Powers = Map<string, number>;

const SCALE_FACTOR_NAMES: Record<string, string> = {
  "--lk-scalefactor": "s",
  ...Object.fromEntries(Object.entries(SCALE_SUBSCRIPTS).map(([name, sub]) => [name, `s_{\\mathrm{${sub}}}`])),
};

function combine(a: Powers, b: Powers, sign: 1 | -1): Powers {
  const out = new Map(a);
  for (const [base, power] of b) out.set(base, (out.get(base) ?? 0) + sign * power);
  return out;
}

/** Evaluates a value to powers of the names it multiplies, or null if it is anything else (sums, other numbers). */
function toPowers(value: string): Powers | null {
  const tokens = tokenize(value);
  let pos = 0;
  const peek = () => tokens[pos];
  const take = () => tokens[pos++];

  function product(): Powers | null {
    let acc = factor();
    while (acc && (peek() === "*" || peek() === "/")) {
      const sign = take() === "*" ? 1 : -1;
      const next = factor();
      acc = next ? combine(acc, next, sign) : null;
    }
    return acc;
  }

  function factor(): Powers | null {
    const token = take();
    if (token === "(") {
      const inner = product();
      take();
      return inner;
    }
    if (token?.startsWith("--")) return new Map([[token, EIGHTHS]]);
    if (token && /^\d|^\./.test(token)) return parseFloat(token) === 1 ? new Map() : null; // 1 and 1em are the unit
    if (token === "calc" || token === "round" || token === "var") {
      take(); // "("
      const inner = product();
      if (token === "round") while (peek() !== ")") take(); // drop the rounding step
      take(); // ")"
      return inner;
    }
    if (token === "pow") {
      take();
      const base = product();
      take(); // ","
      const exponent = take() === "-" ? -1 : 1;
      const raw = tokens[pos - 1] === "-" ? take() : tokens[pos - 1];
      take(); // ")"
      if (!base || raw === undefined || Number.isNaN(parseFloat(raw))) return null;
      const scale = exponent * parseFloat(raw);
      return new Map([...base].map(([name, power]) => [name, Math.round(power * scale)]));
    }
    return null;
  }

  const result = product();
  return pos >= tokens.length ? result : null;
}

function gcd(a: number, b: number): number {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

/** A scale factor to a power: s^3, s^-1, or a root for the fractional steps. */
function scalePowerToLatex(name: string, eighths: number): string {
  // Braced so the exponent attaches to the whole symbol, after any subscript (s_length^3, not s^3_length)
  const symbol = SCALE_FACTOR_NAMES[name];
  const base = symbol.includes("_") ? `{${symbol}}` : symbol;
  const divisor = gcd(eighths, EIGHTHS);
  const numerator = eighths / divisor;
  const denominator = EIGHTHS / divisor;
  if (denominator === 1) return numerator === 1 ? base : `${base}^{${numerator}}`;
  const root = denominator === 2 ? `\\sqrt{${symbol}}` : `\\sqrt[${denominator}]{${symbol}}`;
  if (numerator === 1) return root;
  if (numerator === -1) return `\\frac{1}{${root}}`;
  return `${base}^{${numerator < 0 ? "-" : ""}\\frac{${Math.abs(numerator)}}{${denominator}}}`;
}

/**
 * The token's formula with the em unit and rounding dropped, e.g. `s^{-2}`, `\sqrt{s}`, or
 * `\frac{\text{caption-font-size}}{\text{eighthstep}}`. Falls back to the full calc for anything else.
 */
export function simplifiedLatex(value: string): string {
  const powers = toPowers(value);
  if (!powers) return cssToLatex(value);

  const numerator: string[] = [];
  const denominator: string[] = [];
  for (const [name, eighths] of powers) {
    if (eighths === 0) continue;
    if (SCALE_FACTOR_NAMES[name]) {
      numerator.push(scalePowerToLatex(name, eighths));
      continue;
    }
    const power = eighths / EIGHTHS;
    if (!Number.isInteger(power)) return cssToLatex(value);
    const text = varToTex(name).tex;
    (power > 0 ? numerator : denominator).push(Math.abs(power) === 1 ? text : `${text}^{${Math.abs(power)}}`);
  }

  const top = numerator.join(" \\times ") || "1";
  return denominator.length ? `\\frac{${top}}{${denominator.join(" \\times ")}}` : top;
}
