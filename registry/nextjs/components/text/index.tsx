import { useMemo, ElementType, JSX } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text/text.css";

type LkSemanticTag = keyof JSX.IntrinsicElements;

interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: LkFontClass;
  content?: string;
  color?: LkColor;
  tag?: LkSemanticTag;
}

export default function Text(props: LkTextProps) {
  const { tag = "div", fontClass = "display2-bold", color, children, style, ...restProps } = props;
  const Tag = tag as ElementType;

  /**Temporarily removing the attr spreader because it's not being used */
  // const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);

  return (
    <Tag className={`${fontClass} color-${color}`} style={style} {...restProps}>
      {children}
    </Tag>
  );
}
