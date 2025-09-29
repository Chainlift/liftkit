import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/heading/heading.css";

type LkHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface LkHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tag?: LkHeadingTag;
  fontClass?: string; // Should be LkFontClass in production
  children?: React.ReactNode;
  fontColor?: string;
  // content?: string;
  className?: string; // Optional. Specifying manually here because internal logic checks for it.
}

/**
 * A heading component you probably don't need because you can use the native HTML heading elements directly. But it's here to maximize consistency with other LiftKit instances in different environments like Figma or Webflow.
 *
 * @param tag - The HTML heading tag to render (h1, h2, h3, h4, h5, h6). Defaults to "h2"
 * @param fontClass - CSS class name for font styling. Defaults to "display2-bold"
 * @param fontColor - Color value that will be applied as "color-{fontColor}" CSS class
 * @param children - The content to be displayed inside the heading element
 * @param restProps - Additional props that will be converted to data attributes with "heading" prefix
 * @returns A semantic heading element with the specified tag and styling
 */
export default function Heading({
  tag = "h2",
  fontClass = "display2-bold",
  fontColor,
  // content = "Heading",
  className,
  children,
  ...restProps
}: LkHeadingProps) {
  const headingAttrs = useMemo(() => propsToDataAttrs(restProps, "heading"), [restProps]);
  const Tag = tag;

  return (
    <Tag data-lk-component="heading" className={`${fontClass} color-${fontColor} ${className || ""}`} {...headingAttrs}>
      {children}
    </Tag>
  );
}
