import type { MDXComponents } from "mdx/types";
import Card from "@/liftkit/components/card";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="display2-bold m-bottom-sm">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="title1-bold m-bottom-sm">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="title2-bold m-bottom-xs">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="title4-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="title5-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="title6-bold">{children}</h6>,
    p: ({ children }) => <p className="body m-bottom-md">{children}</p>,
    ul: ({ children }) => <ul className="p-left-md m-bottom-md">{children}</ul>,
    ol: ({ children }) => <ol className="p-left-md m-bottom-md">{children}</ol>,
    pre: ({ children }) => (
      <Card>
        <pre className="lk-code-block m-bottom-xl">{children}</pre>
      </Card>
    ),
    // Add table components
    table: ({ children }) => (
      <Card scaleFactor="none" className="bg-surfacecontainerlowest ">
        <div className="m-top-md m-bottom-xl overflow-auto whitespace-pre border-radius-sm shadow-sm ">
          <table className="text-align-left w-full">{children}</table>
        </div>
      </Card>
    ),
    thead: ({ children }) => (
      <thead className="border-bottom bg-surfacecontainerlow">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="p-sm">
        <div className="subheading-bold">{children}</div>
      </th>
    ),
    td: ({ children }) => <td className="p-sm">{children}</td>,
    ...components,
  };
}
