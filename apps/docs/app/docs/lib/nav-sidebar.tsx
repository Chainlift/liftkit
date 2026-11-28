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
      <nav className="pb-2xl">
        {/* One accordion item per section; several can be open at once, and Overview starts open */}
        <Accordion multiple defaultValue={["Overview"]}>
          {nav.map((section) => (
            <AccordionItem key={section.title} value={section.title} className="border-none">
              <AccordionTrigger className="p-0">
                {/* The trigger's own button padding is cleared (p-0; AccordionTrigger also puts its className on its icon,
                    where that is harmless). The wrapper's padding matches the links below. */}
                <div className="px-sm py-xs">
                  <span className="heading-bold">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="mb-xs pl-md ">
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                      <div
                        className={`px-sm py-2xs relative color-onsurfacelow border-l border-color-outlinevariant overflow-hidden rounded-r-circle ${pathname === item.href ? " bg-surfacecontainerhigh border-color-onsurface" : ""}`}
                      >
                        <span className="subheading">{item.title}</span>
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
