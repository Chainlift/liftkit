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
import { Fieldset, FieldsetLegend } from "@/liftkit/component-definitions";
import { Field, FieldLabel, FieldControl } from "@/liftkit/component-definitions/field/field";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
  AlertDialogAction,
} from "@/liftkit/component-definitions";

export function ComponentMosaic() {
  return (
    <div>
      <ExampleNavigationMenu />
      <Card className="shadow-xs" scaleFactor="title3">
        <Fieldset>
          <FieldsetLegend>Create profile</FieldsetLegend>

          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldControl />
          </Field>

          <Field>
            <FieldLabel>Handle</FieldLabel>
            <FieldControl />
          </Field>
        </Fieldset>
        <div className="flex items-center gap-md"></div>
      </Card>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(var(--lk-size-5xl), 1fr))",
          gap: "var(--lk-size-2xl)",
        }}
      >
        <div>
          <div className="label text-align-center ">Navigation Menu</div>
        </div>
        <div>
          <Card className="shadow-xs" scaleFactor="heading" opticalCorrection="top">
            <div className="heading mb-sm">Frequently Asked Questions</div>
            <ExampleAccordion />
          </Card>
        </div>
        <div>
          <ExampleAlertDialog />
          <div className="label text-align-center ">Alert Dialog</div>
        </div>
        <div>
          <ExampleAutocomplete />
          <div className="label text-align-center ">Autocomplete</div>
        </div>
        <div>
          <ExampleAvatar />
          <div className="label text-align-center ">Avatar</div>
        </div>
        <div>
          <ExampleButton />
          <div className="label text-align-center ">Button</div>
        </div>
        <div>
          <ExampleCheckboxGroup />
          <div className="label text-align-center ">Checkbox Group</div>
        </div>
        <div>
          <ExampleCheckbox />
          <div className="label text-align-center ">Checkbox</div>
        </div>
        <div>
          <ExampleCollapsible />
          <div className="label text-align-center ">Collapsible</div>
        </div>
        <div>
          <ExampleCombobox />
          <div className="label text-align-center ">Combobox</div>
        </div>
        <div>
          <ExampleContextMenu />
          <div className="label text-align-center ">Context Menu</div>
        </div>
        <div>
          <ExampleDialog />
          <div className="label text-align-center ">Dialog</div>
        </div>
        <div>
          <ExampleField />
          <div className="label text-align-center ">Field</div>
        </div>
        <div>
          <ExampleForm />
          <div className="label text-align-center ">Form</div>
        </div>
        <div>
          <ExampleIconButton />
          <div className="label text-align-center ">Icon Button</div>
        </div>
        <div>
          <ExampleIcon />
          <div className="label text-align-center ">Icon</div>
        </div>
        <div>
          <ExampleInput />
          <div className="label text-align-center ">Input</div>
        </div>
        <div>
          <ExampleMenu />
          <div className="label text-align-center ">Menu</div>
        </div>
        <div>
          <ExampleMenubar />
          <div className="label text-align-center ">Menubar</div>
        </div>
        <div>
          <ExampleMeter />
          <div className="label text-align-center ">Meter</div>
        </div>
        <div>
          <ExampleNumberField />
          <div className="label text-align-center ">Number Field</div>
        </div>
        <div>
          <ExamplePopover />
          <div className="label text-align-center ">Popover</div>
        </div>
        <div>
          <ExamplePreviewCard />
          <div className="label text-align-center ">Preview Card</div>
        </div>
        <div>
          <ExampleProgress />
          <div className="label text-align-center ">Progress</div>
        </div>
        <div>
          <ExampleRadio />
          <div className="label text-align-center ">Radio</div>
        </div>
        <div>
          <ExampleScrollArea />
          <div className="label text-align-center ">Scroll Area</div>
        </div>
        <div>
          <ExampleSelect />
          <div className="label text-align-center ">Select</div>
        </div>
        <div>
          <ExampleSeparator />
          <div className="label text-align-center ">Separator</div>
        </div>
        <div>
          <ExampleSlider />
          <div className="label text-align-center ">Slider</div>
        </div>
        <div>
          <ExampleSwitch />
          <div className="label text-align-center ">Switch</div>
        </div>
        <div>
          <ExampleTabs />
          <div className="label text-align-center ">Tabs</div>
        </div>
        <div>
          <ExampleToast />
          <div className="label text-align-center ">Toast</div>
        </div>
        <div>
          <ExampleToggleGroup />
          <div className="label text-align-center ">Toggle Group</div>
        </div>
        <div>
          <ExampleToggle />
          <div className="label text-align-center ">Toggle</div>
        </div>
        <div>
          <ExampleToolbar />
          <div className="label text-align-center ">Toolbar</div>
        </div>
        <div>
          <ExampleTooltip />
          <div className="label text-align-center ">Tooltip</div>
        </div>
      </div>
    </div>
  );
}
