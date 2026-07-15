import React from 'react'
import './Orion.css'
import { FaMicrochip, FaBrain } from 'react-icons/fa'
import { FaSatellite } from 'react-icons/fa6'

const features = [
  {
    icon: <FaMicrochip />,
    title: 'Sensores IoT en Campo',
    text: 'Datos de suelo, humedad y microclima capturados en tiempo real desde dispositivos desplegados directamente en tus parcelas.',
  },
  {
    icon: <FaSatellite />,
    title: 'Imágenes Satelitales',
    text: 'Monitoreo multispectral desde el espacio para detectar estrés hídrico, vigor vegetal y variabilidad espacial con actualización semanal.',
  },
  {
    icon: <FaBrain />,
    title: 'Agente Inteligente IA',
    text: 'Un agente conversacional que interpreta todos los datos y te entrega respuestas claras, alertas proactivas y recomendaciones accionables.',
  },
]

export default function Orion() {
  return (
    <section className="orion" id="orion">
      {/* Background layers */}
      <div className="orion__bg-glow" />
      <div className="orion__grid-overlay" />

      <div className="container">

        {/* ── Header ── */}
        <div className="orion__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag orion__tag">Conoce la plataforma</span>
          <h2 className="orion__title">
            Todo tu campo,<br />
            <span className="orion__title-accent">en una sola pantalla.</span>
          </h2>
          <p className="orion__subtitle">
            ORION es la plataforma de ORUS que unifica sensores IoT, análisis satelital e inteligencia artificial
            para darte el control total de cada hectárea, desde cualquier dispositivo.
          </p>
        </div>

        {/* ── Main showcase: mockup + features ── */}
        <div className="orion__showcase">

          {/* Feature list */}
          <div className="orion__features" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
            {features.map((f, i) => (
              <div key={i} className="orion__feature" data-aos="fade-right" data-aos-delay={i * 120 + 200}>
                <div className="orion__feature-icon">{f.icon}</div>
                <div>
                  <h3 className="orion__feature-title">{f.title}</h3>
                  <p className="orion__feature-text">{f.text}</p>
                </div>
              </div>
            ))}
            <a
              href="https://orion.orusagro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="orion__cta"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img src="/img/logos/loguito.png" alt="" className="orion__cta-logo" />
              Explorar ORION
            </a>
          </div>

          {/* Hero mockup */}
          <div className="orion__mockup-wrap" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="200">
            <div className="orion__mockup-glow" />
            <img
              src="/img/Recursos/orionMockup.png"
              alt="Plataforma ORION"
              className="orion__mockup"
            />
          </div>
        </div>

        {/* ── Screenshot gallery ── */}
        <div className="orion__gallery">
          <p className="orion__gallery-label" data-aos="fade-up">Interfaz diseñada para el campo</p>
          <div className="orion__gallery-grid">
            <div
              className="orion__gallery-card orion__gallery-card--large"
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="0"
            >
              <img src="/img/Recursos/orionMockup2.png" alt="Dashboard ORION" />
              <div className="orion__gallery-card-label">
                <span>Dashboard Principal</span>
              </div>
            </div>
            <div
              className="orion__gallery-card"
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <img src="/img/Recursos/orionMockup3.png" alt="Análisis satelital" />
              <div className="orion__gallery-card-label">
                <span>Vista de Análisis</span>
              </div>
            </div>
            <div
              className="orion__gallery-card orion__gallery-card--photo"
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <div className="orion__gallery-placeholder">
                <img src="/img/logos/loguito.png" alt="" className="orion__placeholder-logo" />
                <span>Próximamente</span>
              </div>
              <div className="orion__gallery-card-label">
                <span>App Móvil</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
