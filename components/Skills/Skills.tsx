import { skills } from '@/config/skills'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Skills.module.css'

export default function Skills() {
  const { language } = useLanguage()
  const content = skills[language]

  return (
    <section className={styles.section} id="skills">
      <div className={styles.label}>
        <span>{content.label}</span>
        <div className={styles.line} />
      </div>
      <div className={styles.grid}>
        {content.items.map((skill) => (
          <div key={skill.title} className={styles.cell}>
            <div className={styles.icon}>{skill.icon}</div>
            <h4>{skill.title}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
