import { contact } from '@/config/contact'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Contact.module.css'

export default function Contact() {
  const { language } = useLanguage()
  const content = contact[language]

  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.title}>
        {content.title} <strong>{content.highlight}</strong>
      </h2>
      <div className={styles.links}>
        {contact.links.map((link) => (
          <a key={link.label} href={link.href} className={styles.pill}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
