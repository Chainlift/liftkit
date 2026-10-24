import { Separator } from "@chainlift/liftkit";

export function ExampleSeparator() {
  return (
    <div className="flex gap-md subheading font-500">
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
