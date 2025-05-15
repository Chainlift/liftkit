import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "./heading.css";

type LkHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface LkHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: LkHeadingTag;
  fontClass?: string; // Should be LkFontClass in production
  children?: React.ReactNode;
  fontColor?: string;
  // content?: string;
}

export default function Heading({
  tag = "h2",
  fontClass = "display2-bold",
  fontColor,
  // content = "Heading",
  children,
  ...restProps
}: LkHeadingProps) {
  const headingAttrs = useMemo(
    () => propsToDataAttrs(restProps, "heading"),
    [restProps],
  );
  const Tag = tag;

  return (
    <Tag
      lk-component="heading"
      className={`${fontClass} color-${fontColor}`}
      {...headingAttrs}
    >
      {children}
    </Tag>
  );
}
