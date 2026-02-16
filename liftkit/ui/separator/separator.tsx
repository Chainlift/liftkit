"use client";

import { cn } from "@/lib/cn";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import styles from "./index.module.css";

function Separator({ className, ...props }: SeparatorPrimitive.Props) {
  return <SeparatorPrimitive data-slot="separator" className={cn("", styles.Separator, className)} {...props} />;
}

export { Separator };
