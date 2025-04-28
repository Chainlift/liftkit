import { useMemo } from "react";
import { propsToDataAttrs } from "../utilities";
import Image from "@/liftkit/components/image";
import IconButton from "@/liftkit/components/icon-button";
import Row from "@/liftkit/components/row";
import Link from "next/link";

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
    () => propsToDataAttrs({ material }, "lk-navbar"),
    [material]
  );

  return (
    <div {...dataAttrs} {...rest}>
      <div lk-navbar-el="navbar-content">
        <Row>
          <IconButton icon="menu" />
          <Link href="/">
            <Image alt="" />
          </Link>
        </Row>

        <Row lk-navbar-el="nav-menu">
          <Image alt="" />
          <Row>
            <Row lk-slot="nav-buttons">{navButtons}</Row>
            <Row lk-slot="nav-dropdowns">{navDropdowns}</Row>
          </Row>

          <Row>
            <Row lk-slot="nav-icon-buttons">{iconButtons}</Row>
            <Row lk-slot="nav-cta-buttons">{ctaButtons}</Row>
          </Row>
        </Row>
      </div>
      <div lk-navbar-el="color-scrim" />
      <div lk-navbar-el="glass-scrim" />
    </div>
  );
}
