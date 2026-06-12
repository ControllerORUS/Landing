import React from 'react'
import './About.css'
import { FaLeaf, FaHandshake, FaSeedling, FaGlobeAmericas } from 'react-icons/fa'

const values = [
  { icon: <FaSeedling />, title: 'Innovación', text: 'Aplicamos tecnología de punta para optimizar cada etapa del proceso agrícola.' },
  { icon: <FaLeaf />,      title: 'Sostenibilidad', text: 'Comprometidos con el cuidado del medio ambiente y la producción responsable.' },
  { icon: <FaHandshake />, title: 'Colaboración', text: 'Trabajamos junto a agricultores, empresas y gobiernos para un mayor impacto.' },
  { icon: <FaGlobeAmericas />, title: 'Alcance Global', text: 'Presencia en múltiples países con soluciones adaptadas a cada territorio.' },
]

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        {/* Top grid */}
        <div className="about__grid">
          {/* Text side */}
          <div className="about__text">
            <span className="section-tag">Quiénes somos</span>
            <h2 className="section-title">
              Impulsamos la <span>agricultura</span><br />del mañana
            </h2>
            <p className="section-subtitle">
              ORUS Agriculture es una empresa líder en innovación agrícola, fundada con la misión de transformar el sector agropecuario a través de la tecnología, el conocimiento y la colaboración estratégica.
            </p>
            <p className="about__body">
              Nacimos de la convicción de que el campo merece las mejores herramientas. Desde el análisis predictivo del clima hasta la trazabilidad completa de la cadena de suministro, ofrecemos soluciones integrales que empoderan a productores, exportadores y distribuidores en toda Latinoamérica.
            </p>
            <p className="about__body">
              Nuestra red de especialistas, investigadores y aliados estratégicos nos permite adaptarnos a los desafíos únicos de cada región, garantizando resultados medibles y un impacto positivo duradero en cada cosecha.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">+12</span>
                <span className="about__stat-label">Países activos</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">+5K</span>
                <span className="about__stat-label">Productores aliados</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">98%</span>
                <span className="about__stat-label">Satisfacción</span>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="about__collage">
            <div className="about__img-main">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                alt="Campo agrícola ORUS"
              />
            </div>
            <div className="about__img-sm about__img-sm--1">
              <img
                src="https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?w=400&q=80"
                alt="Drone agrícola"
              />
            </div>
            <div className="about__img-sm about__img-sm--2">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&q=80"
                alt="Cosecha"
              />
            </div>
            <div className="about__badge">
              <FaLeaf className="about__badge-icon" />
              <span>Agricultura Sostenible</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about__values">
          {values.map((v, i) => (
            <div key={i} className="about__value-card">
              <div className="about__value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
