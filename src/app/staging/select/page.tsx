"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/registry/nextjs/components/select";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import { Label } from "@/registry/nextjs/components/label";

export default function SelectDemo() {
  const [selectedFruit, setSelectedFruit] = React.useState("");
  const [selectedFramework, setSelectedFramework] = React.useState("");
  const [selectedTheme, setSelectedTheme] = React.useState("system");

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Select Examples</Heading>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "start" }}>
            {/* Basic Select - Matches Tailwind Demo */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Select
              </Heading>
              <Select>
                <SelectTrigger style={{ width: "11.25rem" }}>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Form Integration */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Form Integration
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <Label htmlFor="fruit-select">Favorite Fruit</Label>
                  <Select value={selectedFruit} onValueChange={setSelectedFruit}>
                    <SelectTrigger id="fruit-select" style={{ width: "12rem" }}>
                      <SelectValue placeholder="Choose a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">🍎 Apple</SelectItem>
                      <SelectItem value="banana">🍌 Banana</SelectItem>
                      <SelectItem value="cherry">🍒 Cherry</SelectItem>
                      <SelectItem value="grape">🍇 Grape</SelectItem>
                      <SelectItem value="orange">🍊 Orange</SelectItem>
                      <SelectItem value="strawberry">🍓 Strawberry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <Label htmlFor="framework-select">Framework</Label>
                  <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                    <SelectTrigger id="framework-select" style={{ width: "12rem" }}>
                      <SelectValue placeholder="Select framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Frontend</SelectLabel>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                        <SelectItem value="svelte">Svelte</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Backend</SelectLabel>
                        <SelectItem value="node">Node.js</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="go">Go</SelectItem>
                        <SelectItem value="rust">Rust</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {(selectedFruit || selectedFramework) && (
                  <div
                    style={{
                      padding: "0.75rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: 500 }}>Selection Summary:</p>
                    {selectedFruit && <p style={{ margin: "0.25rem 0 0 0" }}>Fruit: {selectedFruit}</p>}
                    {selectedFramework && <p style={{ margin: "0.25rem 0 0 0" }}>Framework: {selectedFramework}</p>}
                  </div>
                )}
              </div>
            </div>

            {/* Different Sizes */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Different Sizes
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <Label style={{ fontSize: "0.875rem", marginBottom: "0.5rem", display: "block" }}>Small Size</Label>
                  <Select defaultValue="small">
                    <SelectTrigger size="sm" style={{ width: "10rem" }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small option</SelectItem>
                      <SelectItem value="compact">Compact view</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label style={{ fontSize: "0.875rem", marginBottom: "0.5rem", display: "block" }}>Default Size</Label>
                  <Select defaultValue="default">
                    <SelectTrigger style={{ width: "10rem" }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default option</SelectItem>
                      <SelectItem value="standard">Standard view</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Settings Panel
              </Heading>
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--card)",
                  minWidth: "20rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <Label htmlFor="theme-select" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Theme Preference
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Choose how the interface should appear
                    </p>
                    <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                      <SelectTrigger id="theme-select" style={{ width: "100%" }}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">☀️ Light</SelectItem>
                        <SelectItem value="dark">🌙 Dark</SelectItem>
                        <SelectItem value="system">💻 System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language-select" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Language
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Select your preferred language
                    </p>
                    <Select defaultValue="en">
                      <SelectTrigger id="language-select" style={{ width: "100%" }}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">🇺🇸 English</SelectItem>
                        <SelectItem value="es">🇪🇸 Español</SelectItem>
                        <SelectItem value="fr">🇫🇷 Français</SelectItem>
                        <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
                        <SelectItem value="ja">🇯🇵 日本語</SelectItem>
                        <SelectItem value="zh">🇨🇳 中文</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timezone-select" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Timezone
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Your local timezone for date formatting
                    </p>
                    <Select defaultValue="utc">
                      <SelectTrigger id="timezone-select" style={{ width: "100%" }}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Americas</SelectLabel>
                          <SelectItem value="est">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="cst">Central Time (UTC-6)</SelectItem>
                          <SelectItem value="mst">Mountain Time (UTC-7)</SelectItem>
                          <SelectItem value="pst">Pacific Time (UTC-8)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>Europe</SelectLabel>
                          <SelectItem value="gmt">Greenwich Mean Time (UTC+0)</SelectItem>
                          <SelectItem value="cet">Central European Time (UTC+1)</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                          <SelectLabel>Other</SelectLabel>
                          <SelectItem value="utc">Coordinated Universal Time</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Long List with Scroll */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Long List
              </Heading>
              <Select>
                <SelectTrigger style={{ width: "14rem" }}>
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "United States",
                    "Canada",
                    "United Kingdom",
                    "Germany",
                    "France",
                    "Italy",
                    "Spain",
                    "Netherlands",
                    "Belgium",
                    "Sweden",
                    "Norway",
                    "Denmark",
                    "Finland",
                    "Switzerland",
                    "Austria",
                    "Australia",
                    "New Zealand",
                    "Japan",
                    "South Korea",
                    "Singapore",
                    "Brazil",
                    "Mexico",
                    "Argentina",
                    "India",
                    "China",
                    "Thailand",
                    "Philippines",
                    "Indonesia",
                    "Malaysia",
                  ].map((country) => (
                    <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, "-")}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
