"use client";

import { cn } from "../../lib/cn";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import "../../css/components/lk-checkbox-group.css";

function CheckboxGroup({ className, ...props }: React.ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive>) {
  return <CheckboxGroupPrimitive data-slot="checkbox-group" className={cn(className)} {...props} />;
}

export { CheckboxGroup };
