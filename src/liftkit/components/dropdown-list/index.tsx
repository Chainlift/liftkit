import styles from "./dropdown-list.module.css";
import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkDropdownListProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  children?: React.ReactNode;
}

export default function DropdownList(props: LkDropdownListProps) {
  const { children, ...restProps } = props;

  const listAttrs = useMemo(() => propsToDataAttrs(restProps, "lk-dropdown-list"), [restProps.isOpen]);

  return (
    <div {...listAttrs}>
      <div lk-component="column">{children}</div>
    </div>
  );
}
