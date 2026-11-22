"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, GoldenBox } from "liftkit";
import { StateLayer } from "liftkit";
import type { getDocsNav } from "@/lib/docs-nav";
import "./nav-sidebar.css";

type NavSections = ReturnType<typeof getDocsNav>;

export function NavSidebar({ nav }: { nav: NavSections }) {
  const pathname = usePathname();

  return (
    <GoldenBox>
      <nav className="sidebar pb-2xl">
        {/* One accordion item per section; several can be open at once, and Overview starts open */}
        <Accordion multiple defaultValue={["Overview"]}>
          {nav.map((section) => (
            <AccordionItem key={section.title} value={section.title}>
              <AccordionTrigger className="p-0">
                {/* The trigger's own button padding is cleared (p-0; AccordionTrigger also puts its className on its icon,
                    where that is harmless). The wrapper's padding matches the links below. */}
                <div className="p-sm">
                  <span className="subheading-bold">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="mb-sm">
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                      <div
                        className={`p-sm relative color-onsurfacelow overflow-hidden rounded-2xs${pathname === item.href ? " bg-surfacecontainerhigh" : ""}`}
                      >
                        <span>{item.title}</span>
                        <StateLayer />
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </nav>
    </GoldenBox>
  );
}
