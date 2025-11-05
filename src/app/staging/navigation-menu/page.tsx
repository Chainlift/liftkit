"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import "./styles.css";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import Card from "@/registry/nextjs/components/card";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/registry/nextjs/components/navigation-menu";
import Grid from "@/registry/nextjs/components/grid";
import Icon from "@/registry/nextjs/components/icon";
import Row from "@/registry/nextjs/components/row";
import MenuItem from "@/registry/nextjs/components/menu-item";

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
        <Link href={href}>
          <div>{title}</div>
          <p>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavigationMenuDemo() {
  return (
    <Container>
      <Section>
        <div>
          <Heading fontClass="display2">Navigation Menu Examples</Heading>

          <div>
            {/* Default Navigation Menu with Viewport */}
            <div>
              <Heading fontClass="title2">Standard Navigation with Viewport</Heading>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-xl">
                      <ul data-lk-component="nav-menu-list">
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="/">
                              <div className="body-bold mb-2xs">LiftKit</div>
                              <p className="subheading">
                                Beautifully designed components built with Material Design 3.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="/docs">
                              <div className="body-bold mb-2xs">Introduction</div>
                              <p className="subheading">
                                Re-usable components built using Radix UI and Material Design 3.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="/docs/installation">
                              <div className="body-bold mb-2xs">Installation</div>
                              <p className="subheading">How to install dependencies and structure your app.</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="/docs/primitives/typography">
                              <div className="body-bold mb-2xs">Typography</div>
                              <p className="subheading">Styles for headings, paragraphs, lists...etc</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-xl">
                      <ul data-lk-component="nav-menu-list">
                        {components.map((component) => (
                          <li key={component.title}>
                            <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                              <Link href={component.href}>
                                <div className="body-bold mb-2xs">{component.title}</div>
                                <p className="subheading">{component.description}</p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
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
              <Heading fontClass="title2">Navigation without Viewport</Heading>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-xl">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">
                              <div>Components</div>
                              <div>Browse all components in the library.</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">
                              <div>Documentation</div>
                              <div>Learn how to use the library.</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link href="#">
                              <div>Blog</div>
                              <div>Read our latest blog posts.</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Actions</NavigationMenuTrigger>
                    <NavigationMenuContent className="shadow-xl">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="#">
                              <Row alignItems="center" gap="xs">
                                <Icon name="circle-help" />
                                <h3 className="body-bold">Idk something useful</h3>
                              </Row>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink scaleFactor="body" opticalCorrection="top" asChild>
                            <Link href="#">
                              <Row alignItems="center" gap="2xs">
                                <Icon name="circle-help" />
                                <h3 className="body-bold">To Do</h3>
                              </Row>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink  scaleFactor="body" opticalCorrection="y" asChild>
                            <Link href="#">
                              <Row alignItems="center" gap="2xs">
                                <Icon name="circle-help" />
                                <h3 className="body-bold">Done</h3>
                              </Row>
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
              <Heading fontClass="title2">Simple Navigation</Heading>
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
