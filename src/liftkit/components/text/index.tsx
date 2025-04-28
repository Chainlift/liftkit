import { useMemo, ElementType, JSX } from "react";
import { propsToDataAttrs } from "../utilities";

type LkSemanticTag = keyof JSX.IntrinsicElements;

interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: string; // Ideally: LkFontClass
  content?: string;
  color?: LkColor;
  tag?: LkSemanticTag;
}

export default function Text({
  tag = "div",
  fontClass = "display2-bold",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  ...rest
}: LkTextProps) {
  const Tag = tag as ElementType;

  const textAttrs = useMemo(() => propsToDataAttrs(rest, "lk-text"), [rest]);

  return (
    <Tag className={`${fontClass}`} {...textAttrs}>
      {content}
    </Tag>
  );
}
