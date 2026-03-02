import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Menu_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Menu"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return ``;
}
