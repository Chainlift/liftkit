import React from "react";
import { Button as BaseButton } from "@base-ui/react";
import { cn } from "@/lib/cn";
import { IconName } from "lucide-react/dynamic";
import { LkStateLayerProps } from "@/liftkit/ui/state-layer";
import { LkFontClass } from "@/liftkit/types/lk-typography";
import "./button.css";

//define the type

export type ButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
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
  fontClass?: LkFontClass;
};

//define a button class generator function
function buttonClasses({ variant = "fill", color = "primary", size = "md", fontClass, className }: ButtonProps) {
  return cn("lk-btn", "lk-btn-style--" + variant, "lk-colorgroup--" + color, fontClass && fontClass);
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant,
    color,
    size,
    label,
    material,
    startIcon,
    endIcon,
    opticalCorrection,
    modifiers,
    stateLayerOverride,
    fontClass,
    ...props
  },
  ref,
) {
  return (
    <BaseButton ref={ref} className={buttonClasses({ className, variant, color, size })} {...props}>
      {label ?? props.children ?? "Button"}
    </BaseButton>
  );
});
