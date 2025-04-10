import styles from "./column.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  children?: React.ReactNode;
}

export default function Column(props: LkColumnProps) {
  const { children, ...restProps } = props;

  const lkColumnAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-column"),
    [restProps.alignItems, restProps.justifyContent]
  );

  return <div {...lkColumnAttrs}>{children}</div>;
}
