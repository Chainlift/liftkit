"use client";

import { cn } from "@/lib/cn";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import "./lk-toggle.css";

function Toggle({ className, ...props }: TogglePrimitive.Props) {
  return <TogglePrimitive data-slot="toggle" className={cn("", "Button", className)} {...props} />;
}

export { Toggle };
