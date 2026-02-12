"use client";

import { useState } from "react";
import { componentManifest, type ComponentName, type Control } from "@/app/docs/lib/component-manifest";

interface ComponentPreviewProps {
  componentName: ComponentName;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const manifest = componentManifest[componentName];

  // Initialize state from defaults
  const [knobValues, setKnobValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    for (const [key, control] of Object.entries(manifest.knobs)) {
      initial[key] = control.default;
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
          <input
            type="checkbox"
            checked={currentValue}
            onChange={(e) => updateKnob(key, e.target.checked)}
            className="w-4 h-4"
          />
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
    <div className="border rounded-lg overflow-hidden">
      {/* Live Preview */}
      <div className="preview p-8 bg-gray-50 flex items-center justify-center min-h-[200px]">
        <Component {...componentProps} />
      </div>

      {/* Controls Panel */}
      <div className="controls p-4 bg-white border-t">
        <div className="grid gap-4">
          {Object.entries(manifest.knobs).map(([key, control]) => (
            <div key={key} className="flex items-center gap-3">
              <label className="text-sm font-medium min-w-[100px]">{control.label || key}</label>
              <div className="flex-1">{renderControl(key, control, knobValues[key])}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
