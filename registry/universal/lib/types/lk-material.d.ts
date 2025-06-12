export {};

declare global {
  type LkMaterial = "flat" | "glass" | "rubber";

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
    color?: LkColor; // Color of the flat material.
    opacity?: number; // Opacity of the flat material. Defaults to 1.
  };
}
