'use client'

import { useMemo, useEffect, useState, useRef } from 'react'
import { heroConfig } from '@/config/hero'
import { useLensEffect } from './useLensEffect'
import { useLanguage } from '@/lib/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { language } = useLanguage()
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  const radius = isMobile ? heroConfig.mobileRadius : heroConfig.radius
  const feather = isMobile ? heroConfig.mobileFeather : heroConfig.feather

  const { layerEnRef, layerCnRef, circleDecoRef, onMouseEnter, onMouseLeave, onMouseMove } =
    useLensEffect(radius, feather)

  const heroRef = useRef<HTMLElement>(null)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Hide circle when hero scrolls out of view
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      setHeroVisible(rect.bottom > 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Generate pattern rows once
  const patternRows = useMemo(() => {
    const rows = []
    for (let i = 0; i < heroConfig.patternRows; i++) {
      const cols = []
      for (let j = 0; j < heroConfig.patternCols; j++) {
        cols.push(
          <span key={j} className={styles.pt}>
            {heroConfig.patternText}
          </span>
        )
      }
      rows.push(
        <div key={i} className={styles.prow}>
          {cols}
        </div>
      )
    }
    return rows
  }, [])

  const content = heroConfig[language]

  // Avoid hydration mismatch
  if (isMobile === null) {
    return <section className={styles.hero} ref={heroRef} />
  }

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background pattern - always visible */}
      <div className={styles.heroBg}>{patternRows}</div>

      {/* English title layer */}
      <div className={styles.layerEn} ref={layerEnRef}>
        <div className={styles.title}>
          <h1>{heroConfig.en.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}</h1>
          <div className={styles.sub}>{heroConfig.en.subtitle}</div>
        </div>
      </div>

      {/* Chinese title layer */}
      <div className={styles.layerCn} ref={layerCnRef}>
        <div className={styles.title}>
          <h2>{heroConfig.cn.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}</h2>
          <span className={styles.about}>{heroConfig.cn.subtitle}</span>
        </div>
      </div>

      {/* Circle decoration */}
      {heroVisible && <div className={styles.circleDeco} ref={circleDecoRef} />}

      {/* Interactive zone - only on desktop */}
      {!isMobile && (
        <div
          className={styles.zone}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
        />
      )}

      <div className={styles.hint}>{content.hint}</div>
    </section>
  )
}
