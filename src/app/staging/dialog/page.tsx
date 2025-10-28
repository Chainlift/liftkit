// app/dialog/page.tsx

import Button from "@/registry/nextjs/components/button";
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
import TextInput from "@/registry/nextjs/components/text-input";
import { Label } from "@/registry/nextjs/components/label";
import Column from "@/registry/nextjs/components/column";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger style={{ all: "unset" }}>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent style={{ maxWidth: "425px" }}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
          </DialogHeader>
          <Column gap="lg">
            <Column gap="xs">
              <Label htmlFor="name-1">Name</Label>
              <TextInput id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Column>
            <Column gap="xs">
              <Label htmlFor="username-1">Username</Label>
              <TextInput id="username-1" name="username" defaultValue="@peduarte" />
            </Column>
          </Column>
          <DialogFooter>
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
