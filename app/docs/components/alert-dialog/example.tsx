export function LocalCodeSample() {
  return (
    <pre style={{
      overflowX: "auto",
      padding: 16,
      borderRadius: 12,
      border: "1px solid var(--lk-outline)",
      backgroundColor: "var(--lk-surface-container-low)",
      fontSize: "0.875rem",
      lineHeight: 1.5,
    }}>
      <code>{`import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
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
} from "@/liftkit/ui/alert-dialog/alert-dialog";
import styles from "./alert-dialog.module.css";
import { Button } from "@/liftkit/ui/button";
// export default function ExampleAlertDialog() {
//   return (
//     <BaseAlertDialog.Root>
//       <BaseAlertDialog.Trigger data-color="red" className={styles.Button}>
//         Discard draft
//       </BaseAlertDialog.Trigger>
//       <BaseAlertDialog.Portal>
//         <BaseAlertDialog.Backdrop className={styles.Backdrop} />
//         <BaseAlertDialog.Popup className={styles.Popup}>
//           <BaseAlertDialog.Title className={styles.Title}>Discard draft?</BaseAlertDialog.Title>
//           <BaseAlertDialog.Description className={styles.Description}>You can't undo this action.</BaseAlertDialog.Description>
//           <div className={styles.Actions}>
//             <BaseAlertDialog.Close className={styles.Button}>Cancel</BaseAlertDialog.Close>
//             <BaseAlertDialog.Close data-color="red" className={styles.Button}>
//               Discard
//             </BaseAlertDialog.Close>
//           </div>
//         </BaseAlertDialog.Popup>
//       </BaseAlertDialog.Portal>
//     </BaseAlertDialog.Root>
//   );
// }

export default function ExampleAlertDialog() {
  return (
    <AlertDialog>
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
`}</code>
    </pre>
  );
}
