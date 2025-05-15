import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Row from "@/registry/nextjs/components/row";
import TabLink from "@/registry/nextjs/components/tab-link";
import "./tab-menu.css";

interface LkTabMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLinks?: string[];
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export default function TabMenu({
  tabLinks = ["Tab Link 1", "Tab Link 2", "Tab Link 3"],
  alignItems,
  justifyContent,
  activeTab,
  setActiveTab,
  ...rest
}: LkTabMenuProps) {
  const dataAttrs = useMemo(() => propsToDataAttrs({}, "tab-menu"), []);

  return (
    <div lk-component="tab-menu" {...dataAttrs} {...rest}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        {tabLinks.map((label, index) => (
          <TabLink
            key={index}
            selected={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            <div>{label ?? "Tab Link"}</div>
          </TabLink>
        ))}
      </Row>
    </div>
  );
}
