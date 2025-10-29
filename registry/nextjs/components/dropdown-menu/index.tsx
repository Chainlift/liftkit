// dropdown-menu.tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/registry/nextjs/lib/utilities";
import Card from "@/registry/nextjs/components/card";
import { LkCardProps } from "@/registry/nextjs/components/card";
import StateLayer from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";
import "./dropdown-menu.css";

const DropdownMenu = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Root>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Root>
>(function DropdownMenu({ ...props }, ref) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu-root" {...props} />;
});

const DropdownMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
>(function DropdownMenuTrigger({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      data-slot="dropdown-menu-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuPortal = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Portal>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
>(function DropdownMenuPortal({ ...props }, ref) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
});

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Content> & {
    cardProps?: LkCardProps;
  }
>(function DropdownMenuContent({ className, cardProps, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      data-slot="dropdown-menu-content"
      className={cn("placeholder", className)}
      {...props}
    >
      <Card scaleFactor="caption" opticalCorrection="top"  {...cardProps}>
        {props.children}
      </Card>
    </DropdownMenuPrimitive.Content>
  );
});

const DropdownMenuArrow = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Arrow>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Arrow>
>(function DropdownMenuArrow({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Arrow
      ref={ref}
      data-slot="dropdown-menu-arrow"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Item>
>(function DropdownMenuItem({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      data-slot="dropdown-menu-item"
      className={cn("placeholder", className)}
      {...props}
    >
      {props.children}
      <StateLayer />
    </DropdownMenuPrimitive.Item>
  );
});

const DropdownMenuGroup = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Group>
>(function DropdownMenuGroup({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Group
      ref={ref}
      data-slot="dropdown-menu-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Label>
>(function DropdownMenuLabel({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      data-slot="dropdown-menu-label"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>
>(function DropdownMenuCheckboxItem({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      data-slot="dropdown-menu-checkbox-item"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="dropdown-menu-indicator-wrap">
        <span>
          <DropdownMenuPrimitive.ItemIndicator>
            <Icon name="check"></Icon>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </div>
      {props.children}
      <StateLayer />
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

const DropdownMenuRadioGroup = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioGroup>,
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>
>(function DropdownMenuRadioGroup({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      ref={ref}
      data-slot="dropdown-menu-radio-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>
>(function DropdownMenuRadioItem({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      data-slot="dropdown-menu-radio-item"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="dropdown-menu-indicator-wrap">
        <span>
          <DropdownMenuPrimitive.ItemIndicator>
            <Icon name="circle"></Icon>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </div>
      {props.children}
      <StateLayer />
    </DropdownMenuPrimitive.RadioItem>
  );
});

const DropdownMenuItemIndicator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.ItemIndicator>,
  React.ComponentProps<typeof DropdownMenuPrimitive.ItemIndicator>
>(function DropdownMenuItemIndicator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.ItemIndicator
      ref={ref}
      data-slot="dropdown-menu-item-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
>(function DropdownMenuSeparator({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      data-slot="dropdown-menu-separator"
      className={cn("placeholder", className)}
      {...props}
    >
      <div></div>
    </DropdownMenuPrimitive.Separator>
  );
});

const DropdownMenuSub = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Sub>,
  React.ComponentProps<typeof DropdownMenuPrimitive.Sub>
>(function DropdownMenuSub({ ...props }, ref) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
});

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>
>(function DropdownMenuSubTrigger({ className, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="dropdown-menu-sub-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentProps<typeof DropdownMenuPrimitive.SubContent> & {
    cardProps?: LkCardProps;
  }
>(function DropdownMenuSubContent({ className, cardProps, ...props }, ref) {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      data-slot="dropdown-menu-sub-content"
      className={cn("placeholder", className)}
      {...props}
    >
      <Card scaleFactor="caption" opticalCorrection="top" className="shadow-sm" {...cardProps}>
        {props.children}
      </Card>
    </DropdownMenuPrimitive.SubContent>
  );
});

const DropdownMenuShortcut = React.forwardRef<React.ComponentRef<"span">, React.ComponentProps<"span">>(
  function DropdownMenuShortcut({ className, ...props }, ref) {
    return <span ref={ref} data-slot="dropdown-menu-shortcut" className={cn(className)} {...props} />;
  }
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuArrow,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
