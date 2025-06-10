import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/column/column.css";

interface LkColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
  children?: React.ReactNode;
  gap?: LkSizeUnit;
}

export default function Column(props: LkColumnProps) {
  const { children, alignItems, justifyContent, gap, ...restProps } = props;

  const lkColumnAttrs = useMemo(
    () => propsToDataAttrs({alignItems, justifyContent, gap}, "column"),
    [alignItems, justifyContent, gap],
  );

  return (
    <div {...lkColumnAttrs} {...restProps} lk-component="column">
      {children}
    </div>
  );
}