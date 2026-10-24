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
} from "@chainlift/liftkit";
import { Card } from "@chainlift/liftkit";
import { Button } from "@chainlift/liftkit";

export function ExampleAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button color="error"/>}>View Alert</AlertDialogTrigger>
      <AlertDialogContent render={<Card scaleFactor="title3" opticalCorrection="top"/>}>
        <AlertDialogHeader>
          <AlertDialogTitle className="title3-bold mb-2xs">Discard draft?</AlertDialogTitle>
          <AlertDialogDescription className="body mb-sm">You can't undo this action.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex items-center justify-end gap-sm">
            <AlertDialogClose render={<Button label="cancel" color="error" variant="outline"/>}>Cancel</AlertDialogClose>
            <AlertDialogAction>Discard</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
