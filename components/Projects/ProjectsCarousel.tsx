'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { carouselRow1, carouselRow2, carouselRow3 } from '@/config/projects'
import ProjectCard from './ProjectCard'
import styles from './ProjectsCarousel.module.css'

export default function ProjectsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 200, damping: 25, bounce: 0 }

  // Row 1 - scrolls left
  const x1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  )

  // Row 2 - scrolls right
  const x2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  )

  // Row 3 - scrolls left
  const x3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  )

  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [-100, 0]),
    springConfig
  )

  // Fade out at end
  const fadeOut = useTransform(scrollYProgress, [0.85, 1], [1, 0])

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.sticky}>
        <motion.div
          className={styles.header}
          style={{ opacity }}
        >
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.subtitle}>Scroll to explore my projects</p>
        </motion.div>

        <motion.div
          className={styles.carousel}
          style={{ y: translateY, opacity: fadeOut }}
        >
          {/* Row 1 - scrolls left */}
          <motion.div className={`${styles.row} ${styles.rowReverse}`} style={{ x: x1 }}>
            {[...carouselRow1.slice(0, 4), ...carouselRow1.slice(0, 4)].map((project, i) => (
              <ProjectCard key={`r1-${i}`} project={project} />
            ))}
          </motion.div>

          {/* Row 2 - scrolls right */}
          <motion.div className={styles.row} style={{ x: x2 }}>
            {[...carouselRow2.slice(0, 4), ...carouselRow2.slice(0, 4)].map((project, i) => (
              <ProjectCard key={`r2-${i}`} project={project} />
            ))}
          </motion.div>

          {/* Row 3 - scrolls left */}
          <motion.div className={`${styles.row} ${styles.rowReverse}`} style={{ x: x3 }}>
            {[...carouselRow3.slice(0, 4), ...carouselRow3.slice(0, 4)].map((project, i) => (
              <ProjectCard key={`r3-${i}`} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
