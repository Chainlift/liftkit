"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import TabMenu from "@/liftkit/components/tab-menu";

interface LkTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLinks: string[];
  children: React.ReactNode[];
}

export default function Tabs({ tabLinks, children, ...rest }: LkTabsProps) {
  const [activeTab] = useState(0);

  const dataAttrs = useMemo(() => propsToDataAttrs({}, "lk-tabs"), []);

  return (
    <div {...dataAttrs} {...rest}>
      <TabMenu
        tabLinks={tabLinks}
        justifyContent="start"
        alignItems="stretch"
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
