import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Switch_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Switch"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
  import { Switch, SwitchThumb } from "@/liftkit/component-definitions";

export function ExampleSwitch() {
  return (
    <label>
      ${openTag}
        <SwitchThumb />
      </Switch>
      Notifications
    </label>
  );
}

  `;
}
