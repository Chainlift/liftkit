import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/row/row.css";

type LkSizeUnit = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface LkRowProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: LkSizeUnit;
  wrapChildren?: boolean;
  defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
}

export default function Row(props: LkRowProps) {
  const { children, alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior, ...restProps } = props;

  console.log("Row props:", restProps);

    const lkRowAttrs = useMemo(
    () =>
      propsToDataAttrs(
        { alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior },
        "row"
      ),
    [alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior]
  );

  return (
    <div {...lkRowAttrs} {...restProps} lk-component="row">
      {children}
    </div>
  );
}