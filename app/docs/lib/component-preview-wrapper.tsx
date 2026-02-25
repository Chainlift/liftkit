
import { highlightCode } from "./highlighted-code";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  tsSample?: string;
  cssSample?: string;
  codeSampleFn?: (knobValues: Record<string, unknown>) => string;
  cssSampleFn?: (knobValues: Record<string, unknown>) => string;
}

export async function ComponentPreviewWrapper({
  componentName,
  tsSample,
  cssSample,
  codeSampleFn,
  cssSampleFn,
}: ComponentPreviewWrapperProps) {
  const manifest = componentManifest[componentName];

  const highlightedCss = cssSample ? await highlightCode(cssSample, "css") : null;
  const highlightedTs = tsSample ? await highlightCode(tsSample, "ts") : null;

  return (
    <ComponentPreview
      componentName={componentName}
      cssSample={highlightedCss}
      tsSample={highlightedTs}
      tsExampleFn={codeSampleFn}
      cssSampleFn={cssSampleFn}
    />
  );
}