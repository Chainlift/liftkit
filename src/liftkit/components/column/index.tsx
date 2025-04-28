import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
  children?: React.ReactNode;
}

export default function Column(props: LkColumnProps) {
  const { children, ...restProps } = props;

  const lkColumnAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-column"),
    [restProps]
  );

  return (
    <div lk-component="column" {...lkColumnAttrs}>
      {children}
    </div>
  );
}
