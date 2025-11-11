"use client";

import React from "react";
import { ScrollArea } from "@/registry/nextjs/components/scroll-area";
import { Separator } from "@/registry/nextjs/components/separator";
import { Container } from "@/registry/nextjs/components/container";
import { Section } from "@/registry/nextjs/components/section";
import { Heading } from "@/registry/nextjs/components/heading";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

const longContent = Array.from({ length: 20 }).map(
  (_, i) =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph ${i + 1} with some additional text to create scrollable content.`
);

export default function ScrollAreaDemo() {
  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">ScrollArea Examples</Heading>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "start" }}>
            {/* Basic Tags List - Matches Tailwind Demo */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Tags List
              </Heading>
              <ScrollArea
                style={{
                  height: "18rem",
                  width: "12rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  <h4
                    style={{
                      marginBottom: "1rem",
                      fontSize: "0.875rem",
                      lineHeight: 1,
                      fontWeight: 500,
                      margin: "0 0 1rem 0",
                    }}
                  >
                    Tags
                  </h4>
                  {tags.map((tag) => (
                    <React.Fragment key={tag}>
                      <div style={{ fontSize: "0.875rem" }}>{tag}</div>
                      <Separator style={{ margin: "0.5rem 0" }} />
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Long Text Content */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Text Content
              </Heading>
              <ScrollArea
                style={{
                  height: "18rem",
                  width: "20rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--lk-outline)",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      marginBottom: "1rem",
                      color: "var(--foreground)",
                    }}
                  >
                    Article Content
                  </h4>
                  {longContent.map((paragraph, index) => (
                    <p
                      key={index}
                      style={{
                        marginBottom: "1rem",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Code Block */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Code Viewer
              </Heading>
              <ScrollArea
                style={{
                  height: "18rem",
                  width: "24rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--muted)",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  <pre
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "monospace",
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      color: "var(--foreground)",
                    }}
                  >
                    {`function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}`}
                  </pre>
                </div>
              </ScrollArea>
            </div>

            {/* Chat Messages */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Chat Messages
              </Heading>
              <ScrollArea
                style={{
                  height: "18rem",
                  width: "16rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "0.75rem",
                        borderRadius: "0.5rem",
                        backgroundColor: index % 2 === 0 ? "var(--muted)" : "var(--primary)",
                        color: index % 2 === 0 ? "var(--foreground)" : "var(--primary-foreground)",
                        alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                        maxWidth: "80%",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {index % 2 === 0 ? "Alice" : "Bob"}
                      </p>
                      <p
                        style={{
                          margin: "0.25rem 0 0 0",
                          fontSize: "0.875rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {index % 3 === 0
                          ? "Hey there! How's it going?"
                          : index % 3 === 1
                            ? "I'm working on the new scroll area component. It looks pretty good!"
                            : "That's awesome! The scrolling is really smooth."}
                      </p>
                      <p
                        style={{
                          margin: "0.25rem 0 0 0",
                          fontSize: "0.75rem",
                          opacity: 0.7,
                        }}
                      >
                        {new Date(Date.now() - (25 - index) * 60000).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Data Table */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Data Table
              </Heading>
              <ScrollArea
                style={{
                  height: "18rem",
                  width: "28rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      minWidth: "32rem",
                    }}
                  >
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <th
                          style={{
                            padding: "0.75rem",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            backgroundColor: "var(--muted)",
                          }}
                        >
                          Name
                        </th>
                        <th
                          style={{
                            padding: "0.75rem",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            backgroundColor: "var(--muted)",
                          }}
                        >
                          Email
                        </th>
                        <th
                          style={{
                            padding: "0.75rem",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            backgroundColor: "var(--muted)",
                          }}
                        >
                          Department
                        </th>
                        <th
                          style={{
                            padding: "0.75rem",
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            backgroundColor: "var(--muted)",
                          }}
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 30 }).map((_, index) => (
                        <tr
                          key={index}
                          style={{
                            borderBottom: "1px solid var(--border)",
                            backgroundColor: index % 2 === 0 ? "transparent" : "var(--muted/50)",
                          }}
                        >
                          <td style={{ padding: "0.75rem", fontSize: "0.875rem" }}>User {index + 1}</td>
                          <td style={{ padding: "0.75rem", fontSize: "0.875rem" }}>user{index + 1}@example.com</td>
                          <td style={{ padding: "0.75rem", fontSize: "0.875rem" }}>
                            {["Engineering", "Design", "Marketing", "Sales"][index % 4]}
                          </td>
                          <td style={{ padding: "0.75rem", fontSize: "0.875rem" }}>
                            <span
                              style={{
                                padding: "0.25rem 0.5rem",
                                borderRadius: "9999px",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                backgroundColor: index % 2 === 0 ? "var(--success/10)" : "var(--warning/10)",
                                color: index % 2 === 0 ? "var(--success)" : "var(--warning)",
                              }}
                            >
                              {index % 2 === 0 ? "Active" : "Pending"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
