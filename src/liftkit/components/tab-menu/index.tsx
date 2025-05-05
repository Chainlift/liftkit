import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Row from "@/liftkit/components/row";
import TabLink from "@/liftkit/components/tab-link";

interface LkTabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLinks?: string[];
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
}

export default function TabMenu({
  tabLinks = ["Tab Link 1", "Tab Link 2", "Tab Link 3"],
  alignItems,
  justifyContent,
  ...rest
}: LkTabMenuProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({}, "lk-tab-menu"), []);

  return (
    <div {...dataAttrs} {...rest}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        {tabLinks.map((label, index) => (
          <TabLink key={index}>
            <div>{label ?? "Tab Link"}</div>
          </TabLink>
        ))}
      </Row>
    </div>
  );
}