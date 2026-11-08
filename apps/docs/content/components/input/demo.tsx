import { Input, type InputProps } from "liftkit";

export default function InputDemo(knobs: InputProps) {
  return (
    <label>
      Name
      <Input placeholder="Enter your name" {...knobs} />
    </label>
  );
}
