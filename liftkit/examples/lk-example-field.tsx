import { Field, FieldLabel, FieldControl, FieldError, FieldDescription } from "@/liftkit/ui";

export function ExampleField() {
  return (
    <Field>
      <FieldLabel>Name</FieldLabel>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>

      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>
  );
}
