import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "fill" | "outline" | "text";
  color?: LkColorWithOnToken;
  size?: "sm" | "md" | "lg";
  material?: string;
  startIcon?: string;
  endIcon?: string;
}

export default function Button(props: LkButtonProps) {
  const { label, startIcon, endIcon, ...restProps } = props;

  const lkButtonAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-button"),
    [
      // restProps.variant,
      // restProps.color,
      // restProps.size,
      // restProps.material,
      // startIcon,
      // endIcon,
      restProps,
    ],
  );

  return (
    <button {...lkButtonAttrs} type="button">
      <div lk-button-content-wrap>
        {startIcon && (
          <i lk-component="icon" lk-icon-position="start">
            {startIcon}
          </i>
        )}
        <span lk-button-child="button-text">{label ?? "Button"}</span>
        {endIcon && (
          <i lk-component="icon" lk-icon-position="end">
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
