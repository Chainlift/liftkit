import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkMenuListProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  maxHeight?: string; // Accepts CSS-compatible values like 'auto' or LiftKit size vars
  children?: React.ReactNode;
}

export default function MenuList({
  isOpen = false,
  maxHeight = "var(--lk-size-4xl)",
  children,
  ...rest
}: LkMenuListProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ open: isOpen }, "lk-menu-list"),
    [isOpen],
  );

  return (
    <div
      style={{
        maxHeight: isOpen ? maxHeight : "0px",
        display: isOpen ? "block" : "none",
        overflow: isOpen ? "auto" : "hidden",
      }}
      {...dataAttrs}
      {...rest}
    >
      <div lk-component="column">{children}</div>
    </div>
  );
}
