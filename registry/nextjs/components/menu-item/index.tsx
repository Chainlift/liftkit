/**
 * A menu item component that displays content with optional start and end icons.
 *
 * @param startIcon - Optional icon to display at the start of the menu item
 * @param endIcon - Optional icon to display at the end of the menu item
 * @param children - The content to display in the menu item in between the icons
 * @param restProps - Additional HTML div attributes passed through to the component
 *
 * @returns A menu item component with icons, content, and a state layer for interactions
 *
 * @example
 * ```tsx
 * <MenuItem startIcon="🏠" endIcon="→">
 *   Home
 * </MenuItem>
 * ```
 */
import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/menu-item/menu-item.css";
import StateLayer from "@/registry/nextjs/components/state-layer";
import type { IconName } from "lucide-react/dynamic";

interface LkMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  startIcon?: IconName;
  endIcon?: IconName;
  children?: React.ReactNode;
}

export default function MenuItem({ startIcon, endIcon, children, ...restProps }: LkMenuItemProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs(restProps, "menu-item"), [restProps]);

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
      <StateLayer></StateLayer>
    </div>
  );
}
