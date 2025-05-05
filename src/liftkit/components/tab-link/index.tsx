import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Text from "@/liftkit/components/text";

interface LkTabLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  fontClass?: LkFontClass;
  indicatorClass?: string;
  children?: React.ReactElement<HTMLDivElement>;
  // activeTab?: number;
}

export default function TabLink({
  selected = false,
  fontClass = "body",
  indicatorClass = "lk-indicator",
  // activeTab,
  children,
  ...rest
}: LkTabLinkProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ selected }, "lk-tab-link"),
    [selected],
  );

  return (
    <div {...dataAttrs} {...rest}>
      <div lk-slot="child">
        <Text fontClass={fontClass} style={selected ? { fontWeight: 700 } : {}}>
          {children}
        </Text>
      </div>
      <div className={indicatorClass}></div>
    </div>
  );
}