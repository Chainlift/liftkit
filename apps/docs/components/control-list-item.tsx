import type { ReactNode } from "react";
import "./control-list-item.css";
import {
  GoldenBox,
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  StateLayer,
  type LkGoldenBoxProps,
} from "liftkit";

/** The font classes a GoldenBox scale factor can follow. */
type ScaleClass = Extract<
  LkFontClass,
  | "display1"
  | "display2"
  | "title1"
  | "title2"
  | "title3"
  | "heading"
  | "body"
  | "callout"
  | "subheading"
  | "label"
  | "caption"
  | "capline"
>;

const DEFAULT_SCALE_FACTOR: ScaleClass = "subheading";

/**
 * Docs-only: a list item with a title and an optional description, flanked by optional leading and trailing content
 * (an icon, a badge, a value). The text block grows; the two meta slots take only the room they need.
 *
 * The title uses the GoldenBox's scale factor as its font class; the description is always subheading.
 */
export function ControlListItem({
  title,
  titleMeta,
  description,
  leadingMeta,
  trailingMeta,
  isLink = false,
  onSelect,
  goldenBoxProps,
  variant = "default",
  sliderValue,
  onSliderChange,
  sliderMin = 0,
  sliderMax = 100,
  sliderStep = 1,
  children,
}: {
  title: ReactNode;
  /** Rendered inline, right after the title. */
  titleMeta?: ReactNode;
  description?: ReactNode;
  /** Rendered before the text, e.g. an icon or avatar. */
  leadingMeta?: ReactNode;
  /** Rendered after the text, e.g. a chevron or a value. */
  trailingMeta?: ReactNode;
  /** Adds a state layer, so the item reacts to hover, press and focus. */
  isLink?: boolean;
  /**
   * Makes the whole item clickable. The title becomes a button stretched over the item, so controls placed in the
   * meta slots stay separate, working elements as long as they sit above it (position: relative; z-index: 2).
   */
  onSelect?: () => void;
  /** Props for the GoldenBox. The scale factor defaults to "label". */
  goldenBoxProps?: Omit<LkGoldenBoxProps, "children">;
  /**
   * "default" is the plain item. "slider" adds a slider under the row, meant to control the value shown in the
   * trailing meta.
   */
  variant?: "default" | "slider";
  /** The slider variant's slider value. */
  sliderValue?: number;
  /** The slider variant's range and step. Default 0 to 100 in whole numbers. */
  sliderMin?: number;
  sliderMax?: number;
  sliderStep?: number;
  /** Rendered under the row, full width, e.g. a control too big for the trailing slot. */
  children?: ReactNode;
  /** Called with the new value when the slider variant's slider moves. */
  onSliderChange?: (value: number) => void;
}) {
  const scaleFactor = goldenBoxProps?.scaleFactor ?? DEFAULT_SCALE_FACTOR;
  // "none" has no font class to follow, so the text uses the default
  const titleClass: ScaleClass =
    scaleFactor === "none" ? DEFAULT_SCALE_FACTOR : (scaleFactor as ScaleClass);

  return (
    <GoldenBox {...goldenBoxProps} scaleFactor={scaleFactor}>
      {isLink && <StateLayer />}
      <div className="flex-h items-center gap-md">
        {leadingMeta && <div className="flex-none">{leadingMeta}</div>}
        {/* Takes the width the trailing controls leave (basis 0), instead of its full text width, so any shrinking falls on
            the trailing side once this is at its minimum */}
        <div style={{ flex: "1 1 0" }}>
          {/* The row carries the title's font class and the h3 inherits it. Font sizes are in em, so putting the class on both would apply the size twice. */}
          <div
            className={`flex-h items-center gap-xs ${description ? "mb-xs " : ""}${titleClass}-bold`}
          >
            <h3 className="control-list-item-title">
              {onSelect ? (
                <button
                  type="button"
                  className="control-list-item-trigger"
                  onClick={onSelect}
                >
                  {title}
                </button>
              ) : (
                title
              )}
            </h3>
            {titleMeta}
          </div>
          {description && (
            <p className="caption color-onsurfacelow">{description}</p>
          )}
        </div>
        {trailingMeta && (
          // May shrink (min-width: 0), so a trailing control with a flexible width can give way, but only once the
          // text beside it is down to its minimum width
          <div style={{ flex: "0 1 auto", minWidth: 0 }}>{trailingMeta}</div>
        )}
      </div>
      {variant === "slider" && (
        <Slider
          className="w-full mt-xs"
          min={sliderMin}
          max={sliderMax}
          step={sliderStep}
          value={sliderValue}
          onValueChange={(next) =>
            onSliderChange?.(Array.isArray(next) ? next[0] : next)
          }
          // Above the stretched button and the state layer, so dragging works
          style={{ position: "relative", zIndex: 2 }}
        >
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb
                aria-label={
                  typeof title === "string" ? `${title} tone` : "Tone"
                }
              />
            </SliderTrack>
          </SliderControl>
        </Slider>
      )}
      {children && <div className="mt-sm">{children}</div>}
    </GoldenBox>
  );
}
