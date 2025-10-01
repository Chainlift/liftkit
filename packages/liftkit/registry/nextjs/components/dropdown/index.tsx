'use client';

// CustomDropdown.tsx
import Card, { LkCardProps } from "@/registry/nextjs/components/card";
import React, { useContext, useState, useRef, useEffect, createContext } from "react";
import Column from "@/registry/nextjs/components/column";
import ReactDOM from "react-dom";
import "@/registry/nextjs/components/dropdown/dropdown.css";

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

  /**Calculate transform origin based on triggerRef viewport quadrant */

  function getQuadrant() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    /** Origin as in "the corner of the trigger the menu will expand from" */
    var triggerQuadrant: "top-left" | "top-right" | "bottom-right" | "bottom-left";

    const isTop: boolean = rect.top < windowHeight / 2;
    const isLeft: boolean = rect.left < windowWidth / 2;

    if (isTop) {
      triggerQuadrant = isLeft ? "bottom-left" : "bottom-right";
    } else {
      triggerQuadrant = isLeft ? "top-left" : "top-right";
    }

    var positionStyle: React.CSSProperties = {};

    switch (triggerQuadrant) {
      case "top-left":
        positionStyle = {
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        };
        break;
      case "top-right":
        positionStyle = { top: rect.top + window.scrollY, left: rect.right + window.scrollX };
        break;
      case "bottom-right":
        positionStyle = { top: rect.bottom + window.scrollY, left: rect.right + window.scrollX };
        break;
      case "bottom-left":
        positionStyle = { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX };
        break;
    }

    return { triggerQuadrant, positionStyle };
  }

  const quadrantData = getQuadrant();

  const style = {
    top: rect.bottom + window.scrollY,
    left: rect.right + window.scrollX,
  };

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      style={quadrantData.positionStyle}
      role="menu"
      data-lk-component="dropdown-menu"
      data-isactive={open}
      data-lk-dropdown-trigger-quadrant={quadrantData.triggerQuadrant}
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
