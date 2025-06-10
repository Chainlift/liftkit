import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/card/card.css";

export interface LkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  variant?: "fill" | "outline" | "transparent";
  material?: "flat" | "glass" | "rubber";
  materialThickness?: "thick" | "default" | "thin"; // Optional, not added to type def yet. only has an effect if material === glass
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  isClickable?: boolean;
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
  ...restProps
}: LkCardProps) {
  const lkCardAttrs = useMemo(
    () => propsToDataAttrs({ scaleFactor, variant, material, opticalCorrection }, "card"),
    [scaleFactor, variant, material, opticalCorrection]
  );

  return (
    <div
      {...lkCardAttrs}
      {...restProps}
      lk-component="card"
      className={`${isClickable ? "clickable" : ""}`}
    >
      <div lk-component="slot" lk-slot="children">
        {children}
      </div>
      {/* todo: define types for material scrim thickness, */}
      {material === "glass" && (
        <div lk-component="lk-material-scrim" lk-material-scrim-thickness={materialThickness ?? "thick"} />
      )}
    </div>
  );
}
