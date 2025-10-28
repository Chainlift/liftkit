// hover-card.tsx
"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./hover-card.css";

const HoverCard = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Root>,
  React.ComponentProps<typeof HoverCardPrimitive.Root>
>(function HoverCard({ ...props }, ref) {
  return <HoverCardPrimitive.Root data-slot="hover-card-root" {...props} />;
});

const HoverCardTrigger = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentProps<typeof HoverCardPrimitive.Trigger>
>(function HoverCardTrigger({ className, ...props }, ref) {
  return (
    <HoverCardPrimitive.Trigger
      ref={ref}
      data-slot="hover-card-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

// No className or ref on Portal
function HoverCardPortal(props: React.ComponentProps<typeof HoverCardPrimitive.Portal>) {
  return <HoverCardPrimitive.Portal data-slot="hover-card-portal" {...props} />;
}

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  React.ComponentProps<typeof HoverCardPrimitive.Content>
>(function HoverCardContent({ className, align = "center", sideOffset = 4, ...props }, ref) {
  return (
    <HoverCardPortal>
      <HoverCardPrimitive.Content
        ref={ref}
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn("placeholder", className)}
        {...props}
      />
    </HoverCardPortal>
  );
});

const HoverCardArrow = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentProps<typeof HoverCardPrimitive.Arrow>
>(function HoverCardArrow({ className, ...props }, ref) {
  return (
    <HoverCardPrimitive.Arrow
      ref={ref}
      data-slot="hover-card-arrow"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

export { HoverCard, HoverCardTrigger, HoverCardPortal, HoverCardContent, HoverCardArrow };
