"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "@/registry/nextjs/components/radio-group";
import { Label } from "@/registry/nextjs/components/label";
import { Container } from "@/registry/nextjs/components/container";
import { Section } from "@/registry/nextjs/components/section";
import { Heading } from "@/registry/nextjs/components/heading";
import { Button } from "@/registry/nextjs/components/button";

export default function RadioGroupDemo() {
  const [selectedSize, setSelectedSize] = React.useState("comfortable");
  const [selectedTheme, setSelectedTheme] = React.useState("system");
  const [selectedNotification, setSelectedNotification] = React.useState("all");

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Radio Group Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Radio Group */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Radio Group
              </Heading>
              <RadioGroup defaultValue="comfortable">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Settings Form */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Settings Form
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Display Size */}
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                    }}
                  >
                    Display Size
                  </h4>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="small" id="size-small" />
                      <Label htmlFor="size-small">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span>Small</span>
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            Compact interface
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="comfortable" id="size-comfortable" />
                      <Label htmlFor="size-comfortable">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span>Comfortable</span>
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            Balanced spacing
                          </span>
                        </div>
                      </Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="large" id="size-large" />
                      <Label htmlFor="size-large">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <span>Large</span>
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            Spacious layout
                          </span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Theme Selection */}
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                    }}
                  >
                    Theme
                  </h4>
                  <RadioGroup value={selectedTheme} onValueChange={setSelectedTheme}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="light" id="theme-light" />
                      <Label htmlFor="theme-light">Light</Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="dark" id="theme-dark" />
                      <Label htmlFor="theme-dark">Dark</Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="system" id="theme-system" />
                      <Label htmlFor="theme-system">System</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Notification Settings */}
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                    }}
                  >
                    Notifications
                  </h4>
                  <RadioGroup value={selectedNotification} onValueChange={setSelectedNotification}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="all" id="notif-all" />
                      <Label htmlFor="notif-all">All notifications</Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="important" id="notif-important" />
                      <Label htmlFor="notif-important">Important only</Label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <RadioGroupItem value="none" id="notif-none" />
                      <Label htmlFor="notif-none">None</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Horizontal Layout */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Horizontal Layout
              </Heading>
              <RadioGroup defaultValue="medium" orientation="horizontal" style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <RadioGroupItem value="small" id="h-small" />
                  <Label htmlFor="h-small">Small</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <RadioGroupItem value="medium" id="h-medium" />
                  <Label htmlFor="h-medium">Medium</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <RadioGroupItem value="large" id="h-large" />
                  <Label htmlFor="h-large">Large</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Disabled State */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Disabled State
              </Heading>
              <RadioGroup defaultValue="option2">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="option1" id="d-option1" disabled />
                  <Label
                    htmlFor="d-option1"
                    style={{
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }}
                  >
                    Disabled option
                  </Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="option2" id="d-option2" />
                  <Label htmlFor="d-option2">Available option</Label>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <RadioGroupItem value="option3" id="d-option3" />
                  <Label htmlFor="d-option3">Another option</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Current Selections Summary */}
            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--muted)",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
              }}
            >
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                  color: "var(--foreground)",
                }}
              >
                Current Selections
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                }}
              >
                <p style={{ margin: 0 }}>
                  Display Size: <strong>{selectedSize}</strong>
                </p>
                <p style={{ margin: 0 }}>
                  Theme: <strong>{selectedTheme}</strong>
                </p>
                <p style={{ margin: 0 }}>
                  Notifications: <strong>{selectedNotification}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
