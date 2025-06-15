"use client";

// CustomSelect.tsx
import Card, { LkCardProps } from "@/registry/nextjs/components/card";
import React, { useContext, useState, useRef, useEffect, createContext } from "react";
import Column from "@/registry/nextjs/components/column";
import ReactDOM from "react-dom";
import "@/registry/nextjs/components/select2/select.css";


interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  labelPosition?: "default" | "on-input";
  helpText?: string;
  placeholderText?: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}


interface LkSelectContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export interface LkSelectTriggerProps {
  children: React.ReactElement;
}

export interface LkSelectMenuProps {
  children: React.ReactNode;
  cardProps?: LkCardProps; // Optional props to pass to the child Card component.
}

// Context for select state
const SelectContext = createContext<LkSelectContext>({} as LkSelectContext);

export function Select({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  // Global singleton registry
  useEffect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    SelectRegistry.register(self);
    return () => SelectRegistry.unregister(self);
  }, [open]);

  return <SelectContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>{children}</SelectContext.Provider>;
}

export function SelectTrigger({ children }: LkSelectTriggerProps) {
  const { open, setOpen, triggerRef } = useContext(SelectContext);
  return React.cloneElement(children, {
    ref: triggerRef,
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-haspopup": "menu",
  } as any);
}

export function SelectMenu({ children, cardProps }: LkSelectMenuProps) {
  const { open, setOpen, triggerRef, contentRef } = useContext(SelectContext);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!open || !triggerRef.current) return null;

  const rect = triggerRef.current.getBoundingClientRect();

  /**Calculate transform origin based on triggerRef viewport quadrant */


  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      style={{ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }}
      role="menu"
      lk-component="select-menu"
      data-isactive={open}
    >
      <Card {...cardProps} className="shadow-xl">
        <Column gap="none" className={cardProps?.scaleFactor}>
          {children}
        </Column>
      </Card>
    </div>,
    document.body
  );
}

// Singleton registry to track open selects
const SelectRegistry = (() => {
  interface SelectInstance {
    close: () => void;
  }

  let current: SelectInstance | null = null;
  return {
    register(instance: SelectInstance) {
      if (current && current !== instance) current.close();
      current = instance;
    },
    unregister(instance: SelectInstance) {
      if (current === instance) current = null;
    },
  };
})();
