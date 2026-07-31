import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const slideImages = [
  'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
]

export default function Hero() {
  const { t } = useTranslation()
  const slides = slideImages.map((image, i) => ({
    image,
    tag: t('hero.tag'),
    title: t('hero.title'),
    subtitle: t('hero.subtitle'),
  }))
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
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('hero.cta1')}</a>
          <a href="https://calendly.com/danielpc76/30min" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">{t('hero.cta2')}</a>
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
