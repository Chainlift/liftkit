import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: LkContainerWidth;
}

export default function Container({
  maxWidth = "md",
  children,
  ...rest
}: LkContainerProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ maxWidth }, "lk-container"),
    [maxWidth]
  );

  return (
    <div {...dataAttrs} {...rest}>
      {children}
    </div>
  );
}
