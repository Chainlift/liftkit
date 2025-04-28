import { useMemo } from "react";
import { propsToDataAttrs } from "./utilities";
import Badge from "@/liftkit/components/badge";
import Button from "@/liftkit/components/button";
import Text from "@/liftkit/components/text";

interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeColor?: LkColorWithOnToken;
  primaryButtonColor?: LkColorWithOnToken;
  secondaryButtonColor?: LkColorWithOnToken;
  // backgroundColor?: LkColorWithOnToken;
  globalColor?: LkColorWithOnToken;
  message?: string;
}

export default function Snackbar({
  badgeColor,
  // TODO: connfirm what types primary and secondary color should be are supposed to be
  primaryButtonColor = "primary",
  secondaryButtonColor = "secondary",
//   backgroundColor,
  globalColor,
  message = "Notification text goes here.",
  ...rest
}: LkSnackbarProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({}, "lk-snackbar"), []);

  return (
    <div {...dataAttrs} {...rest}>
      <Badge color={globalColor ?? badgeColor} />
      <Text content={message} />
      <Button
        size="sm"
        variant="outline"
        color={globalColor ?? secondaryButtonColor}
      >
        Dismiss
      </Button>
      <Button
        size="sm"
        variant="fill"
        color={globalColor ?? primaryButtonColor}
      >
        Undo
      </Button>
    </div>
  );
}
