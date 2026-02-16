"use client";

import { cn } from "@/lib/cn";
import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import styles from "./index.module.css";

function Meter({ className, ...props }: MeterPrimitive.Root.Props) {
  return <MeterPrimitive.Root data-slot="meter" className={cn("", styles.Meter, className)} {...props} />;
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return <MeterPrimitive.Label data-slot="meter-label" className={cn("", styles.Label, className)} {...props} />;
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return <MeterPrimitive.Value data-slot="meter-value" className={cn("", styles.Value, className)} {...props} />;
}

function MeterTrack({ className, ...props }: MeterPrimitive.Track.Props) {
  return <MeterPrimitive.Track data-slot="meter-track" className={cn("", styles.Track, className)} {...props} />;
}

function MeterIndicator({ className, ...props }: MeterPrimitive.Indicator.Props) {
  return <MeterPrimitive.Indicator data-slot="meter-indicator" className={cn("", styles.Indicator, className)} {...props} />;
}

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator };
