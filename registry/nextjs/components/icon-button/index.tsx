import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/icon-button/icon-button.css";
import Icon from "@/registry/nextjs/components/icon";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { IconName } from "lucide-react/dynamic";
import { getOnToken } from "@/registry/universal/lib/colorUtils";

declare global {type LkIconButtonSize = "xs" | "sm" | "md" | "lg" | "xl"};

interface LkIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  variant?: "fill" | "outline" | "text";
  // color?: string; // LkColor
  color?: LkColorWithOnToken;
  size?: LkIconButtonSize;
  fontClass?: LkFontClass; //optional, if present it will control the size directly via fontClass
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


  return (
    <button lk-component="icon-button" type="button" {...dataAttrs} {...rest} className={`${fontClass}`}>
      <div>
        <Icon 
          name={icon} 
          color={onToken}
          fontClass={fontClass}
          ></Icon>
      </div>
      <StateLayer bgColor={onToken}></StateLayer>
    </button>
  );
}
