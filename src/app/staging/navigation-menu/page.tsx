"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/registry/nextjs/components/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          style={{
            display: "block",
            padding: "0.75rem",
            borderRadius: "0.375rem",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent-foreground)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "inherit";
          }}
        >
          <div
            style={{
              fontSize: "0.875rem",
              lineHeight: 1,
              fontWeight: 500,
              marginBottom: "0.25rem",
            }}
          >
            {title}
          </div>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "0.875rem",
              lineHeight: 1.3,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationMenuDemo() {
  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Navigation Menu Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* Default Navigation Menu with Viewport */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1.5rem" }}>
                Standard Navigation with Viewport
              </Heading>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        style={{
                          display: "grid",
                          gap: "0.5rem",
                          padding: 0,
                          margin: 0,
                          listStyle: "none",
                          width: "400px",
                          gridTemplateColumns: "0.75fr 1fr",
                        }}
                      >
                        <li style={{ gridRow: "span 3" }}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/"
                              style={{
                                display: "flex",
                                height: "100%",
                                width: "100%",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                borderRadius: "0.375rem",
                                background: "linear-gradient(to bottom, var(--muted), transparent)",
                                padding: "1.5rem",
                                textDecoration: "none",
                                outline: "none",
                                userSelect: "none",
                              }}
                            >
                              <div
                                style={{
                                  marginTop: "1rem",
                                  marginBottom: "0.5rem",
                                  fontSize: "1.125rem",
                                  fontWeight: 500,
                                }}
                              >
                                LiftKit
                              </div>
                              <p
                                style={{
                                  color: "var(--muted-foreground)",
                                  fontSize: "0.875rem",
                                  lineHeight: 1.3,
                                  margin: 0,
                                }}
                              >
                                Beautifully designed components built with Material Design 3.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Material Design 3.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        style={{
                          display: "grid",
                          width: "600px",
                          gap: "0.5rem",
                          padding: 0,
                          margin: 0,
                          listStyle: "none",
                          gridTemplateColumns: "1fr 1fr",
                        }}
                      >
                        {components.map((component) => (
                          <ListItem key={component.title} title={component.title} href={component.href}>
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/docs">Documentation</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Navigation Menu without Viewport */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1.5rem" }}>
                Navigation without Viewport
              </Heading>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        style={{
                          display: "grid",
                          width: "300px",
                          gap: "1rem",
                          padding: "1rem",
                          margin: 0,
                          listStyle: "none",
                        }}
                      >
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" style={{ textDecoration: "none" }}>
                              <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>Components</div>
                              <div style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                                Browse all components in the library.
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" style={{ textDecoration: "none" }}>
                              <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>Documentation</div>
                              <div style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                                Learn how to use the library.
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#" style={{ textDecoration: "none" }}>
                              <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>Blog</div>
                              <div style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                                Read our latest blog posts.
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Actions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul
                        style={{
                          display: "grid",
                          width: "200px",
                          gap: "0.5rem",
                          padding: "0.5rem",
                          margin: 0,
                          listStyle: "none",
                        }}
                      >
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textDecoration: "none",
                                padding: "0.5rem",
                                borderRadius: "0.25rem",
                              }}
                            >
                              <CircleHelpIcon style={{ width: "1rem", height: "1rem" }} />
                              Backlog
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textDecoration: "none",
                                padding: "0.5rem",
                                borderRadius: "0.25rem",
                              }}
                            >
                              <CircleIcon style={{ width: "1rem", height: "1rem" }} />
                              To Do
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                textDecoration: "none",
                                padding: "0.5rem",
                                borderRadius: "0.25rem",
                              }}
                            >
                              <CircleCheckIcon style={{ width: "1rem", height: "1rem" }} />
                              Done
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Simple Navigation */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1.5rem" }}>
                Simple Navigation
              </Heading>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/">Home</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/about">About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
