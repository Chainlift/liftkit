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
      <code>{`import { Separator } from "./separator";

export default function SeparatorDemo() {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
      <a href="#">Support</a>

      <Separator orientation="vertical" />

      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
}
`}</code>
    </pre>
  );
}
