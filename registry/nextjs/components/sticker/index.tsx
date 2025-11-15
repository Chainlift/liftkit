import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/registry/nextjs/lib/utilities";
import { LK_FONT_CLASSES } from "@/registry/nextjs/lib/utilities";
import { Text } from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/sticker/sticker.css";

const COLOR_SCHEME_CLASSES = {
  primary: "lk-colorgroup--primary",
  onprimary: "lk-colorgroup--onprimary",
  primarycontainer: "lk-colorgroup--primarycontainer",
  onprimarycontainer: "lk-colorgroup--onprimarycontainer",
  secondary: "lk-colorgroup--secondary",
  onsecondary: "lk-colorgroup--onsecondary",
  secondarycontainer: "lk-colorgroup--secondarycontainer",
  onsecondarycontainer: "lk-colorgroup--onsecondarycontainer",
  tertiary: "lk-colorgroup--tertiary",
  ontertiary: "lk-colorgroup--ontertiary",
  tertiarycontainer: "lk-colorgroup--tertiarycontainer",
  ontertiarycontainer: "lk-colorgroup--ontertiarycontainer",
  error: "lk-colorgroup--error",
  onerror: "lk-colorgroup--onerror",
  errorcontainer: "lk-colorgroup--errorcontainer",
  onerrorcontainer: "lk-colorgroup--onerrorcontainer",
  success: "lk-colorgroup--success",
  onsuccess: "lk-colorgroup--onsuccess",
  successcontainer: "lk-colorgroup--successcontainer",
  onsuccesscontainer: "lk-colorgroup--onsuccesscontainer",
  warning: "lk-colorgroup--warning",
  onwarning: "lk-colorgroup--onwarning",
  warningcontainer: "lk-colorgroup--warningcontainer",
  onwarningcontainer: "lk-colorgroup--onwarningcontainer",
  info: "lk-colorgroup--info",
  oninfo: "lk-colorgroup--oninfo",
  infocontainer: "lk-colorgroup--infocontainer",
  oninfocontainer: "lk-colorgroup--oninfocontainer",
  background: "lk-colorgroup--background",
  onbackground: "lk-colorgroup--onbackground",
  surface: "lk-colorgroup--surface",
  onsurface: "lk-colorgroup--onsurface",
  surfacevariant: "lk-colorgroup--surfacevariant",
  onsurfacevariant: "lk-colorgroup--onsurfacevariant",
  surfacecontainerlowest: "lk-colorgroup--surfacecontainerlowest",
  surfacecontainerlow: "lk-colorgroup--surfacecontainerlow",
  surfacecontainer: "lk-colorgroup--surfacecontainer",
  surfacecontainerhigh: "lk-colorgroup--surfacecontainerhigh",
  surfacecontainerhighest: "lk-colorgroup--surfacecontainerhighest",
  inversesurface: "lk-colorgroup--inversesurface",
  inverseonsurface: "lk-colorgroup--inverseonsurface",
  inverseprimary: "lk-colorgroup--inverseprimary",
  primaryfixed: "lk-colorgroup--primaryfixed",
  onprimaryfixed: "lk-colorgroup--onprimaryfixed",
  primaryfixeddim: "lk-colorgroup--primaryfixeddim",
  onprimaryfixedvariant: "lk-colorgroup--onprimaryfixedvariant",
  secondaryfixed: "lk-colorgroup--secondaryfixed",
  onsecondaryfixed: "lk-colorgroup--onsecondaryfixed",
  secondaryfixeddim: "lk-colorgroup--secondaryfixeddim",
  onsecondaryfixedvariant: "lk-colorgroup--onsecondaryfixedvariant",
  tertiaryfixed: "lk-colorgroup--tertiaryfixed",
  ontertiaryfixed: "lk-colorgroup--ontertiaryfixed",
  tertiaryfixeddim: "lk-colorgroup--tertiaryfixeddim",
  ontertiaryfixedvariant: "lk-colorgroup--ontertiaryfixedvariant",
  surfacedim: "lk-colorgroup--surfacedim",
  surfacebright: "lk-colorgroup--surfacebright",
  outline: "lk-colorgroup--outline",
  outlinevariant: "lk-colorgroup--outlinevariant",
  shadow: "lk-colorgroup--shadow",
  scrim: "lk-colorgroup--scrim",
  transparent: "lk-colorgroup--transparent",
} as const;

export type ColorScheme = keyof typeof COLOR_SCHEME_CLASSES;

const stickerVariants = cva(["lk-sticker"], {
  variants: {
    color: COLOR_SCHEME_CLASSES,
    fontClass: LK_FONT_CLASSES,
  },
});

/**
 * Props for the Sticker component.
 *
 * @param fontClass - Optional font class styling for the sticker text
 * @param color - Optional color scheme for the sticker background and text
 * @param children - Optional React nodes to render inside the sticker
 */
interface StickerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stickerVariants> {
  fontClass?: keyof typeof LK_FONT_CLASSES;
  color?: ColorScheme;
  children?: React.ReactNode;
}

const Sticker = React.forwardRef<HTMLDivElement, StickerProps>(function Sticker(
  { className, color = "primarycontainer", fontClass = "label", children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      data-lk-component="sticker"
      className={cn(stickerVariants({ color, fontClass, className }))}
      {...props}
    >
      <Text fontClass={fontClass}>{children || "Sticker"}</Text>
    </div>
  );
});

export { Sticker, stickerVariants };
