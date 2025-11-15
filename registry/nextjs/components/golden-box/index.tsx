import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import { Slot } from "@radix-ui/react-slot";

import "./goldenbox.css";

export interface LkGoldenBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  opticalCorrection?: "top" | "left" | "right" | "bottom" | "x" | "y" | "all" | "none";
  children?: React.ReactNode;
  asChild?: boolean;
}

/**
 * A simple container component with golden ratio scaling and optical correction.
 *
 * @param scaleFactor - LkFontClass. Scales box according to this font size. Defaults to "body"
 * @param opticalCorrection - Optical correction method to apply. Defaults to "none"
 * @param children - Content to be rendered inside the box
 * @param restProps - Additional props passed through to the root div element
 */
export function GoldenBox({
  scaleFactor = "body",
  opticalCorrection = "none",
  children,
  asChild = false,
  ...restProps
}: LkGoldenBoxProps) {
  const Comp = asChild ? Slot : "div";

  const lkGoldenBoxAttrs = useMemo(() => propsToDataAttrs({ scaleFactor }, "golden-box"), [scaleFactor]);

  return (
    <Comp
      data-lk-component="golden-box"
      data-lk-golden-box-optical-correction={opticalCorrection}
      {...lkGoldenBoxAttrs}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
