"use client";

import { cn } from "@/lib/cn";
import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import "./lk-toolbar.css";

function Toolbar({ className, ...props }: ToolbarPrimitive.Root.Props) {
  return <ToolbarPrimitive.Root data-slot="toolbar" className={cn("", "Toolbar", className)} {...props} />;
}

function ToolbarInput({ className, ...props }: ToolbarPrimitive.Input.Props) {
  return <ToolbarPrimitive.Input data-slot="toolbar-input" className={cn("", "Input", className)} {...props} />;
}

function ToolbarLink({ className, ...props }: ToolbarPrimitive.Link.Props) {
  return <ToolbarPrimitive.Link data-slot="toolbar-link" className={cn("", "Link", className)} {...props} />;
}

function ToolbarButton({ className, ...props }: ToolbarPrimitive.Button.Props) {
  return <ToolbarPrimitive.Button data-slot="toolbar-button" className={cn("", "Button", className)} {...props} />;
}

function ToolbarGroup({ className, ...props }: ToolbarPrimitive.Group.Props) {
  return <ToolbarPrimitive.Group data-slot="toolbar-group" className={cn("", "Group", className)} {...props} />;
}

function ToolbarSeparator({ className, ...props }: ToolbarPrimitive.Separator.Props) {
  return (
    <ToolbarPrimitive.Separator data-slot="toolbar-separator" className={cn("", "Separator", className)} {...props} />
  );
}

export { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator, ToolbarInput, ToolbarLink };
