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
      <code>{`import { Switch, SwitchThumb } from "./switch";

export default function SwitchDemo() {
  return (
    <label>
      <Switch defaultChecked>
        <SwitchThumb />
      </Switch>
      Notifications
    </label>
  );
}
`}</code>
    </pre>
  );
}
