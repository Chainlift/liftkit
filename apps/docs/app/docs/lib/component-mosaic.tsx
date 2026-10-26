"use client";

import ButtonDemo from "@/content/components/button/demo";
import AccordionDemo from "@/content/components/accordion/demo";
import AlertDialogDemo from "@/content/components/alert-dialog/demo";
import AutocompleteDemo from "@/content/components/autocomplete/demo";
import AvatarDemo from "@/content/components/avatar/demo";
import CheckboxGroupDemo from "@/content/components/checkbox-group/demo";
import CheckboxDemo from "@/content/components/checkbox/demo";
import CollapsibleDemo from "@/content/components/collapsible/demo";
import ComboboxDemo from "@/content/components/combobox/demo";
import ContextMenuDemo from "@/content/components/context-menu/demo";
import DialogDemo from "@/content/components/dialog/demo";
import FieldDemo from "@/content/components/field/demo";
import FieldsetDemo from "@/content/components/fieldset/demo";
import FormDemo from "@/content/components/form/demo";
import IconButtonDemo from "@/content/components/icon-button/demo";
import IconDemo from "@/content/components/icon/demo";
import InputDemo from "@/content/components/input/demo";
import MenuDemo from "@/content/components/menu/demo";
import MenubarDemo from "@/content/components/menubar/demo";
import MeterDemo from "@/content/components/meter/demo";
import NumberFieldDemo from "@/content/components/number-field/demo";
import PopoverDemo from "@/content/components/popover/demo";
import PreviewCardDemo from "@/content/components/preview-card/demo";
import ProgressDemo from "@/content/components/progress/demo";
import RadioDemo from "@/content/components/radio/demo";
import ScrollAreaDemo from "@/content/components/scroll-area/demo";
import SelectDemo from "@/content/components/select/demo";
import SeparatorDemo from "@/content/components/separator/demo";
import SliderDemo from "@/content/components/slider/demo";
import SwitchDemo from "@/content/components/switch/demo";
import TabsDemo from "@/content/components/tabs/demo";
import ToastDemo from "@/content/components/toast/demo";
import ToggleGroupDemo from "@/content/components/toggle-group/demo";
import ToggleDemo from "@/content/components/toggle/demo";
import ToolbarDemo from "@/content/components/toolbar/demo";
import TooltipDemo from "@/content/components/tooltip/demo";
import { Card } from "@chainlift/liftkit";
import { Avatar, AvatarImage, Toggle, Icon, Button } from "@chainlift/liftkit";
export function ComponentMosaic() {
  return (
    <div className="flex-v gap-0">
      {/* ── App Chrome ── */}
      <MenubarDemo />
      <ToolbarDemo />

      {/* ── Main Layout ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr 300px",
          gap: "var(--lk-size-lg)",
          padding: "var(--lk-size-lg)",
          alignItems: "start",
        }}
      >
        {/* ━━ Left Sidebar ━━ */}
        <div className="flex-v gap-lg">
          {/* Profile */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="flex items-center gap-md mb-md">
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                    width="48"
                    height="48"
                  />
                </Avatar>
              </div>
              <div className="flex-v flex-grow">
                <div className="heading mb-2xs">Garrett Mack</div>
                <span className="subheading color-onsurfacelow">Product Designer</span>
              </div>
              <Toggle>
                <Icon name="star" />
              </Toggle>
            </div>
            <PreviewCardDemo />
            <div className="flex items-center gap-sm pt-md justify-end">
              <Button startIcon="send" className="w-full justify-center">Message</Button>
            </div>
          </Card>

          {/* Storage & Activity */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading mb-sm">Activity</div>
            <div className="flex-v gap-md">
              <MeterDemo />
              <ProgressDemo />
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading mb-sm">Actions</div>
            <div className="flex-v gap-sm">
              <div className="flex items-center gap-sm">
                <ButtonDemo />
                <DialogDemo />
                <TooltipDemo />
                <IconButtonDemo />
                <IconDemo />
              </div>
              <div className="flex items-center gap-sm">
                <AlertDialogDemo />
                <MenuDemo />
              </div>
              <div className="flex items-center gap-sm">
                <PopoverDemo />
                <ToastDemo />
              </div>
            </div>
          </Card>
        </div>

        {/* ━━ Main Content ━━ */}
        <div className="flex-v gap-lg">
          {/* Tabbed workspace */}
          <Card className="shadow-xs" scaleFactor="body">
            <TabsDemo />
          </Card>

          {/* Context menu area + scroll content */}
          <Card className="shadow-xs" scaleFactor="body">
            <ContextMenuDemo />
            <ScrollAreaDemo />
          </Card>

          {/* FAQ */}
          <Card className="shadow-xs" scaleFactor="heading" opticalCorrection="top">
            <div className="heading-bold mb-sm">Frequently Asked Questions</div>
            <AccordionDemo />
          </Card>

          {/* Collapsible details */}
          <Card className="shadow-xs" scaleFactor="body">
            <CollapsibleDemo />
          </Card>
        </div>

        {/* ━━ Right Sidebar ━━ */}
        <div className="flex-v gap-lg">
          {/* Search */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Search</div>
            <div className="flex-v gap-md">
              <AutocompleteDemo />
              <ComboboxDemo />
            </div>
          </Card>

          {/* Settings form */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Settings</div>
            <div className="flex-v gap-md">
              <SelectDemo />
              <InputDemo />
              <FieldDemo />
              <NumberFieldDemo />
              <SliderDemo />
            </div>
          </Card>

          {/* Preferences */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Preferences</div>
            <div className="flex-v gap-md">
              <SwitchDemo />
              <CheckboxDemo />
              <CheckboxGroupDemo />
              <RadioDemo />
              <ToggleGroupDemo />
            </div>
          </Card>

          {/* Inline form */}
          <Card className="shadow-xs" scaleFactor="body">
            <FieldsetDemo />
            <div className="pt-md">
              <FormDemo />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
