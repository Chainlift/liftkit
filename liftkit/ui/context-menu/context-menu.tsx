"use client";

import { cn } from "@/lib/cn";
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import "./lk-context-menu.css";

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({ className, ...props }: ContextMenuPrimitive.Trigger.Props) {
  return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" className={cn(className)} {...props} />;
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return <ContextMenuPrimitive.Portal {...props} />;
}

function ContextMenuPositioner({ className, ...props }: ContextMenuPrimitive.Positioner.Props) {
  return <ContextMenuPrimitive.Positioner data-slot="context-menu-positioner" className={cn(className)} {...props} />;
}

function ContextMenuPopup({ className, ...props }: ContextMenuPrimitive.Popup.Props) {
  return <ContextMenuPrimitive.Popup data-slot="context-menu-popup" className={cn(className)} {...props} />;
}

function ContextMenuItem({ className, ...props }: ContextMenuPrimitive.Item.Props) {
  return <ContextMenuPrimitive.Item data-slot="context-menu-item" className={cn(className)} {...props} />;
}

function ContextMenuSeparator({ className, ...props }: ContextMenuPrimitive.Separator.Props) {
  return <ContextMenuPrimitive.Separator data-slot="context-menu-separator" className={cn(className)} {...props} />;
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSeparator,
};
