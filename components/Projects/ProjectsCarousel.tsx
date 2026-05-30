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

  // Title animation
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 0.15], [40, 0]),
    springConfig
  )

  // Row 0 - appears first (scroll progress 0.1 ~ 0.3)
  const row0Opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const row0Y = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3], [80, 0]),
    springConfig
  )

  // Row 1 - appears second (scroll progress 0.25 ~ 0.45)
  const row1Opacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1])
  const row1Y = useSpring(
    useTransform(scrollYProgress, [0.25, 0.45], [80, 0]),
    springConfig
  )

  // Row 2 - appears third (scroll progress 0.4 ~ 0.6)
  const row2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const row2Y = useSpring(
    useTransform(scrollYProgress, [0.4, 0.6], [80, 0]),
    springConfig
  )

  // Fade out at the end
  const fadeOut = useTransform(scrollYProgress, [0.75, 0.95], [1, 0])

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.sticky}>
        <motion.div
          className={styles.header}
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <h2 className={styles.title}>Selected Work</h2>
          <p className={styles.subtitle}>Scroll to explore my projects</p>
        </motion.div>

        <motion.div className={styles.carousel} style={{ opacity: fadeOut }}>
          {/* Row 0 */}
          <motion.div className={styles.row} style={{ opacity: row0Opacity, y: row0Y }}>
            {carouselRow1.slice(0, 4).map((project, i) => (
              <ProjectCard key={`r0-${i}`} project={project} />
            ))}
          </motion.div>

          {/* Row 1 */}
          <motion.div className={styles.row} style={{ opacity: row1Opacity, y: row1Y }}>
            {carouselRow2.slice(0, 4).map((project, i) => (
              <ProjectCard key={`r1-${i}`} project={project} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div className={styles.row} style={{ opacity: row2Opacity, y: row2Y }}>
            {carouselRow3.slice(0, 4).map((project, i) => (
              <ProjectCard key={`r2-${i}`} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
