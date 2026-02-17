"use client";

import React from "react";
import { cn } from "@/lib/cn";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import "./navigation-menu.css";

const NavigationMenu = React.forwardRef<HTMLDivElement, NavigationMenuPrimitive.Root.Props>(function NavigationMenu(
  { className, ...props },
  ref,
) {
  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      data-slot="navigation-menu"
      className={cn("", "Root", className)}
      {...props}
    />
  );
});

const NavigationMenuList = React.forwardRef<HTMLUListElement, NavigationMenuPrimitive.List.Props>(
  function NavigationMenuList({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.List
        ref={ref}
        data-slot="navigation-menu-list"
        className={cn("", "List", className)}
        {...props}
      />
    );
  },
);

const NavigationMenuItem = React.forwardRef<HTMLLIElement, NavigationMenuPrimitive.Item.Props>(
  function NavigationMenuItem(props, ref) {
    return <NavigationMenuPrimitive.Item ref={ref} data-slot="navigation-menu-item" {...props} />;
  },
);

const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, NavigationMenuPrimitive.Trigger.Props>(
  function NavigationMenuTrigger({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        data-slot="navigation-menu-trigger"
        className={cn("", "Trigger", className)}
        {...props}
      />
    );
  },
);

const NavigationMenuIcon = React.forwardRef<HTMLDivElement, NavigationMenuPrimitive.Icon.Props>(
  function NavigationMenuIcon({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Icon
        ref={ref}
        data-slot="navigation-menu-icon"
        className={cn("", "Icon", className)}
        {...props}
      />
    );
  },
);

const NavigationMenuContent = React.forwardRef<HTMLDivElement, NavigationMenuPrimitive.Content.Props>(
  function NavigationMenuContent({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Content
        ref={ref}
        data-slot="navigation-menu-content"
        className={cn("", "Content", className)}
        {...props}
      />
    );
  },
);

const NavigationMenuIndicator = React.forwardRef<HTMLDivElement, NavigationMenuPrimitive.Indicator.Props>(
  function NavigationMenuIndicator({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Indicator
        ref={ref}
        data-slot="navigation-menu-indicator"
        className={cn("", "Indicator", className)}
        {...props}
      />
    );
  },
);

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuIndicator,
};
