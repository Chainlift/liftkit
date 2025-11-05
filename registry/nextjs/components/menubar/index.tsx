// menubar.tsx
"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "@/registry/nextjs/lib/utilities";
import Card from "@/registry/nextjs/components/card";
import { LkCardProps } from "@/registry/nextjs/components/card";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";
import "./menubar.css";

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentProps<typeof MenubarPrimitive.Root>
>(function Menubar({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Root ref={ref} data-slot="menubar-root" className={cn("placeholder", className)} {...props} />
  );
});

const MenubarMenu = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Menu>,
  React.ComponentProps<typeof MenubarPrimitive.Menu>
>(function MenubarMenu({ ...props }, ref) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
});

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentProps<typeof MenubarPrimitive.Trigger> & {
    stateLayerProps?: LkStateLayerProps;
  }
>(function MenubarTrigger({ className, stateLayerProps = {bgColor: "primary"}, ...props }, ref) {
  return (
    <MenubarPrimitive.Trigger ref={ref} data-slot="menubar-trigger" className={cn("placeholder", className)} {...props}>
      {props.children} <StateLayer {...stateLayerProps} />
    </MenubarPrimitive.Trigger>
  );
});

// No className or ref on Portal
function MenubarPortal(props: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentProps<typeof MenubarPrimitive.Content> & {
    cardProps?: LkCardProps;
  }
>(function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, cardProps, ...props }, ref) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        ref={ref}
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn("placeholder", className)}
        {...props}
      >
        <Card scaleFactor="body" material="glass" materialProps={{thickness: "thin"}} {...cardProps}>{props.children}</Card>
      </MenubarPrimitive.Content>
    </MenubarPortal>
  );
});

const MenubarArrow = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Arrow>,
  React.ComponentProps<typeof MenubarPrimitive.Arrow>
>(function MenubarArrow({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Arrow ref={ref} data-slot="menubar-arrow" className={cn("placeholder", className)} {...props} />
  );
});

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
    stateLayerProps?: LkStateLayerProps;
  }
>(function MenubarItem({ className, inset, variant = "default", stateLayerProps={bgColor: "primary"}, ...props }, ref) {
  return (
    <MenubarPrimitive.Item
      ref={ref}
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn("placeholder", className)}
      {...props}
    >
      {props.children}
      <StateLayer {...stateLayerProps} />
    </MenubarPrimitive.Item>
  );
});

const MenubarGroup = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Group>,
  React.ComponentProps<typeof MenubarPrimitive.Group>
>(function MenubarGroup({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Group ref={ref} data-slot="menubar-group" className={cn("placeholder", className)} {...props} />
  );
});

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(function MenubarLabel({ className, inset, ...props }, ref) {
  return (
    <MenubarPrimitive.Label
      ref={ref}
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> & {
    stateLayerProps?: LkStateLayerProps;
  }
>(function MenubarCheckboxItem({ className, stateLayerProps={bgColor: "primary"}, ...props }, ref) {
  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      data-slot="menubar-checkbox-item"
      className={cn("placeholder", className)}
      {...props}
    >
      {" "}
      <div data-slot="menubar-item-indicator-wrap">
        <span>
          <MenubarPrimitive.ItemIndicator>
            <Icon name="check-square"></Icon>
          </MenubarPrimitive.ItemIndicator>
        </span>
      </div>
      {props.children}
      <StateLayer {...stateLayerProps} />
    </MenubarPrimitive.CheckboxItem>
  );
});

const MenubarRadioGroup = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioGroup>,
  React.ComponentProps<typeof MenubarPrimitive.RadioGroup>
>(function MenubarRadioGroup({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.RadioGroup
      ref={ref}
      data-slot="menubar-radio-group"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentProps<typeof MenubarPrimitive.RadioItem> & {
    stateLayerProps?: LkStateLayerProps;
  }
>(function MenubarRadioItem({ className, stateLayerProps={bgColor: "primary"}, ...props }, ref) {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      data-slot="menubar-radio-item"
      className={cn("placeholder", className)}
      {...props}
    >
      <div data-slot="menubar-item-indicator-wrap">
        <span>
          <MenubarPrimitive.ItemIndicator>
            <Icon name="circle-dot"></Icon>
          </MenubarPrimitive.ItemIndicator>
        </span>
      </div>
      {props.children}
      <StateLayer {...stateLayerProps} />
    </MenubarPrimitive.RadioItem>
  );
});

const MenubarItemIndicator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.ItemIndicator>,
  React.ComponentProps<typeof MenubarPrimitive.ItemIndicator>
>(function MenubarItemIndicator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.ItemIndicator
      ref={ref}
      data-slot="menubar-item-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentProps<typeof MenubarPrimitive.Separator>
>(function MenubarSeparator({ className, ...props }, ref) {
  return (
    <MenubarPrimitive.Separator
      ref={ref}
      data-slot="menubar-separator"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const MenubarSub = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Sub>,
  React.ComponentProps<typeof MenubarPrimitive.Sub>
>(function MenubarSub({ ...props }, ref) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
});

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
    stateLayerProps?: LkStateLayerProps;
  }
>(function MenubarSubTrigger({ className, inset, stateLayerProps={bgColor: "primary"}, children, ...props }, ref) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn("placeholder", className)}
      {...props}
    >
      {children}
      <Icon name="chevron-right" />
      <StateLayer {...stateLayerProps} />
    </MenubarPrimitive.SubTrigger>
  );
});

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentProps<typeof MenubarPrimitive.SubContent> & {
    cardProps?: LkCardProps;
  }
>(function MenubarSubContent({ className, cardProps, ...props }, ref) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      data-slot="menubar-sub-content"
      className={cn("placeholder", className)}
      {...props}
    >
      <Card scaleFactor="body"  material="glass" materialProps={{thickness: "thin"}} {...cardProps}>{props.children}</Card>
    </MenubarPrimitive.SubContent>
  );
});

const MenubarShortcut = React.forwardRef<React.ElementRef<"span">, React.ComponentProps<"span">>(
  function MenubarShortcut({ className, ...props }, ref) {
    return <span ref={ref} data-slot="menubar-shortcut" className={cn("placeholder", className)} {...props} />;
  }
);

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarContent,
  MenubarArrow,
  MenubarItem,
  MenubarGroup,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarItemIndicator,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
};
