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
import Icon from "@/registry/nextjs/components/icon";
import { LkIconProps } from "@/registry/nextjs/components/icon";

interface LkMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  startIcon?: LkIconProps;
  endIcon?: LkIconProps;
  children?: React.ReactNode;
  fontClass?: LkFontClass;
  title?: string;
  className?: string; //explicitly defining because it's used in internal component logic
}

export default function MenuItem({ startIcon, endIcon, fontClass="body", children, className, ...restProps }: LkMenuItemProps) {
  // const dataAttrs = useMemo(() => propsToDataAttrs(restProps, "menu-item"), [restProps]); omitting because it is not used

  return (
    <div lk-component="menu-item" title={typeof children === "string" ? children : ""} className={`${fontClass} ${className || ''}`}>
      {startIcon && <Icon {...startIcon} lk-icon-position="start"></Icon>}
      <p lk-menu-item-element="content-wrap">{children}</p>
      {endIcon && <Icon {...endIcon} lk-icon-position="end"></Icon>}

      <StateLayer></StateLayer>
    </div>
  );
}
