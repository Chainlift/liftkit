// CustomDropdown.tsx
import Card, { LkCardProps } from "@/registry/nextjs/components/card";
import React, { useContext, useState, useRef, useEffect, createContext } from "react";
import Column from "@/registry/nextjs/components/column";
import ReactDOM from "react-dom";

interface LkDropdownContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export interface LkDropdownTriggerProps {
  children: React.ReactElement;
}

export interface LkDropdownMenuProps {
  children: React.ReactNode;
  cardProps?: LkCardProps; // Optional props to pass to the child Card component.
}

// Context for dropdown state
const DropdownContext = createContext<LkDropdownContext>({} as LkDropdownContext);

export function Dropdown({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  // Global singleton registry
  useEffect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    DropdownRegistry.register(self);
    return () => DropdownRegistry.unregister(self);
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>{children}</DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children }: LkDropdownTriggerProps) {
  const { open, setOpen, triggerRef } = useContext(DropdownContext);
  return React.cloneElement(children, {
    ref: triggerRef,
    onClick: () => setOpen(!open),
    "aria-expanded": open,
    "aria-haspopup": "menu",
  } as any);
}

export function DropdownMenu({ children, cardProps }: LkDropdownMenuProps) {
  const { open, setOpen, triggerRef, contentRef } = useContext(DropdownContext);

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
  const style = {
    position: "absolute" as const,
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <div ref={contentRef} style={style} role="menu" lk-component="dropdown-menu">
      <Card {...cardProps} className="shadow-xl">
        <Column gap="none" className={cardProps?.scaleFactor}>{children}</Column>
      </Card>
    </div>,
    document.body
  );
}

// Singleton registry to track open dropdowns
const DropdownRegistry = (() => {
  interface DropdownInstance {
    close: () => void;
  }

  let current: DropdownInstance | null = null;
  return {
    register(instance: DropdownInstance) {
      if (current && current !== instance) current.close();
      current = instance;
    },
    unregister(instance: DropdownInstance) {
      if (current === instance) current = null;
    },
  };
})();
