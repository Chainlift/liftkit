// progress.tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./progress.css"

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentProps<typeof ProgressPrimitive.Root>
>(function Progress({ className, ...props }, ref) {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

const ProgressIndicator = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentProps<typeof ProgressPrimitive.Indicator>
>(function ProgressIndicator({ className, ...props }, ref) {
  return (
    <ProgressPrimitive.Indicator
      ref={ref}
      data-slot="progress-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { Progress, ProgressIndicator }
