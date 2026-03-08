"use client";

import { useState, useEffect } from "react";
import { componentManifest, type ComponentName, type Control } from "@/app/docs/lib/component-manifest";
import { GoldenBox } from "@/liftkit/component-definitions/goldenbox/goldenbox";
import { Switch, SwitchThumb } from "@/liftkit/component-definitions/switch/switch";
import { RichCodeBlock } from "@/app/docs/lib/rich-code-block";
import "./subcomponent-table-styles.css";
import { Tabs, TabsPanel, TabsTab, TabsList, TabsIndicator } from "@/liftkit/component-definitions";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/liftkit/component-definitions";
import { Icon } from "@/liftkit/component-definitions";
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
} from "@/liftkit/component-definitions";
import { Field, FieldLabel } from "@/liftkit/component-definitions/field/field";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/liftkit/component-definitions/scroll-area/scroll-area";
import { Input } from "@/liftkit/component-definitions";
import { RadioGroup, Radio, RadioIndicator } from "@/liftkit/component-definitions/radio/radio";

interface ComponentPreviewProps {
  componentName: ComponentName;
  initial_TS?: string | null;
  initial_CSS?: string | null;
}

export function ComponentPreview({ componentName, initial_TS, initial_CSS }: ComponentPreviewProps) {
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
  const dynamic_TS = manifest.example_TS ? manifest.example_TS(knobValues) : null;
  const dynamic_CSS = manifest.example_CSS ? manifest.example_CSS(knobValues) : null;
  const Example_CSS_Dynamic = manifest.Example_CSS_Dynamic ? manifest.Example_CSS_Dynamic(knobValues) : null;

  useEffect(() => {
    console.log(knobValues);
  }, [knobValues]);

  // Update a single knob
  const updateKnob = (key: string, value: any) => {
    setKnobValues((prev) => ({ ...prev, [key]: value }));
  };

  // Render the appropriate control for each knob type
  const renderControl = (key: string, control: Control, currentValue: any) => {
    switch (control.kind) {
      case "select":
        return (
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
          <GoldenBox
            opticalCorrection="y"
            scaleFactor="callout"
            className="w-full border-b border-color-outlinevariant"
          >
            <div className="flex items-center justify-between w-full">
              <div className="">
                <label className="display-block callout font-500 mb-xs">{control.label}</label>
                <p className="label color-onsurfacelow">{control.description ?? "Description missing."}</p>
              </div>

              <div>
                <Switch
                  className="subheading"
                  checked={currentValue}
                  onCheckedChange={(checked) => updateKnob(key, checked)}
                >
                  <SwitchThumb></SwitchThumb>
                </Switch>
              </div>
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

      case "radio":
        return (
          <GoldenBox
            opticalCorrection="top"
            scaleFactor="callout"
            className="w-full border-b border-color-outlinevariant"
          >
            <Field>
              {control.label && (
                <div>
                  <FieldLabel nativeLabel={false} render={<div className="callout font-500 mb-xs" />}>
                    {control.label}
                  </FieldLabel>
                  <p className="label mb-md color-onsurfacelow">{control.description ?? "Description missing."}</p>
                </div>
              )}
              <RadioGroup
                value={currentValue}
                onValueChange={(value) => updateKnob(key, value)}
                className="flex gap-sm"
              >
                {control.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2xs" style={{ cursor: "pointer" }}>
                    <Radio value={opt.value}>
                      <RadioIndicator />
                    </Radio>
                    <span className="subheading">{opt.label}</span>
                  </label>
                ))}
              </RadioGroup>
            </Field>
          </GoldenBox>
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
    <div className="w-full rounded-xs shadow-2xs overflow-hidden ">
      {/* Live Preview */}
      <div
        className="flex flex-grow py-2xl items-center justify-center border-b border-color-outlinevariant bg-surfacecontainerlowest"
        style={{ height: "400px" }}
      >
        <Component {...componentProps} />
      </div>

      {/* Controls Panel */}
      <div className="flex bg-surfacecontainerlowest">
        <ScrollArea style={{ width: "240px", height: "533px" }}>
          <ScrollAreaViewport>
            <ScrollAreaContent className="p-0">
              <div>
                <GoldenBox
                  opticalCorrection="y"
                  scaleFactor="callout"
                  className=""
                  noPadding="top"
                >
                  <h2 className="heading mt-sm mb-2xs font-600 color-onsurface">Common Props</h2>
                  <p className="body font-500 ">
                    See <a href={manifest.docsLink}>Base UI</a> for full list.
                  </p>
                </GoldenBox>
                {manifest.knobs && (
                  <div className="flex flex-col">
                    {Object.entries(manifest.knobs).map(([key, control]) => (
                      <div key={key}>
                        <div className="flex justify-start">{renderControl(key, control, knobValues[key])}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
          className="fill-container border-l border-color-outlinevariant bg-background"
          style={{ minWidth: "0" }}
        >
          <TabsList className="border-b border-color-outlinevariant bg-surfacecontainerhigh">
            <TabsTab value="typescript">
              <span className="subheading font-500">Typescript</span>
            </TabsTab>
            <TabsTab value="css" >
              <span className="subheading font-500">CSS</span>
            </TabsTab>
            <TabsIndicator className="bg-surfacecontainerlowest" />
          </TabsList>
          <TabsPanel value="typescript" style={{ height: "500px" }}>
            {/* <RichCodeBlock preHighlightedCode={tsSample ?? undefined} knobValues={knobValues} /> */}
            <RichCodeBlock
              preHighlightedCode={initial_TS ?? undefined}
              codeForClientHighlighting={dynamic_TS ?? undefined}
              lang="tsx"
            >
              {/* {dynamic_TS ? <code>{dynamic_TS}</code> : undefined} */}
            </RichCodeBlock>
          </TabsPanel>
          <TabsPanel value="css" style={{ height: "500px" }}>
            <RichCodeBlock
              preHighlightedCode={initial_CSS ?? undefined}
              codeForClientHighlighting={dynamic_CSS ?? undefined}
              lang="css"
            ></RichCodeBlock>
          </TabsPanel>
          <TabsPanel value="account">Account</TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
