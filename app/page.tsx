import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import ProjectsCarousel from '@/components/Projects/ProjectsCarousel'
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsCarousel />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
