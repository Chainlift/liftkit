import { getInitialKnobs } from "@/app/docs/lib/getInitialKnobs";
import { getPropsString } from "@/app/docs/lib/getInitialKnobs";

export function AlertDialog_Example_TS(updatedKnobVals: Record<string, any> = {}) {
  const componentName = "AlertDialog"; //should be the same case as the component tag

  const initialKnobValues = getInitialKnobs(componentName); //knob defaults loaded statically from manifest
  const updatedKnobValsLength = Object.entries(updatedKnobVals).length;
  const propsString = getPropsString(updatedKnobValsLength > 0 ? updatedKnobVals : initialKnobValues);

  const openTag = propsString ? `<${componentName} ${propsString}>` : `<${componentName}>`;

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
} from "@/liftkit/ui/alert-dialog/alert-dialog";

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
