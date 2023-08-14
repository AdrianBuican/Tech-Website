import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="/about.jpg" 
          fill={true} 
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod molestias magni dolor vel repudiandae assumenda tenetur facilis minus sunt ullam aspernatur, obcaecati nobis earum delectus doloribus accusantium sit quasi qui!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestiae quos illum reprehenderit numquam labore minima repellat? Provident soluta possimus rem neque doloremque enim consectetur nostrum architecto quisquam. A, consequatur!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur expedita, odit nulla ullam aut doloremque rem, neque quaerat placeat quisquam corrupti consequuntur? Quam illum vel architecto qui consequuntur libero?
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What do we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod molestias magni dolor vel repudiandae assumenda tenetur facilis minus sunt ullam aspernatur, obcaecati nobis earum delectus doloribus accusantium sit quasi qui!
            <br />
            <ul className={styles.desc}>
              <li>Creative illustrations</li>
              <li>Dynamic websites</li>
              <li>Fast, reliable Mobile Apps</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About