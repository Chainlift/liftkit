"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import TabMenu from "@/registry/nextjs/components/tab-menu";
import "@/registry/nextjs/components/tabs/tabs.css";

interface LkTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLinks: string[];
  children: React.ReactNode[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export default function Tabs(props: LkTabsProps) {
  // const [activeTab] = useState(0);

  const { tabLinks, activeTab, setActiveTab, children, ...restProps } = props;

  const dataAttrs = useMemo(() => propsToDataAttrs({activeTab}, "tabs"), [activeTab]);

  return (
    <div lk-component="tabs" {...dataAttrs} {...restProps}>
      <TabMenu
        tabLinks={tabLinks}
        justifyContent="start"
        alignItems="stretch"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div lk-tabs-el="tab-content">
        {children.map((child, index) => (
          <div key={index} style={{ display: index === activeTab ? "block" : "none" }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
