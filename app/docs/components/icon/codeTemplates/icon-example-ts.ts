import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Icon_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "Icon"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
