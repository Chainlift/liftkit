import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";

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
  () => propsToDataAttrs(restProps, "column"),
  [restProps],
);

  return (
    <div {...lkColumnAttrs} {...restProps} lk-component="column" >
      {children}
    </div>
  );
}
