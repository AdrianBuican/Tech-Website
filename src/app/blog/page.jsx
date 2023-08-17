import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const metadata={
  title: "TechVibe Blog",
  description: "This is the Blog Page"
}

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/article-1">
        <h2 className={styles.title}>Article 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus odio doloribus aut accusamus incidunt nulla dolorem ipsum unde, praesentium repellat rerum perferendis, veritatis omnis fuga autem pariatur similique, ducimus vero!</p>
      </Link>
      <Link href="/blog/article-2">
        <h2 className={styles.title}>Article 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus odio doloribus aut accusamus incidunt nulla dolorem ipsum unde, praesentium repellat rerum perferendis, veritatis omnis fuga autem pariatur similique, ducimus vero!</p>
      </Link>
      <Link href="/blog/article-3">
        <h2 className={styles.title}>Article 3</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus odio doloribus aut accusamus incidunt nulla dolorem ipsum unde, praesentium repellat rerum perferendis, veritatis omnis fuga autem pariatur similique, ducimus vero!</p>
      </Link>
    </div>
  )
}

export default Blog