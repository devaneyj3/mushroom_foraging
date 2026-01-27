import React from 'react'
import styles from './TwoCol.module.scss'

interface TwoColProps {
  left: React.ReactNode
  right: React.ReactNode
}

export default function TwoCol({ left, right }: TwoColProps) {
  return (
    <div className={styles.equalColumns} data-vertical-alignment="centered" data-gap="large">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
