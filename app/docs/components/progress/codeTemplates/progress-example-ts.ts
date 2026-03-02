import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Progress_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Progress"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
"use client";
import * as React from "react";
import { Progress, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator } from "@/liftkit/ui";

export function ExampleProgress() {
  const [value, setValue] = React.useState(20);

  // Simulate changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    ${openTag}
      <ProgressLabel>Export data</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}

  `;
}
