import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'
import CountUp from './CountUp'

const statsValues = [
  { value: 120, suffix: '+' },
  { value: 15,  suffix: '+' },
  { value: 98,  suffix: '%' },
]

export default function About() {
  const { t } = useTranslation()
  const pillars = t('about.pillars', { returnObjects: true })
  const statsLabels = t('about.stats', { returnObjects: true })

  return (
    <section className="about" id="nosotros">
      <div className="container">

        <div className="about__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">
            {t('about.title1')}<br />
            <span>{t('about.titleSpan')}</span><br />
            {t('about.title2')}
          </h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about__pillars">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="about__pillar"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="800"
            >
              <div className="about__pillar-num">{p.num}</div>
              <div className="about__pillar-divider" />
              <h3 className="about__pillar-title">{p.title}</h3>
              <p className="about__pillar-subtitle">{p.subtitle}</p>
              <p className="about__pillar-text">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="about__bigstats">
          {statsValues.map((s, i) => (
            <div
              key={i}
              className="about__bigstat"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="800"
            >
              <div className="about__bigstat-value">
                <CountUp to={s.value} />{s.suffix}
              </div>
              <p className="about__bigstat-label">{statsLabels[i]?.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
