import { componentManifest } from "@/app/docs/lib/component-manifest";

export function getCodeTemplate(knobValues: Record<string, any> = {}, componentName = "string") {

  const manifest = componentManifest[componentName];

  const initialKnobVals: Record<string, any> = {};
  if (manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  console.log(initialKnobVals);

  const propsString = Object.entries(knobValues)
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;



  return openTag;
}
