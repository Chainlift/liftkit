import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/paragraph/paragraph.css";

interface LkParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  fontClass?: LkFontClass; // Should be LkFontClass in production
  content?: string;
}

export default function Paragraph({
  fontClass = "body",
  children,
  ...rest
}: LkParagraphProps) {
  const paragraphAttrs = useMemo(
    () => propsToDataAttrs(rest, "paragraph"),
    [rest],
  );

  return (
    <p lk-component="paragraph" className={`${fontClass}`} {...paragraphAttrs}>
      {children}
    </p>
  );
}
