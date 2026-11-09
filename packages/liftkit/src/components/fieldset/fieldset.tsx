"use client";

import { cn } from "../../lib/cn";
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import "../../css/components/lk-fieldset.css";

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return <FieldsetPrimitive.Root data-slot="fieldset" className={cn(className)} {...props} />;
}

function FieldsetLegend({ className, ...props }: FieldsetPrimitive.Legend.Props) {
  return <FieldsetPrimitive.Legend data-slot="fieldset-legend" className={cn(className)} {...props} />;
}

export { Fieldset, FieldsetLegend };
