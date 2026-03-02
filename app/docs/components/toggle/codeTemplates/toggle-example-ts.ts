import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Toggle_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Toggle"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
