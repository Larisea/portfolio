'use client'

import { navigation } from '@/config/navigation'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const nav = navigation[language]

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{navigation.logo}</div>
      <div className={styles.right}>
        <ul className={styles.links}>
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className={styles.langBtn} onClick={toggleLanguage}>
          {nav.langToggle}
        </button>
      </div>
    </nav>
  )
}
