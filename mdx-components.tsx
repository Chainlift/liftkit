import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/mdx/code-block";
import { PropsTable } from "@/components/mdx/PropsTable";
import { TableOfContents } from "@/components/mdx/table-of-contents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock, // custom code renderer (optional)
    PropsTable, // your prop table component
    TableOfContents, // dynamic table of contents
    ...components,
  };
}
