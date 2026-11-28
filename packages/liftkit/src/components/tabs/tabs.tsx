"use client";

import { cn } from "../../lib/cn";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import "../../css/components/lk-tabs.css";

export type TabsProps = TabsPrimitive.Root.Props & {
  /** "open" is the default look. "contained" restyles the tab list and indicator (rules in lk-tabs.css). */
  variant?: "open" | "contained";
  /** When true, the tabs grow to fill the whole tab list. Defaults to false: each tab is only as wide as its content. */
  tabListItemsShouldGrow?: boolean;
};

function Tabs({ className, variant = "open", tabListItemsShouldGrow = false, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-lk-tabs-variant={variant}
      data-lk-tabs-grow={tabListItemsShouldGrow || undefined}
      className={cn(className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return <TabsPrimitive.List data-slot="tabs-list" className={cn(className)} {...props} />;
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return <TabsPrimitive.Tab data-slot="tabs-tab" className={cn(className)} {...props} />;
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return <TabsPrimitive.Indicator data-slot="tabs-indicator" className={cn(className)} {...props} />;
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-panel" className={cn(className)} {...props} />;
}

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsPanel };
