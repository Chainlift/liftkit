import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

// The LiftkitGrid type definition
interface LkGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: number;
  gap: LkSizeUnit;
  autoResponsive?: boolean; // Mark as optional since we provide a default
}

export default function Grid({
  autoResponsive = false, // Default value
  children,
  ...restProps
}: LkGridProps) {
  const lkGridAttrs = useMemo(
    () => propsToDataAttrs({ ...restProps, autoResponsive }, "grid"),
    [restProps, autoResponsive],
  );

  return (
    <div lk-component="grid" {...lkGridAttrs}>
      {children}
    </div>
  );
}
