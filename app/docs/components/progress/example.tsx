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
      <code>{`"use client";
import * as React from "react";
import { Progress, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator } from "./progress";

export default function ProgressDemo() {
  const [value, setValue] = React.useState(20);

  // Simulate changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress value={value}>
      <ProgressLabel>Export data</ProgressLabel>
      <ProgressValue />
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}
`}</code>
    </pre>
  );
}
