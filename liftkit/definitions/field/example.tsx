import { Field as BaseField } from "@base-ui/react/field";
import { Field, FieldLabel, FieldControl, FieldError, FieldDescription } from "./field";
import styles from "./field.module.css";

export default function ExampleField() {
  return (
    <BaseField.Root className={styles.Field}>
      <BaseField.Label className={styles.Label}>Name</BaseField.Label>
      <BaseField.Control required placeholder="Required" className={styles.Input} />

      <BaseField.Error className={styles.Error} match="valueMissing">
        Please enter your name
      </BaseField.Error>

      <BaseField.Description className={styles.Description}>Visible on your profile</BaseField.Description>
    </BaseField.Root>
  );
}

export function ExampleField2() {
  return (
    <Field>
      <FieldLabel>Name</FieldLabel>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>

      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>
  );
}
