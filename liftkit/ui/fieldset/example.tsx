import { Field as BaseField } from "@base-ui/react/field";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import { Fieldset, FieldsetLegend } from "./fieldset";
import { Field, FieldLabel, FieldControl } from "@/liftkit/ui/field/field";
import styles from "./fieldset.module.css";

export default function ExampleField() {
  return (
    <BaseFieldset.Root className={styles.Fieldset}>
      <BaseFieldset.Legend className={styles.Legend}>Billing details</BaseFieldset.Legend>

      <BaseField.Root className={styles.Field}>
        <BaseField.Label className={styles.Label}>Company</BaseField.Label>
        <BaseField.Control placeholder="Enter company name" className={styles.Input} />
      </BaseField.Root>

      <BaseField.Root className={styles.Field}>
        <BaseField.Label className={styles.Label}>Tax ID</BaseField.Label>
        <BaseField.Control placeholder="Enter fiscal number" className={styles.Input} />
      </BaseField.Root>
    </BaseFieldset.Root>
  );
}

export function ExampleField2() {
  return (
    <Fieldset>
      <FieldsetLegend>Billing details</FieldsetLegend>

      <Field>
        <FieldLabel>Company</FieldLabel>
        <FieldControl placeholder="Enter company name" />
      </Field>

      <Field>
        <FieldLabel>Tax ID</FieldLabel>
        <FieldControl placeholder="Enter fiscal number" />
      </Field>
    </Fieldset>
  );
}
