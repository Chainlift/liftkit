import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Fieldset_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "Fieldset"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import { Fieldset, FieldsetLegend } from "./fieldset";
import { Field, FieldLabel, FieldControl } from "@/liftkit/definitions/field/field";

export default function FieldsetDemo() {
  return (
    ${openTag}
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
`;
}
