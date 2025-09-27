// app/toast/page.tsx

"use client"

import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from "@/registry/nextjs/components/toast"
import { useState } from "react"

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <main style={{ padding: 24 }}>
      <h1>Toast Example</h1>

      <button onClick={() => setOpen(true)}>Show Toast</button>

      <ToastProvider swipeDirection="right">
        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Notification Title</ToastTitle>
          <ToastDescription>
            This is a simple toast notification. It can include a description and actions.
          </ToastDescription>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <ToastAction altText="Undo">Undo</ToastAction>
            <ToastClose>Close</ToastClose>
          </div>
        </Toast>

        <ToastViewport />
      </ToastProvider>
    </main>
  )
}
