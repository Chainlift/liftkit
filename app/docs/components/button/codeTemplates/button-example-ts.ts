import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Button_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Button"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals, {}, "    ");

  return `import { Button } from "@/liftkit/definitions";

export function ExampleButton() {
  return (
    <>
    ${openTag}</Button>

    </>
  );
}
`;
}
