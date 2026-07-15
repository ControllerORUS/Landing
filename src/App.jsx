import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Orion    from './components/Orion'
import Services from './components/Services'
import Team     from './components/Team'
import Gallery  from './components/Gallery'
import Partners from './components/Partners'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
      delay: 0,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Orion />
        <Services />
        <Team />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
