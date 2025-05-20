import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Text from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/tab-link/tab-link.css";

interface LkTabLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  fontClass?: LkFontClass;
  indicatorClass?: string;
  children?: React.ReactElement<HTMLDivElement>;
}

export default function TabLink({
  selected = false,
  fontClass = "body",
  indicatorClass = "lk-indicator",
  children,
  ...rest
}: LkTabLinkProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ selected }, "tab-link"),
    [selected],
  );
  console.log("Selected:", selected);
  return (
    <div lk-component="tab-link" {...dataAttrs} {...rest}>
      <div lk-slot="child">
        <Text fontClass={fontClass} style={selected ? { fontWeight: 700 } : {}}>
          {children}
        </Text>
      </div>
      <div className={indicatorClass}></div>
    </div>
  );
}
