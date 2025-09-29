import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import "@/registry/nextjs/components/icon/icon.css";

export interface LkIconProps extends React.HTMLAttributes<HTMLElement> {
  name?: IconName;
  fontClass?: Exclude<LkFontClass, `${string}-bold` | `${string}-mono`>;
  color?: LkColor | "currentColor";
  display?: "block" | "inline-block" | "inline";
  strokeWidth?: number;
  opticShift?: boolean; //if true, pulls icon slightly upward
}

export default function Icon({
  name = "roller-coaster",
  fontClass,
  color = "onsurface",
  strokeWidth = 2,
  opticShift = false,
  ...restProps
}: LkIconProps) {
  return (
    <div data-lk-component="icon" data-lk-icon-offset={opticShift} {...restProps} data-lk-icon-font-class={fontClass} >
      <DynamicIcon name={name} width="1em" height="1em" color={`var(--lk-${color})`} strokeWidth={strokeWidth} />
    </div>
  );
}
