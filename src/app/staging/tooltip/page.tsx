'use client'

import { Tooltip, TooltipTrigger, TooltipContent } from "@/registry/nextjs/components/tooltip";

export default function Page() {
  return (
    <main style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1>Tooltip Components</h1>
      <p>Floating labels that appear on hover to provide additional context.</p>

      <section style={{ marginBottom: 48 }}>
        <h2>Basic Tooltip</h2>
        <p>Simple tooltip that appears on hover.</p>
        <div style={{ marginBottom: 24 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Hover me
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Positioning</h2>
        <p>Tooltips can be positioned on any side of the trigger element.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "600px",
            margin: "2rem auto",
            textAlign: "center",
          }}
        >
          {/* Top row */}
          <div></div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Top
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          <div></div>

          {/* Middle row */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Left
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              border: "2px dashed var(--border)",
              borderRadius: "0.375rem",
              color: "var(--muted-foreground)",
            }}
          >
            Center
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Right
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>

          {/* Bottom row */}
          <div></div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Bottom
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          <div></div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Alignment Options</h2>
        <p>Control how the tooltip aligns relative to its trigger.</p>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: 24 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Align Start
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              <p>Aligned to start</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Align Center
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center">
              <p>Aligned to center</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Align End
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="end">
              <p>Aligned to end</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Offset Customization</h2>
        <p>Adjust the distance between the trigger and tooltip.</p>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: 24 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Default Offset
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Default spacing</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Large Offset
              </button>
            </TooltipTrigger>
            <TooltipContent sideOffset={20}>
              <p>20px spacing</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                No Offset
              </button>
            </TooltipTrigger>
            <TooltipContent sideOffset={0}>
              <p>No spacing</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Rich Content</h2>
        <p>Tooltips can contain formatted text and multiple lines.</p>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: 24 }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Multi-line
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div>
                <p style={{ margin: 0, marginBottom: "0.25rem", fontWeight: "bold" }}>Feature Name</p>
                <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.8 }}>
                  This feature allows you to do amazing things
                  <br />
                  with just a simple hover interaction.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                With Icon
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>ℹ️</span>
                <span>Information tooltip</span>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                }}
              >
                Keyboard Shortcut
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>Save File</span>
                <kbd
                  style={{
                    padding: "0.125rem 0.25rem",
                    backgroundColor: "var(--muted)",
                    borderRadius: "0.25rem",
                    fontSize: "0.625rem",
                    fontFamily: "monospace",
                  }}
                >
                  Cmd+S
                </kbd>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Interactive Elements</h2>
        <p>Tooltips work with various interactive elements.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginBottom: 24,
          }}
        >
          {/* Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  padding: "0.75rem 1rem",
                  border: "none",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Primary Button
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a primary action</p>
            </TooltipContent>
          </Tooltip>

          {/* Icon Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--background)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ❤️
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to favorites</p>
            </TooltipContent>
          </Tooltip>

          {/* Link */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  color: "var(--primary)",
                  textDecoration: "underline",
                  borderRadius: "0.375rem",
                }}
                onClick={(e) => e.preventDefault()}
              >
                Learn More
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>External documentation link</p>
            </TooltipContent>
          </Tooltip>

          {/* Disabled Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                disabled
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                  backgroundColor: "var(--muted)",
                  color: "var(--muted-foreground)",
                  cursor: "not-allowed",
                  opacity: 0.5,
                }}
              >
                Disabled
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This action is currently unavailable</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2>Practical Examples</h2>
        <p>Real-world use cases for tooltips.</p>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            backgroundColor: "var(--card)",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>Toolbar with Tooltips</h3>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "var(--muted)",
              borderRadius: "0.375rem",
              marginBottom: "1rem",
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>B</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Bold</span>
                  <kbd
                    style={{
                      padding: "0.125rem 0.25rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.25rem",
                      fontSize: "0.625rem",
                    }}
                  >
                    ⌘B
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontStyle: "italic" }}>I</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Italic</span>
                  <kbd
                    style={{
                      padding: "0.125rem 0.25rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.25rem",
                      fontSize: "0.625rem",
                    }}
                  >
                    ⌘I
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ textDecoration: "underline" }}>U</span>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Underline</span>
                  <kbd
                    style={{
                      padding: "0.125rem 0.25rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.25rem",
                      fontSize: "0.625rem",
                    }}
                  >
                    ⌘U
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <div
              style={{ width: "1px", height: "1.5rem", backgroundColor: "var(--border)", margin: "0.25rem 0.5rem" }}
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  💾
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Save Document</span>
                  <kbd
                    style={{
                      padding: "0.125rem 0.25rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.25rem",
                      fontSize: "0.625rem",
                    }}
                  >
                    ⌘S
                  </kbd>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{
                    width: "2rem",
                    height: "2rem",
                    border: "none",
                    borderRadius: "0.25rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🔗
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Insert Link</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: "0.375rem",
              minHeight: "4rem",
              fontSize: "0.875rem",
            }}
          >
            Document content area. Hover over the toolbar buttons above to see their tooltips with keyboard shortcuts.
          </div>
        </div>
      </section>
    </main>
  );
}
