import type { ReactNode } from "react";
import { GoldenBox } from "liftkit";

/** A panel header: a title and subtitle that grow, with an optional row of actions (e.g. icon buttons) at the end. */
export function PanelHeader({
  title,
  subtitle,
  leading,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Rendered at the start of the header, e.g. a back button. */
  leading?: ReactNode;
  /** Rendered in a row at the end of the header. */
  children?: ReactNode;
}) {
  return (
    <GoldenBox
      scaleFactor="heading"
      opticalCorrection="y"
      className="border-b border-color-outlinevariant"
    >
      <div className="flex-h items-center gap-sm">
        {leading}
        <div className="flex-grow">
          <h2 className={subtitle ? "heading mb-xs" : "heading"}>{title}</h2>
          {subtitle && <p className="subheading">{subtitle}</p>}
        </div>
        {children && (
          <div className="flex-h items-center gap-xs">{children}</div>
        )}
      </div>
    </GoldenBox>
  );
}
