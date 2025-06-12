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

interface LkIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  variant?: "fill" | "outline" | "text";
  // color?: string; // LkColor
  color?: LkColorWithOnToken;
  size?: LkIconButtonSize;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>; //optional, if present it will control the size directly via fontClass
}

export default function IconButton({
  icon = "roller-coaster",
  variant = "fill",
  color = "primary",
  size = "md",
  fontClass = "body",
  ...rest
}: LkIconButtonProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({ variant, color, size }, "icon-button"), [variant, color, size]);

  const onToken = getOnToken(color) as LkColor;

  /** Dynamically set stroke width based on font class */

  let iconStrokeWidth: number = getIconStrokeWidth(fontClass);

  return (
    <button lk-component="icon-button" type="button" {...dataAttrs} {...rest} className={fontClass}>
      <div>
        <Icon name={icon} color={onToken} strokeWidth={iconStrokeWidth}></Icon>
      </div>
      <StateLayer bgColor={onToken}></StateLayer>
    </button>
  );
}

function getIconStrokeWidth(fontClass: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>) {
  switch (fontClass) {
    case "display1":
    case "display2":
    case "title1":
      return 1.5;
    case "subheading":
    case "label":
    case "caption":
    case "capline":
      return 2.5;
    default:
      return 2;
  }
}
