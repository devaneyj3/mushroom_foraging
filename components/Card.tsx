import Image from 'next/image'
import styles from './Card.module.scss'

interface CardProps {
  image: string
  imageAlt: string
  title: string
  children: React.ReactNode
}

export default function Card({ image, imageAlt, title, children }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={imageAlt}
        width={400}
        height={300}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
