"use client";

import { useMemo } from "react";
import katex from "katex";
import { buildFontSizeFormula } from "@/app/docs/theme-panel/font-class-tokens";
import { useTheme } from "@/app/docs/theme-panel/theme-context";
import type { FontClassGroup } from "@/app/docs/theme-panel/types";
import { simplifiedLatex } from "./to-latex";

/**
 * Docs-only (not LiftKit): a token's formula, typeset. `latex` is what liftkit-core.css says, read at build time. A
 * font size token also follows the Scale by step buttons in the theme panel: once a class has been stepped, its
 * formula is rebuilt from those clicks, so the sheet shows the formula that is actually in effect.
 */
export function LatexFormula({
  latex,
  fontClass,
}: {
  latex: string;
  fontClass?: FontClassGroup;
}) {
  const { state } = useTheme();
  const steps = fontClass ? state.fontSizeSteps[fontClass] : undefined;
  const effective =
    fontClass && steps && steps.length > 0
      ? simplifiedLatex(buildFontSizeFormula(fontClass, steps))
      : latex;
  const html = useMemo(
    () => katex.renderToString(effective, { throwOnError: false }),
    [effective],
  );

  return (
    <span
      className="system-latex callout color-onsurface"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
