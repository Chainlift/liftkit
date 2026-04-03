"use client";

import {
  ExampleAccordion,
  ExampleAlertDialog,
  ExampleAutocomplete,
  ExampleAvatar,
  ExampleButton,
  ExampleCheckboxGroup,
  ExampleCheckbox,
  ExampleCollapsible,
  ExampleCombobox,
  ExampleContextMenu,
  ExampleDialog,
  ExampleField,
  ExampleFieldset,
  ExampleForm,
  ExampleIconButton,
  ExampleIcon,
  ExampleInput,
  ExampleMenu,
  ExampleMenubar,
  ExampleMeter,
  ExampleNavigationMenu,
  ExampleNumberField,
  ExamplePopover,
  ExamplePreviewCard,
  ExampleProgress,
  ExampleRadio,
  ExampleScrollArea,
  ExampleSelect,
  ExampleSeparator,
  ExampleSlider,
  ExampleSwitch,
  ExampleTabs,
  ExampleToast,
  ExampleToggleGroup,
  ExampleToggle,
  ExampleToolbar,
  ExampleTooltip,
} from "@/liftkit/examples";
import { Card } from "@/liftkit/component-definitions/card/card";
import { Avatar, AvatarImage, Toggle, Icon } from "@/liftkit/component-definitions";
export function ComponentMosaic() {
  return (
    <div className="flex-v gap-0">
      {/* ── App Chrome ── */}
      <ExampleNavigationMenu />
      <ExampleMenubar />
      <ExampleToolbar />

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
                <div className="body font-500">Garrett Mack</div>
                <span className="subheading color-onsurfacelow">Product Designer</span>
              </div>
              <Toggle>
                <Icon name="star" />
              </Toggle>
            </div>
            <ExamplePreviewCard />
            <div className="flex items-center gap-sm">
              <ExampleTooltip />
              <ExampleIconButton />
              <ExampleIcon />
            </div>
          </Card>

          {/* Storage & Activity */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading mb-sm">Activity</div>
            <div className="flex-v gap-md">
              <ExampleMeter />
              <ExampleProgress />
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading mb-sm">Actions</div>
            <div className="flex-v gap-sm">
              <div className="flex items-center gap-sm">
                <ExampleButton />
                <ExampleDialog />
              </div>
              <div className="flex items-center gap-sm">
                <ExampleAlertDialog />
                <ExampleMenu />
              </div>
              <div className="flex items-center gap-sm">
                <ExamplePopover />
                <ExampleToast />
              </div>
            </div>
          </Card>
        </div>

        {/* ━━ Main Content ━━ */}
        <div className="flex-v gap-lg">
          {/* Tabbed workspace */}
          <Card className="shadow-xs" scaleFactor="body">
            <ExampleTabs />
          </Card>

          {/* Context menu area + scroll content */}
          <Card className="shadow-xs" scaleFactor="body">
            <ExampleContextMenu />
            <ExampleScrollArea />
          </Card>

          {/* FAQ */}
          <Card className="shadow-xs" scaleFactor="heading" opticalCorrection="top">
            <div className="heading-bold mb-sm">Frequently Asked Questions</div>
            <ExampleAccordion />
          </Card>

          {/* Collapsible details */}
          <Card className="shadow-xs" scaleFactor="body">
            <ExampleCollapsible />
          </Card>
        </div>

        {/* ━━ Right Sidebar ━━ */}
        <div className="flex-v gap-lg">
          {/* Search */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Search</div>
            <div className="flex-v gap-md">
              <ExampleAutocomplete />
              <ExampleCombobox />
            </div>
          </Card>

          {/* Settings form */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Settings</div>
            <div className="flex-v gap-md">
              <ExampleSelect />
              <ExampleInput />
              <ExampleField />
              <ExampleNumberField />
              <ExampleSlider />
            </div>
          </Card>

          {/* Preferences */}
          <Card className="shadow-xs" scaleFactor="body">
            <div className="heading-bold mb-sm">Preferences</div>
            <div className="flex-v gap-md">
              <ExampleSwitch />
              <ExampleCheckbox />
              <ExampleCheckboxGroup />
              <ExampleRadio />
              <ExampleToggleGroup />
            </div>
          </Card>

          {/* Inline form */}
          <Card className="shadow-xs" scaleFactor="body">
            <ExampleFieldset />
            <div className="pt-md">
              <ExampleForm />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
