import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "@/liftkit/component-definitions";

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
