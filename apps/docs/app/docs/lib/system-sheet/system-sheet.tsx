import katex from "katex";
import "katex/dist/katex.min.css";
import "./system-sheet.css";
import { readSheetCategories } from "./tokens";
import { TokenLine } from "./token-line";

/**
 * Docs-only (not part of the LiftKit system): a live cheat sheet of every length token in liftkit-core.css.
 * Reads the stylesheet at build time, so new tokens that match a category show up on their own.
 */
export function SystemSheet() {
  const categories = readSheetCategories();

  return (
    <div className="system-sheet">
      {categories.map((category) => (
        <section key={category.title} className="system-category">
          <h3 className="system-category-title label color-onsurface">{category.title}</h3>
          {category.tokens.map(({ cssVar, latex }) => (
            <div key={cssVar} className="system-row">
              <code className="subheading mono color-onsurfacelow">{cssVar}</code>
              <span
                className="system-latex subheading color-onsurfacelow"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(latex, { throwOnError: false }) }}
              />
              <TokenLine cssVar={cssVar} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
