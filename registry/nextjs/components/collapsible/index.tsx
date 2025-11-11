// collapsible.tsx
"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./collapsible.css";
import {StateLayer } from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";

const Collapsible = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentProps<typeof CollapsiblePrimitive.Root>
>(function Collapsible({ className, ...props }, ref) {
  return <CollapsiblePrimitive.Root ref={ref} data-slot="collapsible" className={cn(className)} {...props} />;
});

const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentProps<typeof CollapsiblePrimitive.Trigger>
>(function CollapsibleTrigger({ className, ...props }, ref) {
  return (
    <CollapsiblePrimitive.Trigger ref={ref} data-slot="collapsible-trigger" className={cn(className)} {...props}>
    {props.children}
      <StateLayer />
    </CollapsiblePrimitive.Trigger>
  );
});

const CollapsibleContent = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentProps<typeof CollapsiblePrimitive.Content>
>(function CollapsibleContent({ className, ...props }, ref) {
  return (
    <CollapsiblePrimitive.Content ref={ref} data-slot="collapsible-content" className={cn(className)} {...props} />
  );
});

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
