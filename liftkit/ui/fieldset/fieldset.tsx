"use client";

import { cn } from "@/lib/cn";
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import "./fieldset.css";

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return <FieldsetPrimitive.Root data-slot="fieldset" className={cn("", "Fieldset", className)} {...props} />;
}

function FieldsetLegend({ className, ...props }: FieldsetPrimitive.Legend.Props) {
  return <FieldsetPrimitive.Legend data-slot="fieldset-legend" className={cn("", "Legend", className)} {...props} />;
}

export { Fieldset, FieldsetLegend };
