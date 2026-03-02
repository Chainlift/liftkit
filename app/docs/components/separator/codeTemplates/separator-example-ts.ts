import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Separator_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Separator"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
