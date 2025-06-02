import { useEffect, useRef, useState } from "react";

import "@/registry/nextjs/components/select/select.css";
import DropdownList from "../dropdown-list";
import Icon from "@/registry/nextjs/components/icon";

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

export default function Select({
  label,
  labelPosition = "default",
  helpText,
  placeholderText = "Select an option",
  options,
  value,
  onChange,
  name,
}: SelectProps) {
  const [isOpen, setOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);
  const isFloating = labelPosition === "on-input";
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleSelect = (val: string) => {
    const syntheticEvent = {
      target: { name, value: val },
    } as unknown as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div lk-component="select">
      {!isFloating && <label>{label}</label>}

      <div
        lk-select-input-element="field-wrap"
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {isFloating && <label data-floating="true">{label}</label>}

        <div lk-component="state-layer" />
        <span>{selectedOption?.label || placeholderText}</span>

        <Icon name="chevron-down" color="surface" lk-select-input-icon="icon" />

        {/* Hidden native select for semantic support */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          aria-hidden="true"
          tabIndex={-1}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {isOpen && (
        <DropdownList lk-component="dropdown-list">
          {options.map((opt) => (
            <div
              key={opt.value}
              className="dropdown-menu-item"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </DropdownList>
      )}

      {helpText && (
        <div lk-select-input-help="help-text">
          <Icon name="info" color="surface" />
          {helpText}
        </div>
      )}
    </div>
  );
}
