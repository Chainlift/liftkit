import { highlightCode } from "./highlighted-code-server";
import { componentManifest } from "./component-manifest";
import { ComponentPreview } from "./component-preview";
import type { ComponentName } from "./component-manifest";

interface ComponentPreviewWrapperProps {
  componentName: ComponentName;
  Example_TS_Static_String?: string;
  Example_CSS_Static_String?: string;
}

export async function ComponentPreviewWrapper({
  componentName,
  Example_TS_Static_String,
  Example_CSS_Static_String,
}: ComponentPreviewWrapperProps) {
  const manifest = componentManifest[componentName];

  const initialKnobVals: Record<string, any> = {};
  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  console.log(Example_CSS_Static_String);
  
  const preHighlightedCSS = Example_CSS_Static_String ? await highlightCode(Example_CSS_Static_String, "css") : null;
  const preHighlightedTS = Example_TS_Static_String ? await highlightCode(Example_TS_Static_String, "tsx") : null;

  console.log(Example_TS_Static_String);

  return (
    <ComponentPreview
      componentName={componentName}
      Example_CSS_Static={preHighlightedCSS}
      Example_TS_Static={preHighlightedTS}
    />
  );
}
