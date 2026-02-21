"use client";

import { cn } from "@/lib/cn";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import "./lk-collapsible.css";

function Collapsible({ className, ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" className={cn(className)} {...props} />;
}

function CollapsibleTrigger({ className, ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" className={cn(className)} {...props} />;
}

function CollapsiblePanel({ className, ...props }: CollapsiblePrimitive.Panel.Props) {
  return <CollapsiblePrimitive.Panel data-slot="collapsible-panel" className={cn(className)} {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
