import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Form_Example_TS(knobValsFromClient: Record<string, unknown> = {}) {
  const componentName = "Form"; //should be the same case as the component tag

  const openTag = getOpenTag(componentName, knobValsFromClient);
  return ``;
}
