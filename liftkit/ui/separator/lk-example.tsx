import { Separator } from "./separator";

export default function SeparatorDemo() {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
      <a href="#">Support</a>

      <Separator orientation="vertical" />

      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
}
