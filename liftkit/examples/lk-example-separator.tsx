import { Separator } from "@/liftkit/component-definitions";

export function ExampleSeparator() {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Pricing</a>
      <a href="#">Blog</a>
      <a href="#">Support</a>

      <Separator orientation="vertical"></Separator>

      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
}
