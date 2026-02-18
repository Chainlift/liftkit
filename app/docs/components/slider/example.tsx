export function LocalCodeSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "./slider";

export default function SliderDemo() {
  return (
    <Slider defaultValue={25}>
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="Volume" />
        </SliderTrack>
      </SliderControl>
    </Slider>
  );
}
`}</code>
    </pre>
  );
}
