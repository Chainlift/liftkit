"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/registry/nextjs/lib/utilities";
import IconButton from "@/registry/nextjs/components/icon-button";
import "./toggle.css";
import StateLayer from "@/registry/nextjs/components/state-layer";

interface ToggleProps extends React.ComponentProps<typeof TogglePrimitive.Root> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

function Toggle({ className, variant = "default", size = "default", ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cn("", className)}
      {...props}
    >
      {props.children}
      <StateLayer />
    </TogglePrimitive.Root>
  );
}

export { Toggle };
