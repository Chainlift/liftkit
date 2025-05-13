import { useMemo, ElementType, JSX } from "react";
import { propsToDataAttrs } from "../utilities";

type LkSemanticTag = keyof JSX.IntrinsicElements;

interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: LkFontClass;
  content?: string;
  color?: LkColor;
  tag?: LkSemanticTag;
  // children?: 
}

export default function Text({
  tag = "div",
  fontClass = "display2-bold",
  style,
  color,
  children,
  ...rest
}: LkTextProps) {
  const Tag = tag as ElementType;

  const textAttrs = useMemo(() => propsToDataAttrs(rest, "text"), [rest]);

  return (

    <Tag
      lk-component="text"
      className={`${fontClass} color-${color}`}
      {...rest}
      {...textAttrs}
    >
      {children}
    </Tag>
  );
}
