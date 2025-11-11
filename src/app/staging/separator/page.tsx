"use client";

import React from "react";
import { Separator } from "@/registry/nextjs/components/separator";
import { Container } from "@/registry/nextjs/components/container";
import { Section } from "@/registry/nextjs/components/section";
import { Heading } from "@/registry/nextjs/components/heading";

export default function SeparatorDemo() {
  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Separator Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Example - Matches Tailwind Demo */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Example
              </Heading>
              <div>
                <div style={{ marginBottom: "0.25rem" }}>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    Radix Primitives
                  </h4>
                  <p
                    style={{
                      color: "var(--muted-foreground)",
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    An open-source UI component library.
                  </p>
                </div>
                <Separator style={{ margin: "1rem 0" }} />
                <div
                  style={{
                    display: "flex",
                    height: "1.25rem",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "0.875rem",
                  }}
                >
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Content Sections
              </Heading>
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--card)",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Getting Started
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Welcome to LiftKit! This section covers the basics of installation and setup.
                  </p>
                </div>

                <Separator style={{ margin: "1.5rem 0" }} />

                <div style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Components
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Explore our comprehensive collection of accessible UI components.
                  </p>
                </div>

                <Separator style={{ margin: "1.5rem 0" }} />

                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    Advanced Usage
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Learn about advanced patterns and customization techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Examples */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Navigation
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Horizontal Navigation */}
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      margin: "0 0 0.75rem 0",
                    }}
                  >
                    Horizontal Navigation
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "0.75rem 1rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        color: "var(--primary)",
                      }}
                    >
                      Home
                    </a>
                    <Separator orientation="vertical" />
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      About
                    </a>
                    <Separator orientation="vertical" />
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      Services
                    </a>
                    <Separator orientation="vertical" />
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      Contact
                    </a>
                  </div>
                </div>

                {/* Breadcrumbs */}
                <div>
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      margin: "0 0 0.75rem 0",
                    }}
                  >
                    Breadcrumbs
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Home
                    </a>
                    <Separator orientation="vertical" style={{ height: "1rem" }} />
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Components
                    </a>
                    <Separator orientation="vertical" style={{ height: "1rem" }} />
                    <span style={{ color: "var(--foreground)", fontWeight: 500 }}>Separator</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Layout */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Sidebar Layout
              </Heading>
              <div
                style={{
                  display: "flex",
                  height: "12rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
              >
                {/* Sidebar */}
                <div
                  style={{
                    width: "12rem",
                    padding: "1rem",
                    backgroundColor: "var(--muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    Navigation
                  </h4>
                  <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--primary)",
                        fontWeight: 500,
                      }}
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      Tasks
                    </a>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        color: "var(--foreground)",
                      }}
                    >
                      Settings
                    </a>
                  </nav>
                </div>

                <Separator orientation="vertical" />

                {/* Main Content */}
                <div
                  style={{
                    flex: 1,
                    padding: "1rem",
                    backgroundColor: "var(--card)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      margin: "0 0 0.75rem 0",
                    }}
                  >
                    Main Content
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    This is the main content area. The vertical separator clearly divides the sidebar from the main
                    content, creating a clean layout structure.
                  </p>
                </div>
              </div>
            </div>

            {/* List Items */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                List Items
              </Heading>
              <div
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--card)",
                }}
              >
                {[
                  { title: "First Item", description: "This is the first item in the list" },
                  { title: "Second Item", description: "This is the second item in the list" },
                  { title: "Third Item", description: "This is the third item in the list" },
                  { title: "Fourth Item", description: "This is the fourth item in the list" },
                ].map((item, index, array) => (
                  <React.Fragment key={index}>
                    <div style={{ padding: "1rem" }}>
                      <h4
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          margin: "0 0 0.25rem 0",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    {index < array.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Different Heights */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Different Heights
              </Heading>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                }}
              >
                <span style={{ fontSize: "0.875rem" }}>Small</span>
                <Separator orientation="vertical" style={{ height: "0.75rem" }} />
                <span style={{ fontSize: "1rem" }}>Medium</span>
                <Separator orientation="vertical" style={{ height: "1.5rem" }} />
                <span style={{ fontSize: "1.125rem" }}>Large</span>
                <Separator orientation="vertical" style={{ height: "2rem" }} />
                <span style={{ fontSize: "1.25rem" }}>Extra Large</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
