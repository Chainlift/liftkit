"use client";

import { cn } from "@/lib/cn";
import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import "@/liftkit/component-css/lk-progress.css";

function Progress({ className, ...props }: ProgressPrimitive.Root.Props) {
  return <ProgressPrimitive.Root data-slot="progress" className={cn(className)} {...props} />;
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return <ProgressPrimitive.Label data-slot="progress-label" className={cn(className)} {...props} />;
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return <ProgressPrimitive.Value data-slot="progress-value" className={cn(className)} {...props} />;
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return <ProgressPrimitive.Track data-slot="progress-track" className={cn(className)} {...props} />;
}

function ProgressIndicator({ className, ...props }: ProgressPrimitive.Indicator.Props) {
  return <ProgressPrimitive.Indicator data-slot="progress-indicator" className={cn(className)} {...props} />;
}

export { Progress, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator };
