import { highlightCode } from "./highlighted-code-server";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";
import { SimpleComponentPreview } from "@/app/docs/lib/simple-component-preview";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  initial_TS?: string;
  initial_CSS?: string;
  mode?: "rich" | "simple";
  children?: React.ReactNode;
}

export async function ComponentPreviewWrapper({
  componentName,
  initial_TS,
  initial_CSS,
  mode = "rich",
  children,
}: ComponentPreviewWrapperProps) {
  const preHighlightedTS = initial_TS ? await highlightCode(initial_TS, "tsx") : null;
  const preHighlightedCSS = initial_CSS ? await highlightCode(initial_CSS, "css") : null;

  if (mode === "simple") {
    return <SimpleComponentPreview codeString={preHighlightedTS}>{children}</SimpleComponentPreview>;
  }

  return (
    <ComponentPreview componentName={componentName} initial_TS={preHighlightedTS} initial_CSS={preHighlightedCSS} />
  );
}
