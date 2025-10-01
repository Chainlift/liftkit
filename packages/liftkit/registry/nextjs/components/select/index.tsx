"use client";

// CustomSelect.tsx
import Card, { LkCardProps } from "@/registry/nextjs/components/card";
import React, { useContext, useState, useRef, useEffect, createContext } from "react";
import Column from "@/registry/nextjs/components/column";
import Icon from "@/registry/nextjs/components/icon";
import { LkIconProps } from "@/registry/nextjs/components/icon";
import ReactDOM from "react-dom";
import "@/registry/nextjs/components/select/select.css";
import StateLayer from "@/registry/nextjs/components/state-layer";

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
  children: React.ReactNode;
}

interface LkSelectContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
}

export interface LkSelectTriggerProps {
  children: React.ReactElement;
}

export interface LkSelectMenuProps {
  children: React.ReactNode;
  cardProps?: LkCardProps;
}

export interface LkSelectOptionProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
  startIcon?: LkIconProps;
  endIcon?: LkIconProps;
}

// Context for select state
const SelectContext = createContext<LkSelectContext>({} as LkSelectContext);

export function Select({ children, options = [], value = "", onChange, name }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const hiddenSelectRef = useRef<HTMLSelectElement>(null);

  // Update selected value when prop changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  // Handle value changes and trigger onChange callback
  const handleValueChange = (newValue: string) => {
    setSelectedValue(newValue);
    setOpen(false);

    // Update hidden select and trigger change event
    if (hiddenSelectRef.current && onChange) {
      hiddenSelectRef.current.value = newValue;
      const syntheticEvent = {
        target: hiddenSelectRef.current,
        currentTarget: hiddenSelectRef.current,
        nativeEvent: new Event("change", { bubbles: true }),
        bubbles: true,
        cancelable: true,
        defaultPrevented: false,
        eventPhase: 0,
        isTrusted: false,
        timeStamp: Date.now(),
        type: "change",
        isDefaultPrevented: () => false,
        isPropagationStopped: () => false,
        persist: () => {},
        preventDefault: () => {},
        stopPropagation: () => {},
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
  };

  // Global singleton registry
  useEffect(() => {
    if (!open) return;
    const self = { close: () => setOpen(false) };
    SelectRegistry.register(self);
    return () => SelectRegistry.unregister(self);
  }, [open]);

  return (
    <SelectContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        selectedValue,
        setSelectedValue: handleValueChange,
        options,
        onChange,
        name,
      }}
    >
      {/* Hidden native select for form compatibility */}
      <select
        ref={hiddenSelectRef}
        name={name}
        value={selectedValue}
        onChange={() => {}} // Controlled by our custom logic
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {children}
    </SelectContext.Provider>
  );
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

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
        if (triggerRef.current) {
          (triggerRef.current as HTMLElement).focus();
        }
      }
    }

    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen, triggerRef]);

  if (!open || !triggerRef.current) return null;

  const rect = triggerRef.current.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      style={{ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX }}
      role="menu"
      data-lk-component="select-menu"
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

export function SelectOption({ value, children, onClick, startIcon, endIcon }: LkSelectOptionProps) {
  const { selectedValue, setSelectedValue } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  const handleClick = () => {
    setSelectedValue(value);
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="menuitem"
      data-lk-component="menu-item"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-selected={isSelected}
      style={{
        cursor: "pointer",
        fontWeight: isSelected ? "bold" : "normal",
      }}
      className="select-option"
    >
      {startIcon && <Icon {...startIcon} data-lk-icon-position="start"></Icon>}
      <p data-lk-menu-item-element="content-wrap">{children}</p>
      {endIcon && <Icon {...endIcon} data-lk-icon-position="end"></Icon>}
      <StateLayer forcedState={isSelected ? 'active' : undefined}></StateLayer>
    </div>
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
