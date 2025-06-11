import "@/registry/nextjs/material-layer/material-layer.css";

type LkMatProps_Glass = {
  thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
};

type LkMatProps_Flat = {};

interface LkMaterialLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number; // Optional z-index for the material layer. Different use cases might need it to be at different z-indexes.
  material?: "glass" | "debug";
  materialSpecs?: LkMatProps_Flat | LkMatProps_Glass; // Optional material-specific properties
}

export default function MaterialLayer({ zIndex = 0, material, materialSpecs }: LkMaterialLayerProps) {

  return (
    <>
      <div lk-component="material-layer" lk-material-type={material} style={{zIndex: zIndex}}></div>
    </>
  );
}
