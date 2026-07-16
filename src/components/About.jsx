import React from 'react'
import './About.css'
import CountUp from './CountUp'

const pillars = [
  {
    num: '1',
    title: 'Plataforma',
    subtitle: 'ORION — Central de datos',
    text: 'Una sola interfaz que centraliza toda la información de tu operación agrícola en tiempo real, accesible desde cualquier dispositivo.',
  },
  {
    num: '3',
    title: 'Fuentes de Datos',
    subtitle: 'IoT · Satélite · Operativa',
    text: 'Sensores en campo, imágenes satelitales multiespectrales y registros operativos convergen para darte una visión integral de cada hectárea.',
  },
  {
    num: '1',
    title: 'Agente Inteligente',
    subtitle: 'IA conversacional y proactiva',
    text: 'Interpreta automáticamente todos los datos y los convierte en alertas, recomendaciones y acciones concretas cuando más las necesitas.',
  },
]

const stats = [
  { value: 120, suffix: '+', label: 'Hectáreas activas' },
  { value: 15,  suffix: '+', label: 'Productores aliados' },
  { value: 98,  suffix: '%', label: 'Satisfacción' },
]

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">

        <div className="about__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">¿Cómo lo hacemos?</span>
          <h2 className="section-title">
            Una plataforma. <span>Tres fuentes de datos.</span><br />Un agente inteligente.
          </h2>
          <p className="section-subtitle">
            Desde el suelo hasta el satélite, ORUS conecta las principales fuentes de información agrícola para ofrecer una visión integral de lo que ocurre en cada hectárea.
          </p>
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
          {stats.map((s, i) => (
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
