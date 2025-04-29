import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

type LkSizeUnit = "xs" | "sm" | "md" | "lg" | "xl";

interface LkIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  variant?: "fill" | "outline" | "text";
  color?: string; // LkColor
  size?: LkSizeUnit;
}

export default function IconButton({
  icon,
  variant = "fill",
  color = "lk-primary",
  size = "md",
  ...rest
}: LkIconButtonProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ variant, color, size }, "lk-icon-button"),
    [variant, color, size],
  );

  return (
    <button type="button" {...dataAttrs} {...rest}>
      <div>
        <i lk-component="icon">{icon}</i>
      </div>
      <div lk-component="state-layer"></div>
    </button>
  );
}
