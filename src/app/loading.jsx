import Image from "next/image";
import styles from '../components/loading/loading.module.css'
const loading = () => {
  return (
    <div className={styles.container}>
      <Image src={"/spinner.svg"} width={500} height={500} alt="loading..." />
    </div>
  );
};

export default loading;