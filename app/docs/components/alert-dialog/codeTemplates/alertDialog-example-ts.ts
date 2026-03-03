import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";

export function AlertDialog_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "AlertDialog"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
  AlertDialogAction,
} from "@/liftkit/component-definitions/alert-dialog/alert-dialog";

export default function ExampleAlertDialog() {
  return (
    ${openTag}
      <AlertDialogTrigger>Discard Draft</AlertDialogTrigger>
      <AlertDialogContent>
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

`;
}
