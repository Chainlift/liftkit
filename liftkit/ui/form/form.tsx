"use client";

import { cn } from "@/lib/cn";
import { Form as FormPrimitive } from "@base-ui/react/form";
import "./form.css";

function Form({ className, ...props }: FormPrimitive.Props) {
  return <FormPrimitive data-slot="form" className={cn("", "Form", className)} {...props} />;
}

export { Form };
