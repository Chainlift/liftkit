import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

interface LkSectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?:  SpacingSize;
  container?: React.ReactNode;
 px?: SpacingSize;
  py?: SpacingSize;
  pt?: SpacingSize;
  pb?: SpacingSize;
  pl?: SpacingSize;
  pr?: SpacingSize;
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
