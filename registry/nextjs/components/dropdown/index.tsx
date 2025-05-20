import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/dropdown/dropdown.css";

interface LkDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Dropdown(props: LkDropdownProps) {
  const { children, ...restProps } = props;

  const dropdownAttrs = useMemo(
    () => propsToDataAttrs(restProps, "dropdown"),
    [restProps],
  );

  return (
    <div lk-component="dropdown" {...dropdownAttrs}>
      {children}
    </div>
  );
}
