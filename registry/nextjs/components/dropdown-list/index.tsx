import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/dropdown-list/dropdown-list.css";

interface LkDropdownListProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  children?: React.ReactNode;
}

export default function DropdownList(props: LkDropdownListProps) {
  const { children, ...restProps } = props;

  const listAttrs = useMemo(
    () => propsToDataAttrs(restProps, "dropdown-list"),
    [restProps],
  );

  return (
    <div lk-component="dropdown-list" {...listAttrs}>
      <div lk-component="column">{children}</div>
    </div>
  );
}
