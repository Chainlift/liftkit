import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/card/card.css";
import MaterialLayer from "@/registry/nextjs/components/material-layer";

export interface LkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  variant?: "fill" | "outline" | "transparent";
  material?: "flat" | "glass"; //TODO: Integrate these material controls with the new MaterialLayer component features
  materialProps?: LkMatProps;
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  isClickable?: boolean;
  bgColor?: LkColorWithOnToken | "transparent"; //optional. does not need to have an "on" token because handled via bg global utility class, which assigns text color
  className?: string; //optional. explicitly listing here because we need to control how it mixes in with other styles controlled by classes
  children?: React.ReactNode;
  isScrollable?: boolean; //optional. if true, will add overflow-y: scroll to the card
  
}
/**
 * A flexible card component that supports various visual styles and behaviors.
 *
 * @param scaleFactor - LkFontClass. Scales card according to this font size. Should be whatever the largest font size in the card is.
 * @param variant - Visual variant. "fill," "outline," or "transparent." Defaults to "fill"
 * @param material - Material style of the card (e.g., "flat", "glass"). Defaults to "flat"
 * @param materialThickness - Thickness of the material scrim when using glass material. "thick", "default," or "thin"
 * @param opticalCorrection - Optical correction method to apply. Defaults to "none"
 * @param isClickable - Whether the card should have clickable styling
 * @param children - Content to be rendered inside the card
 * @param bgColor - Background color of the card. Defaults to "surface"
 * @param className - Additional CSS classes to apply
 * @param restProps - Additional props passed through to the root div element
 *
 * @returns A card component with configurable styling and material effects
 */
export default function Card({
  scaleFactor = "body",
  variant = "fill",
  material = "flat",
  materialProps = {},
  opticalCorrection = "none",
  isClickable,
  children,
  bgColor,
  className,
  isScrollable = false,
  ...restProps
}: LkCardProps) {
  const lkCardAttrs = useMemo(
    () => propsToDataAttrs({ scaleFactor, variant, material, className }, "card"),
    [scaleFactor, variant, material, className]
  );

  return (
    <div
      data-lk-component="card"
      className={`${isClickable ? "clickable" : ""}  ${className || ""}`}
      {...lkCardAttrs}
      {...restProps}
    >
      <div data-lk-card-element="padding-box" className={isScrollable ? "overflow-auto" : ""} data-lk-card-optical-correction={opticalCorrection}>
        <div data-lk-component="slot" data-lk-slot="children">
          {children}
        </div>
        {/* todo: define types for material scrim thickness, */}
      </div>
      {material === "glass" && <MaterialLayer type="glass" materialProps={materialProps as LkMatProps_Glass} />}
      {material === "flat" && <MaterialLayer type="flat" materialProps={{ bgColor: variant === "fill" ? bgColor : "transparent" }} />}
      {/**TODO: Define outlined card behavior */}
    </div>
  );
}
