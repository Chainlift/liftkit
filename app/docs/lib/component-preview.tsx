"use client";

import { useState } from "react";
import { componentManifest, type ComponentName, type Control } from "@/app/docs/lib/component-manifest";
import { GoldenBox } from "@/liftkit/ui/goldenbox/goldenbox";
import { Switch, SwitchThumb } from "@/liftkit/ui/switch/switch";
import { RichCodeBlock } from "@/app/docs/lib/rich-code-block";
import "./subcomponent-table-styles.css";
import { Tabs, TabsPanel, TabsTab, TabsList, TabsIndicator } from "@/liftkit/ui";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/liftkit/ui";
import { Icon } from "@/liftkit/ui";

interface ComponentPreviewProps {
  componentName: ComponentName;
  tsSample?: string | null;
  cssSample?: string | null;
}

export function ComponentPreview({ componentName, tsSample, cssSample }: ComponentPreviewProps) {
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
          <GoldenBox opticalCorrection="y" className="w-full" noPadding="x">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2xs">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon name="info" color="outline"/>
                    </TooltipTrigger>
                    <TooltipContent>{control.description}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <label>{control.label}</label>
              </div>

              <Switch
                className="subheading"
                checked={currentValue}
                onCheckedChange={(checked) => updateKnob(key, checked)}
              >
                <SwitchThumb></SwitchThumb>
              </Switch>
            </div>
          </GoldenBox>
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
    <div className="w-full rounded-xs shadow-2xs overflow-hidden bg-surfacecontainer">
      {/* Controls Panel */}

      {/* Live Preview */}
      <div className="flex flex-grow py-2xl items-center justify-center">
        <Component {...componentProps} />
      </div>
      <div className="bg-surfacecontainerlowest flex">
        <GoldenBox opticalCorrection="top" style={{ width: "240px" }} scaleFactor="subheading">
          <h2 className="subheading font-500 mb-md">Preview Props</h2>
          {manifest.knobs && (
            <div data-instance="lk-docs-table">
              {Object.entries(manifest.knobs).map(([key, control]) => (
                <div key={key}>
                  <div className="flex justify-start">{renderControl(key, control, knobValues[key])}</div>
                </div>
              ))}
            </div>
          )}
        </GoldenBox>
        <Tabs
          defaultValue="typescript"
          className="fill-container border-l border-color-outlinevariant"
          style={{ minWidth: "0" }}
        >
          <TabsList className="border-b border-color-outlinevariant">
            <TabsTab value="typescript">
              <span className="subheading font-500">Typescript</span>
            </TabsTab>
            <TabsTab value="css">
              <span className="subheading font-500">CSS</span>
            </TabsTab>
            <TabsIndicator />
          </TabsList>
          <TabsPanel value="typescript" style={{ height: "500px" }}>
            <RichCodeBlock html={tsSample ?? undefined} />
          </TabsPanel>
          <TabsPanel value="css" style={{ height: "500px" }}>
            <RichCodeBlock html={cssSample ?? undefined} />
          </TabsPanel>
          <TabsPanel value="account">Account</TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
