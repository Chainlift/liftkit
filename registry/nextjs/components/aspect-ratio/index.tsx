// aspect-ratio.tsx
"use client"

import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
import { cn } from "@/registry/nextjs/lib/utilities"
import "./aspect-ratio.css"

const AspectRatio = React.forwardRef<
  React.ComponentRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentProps<typeof AspectRatioPrimitive.Root>
>(function AspectRatio({ className, ...props }, ref) {
  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      data-slot="aspect-ratio-root"
      className={cn("placeholder", className)}
      {...props}
    />
  )
})

export { AspectRatio }
