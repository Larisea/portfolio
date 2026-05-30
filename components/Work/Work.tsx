import { projects } from '@/config/projects'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.label}>
        <span>Selected Work</span>
        <div className={styles.line} />
      </div>
      <div className={styles.list}>
        {projects.map((project) => (
          <div key={project.index} className={styles.row}>
            <div className={styles.index}>{project.index}</div>
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
