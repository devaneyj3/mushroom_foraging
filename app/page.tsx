import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'
import styles from './page.module.scss'
import Hero from '../components/Hero'
import Wrapper from '@/components/layout/Wrapper'
import Section from '@/components/layout/Section'
import TwoCol from '@/components/layout/TwoCol'


export default function Home() {
  return (
    <>
      <Hero>
        <p>
          Mushroom foraging is the art and science of identifying and
          collecting wild mushrooms.
        </p>
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
      </Hero>
      <Section>
        <Wrapper>
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
        </Wrapper>
      </Section>

      <Section tone="accent">
        <Wrapper>
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
        </Wrapper>
      </Section>

      <Section tone="extraDark">
        <Wrapper>
          <TwoCol
            left={
              <Image
                src="/assets/get-to-know.webp"
                alt="A man on his hands and knees carefully digging a mushroom out of the forest floor"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            }
            right={
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
            }
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <TwoCol
            left={
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
            }
            right={
              <Image
                src="/assets/nature.webp"
                alt="A few small yellowish mushrooms growing on a mossy forest floor"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            }
          />
        </Wrapper>
      </Section>
    </>
  )
}
