import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Field_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "Field"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import { Field, FieldLabel, FieldControl, FieldError, FieldDescription } from "./field";

export default function FieldDemo() {
  return (
    ${openTag}
      <FieldLabel>Name</FieldLabel>
      <FieldControl required placeholder="Required" />

      <FieldError match="valueMissing">Please enter your name</FieldError>

      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>
  );
}
`;
}
