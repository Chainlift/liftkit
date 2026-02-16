"use client";

import { cn } from "@/lib/cn";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import styles from "./index.module.css";

function Toggle({ className, ...props }: TogglePrimitive.Props) {
  return <TogglePrimitive data-slot="toggle" className={cn("", styles.Button, className)} {...props} />;
}

export { Toggle };
