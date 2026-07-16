import React from 'react'
import './Products.css'
import { FaMicrochip, FaCheck } from 'react-icons/fa'
import { FaSatellite } from 'react-icons/fa6'
import { MdFactCheck } from 'react-icons/md'

const products = [
  {
    icon: <FaMicrochip />,
    name: 'Sensores IoT',
    tag: 'En campo',
    desc: 'Dispositivos inteligentes desplegados directamente en tus parcelas que capturan datos del suelo y el ambiente en tiempo real.',
    features: [
      'Humedad y temperatura del suelo',
      'Conductividad eléctrica y pH',
      'Condiciones climáticas locales',
      'Alertas automáticas por umbrales',
      'Transmisión continua a la plataforma',
    ],
  },
  {
    icon: <FaSatellite />,
    name: 'Satélites',
    tag: 'Teledetección',
    desc: 'Imágenes multiespectrales procesadas con IA para monitorear el estado de tus cultivos desde el espacio con actualización periódica.',
    features: [
      'Índice de vigor vegetal (NDVI)',
      'Detección de estrés hídrico',
      'Mapas de variabilidad espacial',
      'Cobertura de toda la superficie',
      'Historial y comparativa temporal',
    ],
  },
  {
    icon: <MdFactCheck />,
    name: 'Trazabilidad',
    tag: 'Operativa',
    desc: 'Registro digital de todas las actividades de campo: labores, aplicaciones, inspecciones y cosechas en un único sistema auditado.',
    features: [
      'Bitácora de labores y aplicaciones',
      'Gestión de insumos y dosis',
      'Seguimiento por lote y campaña',
      'Exportación a formatos estándar',
      'Cumplimiento normativo y auditable',
    ],
  },
]

export default function Products() {
  return (
    <section className="products" id="productos">
      <div className="container">

        <div className="products__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">Productos de datos</span>
          <h2 className="section-title">Tres fuentes. <span>Una sola visión.</span></h2>
          <p className="section-subtitle">
            Cada producto captura una dimensión crítica de tu operación. Juntos, construyen el panorama completo que necesitas para decidir con confianza.
          </p>
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <div
              key={i}
              className="products__card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="800"
            >
              <div className="products__card-top">
                <div className="products__icon">{p.icon}</div>
                <span className="products__tag">{p.tag}</span>
              </div>
              <h3 className="products__name">{p.name}</h3>
              <p className="products__desc">{p.desc}</p>
              <ul className="products__features">
                {p.features.map((f, j) => (
                  <li key={j} className="products__feature">
                    <FaCheck className="products__check" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
