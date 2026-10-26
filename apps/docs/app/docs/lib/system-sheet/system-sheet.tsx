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
          {category.tokens.map(({ name, latex, width, unitlessVar }) => (
            <div key={name} className="system-row">
              <code className="subheading mono color-onsurfacelow">{name}</code>
              <span
                className="system-latex subheading color-onsurface"
                dangerouslySetInnerHTML={{ __html: katex.renderToString(latex, { throwOnError: false }) }}
              />
              <TokenLine width={width} unitlessVar={unitlessVar} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
