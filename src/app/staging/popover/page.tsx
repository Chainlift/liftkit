"use client";

import React from "react";
import Button from "@/registry/nextjs/components/button";
import TextInput from "@/registry/nextjs/components/text-input";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/nextjs/components/popover";

export default function PopoverDemo() {
  const [width, setWidth] = React.useState("100%");
  const [maxWidth, setMaxWidth] = React.useState("300px");
  const [height, setHeight] = React.useState("25px");
  const [maxHeight, setMaxHeight] = React.useState("none");

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Popover Examples</Heading>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "start" }}>
            {/* Dimensions Settings Popover */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Settings Popover
              </Heading>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent style={{ width: "20rem" }}>
                  <div style={{ display: "grid", gap: "1rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          lineHeight: 1,
                          margin: 0,
                        }}
                      >
                        Dimensions
                      </h4>
                      <p
                        style={{
                          color: "var(--muted-foreground)",
                          fontSize: "0.875rem",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 2fr",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <label htmlFor="width" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          Width
                        </label>
                        <TextInput
                          id="width"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          style={{ height: "2rem" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 2fr",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <label htmlFor="maxWidth" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          Max. width
                        </label>
                        <TextInput
                          id="maxWidth"
                          value={maxWidth}
                          onChange={(e) => setMaxWidth(e.target.value)}
                          style={{ height: "2rem" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 2fr",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <label htmlFor="height" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          Height
                        </label>
                        <TextInput
                          id="height"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          style={{ height: "2rem" }}
                        />
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 2fr",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <label htmlFor="maxHeight" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          Max. height
                        </label>
                        <TextInput
                          id="maxHeight"
                          value={maxHeight}
                          onChange={(e) => setMaxHeight(e.target.value)}
                          style={{ height: "2rem" }}
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Simple Info Popover */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Info Popover
              </Heading>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="text">What's this?</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div style={{ textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      LiftKit Framework
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--muted-foreground)",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      A UI framework that enforces high-detail design principles through golden ratio scaling and
                      Material Design 3 color systems.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* User Profile Popover */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Profile Popover
              </Heading>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="fill">View Profile</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      JD
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          margin: "0 0 0.25rem 0",
                        }}
                      >
                        Jane Doe
                      </h4>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          margin: "0 0 0.75rem 0",
                        }}
                      >
                        jane@example.com
                      </p>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Button
                          variant="outline"
                          style={{
                            flex: 1,
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.5rem",
                          }}
                        >
                          Message
                        </Button>
                        <Button
                          variant="fill"
                          style={{
                            flex: 1,
                            fontSize: "0.75rem",
                            padding: "0.25rem 0.5rem",
                          }}
                        >
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Menu Popover */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Menu Popover
              </Heading>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Actions</Button>
                </PopoverTrigger>
                <PopoverContent style={{ width: "12rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {[
                      { label: "Edit", shortcut: "⌘E" },
                      { label: "Duplicate", shortcut: "⌘D" },
                      { label: "Archive", shortcut: "⌘A" },
                      { label: "Delete", shortcut: "⌫", destructive: true },
                    ].map((item) => (
                      <button
                        key={item.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "0.5rem 0.75rem",
                          borderRadius: "0.25rem",
                          border: "none",
                          backgroundColor: "transparent",
                          fontSize: "0.875rem",
                          cursor: "pointer",
                          color: item.destructive ? "var(--destructive)" : "inherit",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (item.destructive) {
                            e.currentTarget.style.backgroundColor = "rgb(from var(--destructive) r g b / 0.1)";
                          } else {
                            e.currentTarget.style.backgroundColor = "var(--accent)";
                            e.currentTarget.style.color = "var(--accent-foreground)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = item.destructive ? "var(--destructive)" : "inherit";
                        }}
                      >
                        <span>{item.label}</span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            opacity: 0.6,
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {item.shortcut}
                        </span>
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
