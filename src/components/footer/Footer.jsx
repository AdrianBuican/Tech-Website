import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 TechVibe. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png" width={35} height={35} className={styles.icon} alt="Tech Vibe"/>
          <Image src="/2.png" width={35} height={35} className={styles.icon} alt="Tech Vibe"/>
          <Image src="/3.png" width={35} height={35} className={styles.icon} alt="Tech Vibe"/>
          <Image src="/4.png" width={35} height={35} className={styles.icon} alt="Tech Vibe"/>
        </div>
      </div>
    </div>
  )
}

export default Footer