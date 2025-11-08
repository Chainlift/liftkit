"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/registry/nextjs/lib/utilities";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import MaterialLayer from "@/registry/nextjs/components/material-layer";
import Icon from "@/registry/nextjs/components/icon";
import "./select.css";

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
  stateLayerProps?: LkStateLayerProps;
}) {
  return (
    <SelectPrimitive.Trigger data-slot="select-trigger" data-size={size} className={cn("", className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild data-slot="select-trigger-icon">
        <Icon name="chevron-down" />
      </SelectPrimitive.Icon>
      <StateLayer />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  scaleFactor = "body",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content> & {
  scaleFactor?: LkFontClass | "none";
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        data-scale-factor={scaleFactor}
        className={cn("select-content", className)}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn("select-viewport", position === "popper" && "select-viewport-popper")}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <SelectPrimitive.Label data-slot="select-label" className={cn("label", className)} {...props} />;
}

function SelectItem({
  className,
  children,
  scaleFactor = "subheading",
  opticalCorrection = "y",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> & {
  stateLayerProps?: LkStateLayerProps;
  scaleFactor?: LkFontClass | "none";
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-scale-factor={scaleFactor}
      className={cn("", className)}
      {...props}
    >
      <span className="select-item-indicator">
        <SelectPrimitive.ItemIndicator>
          <Icon name="check" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <StateLayer />
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <SelectPrimitive.Separator data-slot="select-separator" className={cn("", className)} {...props} />;
}

function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("select-scroll-button", className)}
      {...props}
    >
      <Icon name="chevron-up" className="select-chevron-up"/>
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("select-scroll-button", className)}
      {...props}
    >
      <svg
        className="select-chevron-down"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
