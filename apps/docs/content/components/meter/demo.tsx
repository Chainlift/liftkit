import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "@chainlift/liftkit";

export default function MeterDemo() {
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
