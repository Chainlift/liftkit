import { componentManifest } from "@/app/docs/lib/component-manifest";

export function getInitialKnobs(componentName: string) {
  const manifest = componentManifest[componentName.toLowerCase() as keyof typeof componentManifest];

  const initialKnobVals: Record<string, any> = {};

  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  return initialKnobVals;
}

export function getPropsString(knobs: Record<string, any> = {}) {
  const propsString = Object.entries(knobs) //load default knobs by default, replace with dynamic
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  return propsString;
}
