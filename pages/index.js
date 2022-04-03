import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Homepage from "./components/Homepage"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trailer Max</title>
        <meta name="Trailer Max" content="Providing blockbuster movie trailers" />
      </Head>

       <Navbar />
        <Homepage />
      {/* <main className={styles.main}>
      </main> */}

      
    </div>
  )
}
