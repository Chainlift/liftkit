import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function ScrollArea_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "ScrollArea"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
