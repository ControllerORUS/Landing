import React from 'react'
import './About.css'
import CountUp from './CountUp'

const bigStats = [
  { value: 120,  suffix: '+',  label: 'Hectáreas activas' },
  { value: 15,   suffix: '+',  label: 'Productores aliados' },
  { value: 98,   suffix: '%',  label: 'Satisfacción' },
]

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        {/* Top grid */}
        <div className="about__grid">
          {/* Text side */}
          <div className="about__text" data-aos="fade-right" data-aos-duration="1000">
            <span className="section-tag">¿Cómo lo hacemos?</span>
            <h2 className="section-title">
              Una plataforma.<br /> <span>Tres fuentes de datos.</span><br />Un agente inteligente.
            </h2>
            <p className="section-subtitle">
              Desde el suelo hasta el satélite, ORUS conecta las principales fuentes de información agrícola para ofrecer una visión integral de lo que ocurre en cada hectárea.</p>
            <p className="about__body">
              Nuestro agente inteligente interpreta estos datos y los convierte en acciones concretas, facilitando el monitoreo, la comunicación y la toma de decisiones en tiempo real.
            </p>
          </div>

          {/* Image collage */}
          <div className="about__collage" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
            <div className="about__img-main">
              <img
                src="/img/Recursos/orionMockup3.png"
                alt="Campo agrícola ORUS"
              />
            </div>
          </div>
        </div>

        {/* Big Stats */}
        <div className="about__bigstats">
          {bigStats.map((s, i) => (
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
              <p className="about__bigstat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
