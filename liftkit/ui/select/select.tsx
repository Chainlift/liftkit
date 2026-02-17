"use client";

import { cn } from "@/lib/cn";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import "./select.css";

function Select<Value, Multiple extends boolean = false>({ ...props }: SelectPrimitive.Root.Props<Value, Multiple>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectTrigger({ className, ...props }: SelectPrimitive.Trigger.Props) {
  return <SelectPrimitive.Trigger data-slot="select-trigger" className={cn("", "Select", className)} {...props} />;
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value data-slot="select-value" className={cn("", "Value", className)} {...props} />;
}

function SelectIcon({ className, ...props }: SelectPrimitive.Icon.Props) {
  return <SelectPrimitive.Icon data-slot="select-icon" className={cn("", "SelectIcon", className)} {...props} />;
}

function SelectPortal({ ...props }: SelectPrimitive.Portal.Props) {
  return <SelectPrimitive.Portal {...props} />;
}

function SelectPositioner({ className, ...props }: SelectPrimitive.Positioner.Props) {
  return (
    <SelectPrimitive.Positioner data-slot="select-positioner" className={cn("", "Positioner", className)} {...props} />
  );
}

function SelectPopup({ className, ...props }: SelectPrimitive.Popup.Props) {
  return <SelectPrimitive.Popup data-slot="select-popup" className={cn("", "Popup", className)} {...props} />;
}

function SelectScrollUpArrow({ className, ...props }: SelectPrimitive.ScrollUpArrow.Props) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      className={cn("", "ScrollArrow", className)}
      {...props}
    />
  );
}

function SelectScrollDownArrow({ className, ...props }: SelectPrimitive.ScrollDownArrow.Props) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={cn("", "ScrollArrow", className)}
      {...props}
    />
  );
}

function SelectList({ className, ...props }: SelectPrimitive.List.Props) {
  return <SelectPrimitive.List data-slot="select-list" className={cn("", "List", className)} {...props} />;
}

function SelectItem({ className, ...props }: SelectPrimitive.Item.Props) {
  return <SelectPrimitive.Item data-slot="select-item" className={cn("", "Item", className)} {...props} />;
}

function SelectItemIndicator({ className, ...props }: SelectPrimitive.ItemIndicator.Props) {
  return (
    <SelectPrimitive.ItemIndicator
      data-slot="select-item-indicator"
      className={cn("", "ItemIndicator", className)}
      {...props}
    />
  );
}

function SelectItemText({ className, ...props }: SelectPrimitive.ItemText.Props) {
  return <SelectPrimitive.ItemText data-slot="select-item-text" className={cn("", "ItemText", className)} {...props} />;
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
  SelectList,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
};
