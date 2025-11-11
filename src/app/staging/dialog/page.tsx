// app/dialog/page.tsx

import { Button } from "@/registry/nextjs/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/nextjs/components/dialog";
import { TextInput } from "@/registry/nextjs/components/text-input";
import { Column } from "@/registry/nextjs/components/column";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger style={{ all: "unset" }}>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent cardProps={{ scaleFactor: "title3", opticalCorrection: "top" }} style={{ maxWidth: "425px" }}>
          <DialogHeader>
            <DialogTitle className="title3-bold">Edit profile</DialogTitle>
            <DialogDescription className="subheading color-onsurfacevariant mb-lg">
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Column gap="lg">
            <Column gap="xs">
              <TextInput id="name-1" displayLabelName="Legal Name" placeholder="Pedro Duarte" />
            </Column>
            <Column gap="xs">
              <TextInput id="username-1" displayLabelName="Username" placeholder="@peduarte" />
            </Column>
          </Column>
          <DialogFooter className="pt-md">
            <DialogClose style={{ all: "unset" }}>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Dialog Examples</h1>
      <DialogDemo />
    </main>
  );
}
