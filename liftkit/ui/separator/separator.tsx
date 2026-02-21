"use client";

import { cn } from "@/lib/cn";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import "./lk-separator.css";

function Separator({ className, ...props }: SeparatorPrimitive.Props) {
  return <SeparatorPrimitive data-slot="separator" className={cn(className)} {...props} />;
}

export { Separator };
