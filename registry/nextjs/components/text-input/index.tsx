import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/text-input/text-input.css";

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;
}

export default function TextInput(props: LkTextInputProps) {
  const { labelPosition = "default", helpText, placeholderText, ...restProps } = props;

  const lkTextInputAttrs = useMemo(() => propsToDataAttrs(restProps, "lk-text-input"), [restProps]);

  return <div {...lkTextInputAttrs}>{/* implementation omitted for brevity */}</div>;
}
