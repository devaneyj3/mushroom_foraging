import styles from './Hero.module.scss'
export default function Hero({children}) {
  return (
    <>
      <section id='main' className={`${styles.hero}  ${styles.section}`}>
        <div className={styles.wrapper}>
          <h1 className={styles.siteTitle}>
            Discover the World of
            <span> Mushroom Foraging</span>
          </h1>
          {children}
        </div>
      </section>
    </>
  )
}