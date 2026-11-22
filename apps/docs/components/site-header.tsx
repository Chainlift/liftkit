"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { LiftKitLogo } from "@/components/liftkit-logo";
import {
  IconButton,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "liftkit";

const SOCIALS: {
  label: string;
  href: string;
  iconName: "github" | "linkedin";
}[] = [
  {
    label: "LiftKit on GitHub",
    href: "https://github.com/Chainlift/liftkit",
    iconName: "github",
  },
  {
    label: "Garrett Mack on LinkedIn",
    href: "https://www.linkedin.com/in/garrettmack/",
    iconName: "linkedin",
  },
];

const PAGES: {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
}[] = [
  { label: "Docs", href: "/docs", isActive: (p) => p.startsWith("/docs") },
  {
    label: "Theme Generator",
    href: "/playground",
    isActive: (p) => p.startsWith("/playground"),
  },
];

/**
 * Site-wide top navigation, shared by every page. The padding around it is part of it, so it matches everywhere.
 * `children` render before the social links (the page passes the search in, since it needs server-side data).
 */
export function SiteHeader({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="p-md flex-h items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="gap-sm">
          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname === "/"}
              aria-label="LiftKit home"
              className="flex items-center color-onsurface"
              render={<NextLink href="/" />}
            >
              <LiftKitLogo className="h-md" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {PAGES.map(({ label, href, isActive }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                active={isActive(pathname)}
                render={<NextLink href={href} />}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-h items-center gap-xs">
        {children}
        {SOCIALS.map(({ label, href, iconName }) => (
          <IconButton
            key={href}
            variant="text"
            iconName={iconName}
            style={{ "--lk-btn-fg": "var(--lk-onsurface)" } as React.CSSProperties}
            aria-label={label}
            nativeButton={false}
            render={<a href={href} target="_blank" rel="noopener noreferrer" />}
          />
        ))}
      </div>
    </div>
  );
}
