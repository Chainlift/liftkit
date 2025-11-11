// context-menu.tsx
"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@/registry/nextjs/lib/utilities";
import "./context-menu.css";
import { StateLayer } from "@/registry/nextjs/components/state-layer";
import { Icon } from "@/registry/nextjs/components/icon";
import { Card } from "@/registry/nextjs/components/card";
import { LkCardProps } from "@/registry/nextjs/components/card";

const ContextMenu = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Root>,
  React.ComponentProps<typeof ContextMenuPrimitive.Root>
>(function ContextMenu({ ...props }, ref) {
  return <ContextMenuPrimitive.Root data-slot="context-menu-root" {...props} />;
});

const ContextMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Trigger>,
  React.ComponentProps<typeof ContextMenuPrimitive.Trigger>
>(function ContextMenuTrigger({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Trigger
      ref={ref}
      data-slot="context-menu-trigger"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ContextMenuPortal = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Portal>,
  React.ComponentProps<typeof ContextMenuPrimitive.Portal>
>(function ContextMenuPortal({ ...props }, ref) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />;
});

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentProps<typeof ContextMenuPrimitive.Content> & {
    cardProps?: LkCardProps;
  }
>(function ContextMenuContent({ className, cardProps, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Content
      ref={ref}
      data-slot="context-menu-content"
      className={cn("placeholder", className)}
      {...props}
    >
      <Card
        scaleFactor="caption"

        {...cardProps}
      >
        {props.children}
      </Card>
    </ContextMenuPrimitive.Content>
  );
});

const ContextMenuGroup = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Group>,
  React.ComponentProps<typeof ContextMenuPrimitive.Group>
>(function ContextMenuGroup({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Group
      ref={ref}
      data-slot="context-menu-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentProps<typeof ContextMenuPrimitive.Label>
>(function ContextMenuLabel({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      data-slot="context-menu-label"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentProps<typeof ContextMenuPrimitive.Item>
>(function ContextMenuItem({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      data-slot="context-menu-item"
      className={cn("placeholder", className)}
      {...props}
    >
      {props.children}
      <StateLayer />
    </ContextMenuPrimitive.Item>
  );
});

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>
>(function ContextMenuCheckboxItem({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      data-slot="context-menu-checkbox-item"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="context-menu-indicator-wrap">
        <span>
          <ContextMenuPrimitive.ItemIndicator>
            <Icon name="check"></Icon>
          </ContextMenuPrimitive.ItemIndicator>
        </span>
      </div>

      {props.children}
      <StateLayer />
    </ContextMenuPrimitive.CheckboxItem>
  );
});

const ContextMenuRadioGroup = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioGroup>,
  React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>
>(function ContextMenuRadioGroup({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.RadioGroup
      ref={ref}
      data-slot="context-menu-radio-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>
>(function ContextMenuRadioItem({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      data-slot="context-menu-radio-item"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="context-menu-indicator-wrap">
        <span>
          <ContextMenuPrimitive.ItemIndicator>
            <Icon name="circle-dot"></Icon>
          </ContextMenuPrimitive.ItemIndicator>
        </span>
      </div>
      {props.children}
      <StateLayer />
    </ContextMenuPrimitive.RadioItem>
  );
});

const ContextMenuItemIndicator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.ItemIndicator>,
  React.ComponentProps<typeof ContextMenuPrimitive.ItemIndicator>
>(function ContextMenuItemIndicator({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.ItemIndicator
      ref={ref}
      data-slot="context-menu-item-indicator"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="context-menu-indicator-wrap">{props.children}</div>
    </ContextMenuPrimitive.ItemIndicator>
  );
});

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentProps<typeof ContextMenuPrimitive.Separator>
>(function ContextMenuSeparator({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      data-slot="context-menu-separator"
      className={cn("placeholder", className)}
      {...props}
    >
      <div></div>
    </ContextMenuPrimitive.Separator>
  );
});

const ContextMenuSub = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Sub>,
  React.ComponentProps<typeof ContextMenuPrimitive.Sub>
>(function ContextMenuSub({ ...props }, ref) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
});

const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>
>(function ContextMenuSubTrigger({ className, ...props }, ref) {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      data-slot="context-menu-sub-trigger"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="sub-trigger-label"> {props.children}</div>
      <Icon name="chevron-right"></Icon>
      <StateLayer />
    </ContextMenuPrimitive.SubTrigger>
  );
});

const ContextMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentProps<typeof ContextMenuPrimitive.SubContent> & {
    cardProps?: LkCardProps;
  }
>(function ContextMenuSubContent({ className, cardProps, ...props }, ref) {
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      data-slot="context-menu-sub-content"
      className={cn("placeholder", className)}
      {...props}
    >
      <Card
        scaleFactor="caption"

        {...cardProps}
      >
        {props.children}
      </Card>
    </ContextMenuPrimitive.SubContent>
  );
});

const ContextMenuShortcut = React.forwardRef<React.ComponentRef<"span">, React.ComponentProps<"span">>(
  function ContextMenuShortcut({ className, ...props }, ref) {
    return <span ref={ref} data-slot="context-menu-shortcut" className={cn(className)} {...props} />;
  }
);

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuItemIndicator,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
};
