import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "./button.css";

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
    [variant, color, size, restProps],
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
          <i lk-component="icon" lk-icon-position="end">
            {endIcon}
          </i>
        )}
      </div>
      <div
        lk-component="state-layer"
        lk-state-layer-color="var(--lk-primary)"
      />
      <style jsx global>{`
        [lk-component="button"] {
          /* DEFAULTS */
          --button-font-size: var(--lk-size-md);
          --button-line-height: var(--lk-halfstep);
          --button-padX: var(--lk-size-md);
          --button-padY: calc(
            var(--button-font-size) *
              calc(var(--lk-halfstep) / var(--lk-size-xl-unitless))
          );
          /* --button-padX-sideWithIcon: calc(1em * calc(var(--lk-wholestep) / var(--lk-size-xl-unitless))); */
          /* --button-gap: var(--button-padX-sideWithIcon); */
          --button-gap: 0.5em;

          display: inline-block;
          vertical-align: middle;
          border: 1px solid rgba(0, 0, 0, 0);
          border-radius: 100em;
          position: relative;
          text-decoration: none;
          white-space: pre;
          word-break: keep-all;
          overflow: hidden;
          padding: var(--button-padY) var(--button-padX);
          font-weight: 500;
          font-size: var(--button-font-size);
          line-height: var(--button-line-height);
        }

        /* SIZE VARIANTS */
        [lk-button-size="sm"] {
          --button-font-size: var(--lk-size-sm);
          --button-padX: 13px;
          --button-padY: 5px;
          --button-gap: 7px;
        }

        [lk-button-size="lg"] {
          --button-font-size: var(--lk-size-lg);
          --button-padX: 18px;
          --button-padY: 10px;
          --button-gap: 10px;
        }

        /* ICON-BASED PADDING ADJUSTMENTS */
        [lk-component="button"]:has([lk-icon-position="start"]) {
          padding-left: calc(var(--button-padX) - 8px);
          padding-right: calc(var(--button-padX) + 2px);
          padding-block: calc(var(--button-padY));
        }

        [lk-component="button"]:has([lk-icon-position="end"]) {
          padding-right: calc(var(--button-padX) - 5px);
          padding-left: calc(var(--button-padX) + 2px);
          padding-block: calc(var(--button-padY) + 2px);
        }

        [lk-component="button"]:has([lk-icon-position="start"]):has(
            [lk-icon-position="end"]
          ) {
          padding-inline: calc(var(--button-padX));
        }

        /* CONTENT WRAPPER */
        [lk-button-content-wrap="true"] {
          display: inline-flex;
          align-items: center;
          gap: var(--button-gap);
        }

        /* STYLE VARIANTS */

        [lk-button-variant="text"] {
          background: transparent !important;
        }
        [lk-button-variant="outline"] {
          background: transparent !important;
          border: 1px solid #c5c5d7;
        }
      `}</style>
    </button>
  );
}
