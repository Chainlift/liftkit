import React from "react";
import { Button as BaseButton } from "@base-ui/react";
import { cn } from "@/lib/cn";
import { IconName } from "lucide-react/dynamic";
import { LkStateLayerProps } from "@/liftkit/ui/state-layer";
import { LkFontClass } from "@/liftkit/types/lk-typography";
import { Icon } from "@/liftkit/ui/icon/icon";

import "./button.css";

//define the type

export type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  /** Text content for the button. Falls back to children. */
  label?: string;
  /** Visual style variant. */
  variant?: "fill" | "outline" | "text";
  /** Some description */
  color?: LkColorWithOnToken;
  /** Some description */
  material?: string;
  /** Some description */
  startIcon?: IconName;
  /** Some description */
  endIcon?: IconName;
  /** Some description */
  opticalCorrection?: boolean;
  /** Some description */
  modifiers?: string;
  /** Some description */
  stateLayerOverride?: LkStateLayerProps; // Optional override for state layer properties
  /** Some description
   * @default "body" */
  fontClass?: Extract<
    LkFontClass,
    | "display1"
    | "display2"
    | "title1"
    | "title2"
    | "title3"
    | "heading"
    | "subheading"
    | "body"
    | "callout"
    | "label"
    | "caption"
    | "capline"
  >;
};

//define a button class generator function
function buttonClasses({ variant = "fill", color = "primary", fontClass, className }: ButtonProps) {
  return cn("lk-btn", "lk-btn-variant--" + variant, "lk-colorgroup--" + color, fontClass && fontClass);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant,
    color,
    label,
    material,
    startIcon,
    endIcon,
    opticalCorrection,
    modifiers,
    stateLayerOverride,
    fontClass = "body",
    ...props
  },
  ref,
) {
  return (
    <BaseButton ref={ref} className={buttonClasses({ className, variant, color, fontClass })} {...props}>
      {startIcon && <Icon strokeWidth={2.5} name={startIcon} data-lk-icon-position="start" />}
      {label ?? props.children ?? "Button"}
      {endIcon && <Icon strokeWidth={2.5} name={endIcon} data-lk-icon-position="end" />}
    </BaseButton>
  );
});
