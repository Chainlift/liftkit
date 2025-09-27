// separator.tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./separator.css"

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentProps<typeof SeparatorPrimitive.Root>
>(function Separator({ className, ...props }, ref) {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      data-slot="separator-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { Separator }
