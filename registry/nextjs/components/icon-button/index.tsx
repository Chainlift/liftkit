import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

type LkSizeUnit = "xs" | "sm" | "md" | "lg" | "xl";

interface LkIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  variant?: "fill" | "outline" | "text";
  // color?: string; // LkColor
  color?: LkColorWithOnToken;
  size?: LkSizeUnit;
}

export default function IconButton({
  icon,
  variant = "fill",
  color = "primary",
  size = "md",
  ...rest
}: LkIconButtonProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ variant, color, size }, "icon-button"),
    [variant, color, size],
  );

  return (
    <button lk-component="icon-button" type="button" {...dataAttrs} {...rest} >
      <div>
        <i lk-component="icon">{icon}</i>
      </div>
      <div lk-component="state-layer"></div>
    </button>
  );
}
