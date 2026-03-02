import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Tabs_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Tabs"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
