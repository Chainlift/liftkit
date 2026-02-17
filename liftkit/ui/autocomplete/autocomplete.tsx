"use client";

import { cn } from "@/lib/cn";
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import "./autocomplete.css";

function Autocomplete({ ...props }: React.ComponentPropsWithoutRef<typeof AutocompletePrimitive.Root>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" {...props} />;
}

function AutocompleteInput({ className, ...props }: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input data-slot="autocomplete-input" className={cn("", "Input", className)} {...props} />
  );
}

function AutocompletePortal({ ...props }: AutocompletePrimitive.Portal.Props) {
  return <AutocompletePrimitive.Portal {...props} />;
}

function AutocompletePositioner({ className, ...props }: AutocompletePrimitive.Positioner.Props) {
  return (
    <AutocompletePrimitive.Positioner
      data-slot="autocomplete-positioner"
      className={cn("", "Positioner", className)}
      {...props}
    />
  );
}

function AutocompletePopup({ className, ...props }: AutocompletePrimitive.Popup.Props) {
  return (
    <AutocompletePrimitive.Popup data-slot="autocomplete-popup" className={cn("", "Popup", className)} {...props} />
  );
}

function AutocompleteEmpty({ className, ...props }: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty data-slot="autocomplete-empty" className={cn("", "Empty", className)} {...props} />
  );
}

function AutocompleteList({ className, ...props }: AutocompletePrimitive.List.Props) {
  return <AutocompletePrimitive.List data-slot="autocomplete-list" className={cn("", "List", className)} {...props} />;
}

function AutocompleteItem({ className, ...props }: AutocompletePrimitive.Item.Props) {
  return <AutocompletePrimitive.Item data-slot="autocomplete-item" className={cn("", "Item", className)} {...props} />;
}

export {
  Autocomplete,
  AutocompleteInput,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteEmpty,
  AutocompleteList,
  AutocompleteItem,
};
