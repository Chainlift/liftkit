import { Slider as BaseSlider } from "@base-ui/react/slider";
import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "./slider";
import styles from "./slider.module.css";

export default function ExampleSlider() {
  return (
    <BaseSlider.Root defaultValue={25}>
      <BaseSlider.Control className={styles.Control}>
        <BaseSlider.Track className={styles.Track}>
          <BaseSlider.Indicator className={styles.Indicator} />
          <BaseSlider.Thumb aria-label="Volume" className={styles.Thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}

export function ExampleSlider2() {
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
