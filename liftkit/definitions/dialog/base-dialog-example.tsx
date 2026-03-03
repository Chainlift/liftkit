import { Dialog as BaseDialog } from "@base-ui/react/dialog";
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
import styles from "./dialog.module.css";

export default function ExampleDialog() {
  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger className={styles.Button}>View notifications</BaseDialog.Trigger>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className={styles.Backdrop} />
        <BaseDialog.Popup className={styles.Popup}>
          <BaseDialog.Title className={styles.Title}>Notifications</BaseDialog.Title>
          <BaseDialog.Description className={styles.Description}>
            You are all caught up. Good job!
          </BaseDialog.Description>
          <div className={styles.Actions}>
            <BaseDialog.Close className={styles.Button}>Close</BaseDialog.Close>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}

export function ExampleDialog2() {
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
