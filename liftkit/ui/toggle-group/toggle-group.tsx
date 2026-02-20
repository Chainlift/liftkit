"use client";

import { cn } from "@/lib/cn";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import "./lk-toggle-group.css";

function ToggleGroup({ className, ...props }: ToggleGroupPrimitive.Props) {
  return <ToggleGroupPrimitive data-slot="toggle-group" className={cn("", "Panel", className)} {...props} />;
}

export { ToggleGroup };
