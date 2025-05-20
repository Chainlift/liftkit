import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/containers/containers.css";

interface LkContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: LkContainerWidth;
}

export default function Container({
  maxWidth = "md",
  children,
  ...restProps
}: LkContainerProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ maxWidth }, "container"),
    [maxWidth],
  );

  return (
    <div {...dataAttrs} {...restProps}>
      {children}
    </div>
  );
}
