import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

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
    () => propsToDataAttrs(restProps, "lk-row"),
    [
      restProps.alignItems,
      restProps.justifyContent,
      restProps.gap,
      restProps.wrapChildren,
      restProps.defaultChildBehavior,
    ]
  );

  return <div {...lkRowAttrs}>{children}</div>;
}
