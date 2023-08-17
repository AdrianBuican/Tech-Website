import styles from './page.module.css'
import Image from 'next/image'
import Hero from "public/hero.png"

export const metadata={
  title: "TechVibe Home",
  description: "This is the Home Page"
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Powerful designs for your digital products
        </h1>
        <p className={styles.description}>
          We bring your ideas to life, with the best teams from the global tech industry.
        </p>
        <button className={styles.btn}>See Our Work</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  )
}
