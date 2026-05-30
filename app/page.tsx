'use client'

import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Timeline from '@/components/Timeline/Timeline'
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import { projects } from '@/config/projects'
import type { TimelineItem } from '@/components/Timeline/Timeline'

const projectItems: TimelineItem[] = projects.map((p) => ({
  id: p.id,
  date: p.date,
  title: p.title,
  subtitle: p.tags.join(' · '),
  description: p.description,
  image: p.image,
  tags: p.tags,
}))

export default function Home() {
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
