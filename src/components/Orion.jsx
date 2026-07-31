import React from 'react'
import { useTranslation } from 'react-i18next'
import './Orion.css'

export default function Orion() {
  const { t } = useTranslation()
  const bullets = t('orion.bullets', { returnObjects: true })

  return (
    <section className="orion" id="orion">
      <div className="orion__bg-glow" />
      <div className="orion__grid-overlay" />

      <div className="container">
        <div className="orion__layout">

          {/* ── Image column ── */}
          <div className="orion__img-col" data-aos="fade-right" data-aos-duration="1000">
            <div className="orion__img-wrap">
              <img
                src="/img/Recursos/orionMockup3.png"
                alt="Vista de análisis ORION"
                className="orion__main-img"
              />
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="orion__text-col" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
            <span className="section-tag orion__tag">{t('orion.tag')}</span>
            <h2 className="orion__title">
              {t('orion.title1')}<br />
              <span className="orion__title-accent">{t('orion.titleAccent')}</span>
            </h2>
            <p className="orion__desc">{t('orion.desc')}</p>

            <ul className="orion__bullets">
              {bullets.map((b, i) => (
                <li key={i} className="orion__bullet" data-aos="fade-left" data-aos-delay={i * 80 + 300}>
                  <span className="orion__bullet-dot" />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="https://orion.orusagro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orion__cta"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img src="/img/logos/loguito.png" alt="" className="orion__cta-logo" />
              {t('orion.cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

