"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";

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
}: LkIconProps) {
  return (
    <div lk-component="icon">
      <DynamicIcon
        name={name}
        className={fontClass}
        color={`var(--lk-${color})`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}
