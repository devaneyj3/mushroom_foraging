import React from 'react'
import styles from './CardGrid.module.scss'

interface CardGridProps {
  children: React.ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
  return <div className={styles.gridAutoFill}>{children}</div>
}
