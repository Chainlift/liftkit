/**
 * Turns a CSS token value (the `calc()` / `round()` / `pow()` / `var()` subset liftkit-core.css uses) into LaTeX.
 * Docs-only: part of the System tab, not the LiftKit library.
 */

type Tex = { tex: string; prec: 0 | 1 | 2 }; // 0 = sum, 1 = product, 2 = atom (never needs parentheses)

const SCALE_SUBSCRIPTS: Record<string, string> = {
  "--lk-scalefactor-corner": "corner",
  "--lk-scalefactor-length": "length",
  "--lk-scalefactor-spacing": "spacing",
  "--lk-scalefactor-typography": "type",
};

function varToTex(name: string): Tex {
  if (name === "--lk-scalefactor") return { tex: "s", prec: 2 };
  if (SCALE_SUBSCRIPTS[name]) return { tex: `s_{\\mathrm{${SCALE_SUBSCRIPTS[name]}}}`, prec: 2 };
  return { tex: `\\text{${name.replace(/^--lk-/, "").replace(/^--lku-/, "")}}`, prec: 2 };
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
