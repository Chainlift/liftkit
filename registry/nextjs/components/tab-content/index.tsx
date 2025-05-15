import type { ReactNode } from "react";
import "./tab-content.css";

interface TabContentProps {
  children: ReactNode;
}

export default function TabContent({ children }: TabContentProps) {
  return <div lk-component="tab-content">{children} </div>;
}
