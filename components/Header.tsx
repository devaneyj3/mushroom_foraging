'use client'

import React, { useState } from 'react'
import {Link} from 'next-view-transitions'
import styles from './Header.module.scss'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
    <a className={styles.skip} href='#main'>Skip to main content</a>
    <header className={styles.siteHeader}>
      <div className={styles.wrapper}>
        <div className={styles.site_header_inner}>
        <Link href="/">
          <img
            className={styles.logo}
            src="/assets/fungi-finders.svg"
            alt="FungiFinders"
            />
        </Link>
          <button className={styles.hamburger_menu} aria-controls='primary-nav' aria-expanded={openMenu} onClick={() => setOpenMenu(!openMenu)}>
            <span className={styles.visuallyHidden}>menu</span>
            <img src="/assets/hamburger.svg" alt="" />
          </button>
          
          <nav id='primary-nav' className={openMenu ?  `${styles.openMenu}` : styles.primaryNavigation}>
            <ul>
              <li>
                <Link href="/">Discover</Link>
              </li>
              <li>
                <Link href="/mushroom-guide">Mushroom guide</Link>
              </li>
              <li>
                <Link href="/mushroom-guide#faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
            </>
  )
}
