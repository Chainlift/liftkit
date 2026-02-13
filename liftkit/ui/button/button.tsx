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
  label?: string;
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
  material?: string;
  startIcon?: IconName;
  endIcon?: IconName;
  opticalCorrection?: boolean;
  modifiers?: string;
  stateLayerOverride?: LkStateLayerProps; // Optional override for state layer properties
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
      <Icon name="arrow-right" data-lk-icon-position="start" fontClass={fontClass} />
      {label ?? props.children ?? "Button"}
      <Icon name="arrow-right" data-lk-icon-position="end" fontClass={fontClass} />
    </BaseButton>
  );
});
