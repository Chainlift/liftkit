import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkDropdownChipProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export default function DropdownChip({labelPosition, helpText, placeholderText, isActive, children, ...restProps}: LkDropdownChipProps) {

  const dropdownChipAttrs = useMemo(
    () => propsToDataAttrs({labelPosition, helpText, placeholderText, isActive, restProps, children}, "dropdown-chip"),
    [labelPosition, helpText, placeholderText, isActive, children, restProps],
  );

  return <div lk-component="dropdown-chip" {...restProps} {...dropdownChipAttrs}>{children}</div>;
}
