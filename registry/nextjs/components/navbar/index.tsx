"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { propsToDataAttrs } from "@/registry/nextjs/lib/utilities";
import Image from "@/registry/nextjs/components/image";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Column from "@/registry/nextjs/components/column";
import "@/registry/nextjs/components/navbar/navbar.css";

interface LkNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  material?: LkMaterial;
  navButtons?: React.ReactNode;
  navDropdowns?: React.ReactNode;
  iconButtons?: React.ReactNode;
  ctaButtons?: React.ReactNode;
}

export default function NavBar({
  material = "flat",
  navButtons,
  navDropdowns,
  iconButtons,
  ctaButtons,
  ...restProps
}: LkNavBarProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ material, restProps }, "navbar"),
    [material, restProps],
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  console.log("menuOpen", menuOpen);

  return (
    <div lk-component="navbar" {...dataAttrs}>
      {/* Desktop Navbar */}
      <div className="navbar-desktop">
        <Row alignItems="center" gap="sm">
          <Link href="/">
            <Image alt="" src="/vercel.svg" width="md" height="md" />
          </Link>
        </Row>
        <Row>
          <Row lk-slot="nav-buttons">{navButtons}</Row>
          <Row lk-slot="nav-dropdowns">{navDropdowns}</Row>
        </Row>
        <Row lk-navbar-el="nav-menu-end">
          <div lk-slot="nav-icon-buttons">{iconButtons}</div>
          <div lk-slot="nav-cta-buttons">{ctaButtons}</div>
        </Row>
      </div>

      {/* Mobile Navbar */}
      <div lk-navbar-el="nav-menu">
        <Column
          alignItems="start"
          className={`navbar-mobile ${menuOpen ? "active" : ""}`}
        >
          <IconButton icon="menu" onClick={() => toggleMenu()} />
          <Link href="/">
            <Image alt="" src="/vercel.svg" width="md" height="md" />
          </Link>
          <Column>{navButtons}</Column>
          <Column>{navDropdowns}</Column>
          <div>{iconButtons}</div>
          <Column className="flex-h gap-sm">{ctaButtons}</Column>
        </Column>
      </div>
    </div>
  );
}
