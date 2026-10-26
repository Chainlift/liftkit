import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "@chainlift/liftkit";

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
