import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "@/liftkit/component-definitions";

export function ExampleCollapsible() {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <ChevronIcon />
        Recovery keys
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <div>
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}

export function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}
