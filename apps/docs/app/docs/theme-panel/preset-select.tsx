"use client";

import {
  Icon,
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "liftkit";
import { PRESETS, findPreset, isPresetModified } from "./presets";
import { useTheme } from "./theme-context";

const CUSTOM_PRESET_VALUE = "__custom__";

export function PresetSelect() {
  const { state, dispatch } = useTheme();
  const activePreset = findPreset(state.activePresetId);
  const modified = activePreset ? isPresetModified(activePreset, state) : false;

  const items = [
    {
      value: CUSTOM_PRESET_VALUE,
      label: activePreset ? "Custom (clear preset)" : "Custom",
    },
    ...PRESETS.map((preset) => ({
      value: preset.id,
      label:
        preset.id === state.activePresetId && modified
          ? `${preset.name} (modified)`
          : preset.name,
    })),
  ];
  const value = activePreset ? activePreset.id : CUSTOM_PRESET_VALUE;

  return (
    <>
      <Select
        items={items}
        value={value}
        fontClass="subheading"
        onValueChange={(next) => {
          if (next === CUSTOM_PRESET_VALUE) {
            // Selecting Custom just clears the preset binding — leaves current state alone.
            if (state.activePresetId !== null) {
              // No dedicated action; LOAD lets us set a single field without reshaping state.
              dispatch({
                type: "LOAD",
                state: { ...state, activePresetId: null },
              });
            }
            return;
          }
          dispatch({ type: "APPLY_PRESET", presetId: next as string });
        }}
      >
        <SelectTrigger className="w-full" aria-label="Preset">
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
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    <SelectItemIndicator>
                      <Icon name="check" />
                    </SelectItemIndicator>
                    <SelectItemText>{item.label}</SelectItemText>
                  </SelectItem>
                ))}
              </SelectList>
              <SelectScrollDownArrow />
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select>
    </>
  );
}
