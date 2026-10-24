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
      <code>{`import { Field, FieldLabel, FieldControl, FieldError, FieldDescription } from "./field";

export default function FieldDemo() {
  return (
    <Field>
      <FieldLabel>Name</FieldLabel>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>

      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>
  );
}
`}</code>
    </pre>
  );
}
