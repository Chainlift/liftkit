import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Input_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const openTag = getOpenTag("Input", updatedKnobVals);

  return `
import { Input } from "./input";

export default function InputDemo() {
  return (
    <label>
      Name
      ${openTag}</Input>
    </label>
  );
}

`;
}
