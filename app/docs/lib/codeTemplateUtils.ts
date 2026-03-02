import { componentManifest } from "@/app/docs/lib/component-manifest";


type codeTemplateProps = {
  componentName: string;
};
export const getOpenTag = (
  componentName: string,
  knobValsFromClient: Record<string, unknown> = {},
  staticProps: Record<string, unknown> = {},
) => {
  //first get the initial knob values from the component manifest so the server-side highlighted code can render instantly with correct props
  const knobValsFromManifest = getInitialKnobs(componentName);
  const knobValsFromClientLength = Object.entries(knobValsFromClient).length;
  const propsString = getPropsString(
    knobValsFromClientLength > 0 ? knobValsFromClient : knobValsFromManifest,
    staticProps ?? {},
  );

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;

  return openTag;
};

export const getPropsString = (knobs: Record<string, any> = {}, staticProps: Record<string, any> = {}) => {
  const propsStringFromStaticProps = Object.entries(staticProps) //load default knobs by default, replace with dynamic
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const propsStringFromClientKnobs = Object.entries(knobs) //load default knobs by default, replace with dynamic
    .filter(([_, v]) => v !== undefined && v !== "" && v !== false)
    .map(([key, value]) => {
      if (typeof value === "string") return `${key}="${value}"`;
      if (typeof value === "boolean") return key; // boolean true → just the prop name
      return `${key}={${JSON.stringify(value)}}`;
    })
    .join(" ");

  const combinedString = propsStringFromClientKnobs + propsStringFromStaticProps;

  return combinedString;
};

export const getInitialKnobs = (componentName: string) => {
  const manifestName = componentName.slice(0, 1).toLowerCase() + componentName.slice(1);

  const manifest = componentManifest[manifestName as keyof typeof componentManifest];

  const initialKnobVals: Record<string, any> = {};

  if (manifest && manifest.knobs) {
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initialKnobVals[key] = control.default;
    }
  }

  return initialKnobVals;
};

