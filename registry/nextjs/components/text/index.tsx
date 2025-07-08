import { useMemo, ElementType, JSX } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text/text.css";

type LkSemanticTag = keyof JSX.IntrinsicElements;

export interface LkTextProps extends React.HTMLAttributes<HTMLElement> {
  fontClass?: LkFontClass;
  content?: string;
  color?: LkColor;
  tag?: LkSemanticTag;
  className?: string; // explicitly extracting because internal logic controls its rendering order
}

export default function Text({ tag = "div", fontClass, color, children, style, className, ...restProps }: LkTextProps) {
  const Tag = tag as ElementType;



  /**Temporarily removing the attr spreader because it's not being used */
  // const textAttrs = useMemo(() => propsToDataAttrs(restProps, "text"), [restProps]);

  return (
    <Tag data-lk-component="text" className={`${fontClass || ""} ${color ? "color-" + color : ""} ${className || ''}`} style={style} {...restProps}>
      {children}
    </Tag>
  );
}
