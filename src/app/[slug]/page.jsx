import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePage = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill alt="" className={styles.userImage} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Rafiq</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" fill alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt, odio necessitatibus, illum soluta aperiam, suscipit dignissimos cupiditate excepturi repudiandae maxime amet praesentium debitis? Quisquam, perspiciatis? Corrupti id aut alias quis. Fuga impedit repudiandae ipsam neque ipsa voluptatem, explicabo, quibusdam est alias culpa ab reprehenderit, eius eveniet. Amet nisi voluptates debitis natus nostrum culpa eligendi! Eos quo, eum quasi quidem ipsa esse maxime nemo, dignissimos doloribus dolore iusto voluptate unde corporis nam sed ullam delectus! Odio vitae sit maiores. Recusandae voluptatum harum distinctio explicabo, beatae assumenda consequuntur molestiae obcaecati tempore commodi aliquid natus ut quas sapiente, minima saepe necessitatibus voluptatibus, iste soluta? Aliquam corporis autem enim quod, odio quisquam dignissimos itaque at, veritatis, vero fuga nobis iste illo nam molestiae perferendis tempore optio error voluptatem. Voluptates, dolores ea! Esse ipsa voluptas libero, molestiae aliquam, illo atque unde ipsum consequatur blanditiis totam placeat quod quo nisi laborum repellat. Pariatur vitae deserunt culpa laboriosam nulla velit placeat aliquam soluta deleniti aliquid totam rem delectus, consectetur doloribus illum. Consectetur est eos nam dicta delectus, impedit labore ducimus ex asperiores voluptate ea nostrum quam ab placeat nihil nesciunt excepturi hic fugiat atque, ipsam perferendis sequi! Dolore dolor repellat similique ratione natus omnis nam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium inventore culpa, quisquam ipsam commodi fuga optio, molestiae consectetur vel asperiores facilis sapiente odio placeat ab quibusdam, veniam alias omnis blanditiis earum totam quis iure. Quaerat, aliquam cupiditate ad recusandae commodi odit harum vel aperiam nesciunt aspernatur corrupti tempore facilis veniam sunt eaque dolores architecto est repellendus voluptatum iusto qui. Incidunt veniam veritatis magni ex sed cumque libero sunt temporibus voluptas hic! Laboriosam optio unde quis dolorem cupiditate vero quibusdam ipsam dolores. Reprehenderit repellat eius, quos aliquid quae nam similique quaerat ex autem tempora asperiores recusandae provident vero minus neque!</p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
