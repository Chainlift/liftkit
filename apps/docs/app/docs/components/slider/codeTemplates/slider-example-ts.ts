import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Slider_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Slider"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `
import { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb } from "@chainlift/liftkit";

export function ExampleSlider() {
  return (
   ${openTag}
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="Volume" />
        </SliderTrack>
      </SliderControl>
    </Slider>
  );
}

  `;
}
