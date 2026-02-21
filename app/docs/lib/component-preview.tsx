"use client";

import { useState } from "react";
import { componentManifest, type ComponentName, type Control } from "@/app/docs/lib/component-manifest";
import { GoldenBox } from "@/liftkit/ui/goldenbox";
import { Switch, SwitchThumb } from "@/liftkit/ui/switch/switch";

interface ComponentPreviewProps {
  componentName: ComponentName;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const manifest = componentManifest[componentName];

  // Initialize state from defaults
  const [knobValues, setKnobValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    if (manifest.knobs) {
      for (const [key, control] of Object.entries(manifest.knobs)) {
        initial[key] = control.default;
      }
    }
    return initial;
  });

  // Update a single knob
  const updateKnob = (key: string, value: any) => {
    setKnobValues((prev) => ({ ...prev, [key]: value }));
  };

  // Render the appropriate control for each knob type
  const renderControl = (key: string, control: Control, currentValue: any) => {
    switch (control.kind) {
      case "select":
        return (
          <select
            value={currentValue}
            onChange={(e) => updateKnob(key, e.target.value)}
            className="border rounded px-2 py-1"
          >
            {control.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case "boolean":
        return (
          <Switch checked={currentValue} onCheckedChange={(checked) => updateKnob(key, checked)}>
            <SwitchThumb></SwitchThumb>
          </Switch>
        );

      case "text":
      case "slot":
        return (
          <input
            type="text"
            value={currentValue}
            onChange={(e) => updateKnob(key, e.target.value)}
            placeholder={control.kind === "text" ? control.placeholder : undefined}
            className="border rounded px-2 py-1 w-full"
          />
        );

      case "number":
        return (
          <input
            type="number"
            value={currentValue}
            onChange={(e) => updateKnob(key, parseFloat(e.target.value))}
            min={control.min}
            max={control.max}
            step={control.step}
            className="border rounded px-2 py-1 w-full"
          />
        );

      case "color":
        return (
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={currentValue}
              onChange={(e) => updateKnob(key, e.target.value)}
              className="w-12 h-8 border rounded"
            />
            <input
              type="text"
              value={currentValue}
              onChange={(e) => updateKnob(key, e.target.value)}
              className="border rounded px-2 py-1 flex-1"
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Apply mapKnobsToProps transformation if defined
  const finalProps = manifest.mapKnobsToProps ? manifest.mapKnobsToProps(knobValues) : knobValues;

  // Merge with baseProps if defined and cast to any for dynamic component rendering
  const componentProps = { ...(manifest.baseProps || {}), ...finalProps } as any;

  const Component = manifest.Component;

  return (
    <div className="w-full flex ">
      {/* Controls Panel */}
      <div className="bg-surface border-r">
        <GoldenBox opticalCorrection="top">
          {manifest.knobs && (
            <div className="flex flex-col gap-md">
              {Object.entries(manifest.knobs).map(([key, control]) => (
                <div key={key} className="flex items-center gap-3">
                  <label className="text-sm font-medium min-w-[100px]">{control.label || key}</label>
                  <div className="flex-1">{renderControl(key, control, knobValues[key])}</div>
                </div>
              ))}
            </div>
          )}
        </GoldenBox>
      </div>
      {/* Live Preview */}
      <div className="flex flex-grow py-2xl items-center justify-center bg-surfacecontainer">
        <Component {...componentProps} />
      </div>
    </div>
  );
}
