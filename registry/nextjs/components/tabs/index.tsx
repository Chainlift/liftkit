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

export default function Tabs({
  tabLinks,
  activeTab,
  setActiveTab,
  children,
  ...rest
}: LkTabsProps) {
  // const [activeTab] = useState(0);

  const dataAttrs = useMemo(() => propsToDataAttrs({}, "tabs"), []);

  return (
    <div lk-component="tabs" {...dataAttrs} {...rest}>
      <TabMenu
        tabLinks={tabLinks}
        justifyContent="start"
        alignItems="stretch"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div lk-tabs-el="tab-content">
        {children.map((child, index) => (
          <div
            key={index}
            style={{ display: index === activeTab ? "block" : "none" }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
