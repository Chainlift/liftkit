import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";

type LkSizeUnit =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

interface LkRowProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
  gap?: LkSizeUnit;
  wrapChildren?: boolean;
  defaultChildBehavior?:
    | "auto-grow"
    | "auto-shrink"
    | "ignoreFlexRules"
    | "ignoreIntrinsicSize";
}

export default function Row(props: LkRowProps) {
  const { children, ...restProps } = props;

  const lkRowAttrs = useMemo(
    () => propsToDataAttrs(restProps, "row"),
    [restProps],
  );

  return (
    <div {...lkRowAttrs} {...restProps} lk-component="row">
      {children}
    </div>
  );
}
