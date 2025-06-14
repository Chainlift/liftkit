"use client";

import type { ReactNode } from "react";
import "@/registry/nextjs/components/dropdown-menu/dropdown-menu.css";
import Card from "@/registry/nextjs/components/card";
import { LkCardProps } from "@/registry/nextjs/components/card";

export interface LkDropdownProps {
  id?: string;
  align?: "left" | "right" | "center";
  fontClass?: LkFontClass;
  cardProps?: LkCardProps; // Optional props for the Card component
  children: ReactNode;
}

export default function DropdownMenu({ id, align = "left", fontClass="body", cardProps, children }: LkDropdownProps) {



  return (
    <div id={id} className={`dropdown__menu dropdown__menu--${align}`} role="menu">
      <Card scaleFactor={fontClass} {...cardProps}>{children}</Card>
    </div>
  );
}
