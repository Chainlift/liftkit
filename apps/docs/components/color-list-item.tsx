import type { ReactNode } from "react";
import "./color-list-item.css";
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

/** Font classes from largest to smallest. */
const FONT_SCALE = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "subheading",
  "body",
  "callout",
  "label",
  "caption",
  "capline",
] as const;

type ScaleClass = (typeof FONT_SCALE)[number];

const DEFAULT_SCALE_FACTOR: ScaleClass = "label";

/** The description's font class: one step smaller than the title's, but never smaller than caption. */
function descriptionClassFor(titleClass: ScaleClass): ScaleClass {
  const next = FONT_SCALE[FONT_SCALE.indexOf(titleClass) + 1] ?? titleClass;
  return next === "capline" ? titleClass : next;
}

/**
 * Docs-only: a list item with a title and an optional description, flanked by optional leading and trailing content
 * (an icon, a badge, a value). The text block grows; the two meta slots take only the room they need.
 *
 * The title uses the GoldenBox's scale factor as its font class, and the description the next one down.
 */
export function ColorListItem({
  title,
  description,
  leadingMeta,
  trailingMeta,
  isLink = false,
  onSelect,
  goldenBoxProps,
  variant = "keyColor",
  sliderValue,
  onSliderChange,
}: {
  title: ReactNode;
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
   * "keyColor" is the plain item. "tone" adds a slider under the row, meant to control the tone shown in the
   * trailing meta.
   */
  variant?: "keyColor" | "tone";
  /** The tone variant's slider value, 0-100. */
  sliderValue?: number;
  /** Called with a whole-number tone when the tone variant's slider moves. */
  onSliderChange?: (value: number) => void;
}) {
  const scaleFactor = goldenBoxProps?.scaleFactor ?? DEFAULT_SCALE_FACTOR;
  // "none" has no font class to follow, so the text uses the default
  const titleClass: ScaleClass = scaleFactor === "none" ? DEFAULT_SCALE_FACTOR : (scaleFactor as ScaleClass);

  return (
    <GoldenBox {...goldenBoxProps} scaleFactor={scaleFactor}>
      {isLink && <StateLayer />}
      <div className="flex-h items-center gap-md">
        {leadingMeta && <div className="flex-none">{leadingMeta}</div>}
        <div className="flex-grow">
          <h3 className={`${titleClass}-bold mb-xs`}>
            {onSelect ? (
              <button type="button" className="color-list-item-trigger" onClick={onSelect}>
                {title}
              </button>
            ) : (
              title
            )}
          </h3>
          {description && <p className={`${descriptionClassFor(titleClass)} color-onsurfacelow`}>{description}</p>}
        </div>
        {trailingMeta && <div className="flex-none">{trailingMeta}</div>}
      </div>
      {variant === "tone" && (
        <Slider
          className="w-full mt-xs"
          min={0}
          max={100}
          step={1}
          value={sliderValue}
          onValueChange={(next) => onSliderChange?.(Array.isArray(next) ? next[0] : next)}
          // Above the stretched button and the state layer, so dragging works
          style={{ position: "relative", zIndex: 2 }}
        >
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb aria-label={typeof title === "string" ? `${title} tone` : "Tone"} />
            </SliderTrack>
          </SliderControl>
        </Slider>
      )}
    </GoldenBox>
  );
}
