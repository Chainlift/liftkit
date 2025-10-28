"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/nextjs/components/toggle-group";
import { useState } from "react";

export default function Page() {
  const [alignment, setAlignment] = useState("left");
  const [formatting, setFormatting] = useState<string[]>(["bold"]);
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <main style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1>Toggle Group Components</h1>
      <p>Groups of toggle buttons that work together as a cohesive unit.</p>

      <section style={{ marginBottom: 48 }}>
        <h2>Single Selection</h2>
        <p>Choose one option from the group. Perfect for alignment, view modes, etc.</p>
        <div style={{ marginBottom: 24 }}>
          <ToggleGroup
            type="single"
            value={alignment}
            onValueChange={(value) => setAlignment(value as string)}
            aria-label="Text alignment"
          >
            <ToggleGroupItem value="left" aria-label="Left Align">
              ⬅️ Left
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center Align">
              ↔️ Center
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right Align">
              ➡️ Right
            </ToggleGroupItem>
          </ToggleGroup>
          <p style={{ marginTop: 8, fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Selected: {alignment || "none"}
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Multiple Selection</h2>
        <p>Select multiple options. Great for text formatting, filters, etc.</p>
        <div style={{ marginBottom: 24 }}>
          <ToggleGroup
            type="multiple"
            value={formatting}
            onValueChange={(value) => setFormatting(value as string[])}
            aria-label="Text formatting"
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              <span style={{ fontWeight: "bold" }}>B</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <span style={{ fontStyle: "italic" }}>I</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <span style={{ textDecoration: "underline" }}>U</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
              <span style={{ textDecoration: "line-through" }}>S</span>
            </ToggleGroupItem>
          </ToggleGroup>
          <p style={{ marginTop: 8, fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Selected: {formatting.join(", ") || "none"}
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Variants & Sizes</h2>
        <p>Different visual styles and sizes for various contexts.</p>

        <div style={{ marginBottom: 32 }}>
          <h3>Default Variant</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <ToggleGroup type="single" variant="default" size="sm" aria-label="Small default">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="default" size="default" aria-label="Default default">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="default" size="lg" aria-label="Large default">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h3>Outline Variant</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <ToggleGroup type="single" variant="outline" size="sm" aria-label="Small outline">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="outline" size="default" aria-label="Default outline">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup type="single" variant="outline" size="lg" aria-label="Large outline">
              <ToggleGroupItem value="1">1</ToggleGroupItem>
              <ToggleGroupItem value="2">2</ToggleGroupItem>
              <ToggleGroupItem value="3">3</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Spacing Options</h2>
        <p>Control the gap between toggle items for different visual effects.</p>

        <div style={{ marginBottom: 24 }}>
          <h3>Connected (spacing=0)</h3>
          <ToggleGroup type="single" variant="outline" spacing={0} aria-label="Connected buttons">
            <ToggleGroupItem value="view-list">📋 List</ToggleGroupItem>
            <ToggleGroupItem value="view-grid">⊞ Grid</ToggleGroupItem>
            <ToggleGroupItem value="view-card">🃏 Card</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Spaced (spacing=2)</h3>
          <ToggleGroup type="single" variant="outline" spacing={2} aria-label="Spaced buttons">
            <ToggleGroupItem value="view-list">📋 List</ToggleGroupItem>
            <ToggleGroupItem value="view-grid">⊞ Grid</ToggleGroupItem>
            <ToggleGroupItem value="view-card">🃏 Card</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Wide Spacing (spacing=4)</h3>
          <ToggleGroup type="single" variant="outline" spacing={4} aria-label="Wide spaced buttons">
            <ToggleGroupItem value="view-list">📋 List</ToggleGroupItem>
            <ToggleGroupItem value="view-grid">⊞ Grid</ToggleGroupItem>
            <ToggleGroupItem value="view-card">🃏 Card</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Practical Examples</h2>

        <div style={{ marginBottom: 32 }}>
          <h3>Favorites & Actions</h3>
          <ToggleGroup
            type="multiple"
            variant="outline"
            spacing={2}
            size="sm"
            value={favorites}
            onValueChange={(value) => setFavorites(value as string[])}
            aria-label="Favorites and actions"
          >
            <ToggleGroupItem
              value="star"
              aria-label="Toggle star"
              style={{
                color: favorites.includes("star") ? "#eab308" : undefined,
              }}
            >
              ⭐ Star
            </ToggleGroupItem>
            <ToggleGroupItem
              value="heart"
              aria-label="Toggle heart"
              style={{
                color: favorites.includes("heart") ? "#ef4444" : undefined,
              }}
            >
              ❤️ Heart
            </ToggleGroupItem>
            <ToggleGroupItem
              value="bookmark"
              aria-label="Toggle bookmark"
              style={{
                color: favorites.includes("bookmark") ? "#3b82f6" : undefined,
              }}
            >
              📖 Bookmark
            </ToggleGroupItem>
          </ToggleGroup>
          <p style={{ marginTop: 8, fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Favorites: {favorites.join(", ") || "none"}
          </p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <h3>Text Editor Toolbar</h3>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "0.5rem",
              padding: "1rem",
              backgroundColor: "var(--card)",
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <ToggleGroup type="multiple" variant="outline" spacing={0} size="sm" aria-label="Text formatting">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <span style={{ fontWeight: "bold" }}>B</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <span style={{ fontStyle: "italic" }}>I</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <span style={{ textDecoration: "underline" }}>U</span>
                </ToggleGroupItem>
              </ToggleGroup>

              <ToggleGroup
                type="single"
                variant="outline"
                spacing={0}
                size="sm"
                defaultValue="left"
                aria-label="Text alignment"
              >
                <ToggleGroupItem value="left" aria-label="Align left">
                  ⬅️
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  ↔️
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  ➡️
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div
              style={{
                padding: "0.75rem",
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "0.375rem",
                minHeight: "3rem",
                fontSize: "0.875rem",
              }}
            >
              Text editor content area with toolbar controls above.
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>States & Accessibility</h2>

        <div style={{ marginBottom: 24 }}>
          <h3>Disabled State</h3>
          <ToggleGroup type="single" variant="outline" disabled aria-label="Disabled toggle group">
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Individual Item States</h3>
          <ToggleGroup type="multiple" variant="outline" aria-label="Mixed states">
            <ToggleGroupItem value="enabled">Enabled</ToggleGroupItem>
            <ToggleGroupItem value="pressed">Default Pressed</ToggleGroupItem>
            <ToggleGroupItem value="disabled" disabled>
              Disabled
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>
    </main>
  );
}
