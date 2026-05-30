'use client'

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Timeline from '@/components/Timeline/Timeline'
import Footer from '@/components/Footer/Footer'
import { education } from '@/config/education'
import type { TimelineItem } from '@/components/Timeline/Timeline'

const educationItems: TimelineItem[] = education.map((e) => ({
  id: e.id,
  date: e.date,
  title: e.school,
  subtitle: e.degree,
  description: e.description,
}))

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline items={educationItems} sectionId="education" />
      <Footer />
    </>
  )
}
