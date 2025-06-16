import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text-input/text-input.css";
import Icon from "@/registry/nextjs/components/icon";
import Row from "@/registry/nextjs/components/row";
import Text from "@/registry/nextjs/components/text";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { IconName } from "lucide-react/dynamic";
Text;

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholder?: string;
  name?: string;
  endIcon?: IconName;
}

export default function TextInput({
  labelPosition,
  helpText,
  placeholder = "Placeholder",
  name = "Label",
  endIcon = "search",
  ...restProps
}: LkTextInputProps) {
  return (
    <div lk-component="text-input">
      <label htmlFor={name} className="label">
        {name}
      </label>
      <div lk-text-input-el="input-wrap">
        {" "}
        <input type="text" name={name} placeholder={placeholder} {...restProps} />
        <StateLayer />
        <Icon name={endIcon} />
        {/* implementation omitted for brevity */}
      </div>
      
      {helpText && (
        <Row>
          <Icon name="info" fontClass="caption" />
          <Text fontClass="caption">Help text goes here</Text>
        </Row>
      )}
    </div>
  );
}
