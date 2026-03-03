import { Meter as BaseMeter } from "@base-ui/react/meter";
import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "./meter";
import styles from "./meter.module.css";

export default function ExampleMeter() {
  return (
    <BaseMeter.Root className={styles.Meter} value={24}>
      <BaseMeter.Label className={styles.Label}>Storage Used</BaseMeter.Label>
      <BaseMeter.Value className={styles.Value} />
      <BaseMeter.Track className={styles.Track}>
        <BaseMeter.Indicator className={styles.Indicator} />
      </BaseMeter.Track>
    </BaseMeter.Root>
  );
}

export function ExampleMeter2() {
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
