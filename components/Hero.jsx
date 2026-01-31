import styles from './Hero.module.scss'
export default function Hero({title, span ,children}) {
  return (
    <>
      <section id='main' className={`${styles.hero}  ${styles.section}`}>
        <div className={styles.wrapper}>
          <h1 className={styles.siteTitle}>
            {title}
            <span> {span}</span>
          </h1>
          {children}
        </div>
      </section>
    </>
  )
}