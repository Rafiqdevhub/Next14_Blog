import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={"https://www.facebook.com/"} target="_blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
      </div>

      <div className={styles.logo}>
        <Link href={"/"}>Blog App</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
      <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  );
};

export default Navbar;
