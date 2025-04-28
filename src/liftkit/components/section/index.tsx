import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkSectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  container?: React.ReactNode;
}

export default function Section(props: LkSectionProps) {
  const { container, children, ...restProps } = props;

  const lkSectionAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-section"),
    [restProps]
  );

  return (
    <section {...lkSectionAttrs}>
      <div lk-component="slot" lk-slot="container">
        {container}
      </div>
      {children}
    </section>
  );
}
