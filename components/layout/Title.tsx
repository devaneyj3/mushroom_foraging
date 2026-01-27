import React from 'react'
import styles from './Title.module.scss'

interface TitleProps {
  as?: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
}

export default function Title({ as = 'h2', children }: TitleProps) {
  const Tag = as
  const cls = as === 'h1' ? styles.heroTitle : styles.sectionTitle
  return <Tag className={cls}>{children}</Tag>
}
