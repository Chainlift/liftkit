import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Meter_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "Meter"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "@/liftkit/component-definitions";

export function ExampleMeter() {
  return (
    ${openTag}
      <MeterLabel>Storage Used</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
`;
}
