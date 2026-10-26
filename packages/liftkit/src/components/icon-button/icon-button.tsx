"use client";

import React from "react";
import { cn } from "../../lib/cn";
import { Button as BaseButton } from "@base-ui/react/button";
import { Icon } from "../icon/icon";
import { StateLayer } from "../state-layer/state-layer";
import { LkStateLayerProps } from "../state-layer/state-layer";
import { IconName } from "lucide-react/dynamic";
import "../../css/components/lk-icon-button.css";

// declare global {
//   type LkIconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
// }

// interface LkIconButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   icon: IconName;
//   size?: LkIconButtonSize;
//   fontClass?: LkFontClass; //optional, if present it will control the size directly via fontClass
//   className?: string; //optional, making explicit here so we can control how it mixes in with locally-passed props
// }

// type IconButtonColor<T extends "fill" | "outline" | "text"> = T extends "fill" ? LkColorWithOnToken : LkColor;

// export interface LkIconButtonProps<T extends "fill" | "outline" | "text" = "fill"> extends LkIconButtonBaseProps {
//   icon: IconName;
//   variant?: T;
//   color?: IconButtonColor<T>;
// }

export type IconButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton> & {
  iconName: IconName;
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
  stateLayerOverride?: LkStateLayerProps; // Optional override for state layer properties
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { className, variant = "fill", color = "primary", iconName, fontClass = "body", stateLayerOverride, ...props },
  ref,
) {
  function getIconStrokeWidth(fontClass: LkFontClass) {
    switch (fontClass) {
      case "display1":
      case "display2":
      case "title1":
        return 1.5;
      case "subheading":
      case "label":
      case "caption":
      case "capline":
        return 2;
      default:
        return 1.75;
    }
  }

  function buttonClasses({
    variant,
    color,
    fontClass,
    className,
  }: Pick<IconButtonProps, "variant" | "color" | "fontClass" | "className">) {
    return cn("lk-icon-btn-variant--" + variant, "lk-colorgroup--" + color, fontClass && fontClass, className);
  }

  return (
    <BaseButton
      ref={ref}
      className={buttonClasses({ variant, color, fontClass, className })}
      data-slot="icon-button"
      {...props}
    >
      <div>
        <Icon name={iconName} strokeWidth={getIconStrokeWidth(fontClass)}></Icon>
      </div>
      <StateLayer></StateLayer>
    </BaseButton>
  );
});
