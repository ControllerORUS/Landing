import React from 'react'
import './Ferias.css'
import { FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaUsers, FaTractor } from 'react-icons/fa'

const ferias = [
  {
    name: 'AgroExpo 2024',
    location: 'BogotÃ¡, Colombia',
    date: 'Julio 2024',
    type: 'Feria Internacional',
    highlight: 'PresentaciÃ³n oficial',
    description: 'La feria agropecuaria mÃ¡s grande de Colombia. ORUS presentÃ³ su sistema de monitoreo IoT ante mÃ¡s de 300.000 visitantes del sector agropecuario.',
    color: '#22C55E',
    icon: <FaTractor />,
    badge: 'Debut oficial',
  },
  {
    name: 'Start Global 2024',
    location: 'St. Gallen, Suiza',
    date: 'Octubre 2024',
    type: 'Competencia Internacional',
    highlight: 'Finalistas',
    description: 'Competencia mundial de startups organizada por la Universidad de St. Gallen. ORUS fue seleccionada entre las mejores startups de impacto agrÃ­cola a nivel global.',
    color: '#1b3a5c',
    icon: <FaTrophy />,
    badge: 'Top Finalist',
  },
  {
    name: 'Colombia 4.0',
    location: 'BogotÃ¡, Colombia',
    date: 'Agosto 2024',
    type: 'Foro de InnovaciÃ³n Digital',
    highlight: 'Speaker invitado',
    description: 'El evento de transformaciÃ³n digital mÃ¡s importante de Colombia. ORUS fue invitada a exponer cÃ³mo el IoT estÃ¡ redefiniendo la agricultura de precisiÃ³n en LatinoamÃ©rica.',
    color: '#22C55E',
    icon: <FaUsers />,
    badge: 'Speaker',
  },
  {
    name: 'CÃ¡mara de Comercio BogotÃ¡ â€“ Demo Day',
    location: 'BogotÃ¡, Colombia',
    date: 'Septiembre 2024',
    type: 'Demo Day Startups',
    highlight: 'Pitch seleccionado',
    description: 'Evento de la CÃ¡mara de Comercio de BogotÃ¡ para startups del ecosistema local. ORUS demostrÃ³ en vivo el funcionamiento de sus sensores y la plataforma Orion.',
    color: '#c0392b',
    icon: <FaMapMarkerAlt />,
    badge: 'Demo en vivo',
  },
  {
    name: 'Platzi Conf 2024',
    location: 'Ciudad de MÃ©xico / Virtual',
    date: 'Noviembre 2024',
    type: 'Conferencia TecnolÃ³gica',
    highlight: 'Caso de estudio',
    description: 'ORUS fue presentada como caso de estudio en la conferencia anual de Platzi, destacando el uso de tecnologÃ­a para resolver problemas reales del campo latinoamericano.',
    color: '#00d68f',
    icon: <FaUsers />,
    badge: 'Caso de estudio',
  },
  {
    name: 'AWS Activate â€“ Pitch Night',
    location: 'BogotÃ¡, Colombia',
    date: 'Diciembre 2024',
    type: 'Noche de InversiÃ³n',
    highlight: 'Becados AWS',
    description: 'Seleccionados para el programa AWS Activate, ORUS recibiÃ³ crÃ©ditos de infraestructura cloud para escalar la plataforma Orion y sus servicios de analÃ­tica de datos.',
    color: '#ff9900',
    icon: <FaTrophy />,
    badge: 'AWS Activate',
  },
]

export default function Ferias() {
  return (
    <section className="ferias" id="ferias">
      <div className="container">
        <div className="ferias__header">
          <span className="section-tag">Eventos & Ferias</span>
          <h2 className="section-title">ORUS en el <span>mundo</span></h2>
          <p className="section-subtitle">
            Desde competencias internacionales hasta ferias agropecuarias, llevamos nuestra tecnologÃ­a a los escenarios donde se define el futuro del campo.
          </p>
        </div>

        <div className="ferias__grid">
          {ferias.map((feria, i) => (
            <article key={i} className="ferias__card" style={{ '--accent': feria.color }}>
              <div className="ferias__card-top">
                <div className="ferias__icon" style={{ background: feria.color }}>
                  {feria.icon}
                </div>
                <span className="ferias__badge" style={{ background: feria.color }}>
                  {feria.badge}
                </span>
              </div>
              <div className="ferias__body">
                <span className="ferias__type">{feria.type}</span>
                <h3 className="ferias__name">{feria.name}</h3>
                <p className="ferias__desc">{feria.description}</p>
              </div>
              <div className="ferias__footer">
                <div className="ferias__meta">
                  <span><FaMapMarkerAlt /> {feria.location}</span>
                  <span><FaCalendarAlt /> {feria.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

