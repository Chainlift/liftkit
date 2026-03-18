import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/liftkit/component-definitions";

export function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger>View notifications</DialogTrigger>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>You are all caught up. Good job!</DialogDescription>
          <div className="flex items-center w-full justify-end">
            <DialogClose>Close</DialogClose>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
