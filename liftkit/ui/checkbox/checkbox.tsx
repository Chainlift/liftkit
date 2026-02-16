"use client";

import { cn } from "@/lib/cn";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import styles from "./index.module.css";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return <CheckboxPrimitive.Root data-slot="checkbox" className={cn("", styles.Checkbox, className)} {...props} />;
}

function CheckboxIndicator({ className, ...props }: CheckboxPrimitive.Indicator.Props) {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn("", styles.Indicator, className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxIndicator };
