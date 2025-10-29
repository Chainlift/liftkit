// app/collapsible/page.tsx
"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/registry/nextjs/components/collapsible";
import Button from "@/registry/nextjs/components/button";
import Column from "@/registry/nextjs/components/column";
import Row from "@/registry/nextjs/components/row";
import Heading from "@/registry/nextjs/components/heading";
import Icon from "@/registry/nextjs/components/icon";
import Card from "@/registry/nextjs/components/card";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} style={{ width: "350px" }}>
      <Row justifyContent="space-between" alignItems="center" className="mb-xs">
        <Heading fontClass="body" style={{ fontWeight: 600 }}>
          @peduarte starred 3 repositories
        </Heading>

        <CollapsibleTrigger>
          <Icon name="chevrons-up-down" fontClass="title3"></Icon>
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </Row>

      <CollapsibleContent>
        <Column gap="xs">
          <Card scaleFactor="body" opticalCorrection="y" className="shadow-sm" isClickable>
            <p className="body mono">@radix-ui/primitives</p>
          </Card>
          <Card scaleFactor="body" opticalCorrection="y" className="shadow-sm" isClickable>
            <p className="body mono">@radix-ui/colors</p>
          </Card>
          <Card scaleFactor="body" opticalCorrection="y" className="shadow-sm" isClickable>
            <p className="body mono">@radix-ui/react</p>
          </Card>
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
