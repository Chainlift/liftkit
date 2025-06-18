import type { ReactNode } from "react";
import "@/registry/nextjs/components/tab-content/tab-content.css";

interface TabContentProps {
  children: ReactNode;
}

export default function TabContent({ children }: TabContentProps) {
  return <div data-lk-component="tab-content">{children} </div>;
}
