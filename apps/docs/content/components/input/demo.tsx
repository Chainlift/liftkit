import { Input, type InputProps } from "liftkit";

export default function InputDemo(knobs: InputProps) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <Input id="name" placeholder="Enter your name" {...knobs} />
    </div>
  );
}
