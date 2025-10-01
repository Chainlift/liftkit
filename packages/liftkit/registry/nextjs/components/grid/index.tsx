"use client";
import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/grid/grid.css";
import PlaceholderBlock from "@/registry/nextjs/components/placeholder-block";

// The LiftkitGrid type definition
interface LkGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: LkSizeUnit;
  autoResponsive?: boolean; // Mark as optional since we provide a default
  className?: string; // Optional. Specifying manually here because internal logic checks for it.
}

/**
 * A responsive grid component that provides flexible layout options.
 * NOTE: It's deliberately low-detail. If you need complex features, like areas, asymmetrical column widths, or manual row sizing,
 * we strongly recommend defining your own CSS grid styles and using the `className` prop to apply them.
 *
 * @param columns - The number of columns for the grid layout
 * @param gap - The spacing between grid items. Expects LkSizeUnit from 3xs to 4xl.
 * @param autoResponsive - Whether the grid should automatically adjust to different screen sizes. Defaults to false
 * @param children - The child elements to be rendered within the grid
 * @param restProps - Additional props that will be passed to the underlying div element
 *
 * @returns A div element with grid layout styling and data attributes
 */

export default function Grid({
  columns = 2,
  gap = "md",
  autoResponsive = false, // Default value
  children,
  className,
  ...restProps
}: LkGridProps) {
  const lkGridAttrs = useMemo(
    () => propsToDataAttrs({ autoResponsive, gap, ...restProps }, "grid"),
    [autoResponsive, columns, gap]
  );

  /**Render placeholder blocks for columns if no children are passed */

  let placeholderBlocks = [];

  if (!children) {
    for (let i = 0; i < columns; i++) {
      placeholderBlocks.push(<PlaceholderBlock key={i * 2} />);
      if (!className) {
        placeholderBlocks.push(<PlaceholderBlock key={i * 2 + 1} />);
      }
    }
    children = placeholderBlocks;
  }

  function getColumnCount() {
    if (!className) {
      return `repeat(${columns}, 1fr)`;
    }
  }

  const columnCount = {};

  return (
    <>
      <div
        data-lk-component="grid"
        {...lkGridAttrs}
        {...restProps}
        className={className}
        style={{ gridTemplateColumns: getColumnCount(), ...restProps.style }}
      >
        {children || placeholderBlocks}
      </div>
    </>
  );
}
