"use client";

import { cn } from "@/lib/cn";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import styles from "./index.module.css";

function NavigationMenu({ className, ...props }: NavigationMenuPrimitive.Root.Props) {
  return <NavigationMenuPrimitive.Root data-slot="navigation-menu" className={cn("", styles.Root, className)} {...props} />;
}

function NavigationMenuList({ className, ...props }: NavigationMenuPrimitive.List.Props) {
  return <NavigationMenuPrimitive.List data-slot="navigation-menu-list" className={cn("", styles.List, className)} {...props} />;
}

function NavigationMenuItem({ ...props }: NavigationMenuPrimitive.Item.Props) {
  return <NavigationMenuPrimitive.Item data-slot="navigation-menu-item" {...props} />;
}

function NavigationMenuTrigger({ className, ...props }: NavigationMenuPrimitive.Trigger.Props) {
  return <NavigationMenuPrimitive.Trigger data-slot="navigation-menu-trigger" className={cn("", styles.Trigger, className)} {...props} />;
}

function NavigationMenuIcon({ className, ...props }: NavigationMenuPrimitive.Icon.Props) {
  return <NavigationMenuPrimitive.Icon data-slot="navigation-menu-icon" className={cn("", styles.Icon, className)} {...props} />;
}

function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props) {
  return <NavigationMenuPrimitive.Content data-slot="navigation-menu-content" className={cn("", styles.Content, className)} {...props} />;
}

function NavigationMenuIndicator({ className, ...props }: NavigationMenuPrimitive.Indicator.Props) {
  return <NavigationMenuPrimitive.Indicator data-slot="navigation-menu-indicator" className={cn("", styles.Indicator, className)} {...props} />;
}

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuIcon, NavigationMenuContent, NavigationMenuIndicator };
