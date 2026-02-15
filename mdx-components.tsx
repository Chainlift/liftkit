import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/mdx/code-block";
import { PropsTable } from "@/components/mdx/PropsTable";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,      // custom code renderer (optional)
    PropsTable,          // your prop table component
    ...components,
  };
}
