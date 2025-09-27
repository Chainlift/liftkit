// toggle.tsx
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./toggle.css"

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentProps<typeof TogglePrimitive.Root>
>(function Toggle({ className, ...props }, ref) {
  return (
    <TogglePrimitive.Root
      ref={ref}
      data-slot="toggle-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { Toggle }
