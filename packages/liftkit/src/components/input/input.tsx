"use client";

import { cn } from "../../lib/cn";
import { Input as InputPrimitive } from "@base-ui/react/input";
import "../../css/components/lk-input.css";

export type InputProps = InputPrimitive.Props & {
  /**
   * Sizes the input proportionally: text, padding, and corners all scale from this font class.
   * Defaults to the size of the surrounding text.
   */
  fontClass?: Extract<
    LkFontClass,
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
    | "capline"
  >;
};

function Input({ className, fontClass, ...props }: InputProps) {
  return <InputPrimitive data-slot="input" className={cn(fontClass, className)} {...props} />;
}

export { Input };
