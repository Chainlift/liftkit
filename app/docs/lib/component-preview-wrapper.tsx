import { highlightCode } from "./highlighted-code-server";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  initial_TS?: string;
  initial_CSS?: string;
}

export async function ComponentPreviewWrapper({
  componentName,
  initial_TS,
  initial_CSS,
}: ComponentPreviewWrapperProps) {
  const manifest = componentManifest[componentName];

  const initialKnobVals: Record<string, any> = {};
  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  const preHighlightedTS = initial_TS ? await highlightCode(initial_TS, "tsx") : null;
  const preHighlightedCSS = initial_CSS ? await highlightCode(initial_CSS, "css") : null;

  return (
    <ComponentPreview componentName={componentName} initial_TS={preHighlightedTS} initial_CSS={preHighlightedCSS} />
  );
}
