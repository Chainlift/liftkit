import { isValidElement, type ReactNode } from "react";
import { SimpleCodeBlock } from "./simple-code-block";

/** Languages the site's highlighter loads on both server and client; anything else is shown as tsx. */
const LANGUAGES = new Set(["bash", "css", "tsx"]);

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/**
 * The `pre` element for fenced code blocks in .mdx pages. MDX passes the code
 * as children (already split into highlighted spans by rehype-pretty-code), so
 * this reads it back as plain text and renders it with the same code block
 * the rest of the docs use.
 */
export function MdxCodeBlock({ children, ...props }: { children?: ReactNode; "data-language"?: string }) {
  const requested = props["data-language"];
  const lang = requested && LANGUAGES.has(requested) ? requested : requested === "sh" || requested === "shell" ? "bash" : "tsx";

  return (
    <div className="bg-surfacecontainerlow rounded-sm shadow-2xs mb-md">
      <SimpleCodeBlock codeString={textOf(children).replace(/\n$/, "")} lang={lang} />
    </div>
  );
}
