"use client";

import { cn } from "@/lib/cn";
import { Field as FieldPrimitive } from "@base-ui/react/field";
import "./lk-field.css";

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
  return <FieldPrimitive.Root data-slot="field" className={cn(className)} {...props} />;
}

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
  return <FieldPrimitive.Label data-slot="field-label" className={cn(className)} {...props} />;
}

function FieldControl({ className, ...props }: FieldPrimitive.Control.Props) {
  return <FieldPrimitive.Control data-slot="field-control" className={cn(className)} {...props} />;
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return <FieldPrimitive.Error data-slot="field-error" className={cn(className)} {...props} />;
}

function FieldDescription({ className, ...props }: FieldPrimitive.Description.Props) {
  return <FieldPrimitive.Description data-slot="field-description" className={cn(className)} {...props} />;
}

export { Field, FieldLabel, FieldControl, FieldError, FieldDescription };
