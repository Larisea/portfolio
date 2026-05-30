'use client'

import { motion, MotionValue } from 'framer-motion'
import { Project } from '@/config/projects'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  opacity?: MotionValue<number>
  y?: MotionValue<number>
}

export default function ProjectCard({ project, opacity, y }: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      style={{ opacity, y }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
