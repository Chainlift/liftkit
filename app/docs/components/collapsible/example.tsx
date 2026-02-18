export function LocalCodeSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "./collapsible";

export default function CollapsibleDemo() {
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
`}</code>
    </pre>
  );
}
