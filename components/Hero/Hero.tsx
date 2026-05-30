'use client'

import { useMemo } from 'react'
import { heroConfig } from '@/config/hero'
import { useLensEffect } from './useLensEffect'
import styles from './Hero.module.css'

export default function Hero() {
  const { layerEnRef, layerCnRef, circleDecoRef, onMouseEnter, onMouseLeave, onMouseMove } =
    useLensEffect(heroConfig.radius, heroConfig.feather)

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

  return (
    <section className={styles.hero}>
      {/* Background pattern - always visible */}
      <div className={styles.heroBg}>{patternRows}</div>

      {/* English title - hidden inside circle via mask */}
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

      {/* Chinese title - shown inside circle via mask */}
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
      <div className={styles.circleDeco} ref={circleDecoRef} />

      {/* Interactive zone */}
      <div
        className={styles.zone}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      />

      <div className={styles.hint}>移动鼠标探索</div>
    </section>
  )
}
