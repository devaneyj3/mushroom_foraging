import Image from 'next/image'
import styles from './page.module.scss'

interface Mushroom {
  name: string
  type: 'edible' | 'toxic'
  season: string
  description: string
  notes: string
}

const mushrooms: Mushroom[] = [
  {
    name: 'Chanterelle',
    type: 'edible',
    season: 'summer',
    description: 'Golden-yellow, funnel-shaped mushroom with false gills',
    notes: 'Has toxic look-alikes - learn proper identification',
  },
  {
    name: 'Morel',
    type: 'toxic',
    season: 'spring',
    description: 'Distinctive honeycomb-like cap structure',
    notes: 'Must be cooked before eating',
  },
  {
    name: 'Chicken of the Woods',
    type: 'edible',
    season: 'summer',
    description: 'Bright orange bracket fungus with yellow edges',
    notes: 'Avoid if growing on certain tree species',
  },
  {
    name: 'Death Cap',
    type: 'toxic',
    season: 'summer',
    description: 'Pale green to white cap with white gills',
    notes: 'Extremely toxic - study for safety awareness',
  },
  {
    name: 'Oyster Mushroom',
    type: 'edible',
    season: 'fall',
    description: 'Fan-shaped caps growing in clusters',
    notes: 'Great beginner mushroom, few look-alikes',
  },
  {
    name: 'Lion\'s Mane',
    type: 'edible',
    season: 'fall',
    description: 'White, shaggy appearance like a lion\'s mane',
    notes: 'No toxic look-alikes',
  },
  {
    name: 'Destroying Angel',
    type: 'toxic',
    season: 'summer',
    description: 'Pure white mushroom with a sack-like base',
    notes: 'Deadly toxic - study for safety awareness',
  },
  {
    name: 'King Bolete',
    type: 'edible',
    season: 'summer',
    description: 'Large brown cap with thick stem',
    notes: 'Learn to distinguish from similar species',
  },
  {
    name: 'Shaggy Mane',
    type: 'edible',
    season: 'fall',
    description: 'Golden-yellow, funnel-shaped mushroom with false gills',
    notes: 'Must be harvested and eaten quickly',
  },
  {
    name: 'Maitake',
    type: 'edible',
    season: 'fall',
    description: 'Large, feathery clusters with overlapping gray-brown caps',
    notes: 'Also known as Hen of the Woods - no toxic look-alikes',
  },
  {
    name: 'False Morel',
    type: 'toxic',
    season: 'spring',
    description: 'Brain-like, reddish-brown cap with irregular shape',
    notes: 'Highly toxic - often confused with true morels',
  },
  {
    name: 'Matsutake',
    type: 'edible',
    season: 'fall',
    description: 'White to brown cap with thick stem and distinct spicy aroma',
    notes: 'Verify identification - has toxic look-alikes',
  },
]

const faqs = [
  {
    question: 'What do I need to start mushroom foraging?',
    answer:
      "You'll need a local field guide, a sharp knife or scissors, a basket or mesh bag for collecting, and paper bags for separating specimens. Bring a small brush for cleaning, wear sturdy boots, and carry a GPS device or compass to track your location. A camera is also helpful to document your finds.",
  },
  {
    question: 'How can I identify edible mushrooms?',
    answer:
      "Learn from experienced foragers and reliable guidebooks – never rely on apps alone. Study each mushroom's specific features like cap shape, gill structure, stem characteristics, and spore prints. Start with easily identifiable species that have no poisonous lookalikes, and never eat anything unless you're completely certain of its identification.",
  },
  {
    question: 'Where can I find foraging spots?',
    answer:
      "Look in deciduous forests, especially near oak and maple trees, and in damp, shaded areas. Fallen logs and dead trees are often productive spots. Only forage on public lands where it's allowed, and always check local regulations. Remember to get permission for private property and keep your best locations private to prevent over-harvesting.",
  },
  {
    question: 'What are the best seasons for mushroom foraging?',
    answer:
      'Spring is ideal for morels, late summer brings chanterelles and boletes, and fall is peak season for most mushrooms including oysters and hen of the woods. Some species can even be found in winter, especially in milder climates. Each season offers different varieties, so year-round foraging is possible.',
  },
]

export default function MushroomGuide() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <h1>Quick reference Mushroom Guide</h1>
          <p>
            Discover a wide array of mushrooms from around the world, each with
            its own unique flavor profile and culinary uses.
          </p>
          <p>
            Whether you&apos;re looking for earthy porcinis, delicate
            chanterelles, or meaty shiitakes, our selection has something for
            every palate.
          </p>
          <p>
            Explore the diverse shapes, sizes, and colors of these fungi to
            elevate your dishes to new heights.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h2>Where to look</h2>
          <p>Different species grow in different types of environments.</p>
          <p>
            Forests are always a good starting place, though, with a wide range
            of species that grow in them.
          </p>
          <p>
            If you&apos;re after something specific, you can use our reference
            guide below to help you out.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h2>Get to know your mushrooms</h2>
          <div className={styles.mushroomGrid}>
            {mushrooms.map((mushroom) => (
              <div key={mushroom.name} className={styles.mushroomCard}>
                <h3>{mushroom.name}</h3>
                <div className={styles.mushroomMeta}>
                  <span
                    className={`${styles.mushroomType} ${
                      mushroom.type === 'edible' ? styles.edible : styles.toxic
                    }`}
                  >
                    {mushroom.type}
                  </span>
                  <span className={styles.mushroomSeason}>{mushroom.season}</span>
                </div>
                <p className={styles.mushroomDescription}>{mushroom.description}</p>
                <p className={styles.mushroomNotes}>
                  <strong>Important notes:</strong> {mushroom.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <div className={styles.wrapper}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
