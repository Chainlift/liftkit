import { getOpenTag } from "@/app/docs/lib/codeTemplateUtils";
export function Dialog_Example_TS(updatedKnobVals: Record<string, unknown> = {}) {
  const componentName = "Dialog"; //should be the same case as the component tag
  const openTag = getOpenTag(componentName, updatedKnobVals);

  return `import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./dialog";

export default function DialogDemo() {
  return (
    ${openTag}
      <DialogTrigger>View notifications</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>You are all caught up. Good job!</DialogDescription>
          <div>
            <DialogClose>Close</DialogClose>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
`;
}
