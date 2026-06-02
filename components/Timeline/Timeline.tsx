'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Timeline.module.css'

export interface TimelineItem {
  id: string
  date: string
  title: string
  subtitle: string
  description: string
  image?: string
  tags?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  sectionId?: string
}

const sectionTitles = {
  en: 'Selected Work',
  cn: '精选作品',
}

function TimelineNode({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isLeft = index % 2 === 0

  return (
    <div className={styles.node} ref={ref}>
      {/* Center dot */}
      <div className={styles.dotWrapper}>
        <motion.div
          className={styles.dot}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
        />
      </div>

      {/* Content */}
      <div className={`${styles.content} ${isLeft ? styles.contentLeft : styles.contentRight}`}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.date}>{item.date}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.subtitle}>{item.subtitle}</div>
          <p className={styles.description}>{item.description}</p>

          {item.image && (
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
            </div>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default function Timeline({ items, sectionId }: TimelineProps) {
  const { language } = useLanguage()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section className={styles.section} id={sectionId}>
      <motion.div
        className={styles.header}
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.sectionTitle}>{sectionTitles[language]}</h2>
        <div className={styles.line} />
      </motion.div>

      <div className={styles.timeline}>
        {items.map((item, index) => (
          <TimelineNode key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
