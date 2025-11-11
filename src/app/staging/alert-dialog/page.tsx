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
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/registry/nextjs/components/alert-dialog";

import { Button } from "@/registry/nextjs/components/button";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Alert Dialog Example</h1>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="fill" color="primary">
            Confirm
          </Button>
        </AlertDialogTrigger>

        <AlertDialogPortal>
          <AlertDialogOverlay />
          <AlertDialogContent scaleFactor="title3">
            <AlertDialogHeader>
              <AlertDialogTitle asChild>
                <h3 className="title3-bold">Are you absolutely sure?</h3>
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                <AlertDialogCancel asChild>
                  <Button variant="outline" color="error">
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant="fill" color="successcontainer">
                    Confirm
                  </Button>
                </AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    </main>
  );
}

export function AlertDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="fill" color="primary">
          Confirm
        </Button>
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent scaleFactor="title3">
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <h3 className="title3-bold">Are you absolutely sure?</h3>
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <AlertDialogCancel asChild>
                <Button variant="outline" color="error">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="fill" color="successcontainer">
                  Confirm
                </Button>
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
