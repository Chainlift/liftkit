"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "@/registry/nextjs/components/button/button.css";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { LkStateLayerProps } from "@/registry/nextjs/components/state-layer";
import Icon from "@/registry/nextjs/components/icon";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/nextjs/lib/utilities";
import { LK_FONT_CLASSES, colorsWithOnTokens, colorsWithOnTokensTransparent } from "@/registry/nextjs/lib/utilities";
import { Slot } from "@radix-ui/react-slot";

export interface LkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
  size?: "sm" | "md" | "lg";
  material?: string;
  startIcon?: IconName;
  endIcon?: IconName;
  opticalCorrection?: boolean;
  modifiers?: string;
  stateLayerOverride?: LkStateLayerProps; // Optional override for state layer properties
}

const COLOR_SCHEME_CLASSES = {
  primary: "lk-colorgroup--primary",
  primarycontainer: "lk-colorgroup--primarycontainer",
  secondary: "lk-colorgroup--secondary",
  secondarycontainer: "lk-colorgroup--secondarycontainer",
  tertiary: "lk-colorgroup--tertiary",
  tertiarycontainer: "lk-colorgroup--tertiarycontainer",
  error: "lk-colorgroup--error",
  errorcontainer: "lk-colorgroup--errorcontainer",
  success: "lk-colorgroup--success",
  successcontainer: "lk-colorgroup--successcontainer",
  warning: "lk-colorgroup--warning",
  warningcontainer: "lk-colorgroup--warningcontainer",
  info: "lk-colorgroup--info",
  infocontainer: "lk-colorgroup--infocontainer",
  background: "lk-colorgroup--background",
  surface: "lk-colorgroup--surface",
  surfacevariant: "lk-colorgroup--surfacevariant",
  surfacecontainerlowest: "lk-colorgroup--surfacecontainerlowest",
  surfacecontainerlow: "lk-colorgroup--surfacecontainerlow",
  surfacecontainer: "lk-colorgroup--surfacecontainer",
  surfacecontainerhigh: "lk-colorgroup--surfacecontainerhigh",
  surfacecontainerhighest: "lk-colorgroup--surfacecontainerhighest",
  inversesurface: "lk-colorgroup--inversesurface",
  primaryfixed: "lk-colorgroup--primaryfixed",
  secondaryfixed: "lk-colorgroup--secondaryfixed",
  tertiaryfixed: "lk-colorgroup--tertiaryfixed",
} as const;

export type ColorScheme = keyof typeof COLOR_SCHEME_CLASSES;

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
 * @param props.opticalCorrection - Boolean to control optical icon alignment on the y-axis. Defaults to true. Pulls icons up slightly.
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

// export default function Button({
//   label = "Button",
//   variant = "fill",
//   color = "primary",
//   size = "md",
//   startIcon,
//   endIcon,
//   opticalCorrection = true,
//   modifiers,
//   stateLayerOverride,
//   ...restProps
// }: LkButtonProps) {
//   const lkButtonAttrs = useMemo(
//     () => propsToDataAttrs({ variant, color, size, startIcon, endIcon, opticalCorrection }, "button"),
//     [variant, color, size, startIcon, endIcon, opticalCorrection]
//   );

//   const onColorToken = getOnToken(color) as LkColor;

//   // Define different base color classes based on variant

//   let baseButtonClasses = "";

//   switch (variant) {
//     case "fill":
//       baseButtonClasses = `bg-${color} color-${onColorToken}`;
//       break;
//     case "outline":
//     case "text":
//       baseButtonClasses = `color-${color}`;
//       break;
//     default:
//       baseButtonClasses = `bg-${color} color-${onColorToken}`;
//       break;
//   }
//   if (modifiers) {
//     baseButtonClasses += ` ${modifiers}`;
//   }

//   /**Determine state layer props dynamically */
//   function getLocalStateLayerProps() {
//     if (stateLayerOverride) {
//       return stateLayerOverride;
//     } else {
//       return {
//         bgColor: variant === "fill" ? onColorToken : color,
//       };
//     }
//   }

//   const localStateLayerProps: LkStateLayerProps = getLocalStateLayerProps();

//   return (
//     <button
//       {...lkButtonAttrs}
//       {...restProps}
//       type="button"
//       data-lk-component="button"
//       className={`${baseButtonClasses} ${modifiers || ""}`}
//     >
//       <div data-lk-button-content-wrap="true">
//         {startIcon && (
//           <div data-lk-icon-position="start">
//             <Icon
//               name={startIcon}
//               color={variant === "fill" ? onColorToken : color}
//               data-lk-icon-position="start"
//             ></Icon>
//           </div>
//         )}
//         <span data-lk-button-child="button-text">{label ?? "Button"}</span>
//         {endIcon && (
//           <div data-lk-icon-position="end">
//             <Icon name={endIcon} color={variant === "fill" ? onColorToken : color} data-lk-icon-position="end"></Icon>
//           </div>
//         )}
//       </div>
//       <StateLayer {...localStateLayerProps} />
//     </button>
//   );
// }

const buttonVariants = cva(["lk-btn"], {
  variants: {
    variant: {
      fill: "lk-btn-style--fill",
      outline: "lk-btn-style--outline",
      text: "lk-btn-style--text",
    },
    color: COLOR_SCHEME_CLASSES,
    fontClass: LK_FONT_CLASSES,
    opticalCorrection: {
      true: "lk-btn--optic-shift",
      false: null,
    },
  },
});

export default function Button({
  className,
  variant,
  color,
  fontClass,
  opticalCorrection,
  startIcon,
  endIcon,
  asChild = false,
  children,
  ...rest
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean; startIcon?: IconName; endIcon?: IconName }) {
  const Comp = asChild ? Slot : "button";

  // Only set type on an actual <button>
  const maybeType = asChild ? {} : { type: (rest as any).type ?? "button" };

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, color, fontClass, opticalCorrection, className }))} {...rest}>
      <div data-lk-button-root>
        <div data-lk-button-content-wrap="true">
          {startIcon && (
            <div data-lk-icon-position="start">
              <Icon name={startIcon} data-lk-icon-position="start" aria-hidden />
            </div>
          )}

          {/* render children exactly once */}
          <span data-lk-button-child="button-text">{children}</span>

          {endIcon && (
            <div data-lk-icon-position="end">
              <Icon name={endIcon} data-lk-icon-position="end" aria-hidden />
            </div>
          )}
        </div>

        {/* Keep StateLayer inside the single root */}
        <StateLayer />
      </div>
    </Comp>
  );
}

export { buttonVariants };
