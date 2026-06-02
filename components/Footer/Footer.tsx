import { useLanguage } from '@/lib/LanguageContext'
import styles from './Footer.module.css'

const footerText = {
  en: '© 2026 Shome. All Rights Reserved.',
  cn: '© 2026 Shome. 保留所有权利。',
}

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className={styles.footer}>
      {footerText[language]}
    </footer>
  )
}
