import React from 'react'
import { useTranslation } from 'react-i18next'
import './Partners.css'

const BASE = '/img/empresas/drive-download-20260516T150311Z-3-001/'

/*
 * TODO: Identificar a qué empresa corresponde cada image-N.png y
 * agregar su `name` real aquí. Mientras no se conozca, se deja sin
 * `name` para mostrar solo el logo (evita repetir un texto genérico).
 */
const partners = [
  { name: 'Universidad de los Andes',     img: `${BASE}Uniandes.png` },
  { name: 'Universidad de St. Gallen',    img: `${BASE}University_of_St._Gallen_logo_english.png` },
  { name: 'Cámara de Comercio de Bogotá', img: `${BASE}Cámara_de_Comercio_de_Bogotá_logo.svg.png` },
  { name: 'Platzi', img: `${BASE}image-6.png` },
  { name: 'Start Global', img: `${BASE}image-7.png` },
  { name: 'ITQ', img: `${BASE}image-8.png` },
  { name: 'Universidad Nacional De Colombia', img: `${BASE}image-9.png` },
  { name: 'AWS', img: `${BASE}image-10.png` },
  { name: 'Domo', img: `${BASE}image-11.png` },
]

export default function Partners() {
  const { t } = useTranslation()

  return (
    <section className="partners" id="aliados">
      <div className="container">
        <div className="partners__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('partners.tag')}</span>
          <h2 className="section-title">
            {t('partners.title1')} <span>{t('partners.titleSpan')}</span> {t('partners.title2')}
          </h2>
          <p className="section-subtitle">{t('partners.subtitle')}</p>
        </div>
      </div>

      {/* Continuous CSS marquee — constant linear speed, no snapping between slides */}
      <div className="partners__marquee">
        <div className="partners__track">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="partners__card" aria-hidden={i >= partners.length}>
              <div className="partners__img-wrap">
                <img src={p.img} alt={p.name || t('partners.logoAlt')} loading="lazy" />
              </div>
              {p.name && <span className="partners__name">{p.name}</span>}
            </div>
          ))}
        </div>
        <div className="partners__fade partners__fade--left" />
        <div className="partners__fade partners__fade--right" />
      </div>

      <div className="container">
        <p className="partners__cta-text">
          {t('partners.ctaText')}{' '}
          <a href="#contacto" className="partners__cta-link">{t('partners.ctaLink')}</a>
        </p>
      </div>
    </section>
  )
}
