import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
  AlertDialogAction,
} from "@/liftkit/component-definitions";
import { Card } from "@/liftkit/component-definitions/card/card";

export function ExampleAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Discard Draft</AlertDialogTrigger>
      <AlertDialogContent render={<Card color="primary" />}>
        <AlertDialogHeader>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>You can't undo this action.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogAction>Discard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
