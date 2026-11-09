import type { MDXComponents } from "mdx/types";
import { MdxCodeBlock } from "@/app/docs/lib/mdx-code-block";
import { MdxTable, MdxTd, MdxTh } from "@/components/mdx/mdx-table";
import { PropsTable } from "@/components/mdx/PropsTable";
import { TableOfContents } from "@/components/mdx/table-of-contents";

function getTableHeaderClass() {



}


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: MdxCodeBlock,
    PropsTable, // your prop table component
    TableOfContents, // dynamic table of contents
    h1: (props) => <h1 className="title1-bold mb-sm mt-none" {...props} />, // example of custom heading
    h2: (props) => <h2 className="title2-bold my-sm" {...props} />,
    h3: (props) => <h3 className="title3-bold mb-sm" {...props} />,
    p: (props) => <p className="body mb-md" {...props} />,
    table: MdxTable,
    th: MdxTh,
    td: MdxTd,
    li: (props) => <li className="body" {...props}/>,
    ...components,
  };
}
