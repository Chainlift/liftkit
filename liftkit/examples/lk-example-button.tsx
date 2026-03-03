import { Button, type ButtonProps } from "@/liftkit/component-definitions";

type ExampleButtonProps = Pick<ButtonProps, "children" | "variant" | "color" | "fontClass" | "startIcon" | "endIcon">;

export function ExampleButton({
  children = "Button",
  variant = "fill",
  color = "primary",
  fontClass = "body",
  startIcon,
  endIcon,
}: ExampleButtonProps) {
  return (
    <Button
      variant={variant}
      color={color}
      fontClass={fontClass}
      startIcon={startIcon || undefined}
      endIcon={endIcon || undefined}
    >
      {children}
    </Button>
  );
}
