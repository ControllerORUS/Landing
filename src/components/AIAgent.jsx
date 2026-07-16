import React from 'react'
import './AIAgent.css'
import { FaBell, FaExclamationTriangle, FaChartBar, FaRobot, FaBrain } from 'react-icons/fa'
import { MdAutoMode } from 'react-icons/md'

const benefits = [
  {
    icon: <FaBell />,
    title: 'Notificaciones inteligentes',
    text: 'Recibe alertas personalizadas cuando los datos de tus cultivos superan umbrales críticos, antes de que el problema escale.',
  },
  {
    icon: <FaExclamationTriangle />,
    title: 'Alertas oportunas',
    text: 'El agente detecta anomalías en tiempo real y te avisa por el canal que prefieras: app, correo o WhatsApp.',
  },
  {
    icon: <FaChartBar />,
    title: 'Recomendaciones basadas en datos',
    text: 'Obtén sugerencias concretas de riego, fertilización o intervención agronómica respaldadas por el historial de tu campo.',
  },
  {
    icon: <MdAutoMode />,
    title: 'Monitoreo automatizado',
    text: 'Automatiza la vigilancia de tus cultivos 24/7 sin necesidad de revisar manualmente cada dato o reporte.',
  },
  {
    icon: <FaBrain />,
    title: 'Decisiones más inteligentes',
    text: 'Integra información de sensores, satélites y operaciones para tomar decisiones con mayor contexto y menor incertidumbre.',
  },
]

export default function AIAgent() {
  return (
    <section className="ai-agent" id="ia">
      <div className="ai-agent__bg" />
      <div className="container">

        <div className="ai-agent__layout">

          {/* Text column */}
          <div className="ai-agent__text" data-aos="fade-right" data-aos-duration="1000">
            <span className="section-tag ai-agent__tag">Inteligencia Artificial</span>
            <h2 className="ai-agent__title">
              Tu agente agrícola<br />
              <span>siempre activo.</span>
            </h2>
            <p className="ai-agent__desc">
              El agente de IA de ORUS no solo analiza datos: actúa. Aprende de tus patrones, anticipa problemas y te entrega la información correcta en el momento exacto para que nunca pierdas el control de tu operación.
            </p>
            <a
              href="https://calendly.com/danielpc76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ai-agent__cta"
            >
              Agenda una demo
            </a>
          </div>

          {/* Benefits grid */}
          <div className="ai-agent__benefits">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="ai-agent__benefit"
                data-aos="fade-left"
                data-aos-delay={i * 100}
                data-aos-duration="800"
              >
                <div className="ai-agent__benefit-icon">{b.icon}</div>
                <div>
                  <h3 className="ai-agent__benefit-title">{b.title}</h3>
                  <p className="ai-agent__benefit-text">{b.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
