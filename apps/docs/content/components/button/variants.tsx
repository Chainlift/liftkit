import { Button } from "@chainlift/liftkit";

export default function ButtonVariants() {
  return (
    <div className="flex-h items-center gap-sm">
      <Button variant="fill">Fill</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}
