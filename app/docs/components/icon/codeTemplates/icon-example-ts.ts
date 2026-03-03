import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Icon_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "Icon"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
  import { Icon } from "@/liftkit/component-definitions/icon/icon";
  
  export function ExampleIcon() {
    return ${openTag}</Icon>;
  }
  
  `;
}
