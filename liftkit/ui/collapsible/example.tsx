import * as React from "react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "./collapsible";
import styles from "./collapsible.module.css";

export default function ExampleCollapsible() {
  return (
    <BaseCollapsible.Root className={styles.Collapsible}>
      <BaseCollapsible.Trigger className={styles.Trigger}>
        <ChevronIcon className={styles.Icon} />
        Recovery keys
      </BaseCollapsible.Trigger>
      <BaseCollapsible.Panel className={styles.Panel}>
        <div className={styles.Content}>
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </BaseCollapsible.Panel>
    </BaseCollapsible.Root>
  );
}

export function ExampleCollapsible2() {
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
