import { contact } from '@/config/contact'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <h2 className={styles.title}>
        {contact.title} <strong>{contact.highlight}</strong>
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
