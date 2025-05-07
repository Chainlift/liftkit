import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Icon from "../icon";

interface LkTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: "default" | "on-input";
  helpText?: boolean;
  placeholderText?: string;

}

export default function TextInput( {
  label,
  labelPosition = "default",
  helpText,
  placeholderText,
  ...restProps
}: LkTextInputProps) {
 
  console.log("Placeholder", placeholderText, typeof placeholderText)

  const lkTextInputAttrs = useMemo(
    () => propsToDataAttrs(restProps, "text-input"),
    [restProps],
  );
  const isFloating = labelPosition === "on-input";

  return (
    <div lk-component="text-input" {...lkTextInputAttrs}>
    {!isFloating && (
      <label lk-text-input-label="label">{label}</label>
    )}

    <div lk-text-input-element="field-wrap">
      {isFloating && (
        <label lk-text-input-label="label" data-floating="true">{label}</label>
      )}
      <input
        type="text"
        placeholder={isFloating ? " " : placeholderText}
        lk-text-input-input="input"
       
      />
      <Icon name="search-x" color="surface" lk-text-input-icon="icon" />
    </div>

    {helpText && (
      <div lk-text-input-help="help-text">
        <Icon name="info" color="surface" />
        Help Text (Optional)
      </div>
    )}
  </div>
  );
}
