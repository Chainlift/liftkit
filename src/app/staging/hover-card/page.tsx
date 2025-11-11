"use client";

import React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/registry/nextjs/components/button";
import { Container } from "@/registry/nextjs/components/container";
import { Section } from "@/registry/nextjs/components/section";
import { Heading } from "@/registry/nextjs/components/heading";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/registry/nextjs/components/hover-card";
import { Card } from "@/registry/nextjs/components/card";
export default function HoverCardDemo() {
  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Heading fontClass="display2">Hover Card Examples</Heading>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "start" }}>
            {/* Basic Hover Card */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                User Profile Card
              </Heading>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="text">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent cardProps={{ scaleFactor: "subheading" }}>
                  <p className="subheading">Lorem ipsum dolor sit amet. Consectetur adipiscing alit.</p>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Simple Info Card */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Simple Info Card
              </Heading>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="outline">Hover for details</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div style={{ textAlign: "center" }}>
                    <h4 style={{ fontSize: "1rem", fontWeight: 600, margin: "0 0 0.5rem 0" }}>LiftKit Framework</h4>
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
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Developer Card */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Developer Card
              </Heading>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="text">@developer</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      JD
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "0.875rem", fontWeight: 600, margin: "0 0 0.25rem 0" }}>Jane Developer</h4>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        Full-stack engineer
                      </p>
                      <p style={{ fontSize: "0.75rem", margin: 0, lineHeight: 1.3 }}>
                        Passionate about creating beautiful, accessible user interfaces with modern web technologies.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            {/* Compact Stats Card */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Stats Card
              </Heading>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="fill">View Stats</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                        }}
                      >
                        42
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        Projects
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                        }}
                      >
                        1.2K
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        Commits
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
