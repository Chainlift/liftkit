import type { ComponentProps } from "react";
import "./mdx-table.css";

/**
 * Docs-only (not LiftKit) elements for Markdown tables, mapped in mdx-components.tsx. The table is wrapped so
 * it scrolls sideways on narrow screens instead of squeezing its columns. Styles live in mdx-table.css.
 */
export function MdxTable(props: ComponentProps<"table">) {
  return (
    <div data-docs-table-scroll="">
      <table data-docs-table="" {...props} />
    </div>
  );
}

export function MdxTh(props: ComponentProps<"th">) {
  return <th className="label-bold color-onsurfacelow" {...props} />;
}

export function MdxTd(props: ComponentProps<"td">) {
  return <td className="body" {...props} />;
}
