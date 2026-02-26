import { highlightCode } from "./highlighted-code-server";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  staticTSSample?: string;
  cssSample?: string;
  codeSampleFn?: (knobValues: Record<string, unknown>) => string;
  cssSampleFn?: (knobValues: Record<string, unknown>) => string;
}

export async function ComponentPreviewWrapper({
  componentName,
  staticTSSample,
  cssSample,
  codeSampleFn,
  cssSampleFn,
}: ComponentPreviewWrapperProps) {
  
  console.log(staticTSSample);

  const preHighlightedCSS = cssSample ? await highlightCode(cssSample, "css") : null;
  const preHighlightedTS = staticTSSample ? await highlightCode(staticTSSample, "ts") : null;

  return (
    <ComponentPreview componentName={componentName} staticCSSSample={preHighlightedCSS} staticTSSample={preHighlightedTS} />
  );
}
