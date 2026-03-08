"use client";

import { useEffect, useRef, useState } from "react";
import { StateLayer } from "@/liftkit/component-definitions/state-layer/state-layer";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function getHeadings(): TocItem[] {
  const main = document.querySelector("main");
  if (!main) return [];
  return Array.from(main.querySelectorAll("h2, h3"))
    .map((el) => ({
      id: el.id,
      text: el.textContent?.replace(/^#/, "").trim() ?? "",
      level: el.tagName === "H2" ? 2 : 3,
    }))
    .filter((h) => h.id);
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setItems(getHeadings());
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current?.disconnect();

    const headingEls = items.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];

    // Track which headings are visible; pick the topmost one
    const visible = new Set<string>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // Find topmost visible heading in document order
        const topmost = headingEls.find((el) => visible.has(el.id));
        if (topmost) setActiveId(topmost.id);
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    for (const el of headingEls) {
      observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav data-slot="table-of-contents" aria-label="On this page">
      <p className="capline mb-lg color-onsurfacelow">On this page</p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-active={activeId === item.id || undefined}
              className={`${item.level === 2 ? "pl-sm" : "pl-lg"} pr-sm py-2xs relative overflow-hidden rounded-2xs `}
              style={{
                display: "block",
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className={`${item.level === 3 ? "subheading" : "callout font-500"}`}>{item.text}</span>

              <StateLayer />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
