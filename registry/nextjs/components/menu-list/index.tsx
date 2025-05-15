import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";

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
    () => propsToDataAttrs({ open: isOpen }, "menu-list"),
    [isOpen],
  );

  return (
    <div
    lk-component="menu-list"
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
