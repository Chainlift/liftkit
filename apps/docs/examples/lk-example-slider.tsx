import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "@chainlift/liftkit";

export function ExampleSlider() {
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
