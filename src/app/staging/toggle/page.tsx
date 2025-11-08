"use client";

import IconButton from "@/registry/nextjs/components/icon-button";
import { Toggle } from "@/registry/nextjs/components/toggle";
import { useState } from "react";
import Icon from "@/registry/nextjs/components/icon";

export default function Page() {
  const [editorState, setEditorState] = useState({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
  });

  return (
    <main style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1>Toggle Components</h1>
      <p>Interactive toggle buttons with various styles and states.</p>

      <section style={{ marginBottom: 48 }}>
        <h2>Basic Toggles</h2>
        <p>Default toggle behavior with different states.</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <Toggle aria-label="Bold">
            <Icon name="bold" />
          </Toggle>
          <Toggle aria-label="Italic" defaultPressed>
             <Icon name="italic" />
          </Toggle>

          <Toggle aria-label="Underline" disabled>
              <Icon name="underline" />
          </Toggle>

          <Toggle aria-label="Strike" defaultPressed disabled>
              <Icon name="strikethrough" />
          </Toggle>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Size Variants</h2>
        <p>Toggle buttons in different sizes.</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginBottom: 24 }}>
          <Toggle aria-label="Small toggle" size="sm">
            ♥
          </Toggle>

          <Toggle aria-label="Default toggle" size="default">
            ♥
          </Toggle>

          <Toggle aria-label="Large toggle" size="lg">
            ♥
          </Toggle>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Style Variants</h2>
        <p>Different visual styles for toggle buttons.</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <Toggle variant="default" aria-label="Default variant">
            ★
          </Toggle>

          <Toggle variant="outline" aria-label="Outline variant">
            ★
          </Toggle>

          <Toggle variant="default" defaultPressed aria-label="Default pressed">
            ★
          </Toggle>

          <Toggle variant="outline" defaultPressed aria-label="Outline pressed">
            ★
          </Toggle>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Text Toggles</h2>
        <p>Toggle buttons with text content.</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
          <Toggle variant="default" aria-label="Subscribe">
            Subscribe
          </Toggle>

          <Toggle variant="outline" aria-label="Follow" defaultPressed>
            Following
          </Toggle>

          <Toggle variant="outline" size="sm" aria-label="Like">
            ♥ Like
          </Toggle>

          <Toggle variant="default" size="lg" aria-label="Bookmark">
            📖 Save
          </Toggle>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Text Editor Example</h2>
        <p>A practical example showing toggle buttons for text formatting.</p>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            padding: "1rem",
            backgroundColor: "var(--card)",
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            <Toggle
              variant="outline"
              size="sm"
              pressed={editorState.bold}
              onPressedChange={(pressed) => setEditorState((prev) => ({ ...prev, bold: pressed }))}
              aria-label="Toggle bold"
            >
              <span style={{ fontWeight: "bold" }}>B</span>
            </Toggle>

            <Toggle
              variant="outline"
              size="sm"
              pressed={editorState.italic}
              onPressedChange={(pressed) => setEditorState((prev) => ({ ...prev, italic: pressed }))}
              aria-label="Toggle italic"
            >
              <span style={{ fontStyle: "italic" }}>I</span>
            </Toggle>

            <Toggle
              variant="outline"
              size="sm"
              pressed={editorState.underline}
              onPressedChange={(pressed) => setEditorState((prev) => ({ ...prev, underline: pressed }))}
              aria-label="Toggle underline"
            >
              <span style={{ textDecoration: "underline" }}>U</span>
            </Toggle>

            <Toggle
              variant="outline"
              size="sm"
              pressed={editorState.strikethrough}
              onPressedChange={(pressed) => setEditorState((prev) => ({ ...prev, strikethrough: pressed }))}
              aria-label="Toggle strikethrough"
            >
              <span style={{ textDecoration: "line-through" }}>S</span>
            </Toggle>
          </div>

          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "0.375rem",
              minHeight: "3rem",
              fontSize: "0.875rem",
              fontWeight: editorState.bold ? "bold" : "normal",
              fontStyle: editorState.italic ? "italic" : "normal",
              textDecoration:
                [editorState.underline && "underline", editorState.strikethrough && "line-through"]
                  .filter(Boolean)
                  .join(" ") || "none",
            }}
          >
            This text will change formatting based on the toggle states above.
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>All States</h2>
        <p>Comprehensive showcase of all toggle states and combinations.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 24 }}>
          <div>
            <h3>Default Variant</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Toggle variant="default" aria-label="Default unpressed">
                Default
              </Toggle>
              <Toggle variant="default" defaultPressed aria-label="Default pressed">
                Pressed
              </Toggle>
              <Toggle variant="default" disabled aria-label="Default disabled">
                Disabled
              </Toggle>
              <Toggle variant="default" disabled defaultPressed aria-label="Default disabled pressed">
                Disabled + Pressed
              </Toggle>
            </div>
          </div>

          <div>
            <h3>Outline Variant</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Toggle variant="outline" aria-label="Outline unpressed">
                Outline
              </Toggle>
              <Toggle variant="outline" defaultPressed aria-label="Outline pressed">
                Pressed
              </Toggle>
              <Toggle variant="outline" disabled aria-label="Outline disabled">
                Disabled
              </Toggle>
              <Toggle variant="outline" disabled defaultPressed aria-label="Outline disabled pressed">
                Disabled + Pressed
              </Toggle>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
