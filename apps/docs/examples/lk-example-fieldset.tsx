import { Fieldset, FieldsetLegend } from "@chainlift/liftkit";
import { Field, FieldLabel, FieldControl } from "@chainlift/liftkit";

export function ExampleFieldset({
  legend = "Billing details",
  field1Label = "Company",
  field1Placeholder = "Enter company name",
  field2Label = "Tax ID",
  field2Placeholder = "Enter fiscal number",
}: {
  legend?: string;
  field1Label?: string;
  field1Placeholder?: string;
  field2Label?: string;
  field2Placeholder?: string;
}) {
  return (
    <Fieldset>
      <FieldsetLegend>{legend}</FieldsetLegend>

      <Field>
        <FieldLabel>{field1Label}</FieldLabel>
        <FieldControl placeholder={field1Placeholder} />
      </Field>

      <Field>
        <FieldLabel>{field2Label}</FieldLabel>
        <FieldControl placeholder={field2Placeholder} />
      </Field>
    </Fieldset>
  );
}
