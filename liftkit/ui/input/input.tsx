"use client";

import { cn } from "@/lib/cn";
import { Input as InputPrimitive } from "@base-ui/react/input";
import styles from "./index.module.css";

function Input({ className, ...props }: InputPrimitive.Props) {
  return <InputPrimitive data-slot="input" className={cn("", styles.Input, className)} {...props} />;
}

export { Input };
