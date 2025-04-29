import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkDropdownChipProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;
  isActive?: boolean;
}

export default function DropdownChip(props: LkDropdownChipProps) {
  const { children, ...restProps } = props;

  const dropdownChipAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-dropdown-chip"),
    [restProps],
  );

  return <div {...dropdownChipAttrs}>{children}</div>;
}
