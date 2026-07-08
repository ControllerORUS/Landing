import React from 'react'
import './About.css'
import { FaLeaf, FaHandshake, FaSeedling, FaGlobeAmericas } from 'react-icons/fa'
import { FaSatellite } from "react-icons/fa6";
import { MdDocumentScanner, MdFormatPaint } from "react-icons/md";
import { BsPhoneFill, BsFilePerson } from "react-icons/bs";

const values = [
  {
    icon: <MdFormatPaint />,
    title: 'Sensores IoT',
    text: 'Datos de suelo y ambiente capturados en tiempo real para una agricultura basada en evidencia.'
  },
  {
    icon: <FaSatellite />,
    title: 'Imágenes Satelitales',
    text: 'Monitorea vigor vegetal, estrés hídrico y variabilidad espacial desde el espacio.'
  },
  {
    icon: <MdDocumentScanner />,
    title: 'Trazabilidad Operativa',
    text: 'Registra labores, aplicaciones e inspecciones para una operación más organizada y transparente.'
  },
  {
    icon: <BsFilePerson />,
    title: 'Agente AI',
    text: 'Transforma datos complejos en respuestas, alertas y recomendaciones accionables.'
  },
]

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        {/* Top grid */}
        <div className="about__grid">
          {/* Text side */}
          <div className="about__text">
            <span className="section-tag">¿Cómo lo hacemos?</span>
            <h2 className="section-title">
              Una plataforma.<br /> <span>Tres fuentes de datos.</span><br />Un agente inteligente.
            </h2>
            <p className="section-subtitle">
              Desde el suelo hasta el satélite, ORUS conecta las principales fuentes de información agrícola para ofrecer una visión integral de lo que ocurre en cada hectárea.</p>
            <p className="about__body">
              Nuestro agente inteligente interpreta estos datos y los convierte en acciones concretas, facilitando el monitoreo, la comunicación y la toma de decisiones en tiempo real.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">+120</span>
                <span className="about__stat-label">Hectáreas activas</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">+15</span>
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
                src="/img/Recursos/orionMockup3.png"
                alt="Campo agrícola ORUS"
              />
            </div>
            <div className="about__badge">
              <FaLeaf className="about__badge-icon" />
              <span>Plataforma ORION</span>
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
