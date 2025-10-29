"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";


import { cn } from "@/registry/nextjs/lib/utilities";

import "./checkbox.css";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "display-flex",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className=""
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
 
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
