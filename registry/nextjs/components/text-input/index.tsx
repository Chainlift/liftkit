import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "./text-input.css";

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;
}

export default function TextInput(props: LkTextInputProps) {
  const { ...restProps } = props;

  const lkTextInputAttrs = useMemo(
    () => propsToDataAttrs(restProps, "lk-text-input"),
    [restProps],
  );

  return (
    <div {...lkTextInputAttrs}>{/* implementation omitted for brevity */}</div>
  );
}
