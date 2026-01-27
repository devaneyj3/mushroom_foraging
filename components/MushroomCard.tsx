import React from 'react'
import styles from './MushroomCard.module.scss'

type Season = 'spring' | 'summer' | 'fall'
type Edible = 'edible' | 'toxic'

export interface Mushroom {
  title: string
  edible: Edible
  season: Season
  description: string
  note: string
}

interface MushroomCardProps {
  item: Mushroom
}

export default function MushroomCard({ item }: MushroomCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{item.title}</h3>

      <ul className={styles.tagList} role="list" aria-label="Mushroom characteristics">
        <li data-edible={item.edible}>
          <span className={styles.visuallyHidden}>This mushroom is</span>
          {item.edible}
        </li>
        <li data-season={item.season}>
          <span className={styles.visuallyHidden}>You can harvest this mushroom in the</span>
          {item.season}
        </li>
      </ul>

      <p>{item.description}</p>
      <p className={styles.cardNote}>
        <strong>Important notes:</strong> {item.note}
      </p>
    </div>
  )
}
