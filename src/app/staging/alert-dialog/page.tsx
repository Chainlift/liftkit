// app/alert-dialog/page.tsx

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/registry/nextjs/components/alert-dialog"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Alert Dialog Example</h1>

      <AlertDialog>
        <AlertDialogTrigger>
          <button>Delete Account</button>
        </AlertDialogTrigger>

        <AlertDialogPortal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your
              data from our servers.
            </AlertDialogDescription>

            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <AlertDialogCancel>
                <button>Cancel</button>
              </AlertDialogCancel>
              <AlertDialogAction>
                <button>Confirm</button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    </main>
  )
}
