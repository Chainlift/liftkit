import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import { getOnToken } from "@/lib/colorUtils";

import { IconName } from "lucide-react/dynamic";

interface LkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
  size?: "sm" | "md" | "lg";
  material?: string;
  startIcon?: IconName;
  endIcon?: IconName;
}

export default function Button({
  label = "Button",
  variant = "fill",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  ...restProps
}: LkButtonProps) {
  const lkButtonAttrs = useMemo(
    () => propsToDataAttrs({ variant, color, size, restProps }, "button"),
    [variant, color, size, restProps]
  );

  const iconColor = getOnToken(color) as LkColor;
  

  return (
    <button
      {...lkButtonAttrs}
      {...restProps}
      type="button"
      lk-component="button"
      className={`color-${iconColor} bg-${color} `}

    >
      <div lk-button-content-wrap="true">
        {startIcon && (
          <i lk-component="icon" lk-icon-position="start">
            {startIcon}
          </i>
        )}
        <span lk-button-child="button-text">{label ?? "Button"}</span>
        {endIcon && (
          <i lk-component="icon" lk-icon-position="end" >
            {endIcon}
          </i>
        )}
      </div>
      <div
        lk-component="state-layer"
        lk-state-layer-color="var(--lk-primary)"
      />
    </button>
  );
}
