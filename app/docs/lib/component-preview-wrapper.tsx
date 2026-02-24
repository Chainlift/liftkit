import { highlightCode } from "./highlighted-code";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  tsSample?: string;
  cssSample?: string;
}

export async function ComponentPreviewWrapper({ componentName, tsSample, cssSample }: ComponentPreviewWrapperProps) {
  const manifest = componentManifest[componentName];

  console.log(cssSample);

  const highlightedCss = cssSample ? await highlightCode(cssSample, "css") : null;
  const highlightedTs = tsSample ? await highlightCode(tsSample, "ts") : null;

  console.log(highlightedTs);

  return (
    <ComponentPreview componentName={componentName} cssSample={highlightedCss} tsSample={highlightedTs} />
  );
}
