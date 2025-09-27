// app/dialog/page.tsx

import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/registry/nextjs/components/dialog"

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dialog Example</h1>

      <Dialog>
        <DialogTrigger>
          <button>Open Dialog</button>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. You can add more details or instructions here.
            </DialogDescription>

            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <DialogClose>
                <button>Close</button>
              </DialogClose>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </main>
  )
}
