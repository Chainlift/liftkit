import { useMemo } from "react";

import "@/liftkit/component-css/lk-card.css";
import React from "react";
import { StateLayer } from "@/liftkit/component-definitions/state-layer/state-layer";
import { cn } from "@/lib/cn";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";

export type LkCardProps = React.HTMLAttributes<HTMLDivElement> & {
  scaleFactor?: Extract<
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
  variant?: "fill" | "outline" | "transparent";
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  color?: LkColorWithOnToken;
  className?: string;
  children?: React.ReactNode;
  showStateLayer?: boolean;
};
/**
 * A flexible card component that supports various visual styles and behaviors.
 *
 * @param scaleFactor - LkFontClass. Scales card according to this font size. Should be whatever the largest font size in the card is.
 * @param variant - Visual variant. "fill," "outline," or "transparent." Defaults to "fill"
 * @param opticalCorrection - Optical correction method to apply. Defaults to "none"
 * @param children - Content to be rendered inside the card
 * @param color - Color group for semantic theming
 * @param className - Additional CSS classes to apply
 * @param props - Additional props passed through to the root div element
 * @param showStateLayer - Whether to show a state layer on top of the card for interaction feedback
 *
 * @returns A card component with configurable styling and material effects
 */

function cardClasses({ scaleFactor = "body", variant = "fill", opticalCorrection, color, className }: LkCardProps) {
  return cn(
    "lk-card",
    "lk-card-variant--" + variant,
    "lk-colorgroup--" + color,
    scaleFactor && "-lk-card-scaleFactor--" + scaleFactor,
  );
}

const Card = React.forwardRef<HTMLDivElement, LkCardProps>(function Card(
  {
    scaleFactor = "body",
    variant,
    opticalCorrection,
    children,
    color = "surface",
    className,
    showStateLayer = false,
    ...props
  }: LkCardProps,
  ref,
) {
  return (
    <div
      ref={ref}
      data-lk-component="card"
      data-lk-card-scale-factor={scaleFactor}
      className={cardClasses({ scaleFactor, variant, color, className })}
      {...props}
    >
      <GoldenBox scaleFactor={scaleFactor} opticalCorrection={opticalCorrection}>
        <div data-lk-component="slot" data-lk-slot="children">
          {children}
        </div>
        {showStateLayer && <StateLayer />}
      </GoldenBox>
    </div>
  );
});

export { Card };
