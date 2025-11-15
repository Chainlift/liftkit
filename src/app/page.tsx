"use client";

import React from "react";
import * as StagingDemos from "@/src/app/staging";

export default function Index() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Named Export Demos */}
      <StagingDemos.AccordionDemo />
      <StagingDemos.AlertDemo />
      <StagingDemos.AvatarDemo />
      <StagingDemos.BadgeDemo />
      <StagingDemos.CollapsibleDemo />
      <StagingDemos.ContextMenuDemo />
      <StagingDemos.DialogDemo />

      {/* Default Export Demos */}
      <StagingDemos.CheckboxDemo />
      <StagingDemos.DropdownMenuDemo />
      <StagingDemos.HoverCardDemo />
      <StagingDemos.MenubarDemo />
      <StagingDemos.NavigationMenuDemo />
      <StagingDemos.PopoverDemo />
      <StagingDemos.ProgressDemo />
      <StagingDemos.RadioGroupDemo />
      <StagingDemos.ScrollAreaDemo />
      <StagingDemos.SelectDemo />
      <StagingDemos.SeparatorDemo />
      <StagingDemos.SliderDemo />
      <StagingDemos.TableDemo />

      {/* Component Staging Pages */}
      <StagingDemos.AspectRatioStaging />
      <StagingDemos.ButtonStaging />
      <StagingDemos.CardStaging />
      <StagingDemos.FormStaging />
      <StagingDemos.GridStaging />
      <StagingDemos.HeadingStaging />
      <StagingDemos.IconButtonStaging />
      <StagingDemos.ImageStaging />
      <StagingDemos.LabelStaging />
      <StagingDemos.MaterialStaging />
      <StagingDemos.MenuItemStaging />
      <StagingDemos.NavbarStaging />
      <StagingDemos.OneTimePasswordFieldStaging />
      <StagingDemos.PasswordToggleFieldStaging />
      <StagingDemos.SnackbarStaging />
      <StagingDemos.StateLayerStaging />
      <StagingDemos.StickerStaging />
      <StagingDemos.SwitchStaging />
      <StagingDemos.TabsStaging />
      <StagingDemos.TabsRadixStaging />
      <StagingDemos.TestAppStaging />
      <StagingDemos.TextInputStaging />
    </div>
  );
}
