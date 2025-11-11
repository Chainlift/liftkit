import type { ReactNode } from "react";

interface TabContentProps {
  children: ReactNode;
}

export function TabContent({ children }: TabContentProps) {
  return <div data-lk-component="tab-content">{children} </div>;
}
