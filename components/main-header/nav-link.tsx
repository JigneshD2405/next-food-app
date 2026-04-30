"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import Classes from "./nav-link.module.css";

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? `${Classes.link} ${Classes.active}` : Classes.link}>
      {children}
    </Link>
  );
}
