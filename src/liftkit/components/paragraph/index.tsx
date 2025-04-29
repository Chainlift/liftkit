import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";

interface LkParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontClass?: string; // Should be LkFontClass in production
  content?: string;
}

export default function Paragraph({
  fontClass = "body",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  ...rest
}: LkParagraphProps) {
  const paragraphAttrs = useMemo(
    () => propsToDataAttrs(rest, "lk-paragraph"),
    [rest],
  );

  return (
    <p className={`lk-font-${fontClass}`} {...paragraphAttrs}>
      {content}
    </p>
  );
}
