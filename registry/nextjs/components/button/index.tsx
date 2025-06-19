"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
// import "@/registry/nextjs/components/button/button.css";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";
import css from "./buttonstyles";
import { InlineElement } from "./buttonstyles";
import { useTheme } from "@/registry/nextjs/components/theme";

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
  const { theme, componentProps } = useTheme();

  const buttonProps = componentProps?.button || {};

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
        bgColor: variant === "fill" ? onColorToken : color,
      };
    }
  }

  const localStateLayerProps: LkStateLayerProps = getLocalStateLayerProps();

  return (
    <>
      <button
        {...lkButtonAttrs}
        {...restProps}
        type="button"
        data-lk-component="button"
        data-lk-button-material={buttonProps.defaultMaterial || "flat"}
        className={`${baseButtonClasses} ${modifiers || ""}`}
      >
        <div data-lk-button-content-wrap="true">
          {startIcon && (
            <div data-lk-icon-position="start">
              <Icon
                name={startIcon}
                color={variant === "fill" ? onColorToken : color}
                data-lk-icon-position="start"
              ></Icon>
            </div>
          )}
          <span data-lk-button-child="button-text">{label ?? "Button"}</span>
          {endIcon && (
            <div data-lk-icon-position="end">
              <Icon name={endIcon} color={variant === "fill" ? onColorToken : color} data-lk-icon-position="end"></Icon>
            </div>
          )}
        </div>
        <StateLayer {...localStateLayerProps} />
      </button>
      <style jsx>{`
        [data-lk-component="button"] {
          /* DEFAULTS */
          --button-font-size: var(--body-font-size);
          --button-line-height: var(--lk-halfstep) !important;
          --button-padX: var(--button-font-size);
          --button-padY: calc(var(--button-font-size) * calc(var(--lk-halfstep) / var(--lk-size-xl-unitless)));
          --button-padX-sideWithIcon: calc(var(--button-font-size) / var(--lk-wholestep));
          --button-gap: calc(var(--button-padY) / var(--lk-eighthstep));
          cursor: pointer;

          display: inline-flex;
          vertical-align: middle;
          border: 1px solid rgba(0, 0, 0, 0);
          border-radius: 100em;
          position: relative;
          text-decoration: none;
          white-space: pre;
          word-break: keep-all;
          overflow: hidden;
          padding: var(--button-padY) 1em;
          font-weight: 500;
          font-size: var(--button-font-size);
          line-height: var(--button-line-height);
          font-family: inherit;
        }

        /* SIZE VARIANTS */
        [data-lk-button-size="sm"] {
          --button-font-size: var(--subheading-font-size);
        }

        [data-lk-button-size="lg"] {
          --button-font-size: var(--title3-font-size);
        }

        /* ICON-BASED PADDING ADJUSTMENTS */
        [data-lk-component="button"]:has([data-lk-icon-position="start"]) {
          padding-left: var(--button-padX-sideWithIcon);
          padding-right: var(--button-padX);
        }

        [data-lk-component="button"]:has([data-lk-icon-position="end"]) {
          padding-left: 1em;
          padding-right: var(--button-padX-sideWithIcon);
        }

        [data-lk-component="button"]:has([data-lk-icon-position="start"]):has([data-lk-icon-position="end"]) {
          padding-left: var(--button-padX-sideWithIcon);
          padding-right: var(--button-padX-sideWithIcon);
        }

        /* CONTENT WRAPPER */
        [data-lk-button-content-wrap="true"] {
          display: inline-flex;
          align-items: center;
          gap: var(--button-gap);
        }

        /* TODO: Remove entirely */

        /* [data-lk-component="button"] div:has(> [data-lk-component="icon"]) {
  width: calc(1em * var(--lk-halfstep));
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
} */

        /* ICON VERTICAL OPTICAL ALIGNMENTS */

        [data-lk-button-optic-icon-shift="true"] div:has(> [data-lk-component="icon"]) {
          margin-top: calc(-1 * calc(1em * var(--lk-quarterstep-dec)));
        }

        /* STYLE VARIANTS */

        [data-lk-button-variant="text"] {
          background: transparent !important;
        }
        [data-lk-button-variant="outline"] {
          background: transparent !important;
          border: 1px solid var(--lk-outlinevariant);
        }

        [data-lk-button-material="rubber"] {
          --shadowWhitePoint: oklch(from var(--lk-primarycontainer) calc(l + 0.05) c h);
          --shadowHighlight: oklch(from var(--lk-primarycontainer) calc(l + 0.04) c h);
          --shadowLowlight: oklch(from var(--lk-primarycontainer) calc(l - 0.07) calc(c + 0.02) h);
          --shadowBlackPoint: oklch(from var(--lk-primarycontainer) calc(l - 0.08) calc(c + 0.02) h);
          background-color: inherit;
          border: none;
          box-shadow:
            -3px -3px 5px var(--shadowHighlight),
            inset 1px 1px 1px var(--shadowWhitePoint),
            3px 3px 5px var(--shadowLowlight),
            inset -1px -1px 1px var(--shadowBlackPoint);
          transition: box-shadow 0.2s ease-out;

          &:hover {
            box-shadow:
              -1px -1px 2px var(--shadowHighlight),
              inset 1px 1px 1px var(--shadowWhitePoint),
              1px 1px 2px var(--shadowLowlight),
              inset -1px -1px 1px var(--shadowBlackPoint);
          }

          [lk-component="state-layer"] {
            background-color: oklch(from var(--lk-primarycontainer) calc(1 - 0.05) c h) !important;

          }
        }
      `}</style>
    </>
  );
}
