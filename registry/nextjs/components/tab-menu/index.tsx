import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Row from "@/registry/nextjs/components/row";
import TabLink from "@/registry/nextjs/components/tab-link";
import "@/registry/nextjs/components/tab-menu/tab-menu.css";

interface LkTabMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  tabLinks?: string[];
  alignItems?: "start" | "center" | "end" | "stretch";
  justifyContent?: "start" | "center" | "end" | "space-between" | "space-around";
  activeTab: number;
  setActiveTab: (index: number) => void;
  onClick?: (index: number) => void; // Optional function to lift state
}

export default function TabMenu(props: LkTabMenuProps) {
  const {
    tabLinks = ["Tab Link 1", "Tab Link 2", "Tab Link 3"],
    alignItems,
    justifyContent,
    activeTab,
    setActiveTab,
    onClick,
    ...restProps
  } = props;

/**Don't include tabLinks or setActiveTab props in the useMemo hook, because they don't affect CSS. */

  const dataAttrs = useMemo(
    () => propsToDataAttrs({ alignItems, justifyContent, activeTab }, "tab-menu"),
    [alignItems, justifyContent, activeTab]
  );

  return (
    <div data-lk-component="tab-menu" {...dataAttrs} {...restProps}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        {tabLinks.map((label, index) => (
          <TabLink key={index} selected={index === activeTab} onClick={() => setActiveTab(index)}>
            <div>{label ?? "Tab Link"}</div>
          </TabLink>
        ))}
      </Row>
    </div>
  );
}
