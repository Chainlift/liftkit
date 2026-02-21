"use client";

import { cn } from "@/lib/cn";
import { Input as InputPrimitive } from "@base-ui/react/input";
import "./lk-input.css";

function Input({ className, ...props }: InputPrimitive.Props) {
  return <InputPrimitive data-slot="input" className={cn(className)} {...props} />;
}

export { Input };
