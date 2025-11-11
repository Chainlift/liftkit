"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text-input/text-input.css";
import { Icon } from "@/registry/nextjs/components/icon";
import { Row } from "@/registry/nextjs/components/row";
import { Text } from "@/registry/nextjs/components/text";
import { StateLayer } from "@/registry/nextjs/components/state-layer";
import { IconName } from "lucide-react/dynamic";
import { useState, useEffect } from "react";
import { truncateSync } from "node:fs";
Text;

/*todo: refactor this whole thing, it's a MESS. Issues include: 
- no way to hide endIcon. it's always present even when no prop passed 
- weird spacing and label placement. input text impossible to align with field label
- limited props for controlling label placement. need to look into best practices for handling this. 
- */
interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: string;
  placeholder?: string;
  displayLabelName?: string;
  endIcon?: IconName;
  labelBackgroundColor?: LkColor;
}

export function TextInput({
  labelPosition = "default",
  helpText,
  placeholder,
  displayLabelName,
  endIcon,
  labelBackgroundColor,
  ...restProps
}: LkTextInputProps) {
  const textInputProps = useMemo(() => propsToDataAttrs({ labelPosition }, "text-input"), [labelPosition]);

  const [inputValue, setInputValue] = useState("");

  return (
    <div data-lk-component="text-input" {...textInputProps}>
      {labelPosition === "default" && (
        <label htmlFor={restProps.id} className="label">
          {displayLabelName}
        </label>
      )}

      <div
        data-lk-text-input-el="input-wrap"
        data-lk-input-help-text={helpText ? "true" : "false"}
        data-help-text={helpText}
      >
        {labelPosition === "on-input" && (
          <label
            htmlFor={restProps.id}
            className={`body ${labelBackgroundColor ? ` bg-${labelBackgroundColor}` : ""} ${inputValue ? "on-field-with-value-set" : ""}`}
          >
            {displayLabelName}
          </label>
        )}
        <input
          type="text"
          name={displayLabelName}
          id={restProps.id}
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
          <Text color="outline" fontClass="caption" className="ml-2xs">
            Help text goes here
          </Text>
        </Row>
      )}
    </div>
  );
}
