import { Fieldset, FieldsetLegend } from "./fieldset";
import { Field, FieldLabel, FieldControl } from "@/liftkit/definitions/field/field";

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
