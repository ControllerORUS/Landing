import React from 'react'
import './Services.css'
import { FaMicrochip, FaChartLine, FaTruck, FaWater, FaFlask, FaSatelliteDish } from 'react-icons/fa'

const services = [
  {
    icon: <FaMicrochip />,
    color: '#22C55E',
    title: 'AgriTech IoT',
    text: 'Sensores inteligentes de campo que monitorean humedad, temperatura y nutrientes en tiempo real desde cualquier dispositivo.',
    tag: 'Tecnología'
  },
  {
    icon: <FaChartLine />,
    color: '#22C55E',
    title: 'Analítica Predictiva',
    text: 'Modelos de IA que anticipan plagas, heladas y variaciones climáticas para que tomes decisiones antes de que ocurran.',
    tag: 'Inteligencia'
  },
  {
    icon: <FaTruck />,
    color: '#22C55E',
    title: 'Logística & Cadena Fría',
    text: 'Optimización de rutas, trazabilidad de exportaciones y gestión de inventario para reducir mermas al mínimo.',
    tag: 'Logística'
  },
  {
    icon: <FaWater />,
    color: '#22C55E',
    title: 'Riego Inteligente',
    text: 'Sistemas automatizados de riego por goteo y fertirrigación que reducen hasta un 45 % el consumo de agua.',
    tag: 'Eficiencia'
  },
  {
    icon: <FaFlask />,
    color: '#22C55E',
    title: 'Análisis de Suelo',
    text: 'Laboratorios certificados y diagnóstico digital para conocer la composición exacta de tu terreno y potenciar su rendimiento.',
    tag: 'Ciencia'
  },
  {
    icon: <FaSatelliteDish />,
    color: '#22C55E',
    title: 'Teledetección Satelital',
    text: 'Imágenes satelitales procesadas con IA para detectar estrés hídrico, mapa de biomasa y variabilidad de cultivos.',
    tag: 'Satélite'
  },
]

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__bg-shape" />
      <div className="container">
        <div className="services__header">
          <span className="section-tag">Lo que hacemos</span>
          <h2 className="section-title">Soluciones que <span>transforman</span><br />el campo</h2>
          <p className="section-subtitle">
            Desde el sensor hasta el mercado, ORUS Agriculture cubre cada eslabón de la cadena agrícola con tecnología de vanguardia.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="services__card" style={{ '--accent': s.color }}>
              <div className="services__card-icon">
                {s.icon}
              </div>
              <span className="services__card-tag">{s.tag}</span>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-text">{s.text}</p>
              <div className="services__card-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

