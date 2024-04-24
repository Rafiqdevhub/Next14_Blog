import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Code & Conquer: Mastering the Art of Modern Web Development
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Breaking Barriers: How Emerging Technologies Are Redefining Web
            Development
          </h1>
          <p className={styles.postDesc}>
            Dive into the future of web development with our comprehensive guide
            to the most exciting trends shaping the digital landscape in 2024.
            From AI-driven design to the rise of progressive web apps, discover
            how these innovative technologies are enhancing creativity and
            efficiency for developers around the globe. Stay ahead of the curve
            and transform your web projects with cutting-edge insights and
            tools. Explore our expert analyses and tips to unleash your creative
            potential and build breathtaking, dynamic websites that captivate
            and engage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
