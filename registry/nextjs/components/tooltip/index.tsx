// tooltip.tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./tooltip.css"

const TooltipProvider = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Provider>,
  React.ComponentProps<typeof TooltipPrimitive.Provider>
>(function TooltipProvider({...props }, ref) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      {...props}
    />
  )
})

const Tooltip = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Root>,
  React.ComponentProps<typeof TooltipPrimitive.Root>
>(function Tooltip({...props }, ref) {
  return (
    <TooltipPrimitive.Root
      data-slot="tooltip-root"
      {...props}
    />
  )
})

const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentProps<typeof TooltipPrimitive.Trigger>
>(function TooltipTrigger({ className, ...props }, ref) {
  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      data-slot="tooltip-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

// No className or ref on Portal
function TooltipPortal(props: React.ComponentProps<typeof TooltipPrimitive.Portal>) {
  return (
    <TooltipPrimitive.Portal
      data-slot="tooltip-portal"
      {...props}
    />
  )
}

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentProps<typeof TooltipPrimitive.Content>
>(function TooltipContent({ className, ...props }, ref) {
  return (
    <TooltipPrimitive.Content
      ref={ref}
      data-slot="tooltip-content"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const TooltipArrow = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentProps<typeof TooltipPrimitive.Arrow>
>(function TooltipArrow({ className, ...props }, ref) {
  return (
    <TooltipPrimitive.Arrow
      ref={ref}
      data-slot="tooltip-arrow"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
}
