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
import { Button } from "@/liftkit/component-definitions";

export function ExampleAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Discard Draft</AlertDialogTrigger>
      <AlertDialogContent render={<Card scaleFactor="heading"/>}>
        <AlertDialogHeader>
          <AlertDialogTitle className="heading">Discard draft?</AlertDialogTitle>
          <AlertDialogDescription className="body">You can't undo this action.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-end">
            <AlertDialogClose render={<Button label="cancel" color="error" variant="outline"/>}>Cancel</AlertDialogClose>
            <AlertDialogAction>Discard</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
