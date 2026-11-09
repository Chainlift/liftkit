"use client";

import { createContext, useContext } from "react";
import { cn } from "../../lib/cn";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import "../../css/components/lk-select.css";

type SelectFontClass = Extract<
  LkFontClass,
  | "display1"
  | "display2"
  | "title1"
  | "title2"
  | "title3"
  | "heading"
  | "subheading"
  | "body"
  | "callout"
  | "label"
  | "caption"
  | "capline"
>;

export type SelectProps<Value, Multiple extends boolean | undefined = false> = SelectPrimitive.Root.Props<
  Value,
  Multiple
> & {
  /**
   * Sizes the select proportionally: the trigger and the popup's items scale their text, padding, and corners from
   * this font class. Defaults to the default sizes.
   */
  fontClass?: SelectFontClass;
};

// The popup renders in a portal, outside the trigger, so the root shares its font class with the parts that use it.
const SelectFontClassContext = createContext<SelectFontClass | undefined>(undefined);

function Select<Value, Multiple extends boolean | undefined = false>({
  fontClass,
  ...props
}: SelectProps<Value, Multiple>) {
  return (
    <SelectFontClassContext value={fontClass}>
      <SelectPrimitive.Root data-slot="select" {...props} />
    </SelectFontClassContext>
  );
}

function SelectTrigger({ className, ...props }: SelectPrimitive.Trigger.Props) {
  const fontClass = useContext(SelectFontClassContext);
  return <SelectPrimitive.Trigger data-slot="select-trigger" className={cn(fontClass, className)} {...props} />;
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value data-slot="select-value" className={cn(className)} {...props} />;
}

function SelectIcon({ className, ...props }: SelectPrimitive.Icon.Props) {
  return <SelectPrimitive.Icon data-slot="select-icon" className={cn(className)} {...props} />;
}

function SelectPortal({ ...props }: SelectPrimitive.Portal.Props) {
  return <SelectPrimitive.Portal {...props} />;
}

function SelectPositioner({ className, ...props }: SelectPrimitive.Positioner.Props) {
  return <SelectPrimitive.Positioner data-slot="select-positioner" className={cn(className)} {...props} />;
}

function SelectPopup({ className, ...props }: SelectPrimitive.Popup.Props) {
  const fontClass = useContext(SelectFontClassContext);
  return <SelectPrimitive.Popup data-slot="select-popup" className={cn(fontClass, className)} {...props} />;
}

function SelectScrollUpArrow({ className, ...props }: SelectPrimitive.ScrollUpArrow.Props) {
  return <SelectPrimitive.ScrollUpArrow data-slot="select-scroll-up-arrow" className={cn(className)} {...props} />;
}

function SelectScrollDownArrow({ className, ...props }: SelectPrimitive.ScrollDownArrow.Props) {
  return <SelectPrimitive.ScrollDownArrow data-slot="select-scroll-down-arrow" className={cn(className)} {...props} />;
}

function SelectList({ className, ...props }: SelectPrimitive.List.Props) {
  return <SelectPrimitive.List data-slot="select-list" className={cn(className)} {...props} />;
}

function SelectItem({ className, ...props }: SelectPrimitive.Item.Props) {
  const fontClass = useContext(SelectFontClassContext);
  return <SelectPrimitive.Item data-slot="select-item" className={cn(fontClass, className)} {...props} />;
}

function SelectItemIndicator({ className, ...props }: SelectPrimitive.ItemIndicator.Props) {
  return <SelectPrimitive.ItemIndicator data-slot="select-item-indicator" className={cn(className)} {...props} />;
}

function SelectItemText({ className, ...props }: SelectPrimitive.ItemText.Props) {
  return <SelectPrimitive.ItemText data-slot="select-item-text" className={cn(className)} {...props} />;
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
