import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Badge from "@/registry/nextjs/components/badge";
import Button from "@/registry/nextjs/components/button";
import Text from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/snackbar/snackbar.css";

type LkSnackbarConfig = {
  
}

interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  globalColor?: LkColorWithOnToken;
  message?: string;
  fontClass?: LkFontClass;
}

/**
 * A snackbar component that displays temporary notifications with optional action buttons.
 *
 * @param props - The props for the Snackbar component
 * @param props.badgeColor - Color token for the badge indicator
 * @param props.primaryButtonColor - Color token for the primary action button (defaults to "primary")
 * @param props.secondaryButtonColor - Color token for the secondary action button (defaults to "secondary")
 * @param props.backgroundColor - Color token for the snackbar background (defaults to "surface")
 * @param props.globalColor - Global color token that overrides badge and button colors when set
 * @param props.message - The notification message text (defaults to "Notification text goes here.")
 * @param props.fontClass - Font class for the message text (defaults to "caption")
 *
 * @returns A snackbar notification component with badge, message, and action buttons
 *
 * @example
 * ```tsx
 * <Snackbar
 *   message="File saved successfully"
 *   badgeColor="success"
 *   primaryButtonColor="primary"
 * />
 * ```
 */

export default function Snackbar(props: LkSnackbarProps) {
  /**Declare allowed types, so if a child with the wrong type is passed, it'll throw an error. */

  const allowedTypes = [Badge, Button, Text];

  /**Validate all children */

  const { globalColor, message = "Notification text goes here.", fontClass = "caption", ...restProps } = props;

  const dataAttrs = useMemo(
    () =>
      propsToDataAttrs(
        {
          globalColor,
          message,
          fontClass,
        },
        "snackbar"
      ),
    [globalColor, message, fontClass]
  );

  return <div lk-component="snackbar" {...dataAttrs} {...restProps}></div>;
}
