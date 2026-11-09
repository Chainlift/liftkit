"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoldenBox } from "liftkit";
import { StateLayer } from "liftkit";
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
            <div className="px-sm">
              <h2 id={`nav-section-${i}`} className="subheading-bold">
                {section.title}
              </h2>
            </div>
            <div className="mt-sm mb-lg">
              {section.items.map((item) => (
                <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  <div
                    className={`p-sm relative color-onsurfacelow overflow-hidden rounded-2xs${pathname === item.href ? " bg-surfacecontainerhigh" : ""}`}
                  >
                    <span >{item.title}</span>
                    <StateLayer />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </nav>
    </GoldenBox>
  );
}
