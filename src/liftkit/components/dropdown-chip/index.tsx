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
    () => propsToDataAttrs({restProps, children}, "dropdown-chip"),
    [restProps],
  );

  return <div lk-component="dropdown-chip" {...restProps} {...dropdownChipAttrs}>{children}</div>;
}
