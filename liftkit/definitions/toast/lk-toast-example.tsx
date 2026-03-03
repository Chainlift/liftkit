"use client";
import * as React from "react";
import { Toast } from "@base-ui/react/toast";
import styles from "./toast.module.css";
import {
  ToastProvider,
  ToastPortal,
  ToastViewport,
  Toast as LkToast,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastClose,
  useToastManager,
} from "./toast";

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: "This is a toast notification.",
    });
  }

  return (
    <button type="button" className={styles.Button} onClick={createToast}>
      Create toast
    </button>
  );
}

export default function ToastDemo() {
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
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className={styles.Toast}>
      <Toast.Content className={styles.Content}>
        <Toast.Title className={styles.Title} />
        <Toast.Description className={styles.Description} />
        <Toast.Close className={styles.Close} aria-label="Close">
          <XIcon className={styles.Icon} />
        </Toast.Close>
      </Toast.Content>
    </Toast.Root>
  ));
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
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
