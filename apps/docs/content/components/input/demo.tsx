import { Input, type InputProps } from "@chainlift/liftkit";

export default function InputDemo(knobs: InputProps) {
  return (
    <label>
      Name
      <Input placeholder="Enter your name" {...knobs} />
    </label>
  );
}
