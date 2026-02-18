"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  /** Optional container selector to scan for headings (defaults to main article) */
  containerSelector?: string;
  /** Optional class name */
  className?: string;
}

/**
 * Dynamically generates a table of contents from h2 and h3 elements on the page.
 * Highlights the currently active section based on scroll position.
 *
 * Requires headings to have IDs (automatically added by rehype-slug).
 *
 * @example
 * ```tsx
 * <TableOfContents />
 * ```
 */
export function TableOfContents({ containerSelector, className }: TableOfContentsProps) {
  const [headings, setHeadings] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  // Extract headings from the DOM
  React.useEffect(() => {
    const container = containerSelector ? document.querySelector(containerSelector) : document.body;

    if (!container) return;

    const elements = container.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements)
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: parseInt(element.tagName[1]) as 2 | 3,
      }))
      .filter((item) => item.id); // Only include headings with IDs

    setHeadings(items);
  }, [containerSelector]);

  // Track active section with IntersectionObserver
  React.useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px", // Trigger when heading is near top
        threshold: 1.0,
      },
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn("lk-toc", className)}>
      <h4
        style={{
          fontSize: "var(--lk-typescale-label-large-size)",
          fontWeight: "var(--lk-typescale-label-large-weight)",
          marginBottom: "var(--lk-size-sm)",
          color: "var(--lk-on-surface-variant)",
        }}
      >
        On this page
      </h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "var(--lk-size-2xs)",
        }}
      >
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              paddingLeft: heading.level === 3 ? "var(--lk-size-sm)" : 0,
            }}
          >
            <a
              href={`#${heading.id}`}
              style={{
                display: "block",
                fontSize: "var(--lk-typescale-body-small-size)",
                color: activeId === heading.id ? "var(--lk-primary)" : "var(--lk-on-surface-variant)",
                textDecoration: "none",
                padding: "var(--lk-size-3xs) var(--lk-size-2xs)",
                borderRadius: "var(--lk-border-radius-sm)",
                transition: "color 0.2s ease, background-color 0.2s ease",
                fontWeight: activeId === heading.id ? 500 : 400,
              }}
              onMouseEnter={(e) => {
                if (activeId !== heading.id) {
                  e.currentTarget.style.backgroundColor = "var(--lk-surface-container-highest)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeId !== heading.id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", `#${heading.id}`);
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
