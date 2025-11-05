// navigation-menu.tsx
"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/registry/nextjs/lib/utilities";

import Card from "@/registry/nextjs/components/card";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkCardProps } from "@/registry/nextjs/components/card";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";
import GoldenBox from "@/registry/nextjs/components/golden-box";
import { LkGoldenBoxProps } from "@/registry/nextjs/components/golden-box";

import "./navigation-menu.css";

const NavigationMenu = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
  }
>(function NavigationMenu({ className, children, viewport = true, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn("placeholder", className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
});

const NavigationMenuSub = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Sub>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Sub>
>(function NavigationMenuSub({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Sub
      ref={ref}
      data-slot="navigation-menu-sub"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const NavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentProps<typeof NavigationMenuPrimitive.List>
>(function NavigationMenuList({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      data-slot="navigation-menu-list"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const NavigationMenuItem = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Item>
>(function NavigationMenuItem({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Item
      ref={ref}
      data-slot="navigation-menu-item"
      className={cn("placeholder", className)}
      {...props}
    >
      {props.children}
    </NavigationMenuPrimitive.Item>
  );
});

const NavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> & {
    stateLayerProps?: LkStateLayerProps;
  }
>(function NavigationMenuTrigger({ className, stateLayerProps, children, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      data-slot="navigation-menu-trigger"
      className={cn("placeholder", className)}
      {...props}
    >
      {children} <Icon name="chevron-down" aria-hidden="true" data-slot="chevron-icon" />
      <StateLayer bgColor="primary" {...stateLayerProps} />
    </NavigationMenuPrimitive.Trigger>
  );
});

const NavigationMenuContent = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Content> & {
    cardProps?: LkCardProps;
  }
>(function NavigationMenuContent({ className, cardProps, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Content ref={ref} data-slot="navigation-menu-content" {...props}>
      <Card scaleFactor="body" className={cn("placeholder", className)} {...cardProps}>
        {props.children}
      </Card>
    </NavigationMenuPrimitive.Content>
  );
});

const NavigationMenuLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Link> & {
    scaleFactor?: LkGoldenBoxProps["scaleFactor"];
    opticalCorrection?: LkGoldenBoxProps["opticalCorrection"];
  }
>(function NavigationMenuLink({ className, scaleFactor, opticalCorrection, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      data-slot="navigation-menu-link"
      className={cn("placeholder", className)}
      {...props}
    >
      <GoldenBox scaleFactor={scaleFactor} opticalCorrection={opticalCorrection}>
        {props.children}
      </GoldenBox>
    </NavigationMenuPrimitive.Link>
  );
});

const NavigationMenuIndicator = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>
>(function NavigationMenuIndicator({ className, ...props }, ref) {
  return (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      data-slot="navigation-menu-indicator"
      className={cn("placeholder", className)}
      {...props}
    />
  );
});

const NavigationMenuViewport = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>
>(function NavigationMenuViewport({ className, ...props }, ref) {
  return (
    <div data-slot="navigation-menu-viewport-wrapper" className="viewport-wrapper">
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        data-slot="navigation-menu-viewport"
        className={cn("placeholder", className)}
        {...props}
      />
    </div>
  );
});

// Trigger style function for consistency with shadcn pattern
const navigationMenuTriggerStyle = () => "navigation-menu-trigger-style";

export {
  NavigationMenu,
  NavigationMenuSub,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
