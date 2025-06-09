"use client";
import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/grid/grid.css";

// The LiftkitGrid type definition
interface LkGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: number;
  gap: LkSizeUnit;
  autoResponsive?: boolean; // Mark as optional since we provide a default
}

/**
 * A responsive grid component that provides flexible layout options.
 *
 * @param columns - The number of columns for the grid layout
 * @param gap - The spacing between grid items
 * @param autoResponsive - Whether the grid should automatically adjust to different screen sizes. Defaults to false
 * @param children - The child elements to be rendered within the grid
 * @param restProps - Additional props that will be passed to the underlying div element
 *
 * @returns A div element with grid layout styling and data attributes
 */
export default function Grid({
  columns,
  gap = "md",
  autoResponsive = false, // Default value
  children,
  ...restProps
}: LkGridProps) {
  const lkGridAttrs = useMemo(
    () => propsToDataAttrs({ autoResponsive, gap, ...restProps }, "grid"),
    [autoResponsive, columns, gap]
  );

  return (
    <>
      <div
        lk-component="grid"
        {...lkGridAttrs}
        {...restProps}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {children}
      </div>
    </>
  );
}
