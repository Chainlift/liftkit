import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Toolbar_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Toolbar"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
} from "@/liftkit/definitions/select/select";
import { Toggle } from "@/liftkit/definitions/toggle/toggle";
import { ToggleGroup } from "@/liftkit/definitions/toggle-group/toggle-group";
import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator, ToolbarLink, ToolbarInput } from "@/liftkit/definitions";

export function ExampleToolbar() {
  return (
    <>
      ${openTag}
        <ToggleGroup aria-label="Alignment">
          <ToolbarButton render={<Toggle />} aria-label="Align left" value="align-left">
            Align Left
          </ToolbarButton>
          <ToolbarButton render={<Toggle />} aria-label="Align right" value="align-right">
            Align Right
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup aria-label="Numerical format">
          <ToolbarButton aria-label="Format as currency">$</ToolbarButton>
          <ToolbarButton aria-label="Format as percent">%</ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <Select defaultValue="Helvetica">
          <ToolbarButton render={<SelectTrigger />}>
            <SelectValue />
            <SelectIcon>
              <ChevronUpDownIcon />
            </SelectIcon>
          </ToolbarButton>
          <SelectPortal>
            <SelectPositioner sideOffset={8}>
              <SelectPopup>
                <SelectItem value="Helvetica">
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                  <SelectItemText>Helvetica</SelectItemText>
                </SelectItem>
                <SelectItem value="Arial">
                  <SelectItemIndicator>
                    <CheckIcon />
                  </SelectItemIndicator>
                  <SelectItemText>Arial</SelectItemText>
                </SelectItem>
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </Select>
        <ToolbarSeparator />
        <ToolbarLink href="#">Edited 51m ago</ToolbarLink>
      </Toolbar>
    </>
  );
}

function ChevronUpDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentcolor" strokeWidth="1.5" {...props}>
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
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
