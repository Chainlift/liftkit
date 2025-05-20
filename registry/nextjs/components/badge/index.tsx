import Icon from "@/registry/nextjs/components/icon";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "@/registry/nextjs/components/badge/badge.css";

interface LkBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  color?: LkColorWithOnToken;
  scale?: "md" | "lg";
  iconStrokeWidth?: number;
}

export default function Badge({
  icon = "roller-coaster",
  color = "surface",
  scale = "md",
  iconStrokeWidth = 1,
  ...restProps
}: LkBadgeProps) {
  const iconColor = getOnToken(color) as LkColor;

  return (
    <div
      lk-component="badge"
      lk-badge-scale={scale}
      lk-badge-color={`lk-${color}`}
      {...restProps}
    >
      <div lk-component="slot" lk-slot="icon">
        <Icon
          name={icon}
          color={iconColor}
          strokeWidth={iconStrokeWidth}
        ></Icon>
      </div>
    </div>
  );
}
