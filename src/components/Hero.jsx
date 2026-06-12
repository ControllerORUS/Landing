import React, { useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
    tag: 'Innovación Agrícola',
    title: 'El Futuro del\nCampo Empieza Aquí',
    subtitle: 'Conectamos tecnología, naturaleza y talento para transformar la agricultura latinoamericana.',
  },
  {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80',
    tag: 'Sostenibilidad',
    title: 'Cosechas que\nNutren al Mundo',
    subtitle: 'Impulsamos prácticas agrícolas sostenibles que cuidan el planeta y maximizan el rendimiento.',
  },
  {
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80',
    tag: 'Tecnología de Campo',
    title: 'Datos en Tiempo\nReal para tu Tierra',
    subtitle: 'Monitoreo inteligente, análisis de suelo y gestión de cultivos en una sola plataforma.',
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
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conocer Orion</a>
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Hablar con un experto</a>
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
