import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/Button/Button'
import Image from 'next/image'

export const metadata = {
  title: "Tech Vibe Categories",
  description: "This is Categories Page",
};

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo sunt odio? Veritatis tempora error ipsa quos! Excepturi iusto, voluptatem mollitia sapiente obcaecati hic praesentium tempora quaerat consequatur doloribus magni.
          </p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          fill={true} 
          src="/categ0.jpg" 
          alt="img"/>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Aesthetic & Efficient</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo sunt odio? Veritatis tempora error ipsa quos! Excepturi iusto, voluptatem mollitia sapiente obcaecati hic praesentium tempora quaerat consequatur doloribus magni.
          </p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          fill={true} 
          src="/categ1.jpg"
          alt="img"/>
        </div>
      </div>
    </div>
  )
}

export default Category