import * as React from "react";

export function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      style={{
        overflowX: "auto",
        padding: 16,
        borderRadius: 12,
        border: "1px solid var(--lk-outline)",
      }}
    />
  );
}
