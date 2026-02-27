import { componentManifest } from "@/app/docs/lib/component-manifest";
function getInitialKnobs(componentName: string) {
  const manifest = componentManifest[componentName.toLowerCase() as keyof typeof componentManifest];

  const initialKnobVals: Record<string, any> = {};

  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  return initialKnobVals;
}
