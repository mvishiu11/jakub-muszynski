"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const path = usePathname() || "/";
  const inWriting = path.startsWith("/writing");
  return (
    <nav aria-label="Main">
      <Link href="/writing/" aria-current={inWriting ? "page" : undefined}>Writing</Link>
      <Link href="/#work">Work</Link>
      <Link href="/#research">Research</Link>
      <a href="#contact">Contact</a>
      <ThemeToggle />
    </nav>
  );
}
