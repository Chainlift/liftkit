import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/icon-button/icon-button.css";
import Icon from "@/registry/nextjs/components/icon";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { IconName } from "lucide-react/dynamic";
import { getOnToken } from "@/registry/universal/lib/colorUtils";

declare global {
  type LkIconButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
}

interface LkIconButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  size?: LkIconButtonSize;
  fontClass?: LkFontClass; //optional, if present it will control the size directly via fontClass
  className?: string; //optional, making explicit here so we can control how it mixes in with locally-passed props
}

type IconButtonColor<T extends "fill" | "outline" | "text"> = T extends "fill" ? LkColorWithOnToken : LkColor;

export interface LkIconButtonProps<T extends "fill" | "outline" | "text" = "fill"> extends LkIconButtonBaseProps {
  icon: IconName;
  variant?: T;
  color?: IconButtonColor<T>;
}

export default function IconButton<T extends "fill" | "outline" | "text" = "fill">({
  icon = "roller-coaster",
  variant = "fill" as T,
  color = "primary" as IconButtonColor<T>,
  size = "md",
  fontClass = "body",
  className,
  ...restProps
}: LkIconButtonProps<T>) {
  const dataAttrs = useMemo(() => propsToDataAttrs({ variant, color, size }, "icon-button"), [variant, color, size]);

  const onToken = getOnToken(color) as LkColor;

  /** Dynamically set stroke width based on font class */
  let iconStrokeWidth: number = getIconStrokeWidth(fontClass);

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

  /**Dynamically set icon and state-layer color based on variant */
  function getIconColor(variant: "fill" | "outline" | "text") {
    switch (variant) {
      case "outline":
      case "text":
        return color;
      case "fill":
        return onToken;
    }
  }

  return (
    <button
      data-lk-component="icon-button"
      type="button"
      {...dataAttrs}
      {...restProps}
      className={`${fontClass} ${className || ""}`}
    >
      <div>
        <Icon name={icon} color={getIconColor(variant)} strokeWidth={iconStrokeWidth}></Icon>
      </div>
      <StateLayer bgColor={getIconColor(variant)}></StateLayer>
    </button>
  );
}
