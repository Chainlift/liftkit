// toolbar.tsx
"use client";

import * as React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./toolbar.css";
import Button from "@/registry/nextjs/components/button";
import StateLayer from "@/registry/nextjs/components/state-layer";

const Toolbar = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Root>,
  React.ComponentProps<typeof ToolbarPrimitive.Root>
>(function Toolbar({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.Root ref={ref} data-slot="toolbar-root" className={cn("placeholder", className)} {...props} />
  );
});

const ToolbarButton = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Button>,
  React.ComponentProps<typeof ToolbarPrimitive.Button>
>(function ToolbarButton({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.Button ref={ref} data-slot="toolbar-button" className={cn("placeholder", className)} {...props}>
      <Button>{props.children}</Button>
    </ToolbarPrimitive.Button>
  );
});

const ToolbarLink = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Link>,
  React.ComponentProps<typeof ToolbarPrimitive.Link>
>(function ToolbarLink({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.Link ref={ref} data-slot="toolbar-link" className={cn("placeholder", className)} {...props}>
      {props.children}
      <StateLayer />
    </ToolbarPrimitive.Link>
  );
});

const ToolbarToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.ToggleGroup>,
  React.ComponentProps<typeof ToolbarPrimitive.ToggleGroup>
>(function ToolbarToggleGroup({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.ToggleGroup
      ref={ref}
      data-slot="toolbar-toggle-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ToolbarToggleItem = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentProps<typeof ToolbarPrimitive.ToggleItem>
>(function ToolbarToggleItem({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.ToggleItem
      ref={ref}
      data-slot="toolbar-toggle-item"
      className={cn("placeholder", className)}
      {...props}
    >
      {props.children}
      <StateLayer />
    </ToolbarPrimitive.ToggleItem>
  );
});

const ToolbarSeparator = React.forwardRef<
  React.ComponentRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentProps<typeof ToolbarPrimitive.Separator>
>(function ToolbarSeparator({ className, ...props }, ref) {
  return (
    <ToolbarPrimitive.Separator
      ref={ref}
      data-slot="toolbar-separator"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

export { Toolbar, ToolbarButton, ToolbarLink, ToolbarToggleGroup, ToolbarToggleItem, ToolbarSeparator };
