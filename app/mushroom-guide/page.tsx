'use client'

import React from 'react'
import styles from './page.module.scss'
import Section from '@/components/layout/Section'
import Wrapper from '@/components/layout/Wrapper'
import Title from '@/components/layout/Title'
import TwoCol from '@/components/layout/TwoCol'
import MushroomCard from '@/components/MushroomCard'
import CardGrid from '@/components/CardGrid'
import FAQCard, { type Faq } from '@/components/FAQCard'
import Hero from '@/components/Hero'
import { MUSHROOMS } from '../../data/mushrooms'
import { FAQS } from '../../data/faq'
import Image from 'next/image'

export default function MushroomGuide() {
  return (
    <>
      <Hero>
        <p>
          Discover a wide array of mushrooms from around the world, each with
          its own unique flavor profile and culinary uses.
        </p>
        <p>
          Whether you're looking for earthy porcinis, delicate chanterelles,
          or meaty shiitakes, our selection has something for every palate.
        </p>
        <p>
          Explore the diverse shapes, sizes, and colors of these fungi to
          elevate your dishes to new heights.
        </p>
      </Hero>

      <Section tone="accent">
        <Wrapper>
          <TwoCol
            left={
              <Image
                className={styles.image}
                src="/assets/where-to-look.webp"
                alt="A closeup of a mushroom growing on a lush green forest floor"
                height={500}
                width={500}
              />
            }
            right={
              <div className={`${styles.flow} ${styles.fontSizeLg}`}>
                <Title as="h2">Where to look</Title>
                <p>Different species grow in different types of environments.</p>
                <p>
                  Forests are always a good starting place, though, with a wide
                  range of species that grow in them.
                </p>
                <p>
                  If you're after something specific, you can use our reference
                  guide below to help you out.
                </p>
              </div>
            }
          />
        </Wrapper>
      </Section>

      <div className={styles.mushroom_guide}>

      <Section>
        <Wrapper>
          <Title as="h2">Get to know your mushrooms</Title>

          {/* Keep for future filtering UI */}
          <div className={styles.filters}>
            <label htmlFor="season" className={styles.visuallyHidden}>
              Filter by season
            </label>
            <select name="season" id="season">
              <option value="all">Season: All</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
            </select>
            <label htmlFor="edible" className={styles.visuallyHidden}>
              Filter by type
            </label>
            <select name="edible" id="edible">
              <option value="all">Type: All</option>
              <option value="edible">Edible</option>
              <option value="toxic">Toxic</option>
            </select>
          </div>

          <CardGrid>
            {MUSHROOMS.map((m) => (
              <MushroomCard key={`${m.title}-${m.season}-${m.edible}`} item={m} />
            ))}
          </CardGrid>

          <div className={styles.noResultsMessage} hidden>
            No cards match these filters
          </div>
        </Wrapper>
      </Section>

            </div>
      <Section id="faq" tone="extraDark" padding="compact">
        <Wrapper width="wide" flow>
          <Title as="h2">Frequently Asked Questions</Title>

          <div className={styles.faqBentoGrid}>
            {FAQS.map((f) => (
              <FAQCard key={f.title} item={f} />
            ))}
          </div>
        </Wrapper>
      </Section>

    </>
  )
}
