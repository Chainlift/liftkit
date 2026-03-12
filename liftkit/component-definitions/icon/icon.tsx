import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import "@/liftkit/component-css/lk-icon.css";

export interface LkIconProps extends React.HTMLAttributes<HTMLElement> {
  name?: IconName;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  width?: string;
  height?: string;
  strokeWidth?: number;
  opticShift?: boolean; //if true, pulls icon slightly upward
  fill?: string;
}

export function Icon({
  name = "roller-coaster",
  fontClass,
  color = "currentColor",
  width = "1em",
  height = "1em",
  strokeWidth = 2,
  opticShift = false,
  fill,
  ...props
}: LkIconProps) {
  return (
    <div data-lk-component="icon" data-slot="icon" data-lk-icon-offset={opticShift} {...props} data-lk-icon-font-class={fontClass}>
      <DynamicIcon
        name={name}
        width={width}
        height={height}
        color={color === "currentColor" ? "currentColor" : `var(--lk-${color})`}
        strokeWidth={strokeWidth}
        {...(fill && { fill })}
      />
    </div>
  );
}
