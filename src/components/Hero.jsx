import React, { useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
    tag: 'Agricultura de Precisión',
    title: 'Decisiones agrícolas \nrespaldadas por datos',
    subtitle: 'Monitoreo en tiempo real, trazabilidad operativa y análisis multiespectral, potenciados por Inteligencia Artificial desde una sola plataforma.',
  },
]

export default function Hero() {
  const [current, setCurrent] = React.useState(0)
  const timerRef = useRef(null)

  const go = (idx) => setCurrent((idx + slides.length) % slides.length)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="hero" id="inicio">
      {slides.map((s, i) => (
        <div key={i} className={`hero__slide${i === current ? ' active' : ''}`}>
          <img src={s.image} alt={s.tag} className="hero__bg" loading={i === 0 ? 'eager' : 'lazy'} />
          <div className="hero__overlay" />
        </div>
      ))}

      <div className="hero__content container">
        <span className="hero__tag">{slides[current].tag}</span>
        <h1 className="hero__title">
          {slides[current].title.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
          ))}
        </h1>
        <p className="hero__subtitle">{slides[current].subtitle}</p>
        <div className="hero__actions">
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">ORION</a>
          <a href="https://calendly.com/danielpc76/30min" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Agenda una demo</a>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => { go(i); startTimer(); }}
          />
        ))}
      </div>
    </section>
  )
}
