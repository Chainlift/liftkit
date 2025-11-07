// popover.tsx
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./popover.css";
import Card from "@/registry/nextjs/components/card";
import { LkCardProps } from "@/registry/nextjs/components/card";

const Popover = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Root>,
  React.ComponentProps<typeof PopoverPrimitive.Root>
>(function Popover({ ...props }, ref) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
});

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentProps<typeof PopoverPrimitive.Trigger>
>(function PopoverTrigger({ className, ...props }, ref) {
  return (
    <PopoverPrimitive.Trigger
      ref={ref}
      data-slot="popover-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

// No className or ref on Portal
function PopoverPortal(props: React.ComponentProps<typeof PopoverPrimitive.Portal>) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
}

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentProps<typeof PopoverPrimitive.Content> & {
    cardProps?: LkCardProps;
  }
>(function PopoverContent({ className, cardProps, align = "center", sideOffset = 4, ...props }, ref) {
  return (
    <PopoverPortal>
      <PopoverPrimitive.Content
        ref={ref}
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn("placeholder", className)}
        {...props}
      >
        <Card {...cardProps}>{props.children}</Card>
      </PopoverPrimitive.Content>
    </PopoverPortal>
  );
});

const PopoverArrow = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentProps<typeof PopoverPrimitive.Arrow>
>(function PopoverArrow({ className, ...props }, ref) {
  return (
    <PopoverPrimitive.Arrow ref={ref} data-slot="popover-arrow" className={cn("placeholder", className)} {...props} />
  );
});

const PopoverAnchor = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Anchor>,
  React.ComponentProps<typeof PopoverPrimitive.Anchor>
>(function PopoverAnchor({ className, ...props }, ref) {
  return (
    <PopoverPrimitive.Anchor ref={ref} data-slot="popover-anchor" className={cn("placeholder", className)} {...props} />
  );
});

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  React.ComponentProps<typeof PopoverPrimitive.Close>
>(function PopoverClose({ className, ...props }, ref) {
  return (
    <PopoverPrimitive.Close ref={ref} data-slot="popover-close" className={cn("placeholder", className)} {...props} />
  );
});

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
