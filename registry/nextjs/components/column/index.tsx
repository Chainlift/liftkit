import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/column/column.css";

interface LkColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: LkSizeUnit | "none";
  wrapChildren?: boolean;
  defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
  children?: React.ReactNode;
}

export default function Column(props: LkColumnProps) {
  const { children, alignItems="stretch", justifyContent="start", gap, wrapChildren, defaultChildBehavior, ...restProps } = props;

  const lkColumnAttrs = useMemo(
    () => propsToDataAttrs({ alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior }, "column"),
    [alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior]
  );

  return (
    <div {...lkColumnAttrs} {...restProps} data-lk-component="column">
      {children}
    </div>
  );
}
