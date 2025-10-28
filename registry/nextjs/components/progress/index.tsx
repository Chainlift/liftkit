"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./progress.css";

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentProps<typeof ProgressPrimitive.Root> & {
    value?: number;
  }
>(function Progress({ className, value, ...props }, ref) {
  return (
    <ProgressPrimitive.Root ref={ref} data-slot="progress" className={cn("", className)} {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="progress-indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

export { Progress };
