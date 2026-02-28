import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "@/liftkit/ui";

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
