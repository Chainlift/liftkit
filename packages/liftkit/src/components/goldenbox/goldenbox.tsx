import { useMemo } from "react";
import "../../css/components/lk-goldenbox.css";

export interface LkGoldenBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  noPadding?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  children?: React.ReactNode;
  asChild?: boolean;
}

/**
 * A simple container component with golden ratio scaling and optical correction.
 *
 * @param scaleFactor - LkFontClass. Scales box according to this font size. Defaults to "body"
 * @param opticalCorrection - Optical correction method to apply. Defaults to "none"
 * @param noPadding - Sides to remove padding from. Defaults to "none"
 * @param children - Content to be rendered inside the box
 * @param restProps - Additional props passed through to the root div element
 */
export function GoldenBox({
  scaleFactor = "body",
  opticalCorrection = "none",
  noPadding = "none",
  children,
  asChild = false,
  ...restProps
}: LkGoldenBoxProps) {
  const lkGoldenBoxAttrs = useMemo(() => propsToDataAttrs({ scaleFactor }, "golden-box"), [scaleFactor]);

  return (
    <div
      data-lk-component="golden-box"
      data-lk-golden-box-optical-correction={opticalCorrection}
      data-lk-golden-box-no-padding={noPadding}
      {...lkGoldenBoxAttrs}
      {...restProps}
    >
      {children}
    </div>
  );
}

export function propsToDataAttrs(props: Record<string, unknown>, baseAttr: string): Record<string, string> {
  const dataAttrs: Record<string, string> = {};

  Object.entries(props).forEach(([key, value]) => {
    // Only process serializable values
    if (value === undefined || value === null || typeof value === "function" || typeof value === "object") return;

    const kebabKey = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    dataAttrs[`data-lk-${baseAttr}-${kebabKey}`] = String(value);
  });

  return dataAttrs;
}
