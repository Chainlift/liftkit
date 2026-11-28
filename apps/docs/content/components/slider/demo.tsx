import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "liftkit";

export default function SliderDemo() {
  return (
    <Slider defaultValue={25} className="w-full">
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="Volume" />
        </SliderTrack>
      </SliderControl>
    </Slider>
  );
}
