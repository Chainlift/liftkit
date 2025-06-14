"use client";

import type { ReactNode } from "react";
import "@/registry/nextjs/components/dropdown-menu/dropdown-menu.css";

export interface LkDropdownProps {
  id?: string;
  align?: "left" | "right" | "center";
  children: ReactNode;
}

export default function DropdownMenu({ id, align = "left", children }: LkDropdownProps) {
  return (
    <div id={id} className={`dropdown__menu dropdown__menu--${align}`} role="menu">
      {children}
    </div>
  );
}
