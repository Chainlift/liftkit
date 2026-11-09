"use client";

import { cn } from "../../lib/cn";
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import "../../css/components/lk-combobox.css";
import { Icon } from "../icon/icon";

function Combobox<Value, Multiple extends boolean = false>({
  ...props
}: ComboboxPrimitive.Root.Props<Value, Multiple>) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />;
}

function ComboboxInputGroup({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return <ComboboxPrimitive.Input data-slot="combobox-input-group" className={cn(className)} {...props} />;
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return <ComboboxPrimitive.Clear data-slot="combobox-clear" className={cn(className)} {...props} />;
}

function ComboboxTrigger({ className, ...props }: ComboboxPrimitive.Trigger.Props) {
  return <ComboboxPrimitive.Trigger data-slot="combobox-trigger" className={cn(className)} {...props} />;
}

function ComboboxPortal({ ...props }: ComboboxPrimitive.Portal.Props) {
  return <ComboboxPrimitive.Portal {...props} />;
}

function ComboboxPositioner({ className, ...props }: ComboboxPrimitive.Positioner.Props) {
  return <ComboboxPrimitive.Positioner data-slot="combobox-positioner" className={cn(className)} {...props} />;
}

function ComboboxPopup({ className, ...props }: ComboboxPrimitive.Popup.Props) {
  return <ComboboxPrimitive.Popup data-slot="combobox-popup" className={cn(className)} {...props} />;
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return <ComboboxPrimitive.Empty data-slot="combobox-empty" className={cn(className)} {...props} />;
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return <ComboboxPrimitive.List data-slot="combobox-list" className={cn(className)} {...props} />;
}

function ComboboxItem({ className, ...props }: ComboboxPrimitive.Item.Props) {
  return <ComboboxPrimitive.Item data-slot="combobox-item" className={cn(className)} {...props} />;
}

function ComboboxItemIndicator({ className, ...props }: ComboboxPrimitive.ItemIndicator.Props) {
  return <ComboboxPrimitive.ItemIndicator data-slot="combobox-item-indicator" className={cn(className)} {...props} />;
}

export {
  Combobox,
  ComboboxInputGroup,
  ComboboxClear,
  ComboboxTrigger,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxItemIndicator,
};
