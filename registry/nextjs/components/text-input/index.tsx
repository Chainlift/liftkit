'use client';

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text-input/text-input.css";
import Icon from "@/registry/nextjs/components/icon";
import Row from "@/registry/nextjs/components/row";
import Text from "@/registry/nextjs/components/text";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { IconName } from "lucide-react/dynamic";
import { useState, useEffect } from "react";
import { truncateSync } from "node:fs";
Text;

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: string;
  placeholder?: string;
  name?: string;
  endIcon?: IconName;
  labelBackgroundColor?: LkColor;
}

export default function TextInput({
  labelPosition = "default",
  helpText,
  placeholder = "Placeholder",
  name = "Label",
  endIcon = "search",
  labelBackgroundColor,
  ...restProps
}: LkTextInputProps) {
  const textInputProps = useMemo(() => propsToDataAttrs({ labelPosition }, "text-input"), [labelPosition]);

  const [inputValue, setInputValue] = useState("");

  return (
    <div data-lk-component="text-input" {...textInputProps}>
      {labelPosition === "default" && (
        <label htmlFor={name} className="label">
          {name}
        </label>
      )}

      <div data-lk-text-input-el="input-wrap" data-lk-input-help-text={helpText ? "true" : "false"} data-help-text={helpText}>
        {labelPosition === "on-input" && (
          <label
            htmlFor={name}
            className={`body ${labelBackgroundColor ? ` bg-${labelBackgroundColor}` : ""} ${inputValue ? "on-field-with-value-set" : ""}`}
          >
            {name}
          </label>
        )}
        <input
          type="text"
          name={name}
          id={name}
          placeholder={labelPosition !== "on-input" ? placeholder : ""}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          {...restProps}
        />
        <StateLayer />
        <Icon name={endIcon} />
        {/* implementation omitted for brevity */}
      </div>

      {helpText && (
        <Row alignItems="center">
          <Icon name="info" fontClass="capline" color="outline" opticShift={true} />
          <Text color="outline" fontClass="caption" className="m-left-2xs">Help text goes here</Text>
        </Row>
      )}
    </div>
  );
}
