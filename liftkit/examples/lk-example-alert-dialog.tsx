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
      <AlertDialogTrigger render={<Button color="error"/>}>Discard Draft</AlertDialogTrigger>
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
