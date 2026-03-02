import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function ToggleGroup_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "ToggleGroup"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
import * as React from "react";
import { Toggle } from "@/liftkit/ui/toggle/toggle";
import { ToggleGroup } from "@/liftkit/ui";

export function ExampleToggleGroup() {
  return (
   ${openTag}
      <Toggle aria-label="Align left" value="left">
        <AlignLeftIcon />
      </Toggle>
      <Toggle aria-label="Align center" value="center">
        <AlignCenterIcon />
      </Toggle>
      <Toggle aria-label="Align right" value="right">
        <AlignRightIcon />
      </Toggle>
    </ToggleGroup>
  );
}

function AlignLeftIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" strokeLinecap="round" {...props}>
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M2.5 6.5H10.5" />
      <path d="M2.5 12.5H10.5" />
    </svg>
  );
}

function AlignCenterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" strokeLinecap="round" {...props}>
      <path d="M3 3.5H14" />
      <path d="M3 9.5H14" />
      <path d="M4.5 6.5H12.5" />
      <path d="M4.5 12.5H12.5" />
    </svg>
  );
}

function AlignRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentcolor" strokeLinecap="round" {...props}>
      <path d="M2.5 3.5H13.5" />
      <path d="M2.5 9.5H13.5" />
      <path d="M5.5 6.5H13.5" />
      <path d="M5.5 12.5H13.5" />
    </svg>
  );
}

  `;
}
