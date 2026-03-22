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

export function ComponentMosaic() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "2rem",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <ExampleAccordion />
        <div className="label text-align-center mt-lg">Accordion</div>
      </Card>
      <Card>
        <ExampleAlertDialog />
        <div className="label text-align-center mt-lg">Alert Dialog</div>
      </Card>
      <Card>
        <ExampleAutocomplete />
        <div className="label text-align-center mt-lg">Autocomplete</div>
      </Card>
      <Card>
        <ExampleAvatar />
        <div className="label text-align-center mt-lg">Avatar</div>
      </Card>
      <Card>
        <ExampleButton />
        <div className="label text-align-center mt-lg">Button</div>
      </Card>
      <Card>
        <ExampleCheckboxGroup />
        <div className="label text-align-center mt-lg">Checkbox Group</div>
      </Card>
      <Card>
        <ExampleCheckbox />
        <div className="label text-align-center mt-lg">Checkbox</div>
      </Card>
      <Card>
        <ExampleCollapsible />
        <div className="label text-align-center mt-lg">Collapsible</div>
      </Card>
      <Card>
        <ExampleCombobox />
        <div className="label text-align-center mt-lg">Combobox</div>
      </Card>
      <Card>
        <ExampleContextMenu />
        <div className="label text-align-center mt-lg">Context Menu</div>
      </Card>
      <Card>
        <ExampleDialog />
        <div className="label text-align-center mt-lg">Dialog</div>
      </Card>
      <Card className="flex items-center">
        <ExampleField />
        <ExampleCombobox />

        <div className="label text-align-center mt-lg">Field</div>
      </Card>
      <Card>
        <ExampleFieldset />
        <div className="label text-align-center mt-lg">Fieldset</div>
      </Card>
      <Card>
        <ExampleForm />
        <div className="label text-align-center mt-lg">Form</div>
      </Card>
      <Card>
        <ExampleIconButton />
        <div className="label text-align-center mt-lg">Icon Button</div>
      </Card>
      <Card>
        <ExampleIcon />
        <div className="label text-align-center mt-lg">Icon</div>
      </Card>
      <Card>
        <ExampleInput />
        <div className="label text-align-center mt-lg">Input</div>
      </Card>
      <Card>
        <ExampleMenu />
        <div className="label text-align-center mt-lg">Menu</div>
      </Card>
      <Card>
        <ExampleMenubar />
        <div className="label text-align-center mt-lg">Menubar</div>
      </Card>
      <Card>
        <ExampleMeter />
        <div className="label text-align-center mt-lg">Meter</div>
      </Card>
      <Card>
        <ExampleNavigationMenu />
        <div className="label text-align-center mt-lg">Navigation Menu</div>
      </Card>
      <Card>
        <ExampleNumberField />
        <div className="label text-align-center mt-lg">Number Field</div>
      </Card>
      <Card>
        <ExamplePopover />
        <div className="label text-align-center mt-lg">Popover</div>
      </Card>
      <Card>
        <ExamplePreviewCard />
        <div className="label text-align-center mt-lg">Preview Card</div>
      </Card>
      <Card>
        <ExampleProgress />
        <div className="label text-align-center mt-lg">Progress</div>
      </Card>
      <Card>
        <ExampleRadio />
        <div className="label text-align-center mt-lg">Radio</div>
      </Card>
      <Card>
        <div style={{ maxHeight: "320px" }}>
          <ExampleScrollArea/>
          <div className="label text-align-center mt-lg">Scroll Area</div>
        </div>
      </Card>
      <Card>
        <ExampleSelect />
        <div className="label text-align-center mt-lg">Select</div>
      </Card>
      <Card>
        <ExampleSeparator />
        <div className="label text-align-center mt-lg">Separator</div>
      </Card>
      <Card>
        <ExampleSlider />
        <div className="label text-align-center mt-lg">Slider</div>
      </Card>
      <Card>
        <ExampleSwitch />
        <div className="label text-align-center mt-lg">Switch</div>
      </Card>
      <Card>
        <ExampleTabs />
        <div className="label text-align-center mt-lg">Tabs</div>
      </Card>
      <Card>
        <ExampleToast />
        <div className="label text-align-center mt-lg">Toast</div>
      </Card>
      <Card>
        <ExampleToggleGroup />
        <div className="label text-align-center mt-lg">Toggle Group</div>
      </Card>
      <Card>
        <ExampleToggle />
        <div className="label text-align-center mt-lg">Toggle</div>
      </Card>
      <Card>
        <ExampleToolbar />
        <div className="label text-align-center mt-lg">Toolbar</div>
      </Card>
      <Card>
        <ExampleTooltip />
        <div className="label text-align-center mt-lg">Tooltip</div>
      </Card>
    </div>
  );
}
