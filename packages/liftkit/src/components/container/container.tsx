import { Children, type ComponentProps } from "react";
import "../../css/components/lk-container.css";
import { Placeholder } from "../placeholder/placeholder";

export type LkContainerProps = ComponentProps<"div"> & {
  /** Maximum content width. xs = 80ch, sm = 1280px, md = 1440px, lg = 1600px, xl = 1920px, none = 100%. @default "md" */
  maxWidth?: LkContainerWidth;
};

/**
 * A centered flex column that caps its content at a maximum width. Designed
 * to sit inside a Section. Shows a placeholder when it has no children.
 *
 * @param maxWidth - Maximum content width. Defaults to "md" (1440px)
 * @param children - Content of the container
 * @param props - Additional props passed through to the root div element
 */
export function Container({ maxWidth = "md", children, ...props }: LkContainerProps) {
  return (
    <div data-lk-component="container" data-lk-container-max-width={maxWidth} {...props}>
      {Children.toArray(children).length > 0 ? children : <Placeholder label="Container" />}
    </div>
  );
}
