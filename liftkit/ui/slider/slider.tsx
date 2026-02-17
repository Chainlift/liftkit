"use client";

import { cn } from "@/lib/cn";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import "./slider.css";

function Slider({ ...props }: SliderPrimitive.Root.Props) {
  return <SliderPrimitive.Root data-slot="slider" {...props} />;
}

function SliderControl({ className, ...props }: SliderPrimitive.Control.Props) {
  return <SliderPrimitive.Control data-slot="slider-control" className={cn("", "Control", className)} {...props} />;
}

function SliderTrack({ className, ...props }: SliderPrimitive.Track.Props) {
  return <SliderPrimitive.Track data-slot="slider-track" className={cn("", "Track", className)} {...props} />;
}

function SliderIndicator({ className, ...props }: SliderPrimitive.Indicator.Props) {
  return (
    <SliderPrimitive.Indicator data-slot="slider-indicator" className={cn("", "Indicator", className)} {...props} />
  );
}

function SliderThumb({ className, ...props }: SliderPrimitive.Thumb.Props) {
  return <SliderPrimitive.Thumb data-slot="slider-thumb" className={cn("", "Thumb", className)} {...props} />;
}

export { Slider, SliderControl, SliderTrack, SliderIndicator, SliderThumb };
