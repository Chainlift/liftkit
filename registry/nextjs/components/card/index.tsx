import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/card/card.css";

export interface LkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  variant?: "fill" | "outline" | "transparent";
  material?: "flat" | "glass";
  materialThickness?: "thick" | "default" | "thin"; // Optional, not added to type def yet. only has an effect if material === glass
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  isClickable?: boolean;
  bgColor?: LkColor; //optional. does not need to have an "on" token because handled via bg global utility class, which assigns text color
  className?: string; //optional. explicitly listing here because we need to control how it mixes in with other styles controlled by classes
  children?: React.ReactNode;
}
export default function Card({
  scaleFactor = "body",
  variant = "fill",
  material = "flat",
  materialThickness,
  opticalCorrection = "none",
  isClickable,
  children,
  bgColor = "surface",
  className,
  ...restProps
}: LkCardProps) {
  const lkCardAttrs = useMemo(
    () => propsToDataAttrs({ scaleFactor, variant, material, className, opticalCorrection }, "card"),
    [scaleFactor, variant, material, className, opticalCorrection]
  );

  console.log(restProps);

  return (
    <div
      {...lkCardAttrs}
      lk-component="card"
      className={`${isClickable ? "clickable" : ""} ${"bg-" + bgColor} ${className || ""}`}
      {...restProps}
    >
      <div lk-card-element="padding-box" lk-card-optical-correction={opticalCorrection}>
        <div lk-component="slot" lk-slot="children">
          {children}
        </div>
        {/* todo: define types for material scrim thickness, */}
      </div>
      {material === "glass" && (
        <div lk-component="lk-material-scrim" lk-material-scrim-thickness={materialThickness ?? "default"} />
      )}
    </div>
  );
}
