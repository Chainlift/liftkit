// checkbox.tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./checkbox.css"

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentProps<typeof CheckboxPrimitive.Root>
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const CheckboxIndicator = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Indicator>,
  React.ComponentProps<typeof CheckboxPrimitive.Indicator>
>(function CheckboxIndicator({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Indicator
      ref={ref}
      data-slot="checkbox-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { Checkbox, CheckboxIndicator }
