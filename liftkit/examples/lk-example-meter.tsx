import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "@/liftkit/component-definitions";

export function ExampleMeter() {
  return (
    <Meter value={24}>
      <MeterLabel>Storage Used</MeterLabel>
      <MeterValue />
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
    </Meter>
  );
}
