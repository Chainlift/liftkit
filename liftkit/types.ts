import { ReactNode } from "react";

// types.ts
export type LiftKitFont =
  | "display1"
  | "display2"
  | "title1"
  | "title2"
  | "title3"
  | "heading"
  | "subheading"
  | "body"
  | "callout"
  | "label"
  | "caption"
  | "capline";

/**
 * The base interface properties of any LiftKit Component
 */

export interface LiftKitComponent {
  /**
   * N number of children.
   */
  children?: ReactNode;

  /**
   * Extra classes to pass to the outermost className attribute.
   */
  modifiers?: string;
}

export interface TextInputProps {
  children?: React.ReactNode;
  fieldName: string;
  placeholder?: string;
  endIcon?: React.ReactNode;
  backgroundColor?: string;
  stateLifter?: (value: any) => void;
  defaultValue?: any;
  type?: string;
  labelPosition?: "top" | "on-field" | undefined;
  customLabelText?: string | null;
  modifiers?: string | undefined | null;
  required?: boolean;
  showErrorState?: boolean;
  helpText?: string;
  errorStateTrigger?: "instant" | "onSubmit" | null;
  variant?: "underline" | "filled" | "outlined";
}
