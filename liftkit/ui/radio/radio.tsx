"use client";

import { cn } from "@/lib/cn";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import "./radio.css";

function RadioGroup({ className, ...props }: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>) {
  return <RadioGroupPrimitive data-slot="radio-group" className={cn("", "RadioGroup", className)} {...props} />;
}

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
  return <RadioPrimitive.Root data-slot="radio" className={cn("", "Radio", className)} {...props} />;
}

function RadioIndicator({ className, ...props }: RadioPrimitive.Indicator.Props) {
  return <RadioPrimitive.Indicator data-slot="radio-indicator" className={cn("", "Indicator", className)} {...props} />;
}

export { RadioGroup, Radio, RadioIndicator };
