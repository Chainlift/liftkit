"use client";

import { cn } from "@/lib/cn";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import styles from "./index.module.css";

function ToggleGroup({ className, ...props }: ToggleGroupPrimitive.Props) {
  return <ToggleGroupPrimitive data-slot="toggle-group" className={cn("", styles.Panel, className)} {...props} />;
}

export { ToggleGroup };
