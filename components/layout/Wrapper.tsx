import React from 'react'
import styles from './Wrapper.module.scss'

interface WrapperProps {
  children: React.ReactNode
  width?: 'default' | 'wide' | 'narrow'
  flow?: boolean
}

export default function Wrapper({
  children,
  width = 'default',
  flow = false,
}: WrapperProps) {
  const widthClass =
    width === 'wide' ? styles.widthWide : width === 'narrow' ? styles.widthNarrow : ''
  return (
    <div className={[styles.wrapper, widthClass, flow ? styles.flow : ''].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
