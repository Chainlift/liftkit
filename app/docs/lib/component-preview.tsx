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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
  SelectList,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
} from "@/liftkit/ui";
import { Field, FieldLabel } from "@/liftkit/ui/field/field";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/ui/scroll-area/scroll-area";
import { Input } from "@/liftkit/ui";

interface ComponentPreviewProps {
  componentName: ComponentName;
  staticTSSample?: string | null;
  staticCSSSample?: string | null;
}

export function ComponentPreview({ componentName, staticTSSample, staticCSSSample }: ComponentPreviewProps) {
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

  // Generate reactive code strings from knob values

  // retrieve the server-generated code by default
  const dynamicGeneratedTS = manifest.tsExampleFn ? manifest.tsExampleFn(knobValues) : null;
  const serverGeneratedCSS = manifest.cssExampleFn ? manifest.cssExampleFn(knobValues) : null;

  console.log(dynamicGeneratedTS);

  // Update a single knob
  const updateKnob = (key: string, value: any) => {
    setKnobValues((prev) => ({ ...prev, [key]: value }));
  };

  // Render the appropriate control for each knob type
  const renderControl = (key: string, control: Control, currentValue: any) => {
    switch (control.kind) {
      case "select":
        return (
          // <select
          //   value={currentValue}
          //   onChange={(e) => updateKnob(key, e.target.value)}
          //   className="border rounded px-2 py-1"
          // >
          //   {control.options.map((opt) => (
          //     <option key={opt.value} value={opt.value}>
          //       {opt.label}
          //     </option>
          //   ))}
          // </select>
          <Field>
            <FieldLabel nativeLabel={false} render={<div className="label mb-2xs" />}>
              {control.label}
            </FieldLabel>
            <Select items={control.options} onValueChange={(value) => updateKnob(key, value)} value={knobValues[key]}>
              <SelectTrigger className="w-full">
                <SelectValue />
                <SelectIcon>
                  <Icon name="chevron-up" />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectPositioner sideOffset={8}>
                  <SelectPopup>
                    <SelectScrollUpArrow />
                    <SelectList>
                      {control.options.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          <SelectItemIndicator>
                            <Icon name="check" />
                          </SelectItemIndicator>
                          <SelectItemText>{opt.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectList>
                    <SelectScrollDownArrow />
                  </SelectPopup>
                </SelectPositioner>
              </SelectPortal>
            </Select>
          </Field>
        );

      case "boolean":
        return (
          <GoldenBox opticalCorrection="y" className="w-full" noPadding="x">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2xs">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon name="info" color="outline" />
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
          <Input
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
        <ScrollArea style={{ width: "240px", height: "533px" }}>
          <ScrollAreaViewport>
            <ScrollAreaContent className="p-0">
              <GoldenBox opticalCorrection="top" scaleFactor="subheading">
                <h2 className="subheading font-500 mb-md">Preview Props</h2>
                {manifest.knobs && (
                  <div className="flex flex-col gap-md">
                    {Object.entries(manifest.knobs).map(([key, control]) => (
                      <div key={key}>
                        <div className="flex justify-start">{renderControl(key, control, knobValues[key])}</div>
                      </div>
                    ))}
                  </div>
                )}
              </GoldenBox>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaScrollbar>
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
          <ScrollAreaCorner />
        </ScrollArea>

        <Tabs
          defaultValue="typescript"
          className="fill-container border-l border-color-outlinevariant bg-surface"
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
            {/* <RichCodeBlock preHighlightedCode={tsSample ?? undefined} knobValues={knobValues} /> */}
            <RichCodeBlock
              preHighlightedCode={staticTSSample ?? undefined}
              codeForClientHighlighting={dynamicGeneratedTS ?? undefined}
              lang="tsx"
            >
              {/* {dynamicGeneratedTS ? <code>{dynamicGeneratedTS}</code> : undefined} */}
            </RichCodeBlock>
          </TabsPanel>
          <TabsPanel value="css" style={{ height: "500px" }}>
            <RichCodeBlock
              preHighlightedCode={serverGeneratedCSS ?? undefined}
              codeForClientHighlighting={serverGeneratedCSS ?? undefined}
              lang="css"
            >
              {serverGeneratedCSS ? <code>{serverGeneratedCSS}</code> : undefined}
            </RichCodeBlock>
          </TabsPanel>
          <TabsPanel value="account">Account</TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
