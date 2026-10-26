import type { MDXComponents } from "mdx/types";
import { MdxCodeBlock } from "@/app/docs/lib/mdx-code-block";
import { PropsTable } from "@/components/mdx/PropsTable";
import { TableOfContents } from "@/components/mdx/table-of-contents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: MdxCodeBlock,
    PropsTable, // your prop table component
    TableOfContents, // dynamic table of contents
    h1: (props) => <h1 className="display2-bold mb-xs mt-none" {...props} />, // example of custom heading
    h2: (props) => <h2 className="title1-bold mb-md mt-lg" {...props} />,
    h3: (props) => <h3 className="title2-bold mb-xs" {...props} />,
    p: (props) => <p className="body" {...props} />,
    ...components,
  };
}
