// app/toast/page.tsx

"use client";

import Button from "@/registry/nextjs/components/button";
import Card from "@/registry/nextjs/components/card";
import Row from "@/registry/nextjs/components/row";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "@/registry/nextjs/components/toast";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <main style={{ padding: 24 }}>
      <h1>Toast Example</h1>

      <Button onClick={() => setOpen(true)}>Show Toast</Button>

      <ToastProvider swipeDirection="right">
        <Toast open={open} onOpenChange={setOpen}>
          <Card className="shadow-xl" scaleFactor="body" opticalCorrection="y">
            <Row gap="lg" alignItems="center">
              <div>
                <ToastTitle className="subheading-bold mb-3xs">Notification Title</ToastTitle>
                <ToastDescription className="subheading opacity-60">
                  This is a simple toast notification.
                </ToastDescription>
              </div>

              <Row gap="sm">
                <ToastAction altText="Undo">Undo</ToastAction>
                <ToastClose>Close</ToastClose>
              </Row>
            </Row>
          </Card>
        </Toast>

        <ToastViewport />
      </ToastProvider>
    </main>
  );
}
