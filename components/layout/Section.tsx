import React from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  children: React.ReactNode
  tone?: 'default' | 'accent' | 'extraDark'
  padding?: 'default' | 'compact'
  id?: string
}

export default function Section({
  children,
  tone = 'default',
  padding = 'default',
  id,
}: SectionProps) {
  const toneClass =
    tone === 'accent'
      ? styles.backgroundAccent
      : tone === 'extraDark'
        ? styles.backgroundExtraDark
        : ''

  return (
    <section
      id={id}
      className={[styles.section, toneClass].filter(Boolean).join(' ')}
      data-padding={padding}
    >
      {children}
    </section>
  )
}
