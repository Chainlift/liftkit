// app/collapsible/page.tsx
"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/registry/nextjs/components/collapsible";
import Button from "@/registry/nextjs/components/button";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import Heading from "@/registry/nextjs/components/heading";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} style={{ width: "350px" }}>
      <Row justifyContent="space-between" alignItems="center" style={{ padding: "0 1rem" }}>
        <Heading fontClass="body" style={{ fontWeight: 600 }}>
          @peduarte starred 3 repositories
        </Heading>
        <CollapsibleTrigger
          style={{ background: "none", border: "none", padding: "0.5rem", borderRadius: "0.25rem", cursor: "pointer" }}
        >
          <ChevronsUpDown />
          <span
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: "0",
            }}
          >
            Toggle
          </span>
        </CollapsibleTrigger>
      </Row>

      <div
        style={{
          borderRadius: "0.375rem",
          border: "1px solid var(--border)",
          padding: "1rem",
          fontFamily: "monospace",
          fontSize: "0.875rem",
        }}
      >
        @radix-ui/primitives
      </div>

      <CollapsibleContent>
        <Column gap="xs">
          <div
            style={{
              borderRadius: "0.375rem",
              border: "1px solid var(--border)",
              padding: "1rem",
              fontFamily: "monospace",
              fontSize: "0.875rem",
            }}
          >
            @radix-ui/colors
          </div>
          <div
            style={{
              borderRadius: "0.375rem",
              border: "1px solid var(--border)",
              padding: "1rem",
              fontFamily: "monospace",
              fontSize: "0.875rem",
            }}
          >
            @stitches/react
          </div>
        </Column>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Collapsible Examples</h1>
      <CollapsibleDemo />
    </main>
  );
}
