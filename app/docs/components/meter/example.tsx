export function LocalCodeSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`import { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator } from "./meter";

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
`}</code>
    </pre>
  );
}
