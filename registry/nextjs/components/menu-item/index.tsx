import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/menu-item/menu-item.css";

interface LkMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  startIcon?: string;
  endIcon?: string;
  children?: React.ReactNode;
}

export default function MenuItem({
  startIcon,
  endIcon,
  children,
  ...restProps
}: LkMenuItemProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs(restProps, "menu-item"),
    [restProps],
  );

  return (
    <div lk-component="menu-item" {...dataAttrs}>
      {startIcon && (
        <i lk-component="icon" lk-icon-position="start">
          {startIcon}
        </i>
      )}
      <span>{children}</span>
      {endIcon && (
        <i lk-component="icon" lk-icon-position="end">
          {endIcon}
        </i>
      )}
      <div lk-component="state-layer"></div>
    </div>
  );
}
