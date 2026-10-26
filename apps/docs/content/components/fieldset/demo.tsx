import { Fieldset, FieldsetLegend } from "@chainlift/liftkit";
import { Field, FieldLabel, FieldControl } from "@chainlift/liftkit";

export default function FieldsetDemo() {
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
