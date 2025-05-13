"use client"

import { useMemo, useState } from "react";
import { propsToDataAttrs } from "../utilities";
import Image from "@/liftkit/components/image";
import IconButton from "@/liftkit/components/icon-button";
import Row from "@/liftkit/components/row";
import Link from "next/link";
import Column from "@/liftkit/components/column";

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
  ...rest
}: LkNavBarProps) {
  const dataAttrs = useMemo(
    () => propsToDataAttrs({ material }, "navbar"),
    [material],
  );

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  console.log("menuOpen", menuOpen)

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
        <Column alignItems="start"  className={`navbar-mobile ${menuOpen ? "active" : ""}`}>
          <IconButton icon="menu" onClick={() => toggleMenu()}/>
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
