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
      <code>{`import { Input } from "./input";

export default function InputDemo() {
  return (
    <label>
      Name
      <Input placeholder="Enter your name" />
    </label>
  );
}
`}</code>
    </pre>
  );
}
