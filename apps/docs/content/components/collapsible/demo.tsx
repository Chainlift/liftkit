import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from "@chainlift/liftkit";
import { GoldenBox } from "@chainlift/liftkit";
import { Icon } from "@chainlift/liftkit";
export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger nativeButton={false} render={<GoldenBox scaleFactor="body" opticalCorrection="all" />}>
        <CollapsibleIcon />
        <div className="body">Recovery Keys</div>
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <GoldenBox opticalCorrection="y" scaleFactor="body">
          <div className="body">
            <div>alien-bean-pasta</div>
            <div>wild-irish-burrito</div>
            <div>horse-battery-staple</div>
          </div>
        </GoldenBox>
      </CollapsiblePanel>
    </Collapsible>
  );
}

export function CollapsibleIcon() {
  return <Icon name="chevron-right" data-slot="collapsible-trigger-icon" />;
}
