import { Fieldset, FieldsetLegend } from "@/liftkit/component-definitions";
import { Field, FieldLabel, FieldControl } from "@/liftkit/component-definitions/field/field";

export function ExampleFieldset() {
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
