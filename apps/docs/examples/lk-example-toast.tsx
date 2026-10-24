"use client";
import * as React from "react";
// import { Toast } from "@base-ui/react/toast";
import {
  ToastProvider,
  ToastPortal,
  ToastViewport,
  Toast,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastClose,
  useToastManager,
} from "@/liftkit/component-definitions";

function ToastButton() {
  const toastManager = useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: "This is a toast notification.",
    });
  }

  return (
    <button type="button" onClick={createToast} data-slot="toast-trigger">
      Create toast
    </button>
  );
}

export function ExampleToast() {
  return (
    <ToastProvider>
      <ToastButton />
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}

function ToastList() {
  const { toasts } = useToastManager();
  return toasts.map((toast) => (
    <Toast key={toast.id} toast={toast}>
      <ToastContent>
        <ToastTitle />
        <ToastDescription />
        <ToastClose aria-label="Close">
          <XIcon />
        </ToastClose>
      </ToastContent>
    </Toast>
  ));
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="var(--lk-error)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
