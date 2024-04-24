import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        roadmap
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Tools
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Technologies
      </Link>

      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Environment
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
