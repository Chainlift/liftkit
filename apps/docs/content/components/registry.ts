import type { ComponentType } from "react";
import type { ComponentDocMeta } from "@/app/docs/lib/component-doc";

import accordionMeta from "./accordion/meta";
import AccordionDemo from "./accordion/demo";
import alertDialogMeta from "./alert-dialog/meta";
import AlertDialogDemo from "./alert-dialog/demo";
import autocompleteMeta from "./autocomplete/meta";
import AutocompleteDemo from "./autocomplete/demo";
import avatarMeta from "./avatar/meta";
import AvatarDemo from "./avatar/demo";
import buttonMeta from "./button/meta";
import ButtonDemo from "./button/demo";
import checkboxMeta from "./checkbox/meta";
import CheckboxDemo from "./checkbox/demo";
import checkboxGroupMeta from "./checkbox-group/meta";
import CheckboxGroupDemo from "./checkbox-group/demo";
import collapsibleMeta from "./collapsible/meta";
import CollapsibleDemo from "./collapsible/demo";
import comboboxMeta from "./combobox/meta";
import ComboboxDemo from "./combobox/demo";
import containerMeta from "./container/meta";
import ContainerDemo from "./container/demo";
import contextMenuMeta from "./context-menu/meta";
import ContextMenuDemo from "./context-menu/demo";
import dialogMeta from "./dialog/meta";
import DialogDemo from "./dialog/demo";
import fieldMeta from "./field/meta";
import FieldDemo from "./field/demo";
import fieldsetMeta from "./fieldset/meta";
import FieldsetDemo from "./fieldset/demo";
import formMeta from "./form/meta";
import FormDemo from "./form/demo";
import iconMeta from "./icon/meta";
import IconDemo from "./icon/demo";
import iconButtonMeta from "./icon-button/meta";
import IconButtonDemo from "./icon-button/demo";
import inputMeta from "./input/meta";
import InputDemo from "./input/demo";
import menuMeta from "./menu/meta";
import MenuDemo from "./menu/demo";
import menubarMeta from "./menubar/meta";
import MenubarDemo from "./menubar/demo";
import meterMeta from "./meter/meta";
import MeterDemo from "./meter/demo";
import navigationMenuMeta from "./navigation-menu/meta";
import NavigationMenuDemo from "./navigation-menu/demo";
import numberFieldMeta from "./number-field/meta";
import NumberFieldDemo from "./number-field/demo";
import popoverMeta from "./popover/meta";
import PopoverDemo from "./popover/demo";
import previewCardMeta from "./preview-card/meta";
import PreviewCardDemo from "./preview-card/demo";
import progressMeta from "./progress/meta";
import ProgressDemo from "./progress/demo";
import radioMeta from "./radio/meta";
import RadioDemo from "./radio/demo";
import scrollAreaMeta from "./scroll-area/meta";
import ScrollAreaDemo from "./scroll-area/demo";
import sectionMeta from "./section/meta";
import SectionDemo from "./section/demo";
import selectMeta from "./select/meta";
import SelectDemo from "./select/demo";
import separatorMeta from "./separator/meta";
import SeparatorDemo from "./separator/demo";
import sliderMeta from "./slider/meta";
import SliderDemo from "./slider/demo";
import switchMeta from "./switch/meta";
import SwitchDemo from "./switch/demo";
import tabsMeta from "./tabs/meta";
import TabsDemo from "./tabs/demo";
import toastMeta from "./toast/meta";
import ToastDemo from "./toast/demo";
import toggleMeta from "./toggle/meta";
import ToggleDemo from "./toggle/demo";
import toggleGroupMeta from "./toggle-group/meta";
import ToggleGroupDemo from "./toggle-group/demo";
import toolbarMeta from "./toolbar/meta";
import ToolbarDemo from "./toolbar/demo";
import tooltipMeta from "./tooltip/meta";
import TooltipDemo from "./tooltip/demo";

export type ComponentDoc = {
  meta: ComponentDocMeta;
  /** The live demo. Its source file (demo.tsx) is also the code sample. */
  Demo: ComponentType<any>;
};

/**
 * Components documented by the shared template at /docs/components/[slug].
 * Imported by the client-side preview, so keep it browser-safe: meta and demos
 * only. Each component's optional notes.mdx is loaded by the page itself.
 */
export const componentDocs: Record<string, ComponentDoc> = {
  accordion: { meta: accordionMeta, Demo: AccordionDemo },
  "alert-dialog": { meta: alertDialogMeta, Demo: AlertDialogDemo },
  autocomplete: { meta: autocompleteMeta, Demo: AutocompleteDemo },
  avatar: { meta: avatarMeta, Demo: AvatarDemo },
  button: { meta: buttonMeta, Demo: ButtonDemo },
  checkbox: { meta: checkboxMeta, Demo: CheckboxDemo },
  "checkbox-group": { meta: checkboxGroupMeta, Demo: CheckboxGroupDemo },
  collapsible: { meta: collapsibleMeta, Demo: CollapsibleDemo },
  combobox: { meta: comboboxMeta, Demo: ComboboxDemo },
  container: { meta: containerMeta, Demo: ContainerDemo },
  "context-menu": { meta: contextMenuMeta, Demo: ContextMenuDemo },
  dialog: { meta: dialogMeta, Demo: DialogDemo },
  field: { meta: fieldMeta, Demo: FieldDemo },
  fieldset: { meta: fieldsetMeta, Demo: FieldsetDemo },
  form: { meta: formMeta, Demo: FormDemo },
  icon: { meta: iconMeta, Demo: IconDemo },
  "icon-button": { meta: iconButtonMeta, Demo: IconButtonDemo },
  input: { meta: inputMeta, Demo: InputDemo },
  menu: { meta: menuMeta, Demo: MenuDemo },
  menubar: { meta: menubarMeta, Demo: MenubarDemo },
  meter: { meta: meterMeta, Demo: MeterDemo },
  "navigation-menu": { meta: navigationMenuMeta, Demo: NavigationMenuDemo },
  "number-field": { meta: numberFieldMeta, Demo: NumberFieldDemo },
  popover: { meta: popoverMeta, Demo: PopoverDemo },
  "preview-card": { meta: previewCardMeta, Demo: PreviewCardDemo },
  progress: { meta: progressMeta, Demo: ProgressDemo },
  radio: { meta: radioMeta, Demo: RadioDemo },
  "scroll-area": { meta: scrollAreaMeta, Demo: ScrollAreaDemo },
  section: { meta: sectionMeta, Demo: SectionDemo },
  select: { meta: selectMeta, Demo: SelectDemo },
  separator: { meta: separatorMeta, Demo: SeparatorDemo },
  slider: { meta: sliderMeta, Demo: SliderDemo },
  switch: { meta: switchMeta, Demo: SwitchDemo },
  tabs: { meta: tabsMeta, Demo: TabsDemo },
  toast: { meta: toastMeta, Demo: ToastDemo },
  toggle: { meta: toggleMeta, Demo: ToggleDemo },
  "toggle-group": { meta: toggleGroupMeta, Demo: ToggleGroupDemo },
  toolbar: { meta: toolbarMeta, Demo: ToolbarDemo },
  tooltip: { meta: tooltipMeta, Demo: TooltipDemo },
};
