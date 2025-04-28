import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;
}

export default function TextInput(props: LkTextInputProps) {
  const { ...restProps } = props;

  const lkTextInputAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-text-input"),
    [restProps.labelPosition, restProps.helpText, restProps.placeholderText]
  );

  return (
    <div {...lkTextInputAttrs}>{/* implementation omitted for brevity */}</div>
  );
}
