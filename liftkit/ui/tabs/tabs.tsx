"use client";

import { cn } from "@/lib/cn";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import "./tabs.css";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("", "Tabs", className)} {...props} />;
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return <TabsPrimitive.List data-slot="tabs-list" className={cn("", "List", className)} {...props} />;
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return <TabsPrimitive.Tab data-slot="tabs-tab" className={cn("", "Tab", className)} {...props} />;
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return <TabsPrimitive.Indicator data-slot="tabs-indicator" className={cn("", "Indicator", className)} {...props} />;
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-panel" className={cn("", "Panel", className)} {...props} />;
}

export { Tabs, TabsList, TabsTab, TabsIndicator, TabsPanel };
