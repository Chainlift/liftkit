import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/row/row.css";



interface LkRowProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  gap?: LkSizeUnit;
  wrapChildren?: boolean;
  defaultChildBehavior?: "auto-grow" | "auto-shrink" | "ignoreFlexRules" | "ignoreIntrinsicSize";
}

export default function Row(props: LkRowProps) {
  const {
    children,
    alignItems="start",
    justifyContent="start",
    gap,
    wrapChildren,
    defaultChildBehavior,
    ...restProps
  } = props;

  const lkRowAttrs = useMemo(
    () =>
      propsToDataAttrs(
        { alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior },
        "row"
      ),
    [alignItems, justifyContent, gap, wrapChildren, defaultChildBehavior]
  );

  return (
    <div {...lkRowAttrs} {...restProps} data-lk-component="row">
      {children}
    </div>
  );
}