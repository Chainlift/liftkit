import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Dropdown(props: LkDropdownProps) {
  const { children, ...restProps } = props;

  const dropdownAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-dropdown"),
    [restProps]
  );

  return <div {...dropdownAttrs}>{children}</div>;
}
