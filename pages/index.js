import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David's App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My new branch</h1>
    </div>
  )
}
