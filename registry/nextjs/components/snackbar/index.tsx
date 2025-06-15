import { useMemo } from "react";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Badge from "@/registry/nextjs/components/badge";
import Button from "@/registry/nextjs/components/button";
import IconButton from "@/registry/nextjs/components/icon-button";
import React from "react";
import Text from "@/registry/nextjs/components/text";
import "@/registry/nextjs/components/snackbar/snackbar.css";
import { LkBadgeProps } from "@/registry/nextjs/components/badge";
import { LkTextProps } from "@/registry/nextjs/components/text";
import { LkButtonProps } from "@/registry/nextjs/components/button";
import { LkIconButtonProps } from "@/registry/nextjs/components/icon-button";
import { getOnToken } from "@/registry/universal/lib/colorUtils";
import Card from "@/registry/nextjs/components/card";
import Row from "@/registry/nextjs/components/row";
import { LkCardProps } from "@/registry/nextjs/components/card";

interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  globalColor?: LkColorWithOnToken;
  message?: string;
  fontClass?: LkFontClass;
  children?: React.ReactNode;
  cardProps?: LkCardProps;
}

/**
 * A snackbar component that displays temporary notifications with optional action buttons.
 */
export default function Snackbar(props: LkSnackbarProps) {
  const {
    globalColor,
    message = "Notification text goes here.",
    fontClass = "caption",
    cardProps,
    children,
    ...restProps
  } = props;

  // Declare allowed types, so if a child with the wrong type is passed, it'll throw an error
  const allowedTypes = [Badge, Button, IconButton, Text] as React.ComponentType<any>[];

  // Validate all children first
  const childArray = React.Children.toArray(children);

  // Helper function to get component name for error messages
  const getComponentName = (type: any): string => {
    if (typeof type === "string") return type;
    return type?.displayName || type?.name || "Unknown";
  };

  // Validate all children upfront
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && !allowedTypes.includes(child.type as React.ComponentType)) {
      throw new Error(
        `Snackbar component received an invalid child component: ${getComponentName(child.type)}. ` +
          `Only Badge, Button, and IconButton components are allowed.`
      );
    }
  });

  // Find components and validate at the same time
  let badge: React.ReactElement | undefined;
  let buttons: React.ReactElement[] = [];
  let iconButtons: React.ReactElement[] = [];
  let text: React.ReactElement[] = [];

  childArray.forEach((child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === Badge) {
      badge = child;
    } else if (child.type === Button) {
      buttons.push(child);
    } else if (child.type === IconButton) {
      iconButtons.push(child);
    } else if (child.type === Text) {
      text.push(child);
    }
  });

  const dataAttrs = useMemo(
    () =>
      propsToDataAttrs(
        {
          globalColor,
          message,
          fontClass,
        },
        "snackbar"
      ),
    [globalColor, message, fontClass]
  );

  return (
    <div lk-component="snackbar" {...dataAttrs} {...restProps} >
      <Card scaleFactor={fontClass} bgColor={globalColor}>
        <Row alignItems="center">
      
          {/* Badge slot */}
          {badge && (
            <div lk-slot="snackbar-badge">
              {globalColor ? React.cloneElement(badge, { color: globalColor } as LkBadgeProps) : badge}
            </div>
          )}
          {/* Message slot */}
          {text.length > 0 && (
            <div lk-slot="snackbar-text">
              {text.map((text, index) =>
                globalColor
                  ? React.cloneElement(text, {
                      key: index,
                      color: getOnToken(globalColor),
                      fontClass: fontClass,
                    } as LkTextProps)
                  : React.cloneElement(text, { key: index })
              )}
            </div>
          )}
          {/* Action buttons slot */}
          {buttons.length > 0 && (
            <div lk-slot="snackbar-actions">
              {buttons.map((button, index) =>
                globalColor
                  ? React.cloneElement(button, { key: index, color: globalColor, size: "sm" } as Partial<LkButtonProps>)
                  : React.cloneElement(button, { key: index, size: "sm" } as Partial<LkButtonProps>)
              )}
            </div>
          )}
          {/* Icon buttons slot (typically for close/dismiss) */}
          {iconButtons.length > 0 && (
            <div lk-slot="snackbar-icon-actions">
              {iconButtons.map((iconButton, index) =>
                globalColor
                  ? React.cloneElement(iconButton, {
                      key: index,
                      color: globalColor,
                      fontClass: "heading",
                    } as Partial<LkIconButtonProps>)
                  : React.cloneElement(iconButton, {
                      key: index,
                      fontClass: getAdjustedFontClass("IconButton", fontClass),
                    } as Partial<LkIconButtonProps>)
              )}
            </div>
          )}
        </Row>
      </Card>
    </div>
  );
}

/** Functions for handling component scaling */

const fontClassList: LkFontClass[] = [
  "display1",
  "display2",
  "title1",
  "title2",
  "title3",
  "heading",
  "body",
  "callout",
  "subheading",
  "label",
  "caption",
  "capline",
];

function getAdjustedFontClass(componentName: string, parentFontClass: LkFontClass) {
  switch (componentName) {
  }
}

function getBadgeColor(globalColor: LkColorWithOnToken) {

}