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
  lightExpression?: string; //Optional. The value to pass to the light's background prop. Should be a gradient.
};

type LkMatProps_Flat = {
  bgColor?: LkColorWithOnToken;
  textColor?: LkColor;
};

interface LkMaterialLayerProps extends React.HTMLAttributes<HTMLDivElement> {
  zIndex?: number; // Optional z-index for the material layer. Different use cases might need it to be at different z-indexes.
  material?: "flat" | "glass" | "debug";
  materialProps?: LkMatProps_Flat | LkMatProps_Glass; // Optional material-specific properties
}

export default function MaterialLayer({ zIndex = 0, material, materialProps }: LkMaterialLayerProps) {
  /**If materialProps are provided, loop through the keys and pass each one as a data attribute to the component. */
  let lkMatProps: LkMatProps;

  if (materialProps) {
    console.log("Material specs provided:", materialProps);
    lkMatProps = useMemo(() => propsToDataAttrs(materialProps, `${material}`), [materialProps]);
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
        {material === "glass" && (
          <div>
            <div lk-material-sublayer="texture">
              {(materialProps as LkMatProps_Glass)?.tint && (
                <div lk-material-sublayer="tint">
                  {(materialProps as LkMatProps_Glass)?.light && <div lk-material-sublayer="light"></div>}
                </div>
              )}
            </div>
            <div lk-material-sublayer="base-glass-fill"></div>
          </div>
        )}

        {material === "flat" && (
          <div><div lk-material-sublayer="bgColor"></div></div>
        )}
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
            opacity: ${(materialProps as LkMatProps_Glass)?.tintOpacity || 0.2};
            background-color: var(--lk-${(materialProps as LkMatProps_Glass)?.tint || "transparent"});
          }

          [lk-material-sublayer="texture"] {
            --blur-thick: var(--lk-size-lg);
            --blur-normal: var(--lk-size-md);
            --blur-thin: var(--lk-size-xs);

            z-index: 1;
            isolation: isolate;
            backdrop-filter: blur(var(--blur-${(materialProps as LkMatProps_Glass)?.thickness || "normal"}));
          }

          [lk-material-sublayer="light"] {
            background: ${(materialProps as LkMatProps_Glass)?.lightExpression || "none"}
            mix-blend-mode: soft-light;
            opacity: 1;
          }

          [lk-material-sublayer="base-glass-fill"] {
            background-color: var(--lk-surface);
            opacity: ${getGlassFillOpacity((materialProps as LkMatProps_Glass)?.thickness || "normal")};
          }
        }
        [lk-material-type="flat"] {
          [lk-material-sublayer="bgColor"] {
            background-color: ${getBgColor((materialProps as LkMatProps_Flat)?.bgColor)};

          }
        }
      `}</style>
    </>
  );
}

function getGlassFillOpacity(thickness: "thick" | "normal" | "thin") {
  switch (thickness) {
    case "thick":
      return 0.8;
    case "normal":
      return 0.6;
    case "thin":
      return 0.4;
    default:
      return 0.6;
  }
}

function getBgColor(token: LkColorWithOnToken | undefined) {
  console.log("token", token);

  if (token) {
    return `var(--lk-${token})`;
  } else {
    return `var(--lk-surface)`;
  }
}
