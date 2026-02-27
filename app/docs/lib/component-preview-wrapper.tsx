import { highlightCode } from "./highlighted-code-server";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  tsExampleStatic?: string;
  cssExampleStatic?: string;
}

export async function ComponentPreviewWrapper({
  componentName,
  tsExampleStatic,
  cssExampleStatic,
}: ComponentPreviewWrapperProps) {


  const preHighlightedCSS = cssExampleStatic ? await highlightCode(cssExampleStatic, "css") : null;
  const preHighlightedTS = tsExampleStatic ? await highlightCode(tsExampleStatic, "tsx") : null;

  return (
    <ComponentPreview
      componentName={componentName}
      Example_CSS_Static={preHighlightedCSS}
      Example_TS_Static={preHighlightedTS}
    />
  );
}
