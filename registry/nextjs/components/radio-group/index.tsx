// radio-group.tsx
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./radio-group.css"

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentProps<typeof RadioGroupPrimitive.Root>
>(function RadioGroup({ className, ...props }, ref) {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      data-slot="radio-group-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentProps<typeof RadioGroupPrimitive.Item>
>(function RadioGroupItem({ className, ...props }, ref) {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-group-item"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const RadioGroupIndicator = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentProps<typeof RadioGroupPrimitive.Indicator>
>(function RadioGroupIndicator({ className, ...props }, ref) {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      data-slot="radio-group-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { RadioGroup, RadioGroupItem, RadioGroupIndicator }
