import { getInitialKnobs } from "@/app/docs/lib/getInitialKnobs";
import { getPropsString } from "@/app/docs/lib/getInitialKnobs";
export function CheckboxGroup_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "CheckboxGroup"; //should be the same case as the component tag

  const initialKnobValues = getInitialKnobs(componentName); //knob defaults loaded statically from manifest
  const updatedKnobValsLength = Object.entries(updatedKnobVals).length;
  const propsString = getPropsString(updatedKnobValsLength > 0 ? updatedKnobVals : initialKnobValues);

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;

  return `"use client";
import * as React from "react";
import { CheckboxGroup } from "@/liftkit/ui";
import { Checkbox, CheckboxIndicator } from "@/liftkit/ui";

export function ExampleCheckboxGroup() {
  const id = React.useId();
  return (
    <CheckboxGroup aria-labelledby={id} defaultValue={["fuji-apple"]}>
      <div id={id}>Apples</div>

      <label>
        <Checkbox name="apple" value="fuji-apple">
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        Fuji
      </label>

      <label>
        <Checkbox name="apple" value="gala-apple">
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        Gala
      </label>

      <label>
        <Checkbox name="apple" value="granny-smith-apple">
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        Granny Smith
      </label>
    </CheckboxGroup>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
`;
}
