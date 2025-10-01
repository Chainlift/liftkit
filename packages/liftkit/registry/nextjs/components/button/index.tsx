"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "@/registry/nextjs/components/button/button.css";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";

export interface LkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
  size?: "sm" | "md" | "lg";
  material?: string;
  startIcon?: IconName;
  endIcon?: IconName;
  opticIconShift?: boolean;
  modifiers?: string;
  stateLayerOverride?: LkStateLayerProps; // Optional override for state layer properties
}

/**
 * A customizable button component with support for various visual styles, sizes, and icons.
 *
 * @param props - The button component props
 * @param props.label - The text content displayed inside the button. Defaults to "Button"
 * @param props.variant - The visual style variant of the button. Defaults to "fill"
 * @param props.color - The color theme of the button. Defaults to "primary"
 * @param props.size - The size of the button (sm, md, lg). Defaults to "md"
 * @param props.startIcon - Optional icon element to display at the start of the button
 * @param props.endIcon - Optional icon element to display at the end of the button
 * @param props.restProps - Additional props to be spread to the underlying button element
 * @param props.opticIconShift - Boolean to control optical icon alignment on the y-axis. Defaults to true. Pulls icons up slightly.
 * @param props.modifiers - Additional class names to concatenate onto the button's default class list
 * @param props.stateLayerOverride - Optional override for state layer properties, allowing customization of the state layer's appearance
 *
 * @returns A styled button element with optional start/end icons and a state layer overlay
 *
 * @example
 * ```tsx
 * <Button
 *   label="Click me"
 *   variant="outline"
 *   color="secondary"
 *   size="lg"
 *   startIcon={<ChevronIcon />}
 * />
 * ```
 */
export default function Button({
  label = "Button",
  variant = "fill",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  opticIconShift = true,
  modifiers,
  stateLayerOverride,
  ...restProps
}: LkButtonProps) {
  const lkButtonAttrs = useMemo(
    () => propsToDataAttrs({ variant, color, size, startIcon, endIcon, opticIconShift }, "button"),
    [variant, color, size, startIcon, endIcon, opticIconShift]
  );

  const onColorToken = getOnToken(color) as LkColor;

  // Define different base color classes based on variant

  let baseButtonClasses = "";

  switch (variant) {
    case "fill":
      baseButtonClasses = `bg-${color} color-${onColorToken}`;
      break;
    case "outline":
    case "text":
      baseButtonClasses = `color-${color}`;
      break;
    default:
      baseButtonClasses = `bg-${color} color-${onColorToken}`;
      break;
  }
  if (modifiers) {
    baseButtonClasses += ` ${modifiers}`;
  }

  /**Determine state layer props dynamically */
  function getLocalStateLayerProps() {
    if (stateLayerOverride) {
      return stateLayerOverride;
    } else {
      return {
        bgColor: variant === "fill" ? onColorToken : color
      }
    
    }
  }

  const localStateLayerProps: LkStateLayerProps = getLocalStateLayerProps();

  return (
    <button
      {...lkButtonAttrs}
      {...restProps}
      type="button"
      data-lk-component="button"
      className={`${baseButtonClasses} ${modifiers || ""}`}
    >
      <div data-lk-button-content-wrap="true">
        {startIcon && (
          <div data-lk-icon-position="start">
            <Icon name={startIcon} color={variant === "fill" ? onColorToken : color} data-lk-icon-position="start"></Icon>
          </div>
        )}
        <span data-lk-button-child="button-text">{label ?? "Button"}</span>
        {endIcon && (
          <div data-lk-icon-position="end">
            <Icon name={endIcon} color={variant === "fill" ? onColorToken : color} data-lk-icon-position="end"></Icon>
          </div>
        )}
      </div>
      <StateLayer {...localStateLayerProps}/>
    </button>
  );
}
