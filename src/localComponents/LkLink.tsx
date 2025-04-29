"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import styles from "./lklink.module.css";

interface LkLinkProps extends LinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function LkLink({ children, href = "/" }: LkLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      lk-component="link"
      className={`${styles["lk-link"]} ${pathname === href ? styles.active : ""}`}
    >
      {children}
    </Link>
  );
}
