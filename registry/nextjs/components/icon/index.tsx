import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import "@/registry/nextjs/components/icon/icon.css";

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
  color = "onsurface",
  strokeWidth = 2,
  ...restProps
}: LkIconProps) {
  return (
    <div lk-component="icon" {...restProps} lk-icon-font-class={fontClass}>
      <DynamicIcon
        name={name}
        width="1em"
        height="1em"
        color={`var(--lk-${color})`}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}
