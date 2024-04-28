import Card from "../card/Card";
import styles from "./cardList.module.css";

const CardList = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Technologies</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
