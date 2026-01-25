import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <section className={`${styles.hero}  ${styles.section}`}>
        <div className={styles.wrapper}>
          <h1 className={styles.siteTitle}>
            Discover the World of
            <span> Mushroom Foraging</span>
          </h1>

          <div className={styles.wrapper_narrow}>

          <p>
            Mushroom foraging is the art and science of identifying and
            collecting wild mushrooms.
          </p>
          </div>
          <p>
            It&apos;s a practice that combines outdoor exploration botanical
            knowledge, and culinary adventure. Foragers venture into forests,
            fields, and even urban green spaces to discover these hidden
            treasures.
          </p>
          <p>
            But beware – this hobby requires careful study and respect for
            nature, as some mushrooms can be dangerous if misidentified.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h2>The joys of mushroom foraging</h2>
          <p>
            Foraging for mushrooms can be a rewarding experience for many
            reasons. People may venture off into the woods to forage for
            mushrooms because it allows them to connect with nature, enjoy the
            thrill of the hunt, and savor the satisfaction of finding a hidden
            culinary treasure.
          </p>

          <div className={styles.equalColumns}>
            <Card
              image="/assets/outdoor-exploration.webp"
              imageAlt="Tighly grouped brown mushrooms growing up the side of a mossy tree trunk"
              title="Outdoor Exploration"
            >
              Mushroom foraging takes you off the beaten path and into the heart
              of nature. Learn to read the landscape, identifying prime
              mushroom habitats from lush forest floors to sun-dappled meadows.
              Every expedition is a new adventure, with the potential for
              exciting discoveries around every tree and under every log.
            </Card>

            <Card
              image="/assets/botanical-expertise.webp"
              imageAlt="Various harvested wild mushrooms on a table"
              title="Botanical Expertise"
            >
              Dive into the intricate world of fungal biology. Discover the
              unique structures of mushrooms, from caps to gills to spores. Learn
              to use field guides and identification keys to distinguish between
              species. With practice, you&apos;ll start to see the forest in a
              whole new light, recognizing the vital role fungi play in ecosystem
              health.
            </Card>

            <Card
              image="/assets/culinary-delight.webp"
              imageAlt="A freshly cooked plate of food, still steaming, with several mushroom slices on it"
              title="Culinary Delights"
            >
              Transform your foraged finds into delectable dishes. Many edible
              mushrooms offer unique flavors and textures that can elevate your
              cooking. From the earthy porcini to the delicate chanterelle, each
              variety brings its own character to the table. Explore recipes,
              preservation techniques, and the joy of cooking with nature&apos;s
              bounty.
            </Card>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.background_accent}`}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_narrow}>

          <h2>
            Start your <span>Foraging Adventure!</span>
          </h2>
          <p>
            Whether you&apos;re seeking a deeper connection with nature, a new
            outdoor hobby, or simply love the idea of finding your own food,
            mushroom foraging offers a uniquely rewarding experience.
          </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.extra_dark}`}>
        <div className={styles.wrapper}>
          <div className={styles.two_columns}>
            <div>
              <Image
                src="/assets/get-to-know.webp"
                alt="A man on his hands and knees carefully digging a mushroom out of the forest floor"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Get to know your mushrooms</h2>
              <p>
                Successful and safe mushroom foraging begins with a deep
                understanding of the species you&apos;ll encounter in the wild -
                not just what the edible ones look like, but their toxic
                look-alikes, seasonal patterns, and preferred habitats.
              </p>
              <p>
                It can feel like a big task, but
                <strong> we&apos;ve got a handy reference guide</strong> to help
                you out!
              </p>
              <Link className={styles.button} href="/mushroom-guide">
                <span className={styles.visuallyHidden}>
                  Get to know your mushrooms by using our handy
                </span>
                Reference Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.two_columns}>
            <div>
              <h2>Connect with Nature</h2>
              <p>
                Experience the beauty of the great outdoors while foraging for
                mushrooms with fellow enthusiasts.
              </p>
              <Link className={styles.button} href="#">
                Learn more
              
                <span className={styles.visuallyHidden}>
                  about mushrooms with our handy mushroom guide
                </span>
              </Link>
            </div>
            <div>
              <Image
                src="/assets/nature.webp"
                alt="A few small yellowish mushrooms growing on a mossy forest floor"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
