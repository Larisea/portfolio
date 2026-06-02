'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type Language = 'en' | 'cn'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('cn')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'cn' : 'en')
  }, [])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
