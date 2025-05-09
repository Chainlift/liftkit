import { useMemo, ElementType, JSX } from "react";
import { propsToDataAttrs } from "../utilities";

type LkSemanticTag = keyof JSX.IntrinsicElements;

interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: string; // Ideally: LkFontClass
  // content?: string;
  color?: LkColor;
  tag?: LkSemanticTag;
  // children?: 
}

export default function Text({
  tag = "div",
  fontClass = "display2-bold",
 children,
  style,
  ...rest
}: LkTextProps) {
  const Tag = tag as ElementType;

  const textAttrs = useMemo(() => propsToDataAttrs(rest, "lk-text"), [rest]);

  return (
    <Tag className={`${fontClass}`} style={style} {...textAttrs}>
      {children}
    </Tag>
  );
}
