import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/frontend" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Frontend
          </span>
          <h3 className={styles.postTitle}>
            Harness the power of HTML, CSS, and JavaScript to build visually
            captivating and responsive websites that keep users coming back for
            more.
          </h3>
        </div>
      </Link>
      <Link href="/backend" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Backend
          </span>
          <h3 className={styles.postTitle}>
            Dive deep into the server-side of web applications with back-end
            development, crafting powerful APIs and middleware that fuel
            front-end performance.
          </h3>
        </div>
      </Link>
      <Link href="/database" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Database</span>
          <h3 className={styles.postTitle}>
            Databases: the critical engines of data storage and retrieval that
            power {"today's"} information-driven world.
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
