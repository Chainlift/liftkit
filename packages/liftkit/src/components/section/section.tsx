import { Children, type ComponentProps } from "react";
import "../../css/components/lk-section.css";
import { Placeholder } from "../placeholder/placeholder";

export type LkSectionProps = ComponentProps<"div"> & {
  /** Padding on all sides: any LiftKit size token, or "none". @default "md" */
  padding?: LkSizeUnit | "none";
};

/**
 * A flex column that pads its content with a LiftKit size token. Designed to
 * hold Containers. Shows a placeholder when it has no children.
 *
 * @param padding - Padding on all sides. Any LkSizeUnit ("5xs" to "5xl"), or "none". Defaults to "md"
 * @param children - Content of the section, usually a Container
 * @param props - Additional props passed through to the root div element
 */
export function Section({ padding = "md", children, ...props }: LkSectionProps) {
  return (
    <div data-lk-component="section" data-lk-section-padding={padding} {...props}>
      {Children.toArray(children).length > 0 ? children : <Placeholder label="Section" />}
    </div>
  );
}
