"use client";
import Link from "next/link";

import { ReactElement } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";
export default function HeaderComponent(): ReactElement {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathName === "/" && "active")}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathName === "/search" && "active")}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
}
