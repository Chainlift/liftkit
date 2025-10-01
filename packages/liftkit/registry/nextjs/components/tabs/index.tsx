"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import TabMenu from "@/registry/nextjs/components/tab-menu";
import "@/registry/nextjs/components/tabs/tabs.css";
import { useState, useEffect } from "react";

interface LkTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLinks: string[];
  children: React.ReactNode[];
  scrollableContent?: boolean; // Optional prop to enable scrollable content
  onActiveTabChange?: (index: number) => void; // Optional function to lift state
}

export default function Tabs({ tabLinks, onActiveTabChange, scrollableContent, children, ...restProps }: LkTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index); // Set the clicked tab as active

  };

  useEffect(() => {
    if (onActiveTabChange) {
      onActiveTabChange(activeTab);
    } else {
      return;
    }
  }, [activeTab]);

  const dataAttrs = useMemo(() => propsToDataAttrs({ activeTab }, "tabs"), [activeTab]);

  return (
    <div data-lk-component="tabs" data-lk-tabs-content-scrollable={scrollableContent} {...dataAttrs} {...restProps}>
      <TabMenu
        tabLinks={tabLinks}
        justifyContent="start"
        alignItems="stretch"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClick={handleTabClick}
      />
      <div data-lk-tabs-el="tab-content" data-lk-tabs-content-scrollable={scrollableContent}>
        {children.map((child, index) => (
          <div key={index} style={{ display: index === activeTab ? "block" : "none" }}>
            {child }
          </div>
        ))}
      </div>
    </div>
  );
}
