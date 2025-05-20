import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Badge from "@/registry/nextjs/components/badge";
import Button from "@/registry/nextjs/components/button";
import Text from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/snackbar/snackbar.css";

interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeColor?: LkColorWithOnToken;
  primaryButtonColor?: LkColorWithOnToken;
  secondaryButtonColor?: LkColorWithOnToken;
  backgroundColor?: LkColorWithOnToken;
  globalColor?: LkColorWithOnToken;
  message?: string;
  fontClass?: LkFontClass;
}

export default function Snackbar({
  badgeColor,
  primaryButtonColor = "primary",
  secondaryButtonColor = "secondary",
  backgroundColor = "surface",
  globalColor,
  message = "Notification text goes here.",
  fontClass = "caption",
  ...restProps
}: LkSnackbarProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({}, "snackbar"), []);

  return (
    <div
      lk-component="snackbar"
      {...dataAttrs}
      {...restProps}
      style={{ backgroundColor: `var(--lk-${backgroundColor})` }}
    >
      <Badge color={globalColor ?? badgeColor} />
      <Text fontClass={fontClass}>{message}</Text>
      <Button
        label="Dismiss"
        size="sm"
        variant="outline"
        color={globalColor ?? secondaryButtonColor}
      />

      <Button
        label="Undo"
        size="sm"
        variant="fill"
        color={globalColor ?? primaryButtonColor}
      />
    </div>
  );
}
