import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <p className={styles.footer_title}>Happy Foraging!</p>
      <a href="mailto:contact@fungifinders.com">contact@fungifinders.com</a>
    </footer>
  )
}
