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
import Icon, { LkIconProps } from "@/registry/nextjs/components/icon";

interface LkSnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  globalColor?: LkColorWithOnToken;
  message?: string;
  children?: React.ReactNode;
  cardProps?: LkCardProps;
}

/**
 * A snackbar component that displays temporary notifications with optional action buttons.
 */
export default function Snackbar(props: LkSnackbarProps) {
  const { globalColor, message = "Notification text goes here.", cardProps, children, ...restProps } = props;

  // Declare allowed types, so if a child with the wrong type is passed, it'll throw an error
  const allowedTypes = [Badge, Button, Icon, IconButton, Text] as React.ComponentType<any>[];

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
  let icon: React.ReactElement | undefined;
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
    } else if (child.type === Icon) {
      icon = child;
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
        },
        "snackbar"
      ),
    [globalColor, message]
  );

  /** If you have an icon, but no button, render extra margin-right on the body text. */
  function getMargin() {
    if (icon && buttons.length === 0) {
      return "mr-sm";
    } else {
      return "";
    }
  }
  return (
    <div data-lk-component="snackbar" {...dataAttrs} {...restProps}>
      <Card
        scaleFactor={icon ? "subheading" : "body"}
        bgColor={globalColor}
        opticalCorrection={icon ? "none" : "y"}
        className={`shadow-sm ${(cardProps && cardProps.className) || ""}`}
      >
        <Row alignItems="center">
          {/* Badge slot */}

          {icon && (
            <div data-lk-slot="snackbar-icon">
              {globalColor
                ? React.cloneElement(icon, { color: getOnToken(globalColor), strokeWidth: 1.75 } as LkIconProps)
                : icon}
            </div>
          )}

          {/* Message slot */}
          {text.length > 0 && (
            <div data-lk-slot="snackbar-text">
              {text.map((text, index) =>
                globalColor
                  ? React.cloneElement(text, {
                      key: index,
                      color: getOnToken(globalColor as LkColor) as LkColor,
                      fontClass: "body",
                      className: getMargin(),
                    } as LkTextProps)
                  : React.cloneElement(text, { key: index })
              )}
            </div>
          )}
          {/* Action buttons slot */}
          <Row>
            {buttons.length > 0 && (
              <div data-lk-slot="snackbar-actions">
                {buttons.map((button, index) =>
                  globalColor
                    ? React.cloneElement(button, {
                        key: index,
                        color: globalColor,
                        size: "sm",
                        modifiers: `color-on${globalColor}`,
                        style: {
                          backgroundColor: `rgb(from var(--lk-${getOnToken(globalColor)}) r g b / 0.1)`,
                          border: `1px solid rgb(from var(--lk-${getOnToken(globalColor)}) r g b / 0.2)`,
                          marginRight: !icon && "calc(-1em * pow(var(--lk-wholestep-dec), 2))",
                        },
                        stateLayerOverride: { bgColor: `on${globalColor}` },
                      } as Partial<LkButtonProps>)
                    : React.cloneElement(button, {
                        key: index,
                        size: "sm",
                        variant: "outline",
                      } as Partial<LkButtonProps>)
                )}
              </div>
            )}
            {/* Icon buttons slot (typically for close/dismiss) */}
            {iconButtons.length > 0 && (
              <div data-lk-slot="snackbar-icon-actions">
                {iconButtons.map((iconButton, index) =>
                  globalColor
                    ? React.cloneElement(iconButton, {
                        key: index,
                        color: globalColor,
                        fontClass: "heading",
                      } as Partial<LkIconButtonProps>)
                    : React.cloneElement(iconButton, {
                        key: index,
                        fontClass: "heading",
                      } as Partial<LkIconButtonProps>)
                )}
              </div>
            )}
          </Row>
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

function getBadgeColor(globalColor: LkColorWithOnToken) {}
