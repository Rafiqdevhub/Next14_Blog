'use client'
import styles from '../components/error/error.module.css';


import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className={styles.container}>
      <h1>Something went wrong. Please try again later.</h1>
      <button className={styles.Button} onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}