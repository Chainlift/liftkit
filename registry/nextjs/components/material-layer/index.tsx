import "./material-layer.css";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { useMemo } from "react";

/** LKMatProps is an object of any of the given types. Each material type has different unique props. */
type LkMatProps = LkMatProps_Glass | LkMatProps_Flat;

type LkMatProps_Glass = {
  thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
  tint?: LkColor; // Optional tint color for the glass material.
};

type LkMatProps_Flat = {};

interface LkMaterialLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number; // Optional z-index for the material layer. Different use cases might need it to be at different z-indexes.
  material?: "glass" | "debug";
  materialSpecs?: LkMatProps_Flat | LkMatProps_Glass; // Optional material-specific properties
}

export default function MaterialLayer({ zIndex = 0, material, materialSpecs }: LkMaterialLayerProps) {
  /**If materialSpecs are provided, loop through the keys and pass each one as a data attribute to the component. */

  let lkMatProps: LkMatProps;

  if (materialSpecs) {
    console.log("Material specs provided:", materialSpecs);
    lkMatProps = useMemo(() => propsToDataAttrs(materialSpecs, `${material}`), [materialSpecs]);
    console.log("LK Material Props:", lkMatProps);
  }

  return (
    <>
      <div lk-component="material-layer" lk-material-type={material} style={{ zIndex: zIndex }}></div>
    </>
  );
}
