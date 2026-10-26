import { Button } from "@chainlift/liftkit";

export default function ButtonSizing() {
  return (
    <div className="flex-v gap-sm w-5xl">
      <Button className="w-full">Centered without icons</Button>
      <Button className="w-full" startIcon="arrow-right">
        Start-aligned with an icon
      </Button>
      <Button className="w-3xl">A label too long for this button</Button>
    </div>
  );
}
