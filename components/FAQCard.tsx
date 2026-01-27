import React from 'react'
import styles from './FAQCard.module.scss'

export interface Faq {
  imageSrc: string
  imageAlt: string
  title: string
  body: string
}

interface FAQCardProps {
  item: Faq
}

export default function FAQCard({ item }: FAQCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.imageSrc} alt={item.imageAlt} />
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  )
}
