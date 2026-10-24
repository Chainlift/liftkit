"use client";

import { cn } from "../../lib/cn";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import "../../css/components/lk-toggle-group.css";

function ToggleGroup({ className, ...props }: ToggleGroupPrimitive.Props) {
  return <ToggleGroupPrimitive data-slot="toggle-group" className={cn(className)} {...props} />;
}

export { ToggleGroup };
