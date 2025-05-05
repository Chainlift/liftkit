import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkSectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  container?: React.ReactNode;
  px?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  py?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  pt?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  pb?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  pl?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  pr?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
}

export default function Section(props: LkSectionProps) {
  const { container, children, ...restProps } = props;

  const lkSectionAttrs = useMemo(
    () => propsToDataAttrs(restProps, "section"),
    [restProps],
  );

  return (
    <section {...lkSectionAttrs}>
      <div lk-component="section">
        {container}
      </div>
      {children}
    </section>
  );
}
