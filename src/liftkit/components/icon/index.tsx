"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import { useEffect, useRef, useState } from "react";

interface LkIconProps extends React.HTMLAttributes<HTMLElement> {
  name?: IconName;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  strokeWidth?: number;
}

export default function Icon({
  name = "roller-coaster",
  fontClass,
  color,
  strokeWidth = 2,
  ...restProps
}: LkIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (ref.current) {
      const computedStyle = getComputedStyle(ref.current)
      console.log("Computed Style:", computedStyle) 
      const fontSize = parseFloat(computedStyle.fontSize);
      console.log("fontSize:", fontSize)
      if (!isNaN(fontSize)) {
        setSize(fontSize)
      }
    }
  }, [fontClass])
console.log("Size:", size)

  return (
    <div lk-component="icon"
    {...restProps}
    > <span ref={ref} className={fontClass} style={{ position: "absolute", visibility: "hidden", height: 0, overflow: "hidden" }}>
    A
  </span>
      <DynamicIcon
        name={name}
        size={size}
        color={`var(--lk-${color})`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}
