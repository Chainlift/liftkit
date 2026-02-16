"use client";

import { cn } from "@/lib/cn";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import styles from "./index.module.css";

function CheckboxGroup({ className, ...props }: React.ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive>) {
  return <CheckboxGroupPrimitive data-slot="checkbox-group" className={cn("", styles.CheckboxGroup, className)} {...props} />;
}

export { CheckboxGroup };
