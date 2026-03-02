import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Radio_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Radio"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
"use client";
import * as React from "react";
import { Radio, RadioIndicator, RadioGroup } from "@/liftkit/ui";

export function ExampleRadio() {
  const id = React.useId();
  return (
    <RadioGroup aria-labelledby={id} defaultValue="fuji-apple">
      <div id={id}>Best apple</div>

      <label>
        ${openTag}
          <RadioIndicator />
        </Radio>
        Fuji
      </label>

      <label>
        <Radio value="gala-apple">
          <RadioIndicator />
        </Radio>
        Gala
      </label>

      <label>
        <Radio value="granny-smith-apple">
          <RadioIndicator />
        </Radio>
        Granny Smith
      </label>
    </RadioGroup>
  );
}

  `;
}
