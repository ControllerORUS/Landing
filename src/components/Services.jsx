import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Services.css'
import Modal from './Modal'
import { FaMicrochip, FaClipboardList, FaSatelliteDish } from 'react-icons/fa'

/* Service icons and image paths stay in component; text comes from i18n */
const servicesMeta = [
  {
    icon: <FaMicrochip />,
    color: '#22C55E',
    // TODO: replace with real image → /assets/servicios/iot.jpg
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    icon: <FaClipboardList />,
    color: '#22C55E',
    // TODO: replace with real image → /assets/servicios/trazabilidad.jpg
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    icon: <FaSatelliteDish />,
    color: '#22C55E',
    // TODO: replace with real image → /assets/servicios/satelite.jpg
    img: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=600&q=80',
  },
]

export default function Services() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const items = t('services.items', { returnObjects: true })

  const services = items.map((item, i) => ({ ...servicesMeta[i], ...item }))

  return (
    <section className="services" id="servicios">
      <div className="services__bg-shape" />
      <div className="container">
        <div className="services__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('services.tag')}</span>
          <h2 className="section-title">
            {t('services.title1')} <span>{t('services.titleSpan')}</span><br />
            {t('services.title2')}
          </h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="services__card"
              style={{ '--accent': s.color }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="800"
            >
              <div className="services__card-img-wrap">
                <img
                  src={s.img}
                  alt={s.title}
                  className="services__card-img"
                  loading="lazy"
                />
              </div>
              <div className="services__card-body">
                <div className="services__card-icon">{s.icon}</div>
                <span className="services__card-tag">{s.tag}</span>
                <h3 className="services__card-title">{s.title}</h3>
                <p className="services__card-text">{s.text}</p>
                <button
                  className="services__card-btn"
                  onClick={() => setSelected(s)}
                  aria-label={`${t('services.detailsBtn')}: ${s.title}`}
                >
                  {t('services.detailsBtn')}
                </button>
              </div>
              <div className="services__card-line" />
            </div>
          ))}
        </div>
      </div>

      {/* Service detail modal */}
      {selected && (
        <Modal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          ariaLabel={`${t('services.detailsBtn')}: ${selected.title}`}
          closeLabel={t('services.modalClose')}
        >
          <img
            src={selected.img}
            alt={selected.title}
            className="modal-img"
          />
          <span className="modal-tag">{selected.tag}</span>
          <p>{selected.details}</p>
        </Modal>
      )}
    </section>
  )
}

