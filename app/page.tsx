'use client'

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Timeline from '@/components/Timeline/Timeline'
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { projects } from '@/config/projects'
import { useLanguage } from '@/lib/LanguageContext'
import type { TimelineItem } from '@/components/Timeline/Timeline'

export default function Home() {
  const { language } = useLanguage()

  const projectItems: TimelineItem[] = projects.map((p) => ({
    id: p.id,
    date: p.date,
    title: p.title[language],
    subtitle: p.tags.join(' · '),
    description: p.description[language],
    image: p.image,
    tags: p.tags,
  }))

  return (
    <>
      <Navbar />
      <Hero />
      <Timeline items={projectItems} sectionId="work" />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
