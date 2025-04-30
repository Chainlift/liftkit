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
  const { label, startIcon, endIcon, color, size, variant, material, ...restProps } = props;

  const lkButtonAttrs = useMemo(() => {
    return {
      ...propsToDataAttrs(restProps, "lk-button"),
      ...(size && { "data-lk-button-size": size }),
      ...(color && {"data-lk-button-color": color}),
      ...(variant && {"data-lk-button-variant": variant}),
      ...(material && {"data-lk-button-variant": material})
    };
  }, [restProps]);

  return (
    <button
      {...lkButtonAttrs}
      type="button"
      data-lk-component="button"
      style={
        color && variant === "fill"
          ? {
              backgroundColor: `var(--light__${color}_lkv)`,
              color: `var(--light__on${color}_lkv)`,
            }
          : color && variant === "outline"
          ? {
              borderColor: color === "inversesurface" ? `var(--light__inversesurface_lk)` : `var(--lk-outline)`,
              color: `var(--light__${color}_lkv)`,
              backgroundColor: "transparent",
            }
          : undefined
      }
    >
      <div lk-button-content-wrap="true">
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
