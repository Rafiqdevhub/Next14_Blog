import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";


const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" fill alt="" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.category}>Technology</span>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, quidem.
        </p>
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
