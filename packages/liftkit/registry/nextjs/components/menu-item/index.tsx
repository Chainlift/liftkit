/**
 * A menu item component that displays content with optional start and end icons.
 *
 * @param props - The menu item component props
 * @param props.startIcon - Optional icon configuration to display at the start of the menu item
 * @param props.endIcon - Optional icon configuration to display at the end of the menu item
 * @param props.children - The content to display in the menu item between the icons
 * @param props.fontClass - Font class to apply to the menu item, defaults to "body"
 * @param props.title - Optional title attribute for the menu item element
 * @param props.className - Additional CSS classes to apply to the menu item
 * @param props.restProps - Additional HTML div attributes passed through to the component
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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function MenuItem({
  startIcon,
  endIcon,
  fontClass = "body",
  title,
  children,
  className,
  onClick,
  ...restProps
}: LkMenuItemProps) {
  // const dataAttrs = useMemo(() => propsToDataAttrs(restProps, "menu-item"), [restProps]); omitting because it is not used

  return (
    <div
      data-lk-component="menu-item"
      title={typeof children === "string" ? children : ""}
      className={`${className || ""}`}
      onClick={onClick || undefined}
    >
      {startIcon && <Icon {...startIcon} data-lk-icon-position="start"></Icon>}
      <p data-lk-menu-item-element="content-wrap">{children}</p>
      {endIcon && <Icon {...endIcon} data-lk-icon-position="end"></Icon>}

      <StateLayer></StateLayer>
    </div>
  );
}
