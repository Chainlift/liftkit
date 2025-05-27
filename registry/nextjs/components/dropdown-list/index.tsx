// import { useMemo } from "react";
// import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
// import "@/registry/nextjs/components/dropdown-list/dropdown-list.css";

// interface LkDropdownListProps extends React.HTMLAttributes<HTMLDivElement> {
//   isOpen?: boolean;
//   children?: React.ReactNode;
// }

// export default function DropdownList(props: LkDropdownListProps) {
//   const { children, ...restProps } = props;

//   const listAttrs = useMemo(
//     () => propsToDataAttrs(restProps, "dropdown-list"),
//     [restProps],
//   );

//   return (
//     <div lk-component="dropdown-list" {...listAttrs}>
//       <div lk-component="column">{children}</div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import "@/registry/nextjs/components/dropdown-list/dropdown-list.css";

export interface LkDropdownProps {
  isOpen: boolean;
  triggerCoords: { x: number; y: number };
  items: ReactNode[];
}

export default function DropdownList({
  isOpen,
  triggerCoords,
  items,
}: LkDropdownProps) {
  const [transformOrigin, setTransformOrigin] = useState("topLeft");
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const { innerWidth: vpWidth, innerHeight: vpHeight } = window;
    const xMid = vpWidth / 2;
    const yMid = vpHeight / 2;

    const { x, y } = triggerCoords;

    const origin =
      x > xMid
        ? y < yMid
          ? "topRight"
          : "bottomRight"
        : y < yMid
          ? "topLeft"
          : "bottomLeft";

    setTransformOrigin(origin);

    // Adjust offsets based on origin
    const offsetX = origin.includes("Right") ? -200 : 0;
    const offsetY = origin.includes("bottom") ? -150 : 0;

    setPosition({ top: y + offsetY, left: x + offsetX });
  }, [triggerCoords, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      lk-component="dropdown-list"
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transformOrigin: transformOrigin,
        zIndex: 9999,
      }}
    >
      <div lk-component="column">{items}</div>
    </div>
  );
}
