import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Tooltip_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Tooltip"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
