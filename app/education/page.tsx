'use client'

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Timeline from '@/components/Timeline/Timeline'
import Footer from '@/components/Footer/Footer'
import { education } from '@/config/education'
import { useLanguage } from '@/lib/LanguageContext'
import type { TimelineItem } from '@/components/Timeline/Timeline'

export default function EducationPage() {
  const { language } = useLanguage()

  const educationItems: TimelineItem[] = education.map((e) => ({
    id: e.id,
    date: e.date,
    title: e.school[language],
    subtitle: e.degree[language],
    description: e.description[language],
  }))

  return (
    <>
      <Navbar />
      <Hero />
      <Timeline items={educationItems} sectionId="education" />
      <Footer />
    </>
  )
}
