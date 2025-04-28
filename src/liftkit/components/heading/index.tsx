import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

type LkHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface LkHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: LkHeadingTag;
  fontClass?: string; // Should be LkFontClass in production
  content?: string;
}

export default function Heading({
  tag = "h2",
  fontClass = "display2-bold",
  content = "Heading",
  ...rest
}: LkHeadingProps) {
  const headingAttrs = useMemo(
    () => propsToDataAttrs(rest, "lk-heading"),
    [rest]
  );
  const Tag = tag;

  return (
    <Tag className={`lk-font-${fontClass}`} {...headingAttrs}>
      {content}
    </Tag>
  );
}
