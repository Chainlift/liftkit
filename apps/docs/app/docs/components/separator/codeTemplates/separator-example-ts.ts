import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Separator_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Separator"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
import { Separator } from "@chainlift/liftkit";

export function ExampleSeparator() {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
      <a href="#">Support</a>

    ${openTag}</Separator>

      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
}

  `;
}
