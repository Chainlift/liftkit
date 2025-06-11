"use client";
// import "./material-layer-core.css";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { useMemo } from "react";

/** LKMatProps is an object of any of the given types. Each material type has different unique props. */
type LkMatProps = LkMatProps_Glass | LkMatProps_Flat;

type LkMatProps_Glass = {
  thickness?: "thick" | "normal" | "thin"; // Thickness of the glass material. Thicker material blurs more.
  tint?: LkColor; // Optional tint color for the glass material.
  tintOpacity?: number; // Optional opacity for the tint color. Defaults to 0.5.
  light?: boolean; // Optional. If true, adds a secondary layer for luminance effects.
  lightValue?: string; //Optional. The value to pass to the light's background prop. Should be a gradient.
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

  switch (material) {
    case "glass":
      break;
    case "debug":
      break;
  }

  return (
    <>
      <div lk-component="material-layer" lk-material-type={material} style={{ zIndex: zIndex }}>
        <div lk-material-sublayer="texture">
          <div lk-material-sublayer="tint">
            <div lk-material-sublayer="light"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          [lk-component="material-layer"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            [lk-material-sublayer] {
              position: absolute;
              inset: 0;
              pointer-events: none;
            }
          }
        `}
      </style>

      {/** Glass behavior */}

      <style jsx>{`
        [lk-material-type="glass"] {
          [lk-material-sublayer="tint"] {
            opacity: ${(materialSpecs as LkMatProps_Glass).tintOpacity || 0.2};
            background-color: var(--lk-${(materialSpecs as LkMatProps_Glass).tint || "primary"});
          }

          [lk-material-sublayer="texture"] {
            --blur-thick: var(--lk-size-lg);
            --blur-normal: var(--lk-size-md);
            --blur-thin: var(--lk-size-xs);

            z-index: 1;
            isolation: isolate;
            backdrop-filter: blur(var(--blur-${(materialSpecs as LkMatProps_Glass).thickness || "normal"}));
          }

          [lk-material-sublayer="light"] {
            background: linear-gradient(45deg, rgba(255, 255, 255, 0), rgb(255, 255, 255));
            mix-blend-mode: soft-light;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
