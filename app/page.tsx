import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Work from '@/components/Work/Work'
import Skills from '@/components/Skills/Skills'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
