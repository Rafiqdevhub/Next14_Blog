import Link from 'next/link'
import styles from '../components/not-found/not-found.module.css'
 
export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.desc}>Oops! Page not found.</p>
      <div className={styles.linked}>
      <Link href={'/'} >Go back to home</Link>
      </div>
    </div>
  )
}