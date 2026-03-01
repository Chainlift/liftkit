import { getInitialKnobs } from "@/app/docs/lib/getInitialKnobs";
import { getPropsString } from "@/app/docs/lib/getInitialKnobs";
export function Tabs_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Tabs"; //should be the same case as the component tag

  const initialKnobValues = getInitialKnobs(componentName); //knob defaults loaded statically from manifest
  const updatedKnobValsLength = Object.entries(updatedKnobVals).length;
  const propsString = getPropsString(updatedKnobValsLength > 0 ? updatedKnobVals : initialKnobValues);

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;

  return ``;
}
