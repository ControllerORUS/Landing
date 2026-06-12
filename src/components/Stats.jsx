import React from 'react'
import './Stats.css'
import { FaMapMarkerAlt, FaTractor, FaLeaf, FaAward } from 'react-icons/fa'
import CountUp from './CountUp'

const stats = [
  { icon: <FaMapMarkerAlt />, value: 12,    suffix: '+', label: 'Países con presencia activa' },
  { icon: <FaTractor />,      value: 5000,  suffix: '+', label: 'Productores que confían en nosotros' },
  { icon: <FaLeaf />,         value: 45,    suffix: '%', label: 'Reducción promedio en uso de agua' },
  { icon: <FaAward />,        value: 98,    suffix: '%', label: 'Tasa de satisfacción del cliente' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__bg" />
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <div className="stats__icon">{s.icon}</div>
            <div className="stats__value">
              <CountUp to={s.value} />{s.suffix}
            </div>
            <p className="stats__label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
