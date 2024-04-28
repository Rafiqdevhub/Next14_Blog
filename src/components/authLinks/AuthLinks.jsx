"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
