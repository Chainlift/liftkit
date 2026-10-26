"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoldenBox } from "@chainlift/liftkit";
import { StateLayer } from "@chainlift/liftkit";
import type { getDocsNav } from "@/lib/docs-nav";
import "./nav-sidebar.css";

type NavSections = ReturnType<typeof getDocsNav>;

export function NavSidebar({ nav }: { nav: NavSections }) {
  const pathname = usePathname();

  return (
    <GoldenBox>
      <nav className="sidebar pb-2xl">
        {nav.map((section, i) => (
          <section key={section.title} aria-labelledby={`nav-section-${i}`}>
            <h2 id={`nav-section-${i}`} className={`label color-onsurfacevariant px-sm mb-2xs ${i === 0 ? "mt-0" : "mt-md"}`}>
              {section.title}
            </h2>
            {section.items.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                <div
                  className={`px-sm py-2xs relative overflow-hidden rounded-2xs${pathname === item.href ? " bg-surfacecontainerhigh" : ""}`}
                >
                  <span className="callout">{item.title}</span>
                  <StateLayer />
                </div>
              </Link>
            ))}
          </section>
        ))}
      </nav>
    </GoldenBox>
  );
}
