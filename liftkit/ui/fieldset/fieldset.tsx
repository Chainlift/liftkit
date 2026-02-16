"use client";

import { cn } from "@/lib/cn";
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import styles from "./index.module.css";

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return <FieldsetPrimitive.Root data-slot="fieldset" className={cn("", styles.Fieldset, className)} {...props} />;
}

function FieldsetLegend({ className, ...props }: FieldsetPrimitive.Legend.Props) {
  return <FieldsetPrimitive.Legend data-slot="fieldset-legend" className={cn("", styles.Legend, className)} {...props} />;
}

export { Fieldset, FieldsetLegend };
