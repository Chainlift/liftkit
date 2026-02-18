import {
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
    <Dialog>
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
