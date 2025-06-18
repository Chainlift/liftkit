import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/section/section.css";

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "none";

interface LkSectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SpacingSize;
  container?: React.ReactNode;
  px?: SpacingSize;
  py?: SpacingSize;
  pt?: SpacingSize;
  pb?: SpacingSize;
  pl?: SpacingSize;
  pr?: SpacingSize;
  children?: React.ReactNode;
}

export default function Section(props: LkSectionProps) {
  /**TODO:  Give section default padding of "md" */
  const { container, children, padding, px, py, pt, pb, pl, pr, ...restProps } = props;

  const lkSectionAttrs = useMemo(
    () => propsToDataAttrs({ container, children, padding, px, py, pt, pb, pl, pr }, "section"),
    [container, children, padding, px, py, pt, pb, pl, pr]
  );

  return (
    <section {...lkSectionAttrs} {...restProps}>
      <div data-lk-component="section">{container || children}</div>
    </section>
  );
}
