import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import "@/registry/nextjs/components/menu-chip/menu-chip.css";

interface LkMenuChipProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  label?: string;
}

export default function MenuChip({
  isActive = false,
  label = "Menu Label",
  ...rest
}: LkMenuChipProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ open: isActive }, "menu-chip"),
    [isActive],
  );

  return (
    <div lk-component="menu-chip" {...dataAttrs} {...rest}>
      <span>{label}</span>
      <div lk-dropdown-el="chip">
        <i lk-component="icon">keyboard_arrow_down</i>
      </div>
      <div lk-component="state-layer"></div>
    </div>
  );
}
