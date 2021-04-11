import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/pokemon/bulbasaur'>
        <a>Bulbasaur!</a>
      </Link>

      <Link href='/pokemon/random'>
        <a>Random!</a>
      </Link>
    </div>
  );
}
