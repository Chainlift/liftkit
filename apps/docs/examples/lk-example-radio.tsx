"use client";
import * as React from "react";
import { Radio, RadioIndicator, RadioGroup } from "@/liftkit/component-definitions";

export function ExampleRadio() {
  const id = React.useId();
  return (
    <RadioGroup aria-labelledby={id} defaultValue="fuji-apple">
      <div id={id}>Best apple</div>

      <label>
        <Radio value="fuji-apple">
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
