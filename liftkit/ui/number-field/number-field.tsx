"use client";

import { cn } from "@/lib/cn";
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import "./lk-number-field.css";

function NumberField({ className, ...props }: NumberFieldPrimitive.Root.Props) {
  return <NumberFieldPrimitive.Root data-slot="number-field" className={cn("", "Field", className)} {...props} />;
}

function NumberFieldScrubArea({ className, ...props }: NumberFieldPrimitive.ScrubArea.Props) {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn("", "ScrubArea", className)}
      {...props}
    />
  );
}

function NumberFieldScrubAreaCursor({ className, ...props }: NumberFieldPrimitive.ScrubAreaCursor.Props) {
  return (
    <NumberFieldPrimitive.ScrubAreaCursor
      data-slot="number-field-scrub-area-cursor"
      className={cn("", "ScrubAreaCursor", className)}
      {...props}
    />
  );
}

function NumberFieldGroup({ className, ...props }: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group data-slot="number-field-group" className={cn("", "Group", className)} {...props} />
  );
}

function NumberFieldInput({ className, ...props }: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input data-slot="number-field-input" className={cn("", "Input", className)} {...props} />
  );
}

function NumberFieldIncrement({ className, ...props }: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      data-slot="number-field-increment"
      className={cn("", "Increment", className)}
      {...props}
    />
  );
}

function NumberFieldDecrement({ className, ...props }: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      data-slot="number-field-decrement"
      className={cn("", "Decrement", className)}
      {...props}
    />
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
};
