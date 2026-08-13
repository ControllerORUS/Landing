import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Services.css'
import Modal from './Modal'
import TrazabilidadDetalle from './TrazabilidadDetalle'
import SatelitalDetalle from './SatelitalDetalle'
import { FaMicrochip, FaClipboardList, FaSatelliteDish } from 'react-icons/fa'

/* Service icons and image paths stay in component; text comes from i18n */
const servicesMeta = [
  {
    icon: <FaMicrochip />,
    color: '#22C55E',
    img: '/img/Recursos/sensor1.png',
  },
  {
    icon: <FaClipboardList />,
    color: '#22C55E',
    img: '/img/Recursos/Trazabilidad1.png',
  },
  {
    icon: <FaSatelliteDish />,
    color: '#22C55E',
    img: '/img/Recursos/Satelite1.webp',
  },
]

export default function Services() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(null)
  const items = t('services.items', { returnObjects: true })

  // Adaptación para details estructurado
  const services = items.map((item, i) => ({ ...servicesMeta[i], ...item }))

  const renderDetails = details => {
    // 1. Intro
    const parrafo = details.parrafo;
    // 2. Modelos
    const modelos = details.modelos || [];
    const modelosTitulo = details.modelosTitulo;
    // 3. Variables
    const variablesAmbientales = details.variablesAmbientales || [];
    const variablesSuelo = details.variablesSuelo || [];
    // 4. Características (bullets)
    const caracteristicas = details.caracteristicas || [];
    // 5. Configuraciones intermedias: párrafo
    const configuracionesIntermedias = details.configuracionesIntermedias;
    // 6. Mensaje final call-to-action (catálogo)
    const catalogoCta = details.catalogoCta;
    // Para Trazabilidad y otros
    const capacidadesTitulo = details.capacidadesTitulo;
    const capacidades = details.capacidades || [];
    const beneficiosTitulo = details.beneficiosTitulo;
    const beneficios = details.beneficios || [];
    const evolucion = details.evolucion;
    const cta = details.cta;

    return (
      <div>
        {/* 1. Párrafo principal */}
        <p style={{marginBottom: 16, whiteSpace:'pre-line'}}>{parrafo}</p>

        {/* 2. Modelos más populares (dos columnas: si existen) */}
        {modelos && modelos.length > 0 && (
          <>
            <h4 style={{marginTop: '1.5em', marginBottom: '1em', fontWeight:800}}>{modelosTitulo || 'Modelos más populares:'}</h4>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2em'}}>
              {modelos.map((modelo, idx) => (
                <div className="services__details-model" key={idx}>
                  <div style={{marginBottom:8, fontWeight:700, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span>
                      <span style={{color:'#222', fontWeight:700, marginRight:'.28em'}}>ORUS</span>
                      <span className="model-tag model-tag--black">{modelo.nombre}</span>
                    </span>
                    <span style={{color:'#111', fontWeight:800, marginLeft:'0.9em', fontSize:'.99em'}}>{modelo.precio}</span>
                  </div>
                  <div style={{fontSize:'.91em', fontWeight:400, marginTop:'0.75em', whiteSpace:'pre-line', lineHeight:'1.7'}}>{modelo.descripcion}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 3. Variables Ambientales (boxes) */}
        {variablesAmbientales && variablesAmbientales.length > 0 && <>
          <h4 className="services__details-label" style={{marginTop: '1.5em'}}>Variables Ambientales</h4>
          <div className="services__details-list">
            {variablesAmbientales.map((v, idx) => (
              <div className="services__details-box" key={idx}>{v}</div>
            ))}
          </div>
        </>}

        {/* 4. Variables de Suelo (boxes) */}
        {variablesSuelo && variablesSuelo.length > 0 && <>
          <h4 className="services__details-label" style={{marginTop: '1.5em'}}>Variables de Suelo</h4>
          <div className="services__details-list suelo">
            {variablesSuelo.map((v, idx) => (
              <div className="services__details-box" key={idx}>{v}</div>
            ))}
          </div>
        </>}

        {/* 5. Características */}
        {/* Características/capacidades/índices y beneficios en dos columnas limpias solo si hay ambas secciones, si no solo una columna */}
        {(caracteristicas && caracteristicas.length > 0) || (beneficios && beneficios.length > 0) || (details.capacidades && details.capacidades.length > 0) || (details.indices && details.indices.length > 0) ? (
          <div style={{
            display: (beneficios && beneficios.length > 0 && ((caracteristicas && caracteristicas.length > 0) || (details.capacidades && details.capacidades.length > 0) || (details.indices && details.indices.length > 0))) ? 'grid' : 'block',
            gridTemplateColumns: (beneficios && beneficios.length > 0 && ((caracteristicas && caracteristicas.length > 0) || (details.capacidades && details.capacidades.length > 0) || (details.indices && details.indices.length > 0))) ? '1fr 1fr' : '1fr',
            gap: '2.2rem',
            marginTop: '2em',
            marginBottom: '1.6em'
          }}>
            {/* Columna izquierda: Características, Capacidades o Índices */}
            {(caracteristicas && caracteristicas.length > 0) || (details.capacidades && details.capacidades.length > 0) || (details.indices && details.indices.length > 0) ? (
              <div>
                {caracteristicas && caracteristicas.length > 0 && <>
                  <h4 className="services__details-label-carac" style={{marginBottom:'.65em'}}>Características</h4>
                  <ul style={{margin: 0, paddingLeft: '1.3em'}}>
                    {caracteristicas.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </>}
                {details.capacidades && details.capacidades.length > 0 && <>
                  <h4 className="services__details-label-carac" style={{marginBottom:'.65em'}}>{details.capacidadesTitulo || 'Capacidades principales:'}</h4>
                  <ul style={{margin: 0, paddingLeft: '1.3em'}}>
                    {details.capacidades.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </>}
                {details.indices && details.indices.length > 0 && <>
                  <h4 className="services__details-label-carac" style={{marginBottom:'.65em'}}>{details.indicesTitulo || 'Índices'}</h4>
                  <ul style={{margin: 0, paddingLeft: '1.3em'}}>
                    {details.indices.map((indice, idx) => (
                      <li key={idx} style={{marginBottom:'0.5em'}}>
                        <strong>{indice.nombre}:</strong>&nbsp;<span style={{fontWeight:400}}>{indice.descripcion}</span>
                      </li>
                    ))}
                  </ul>
                </>}
              </div>
            ) : null}
            {/* Columna derecha: Beneficios */}
            {(beneficios && beneficios.length > 0) && (
              <div>
                <h4 style={{marginBottom:'.65em', fontWeight:800}}>{beneficiosTitulo || 'Beneficios'}</h4>
                <ul style={{margin: 0, paddingLeft: '1.3em'}}>
                  {beneficios.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
          </div>
        ) : null}

        {/* 6. Configuraciones intermedias */}
        {configuracionesIntermedias &&
          <div style={{margin:'1.7em 0 1em 0'}}>
            <h4 style={{fontWeight:800, marginBottom:'0.6em'}}>Configuraciones intermedias</h4>
            <p style={{margin:0}}>{configuracionesIntermedias}</p>
          </div>
        }

        {/* Nuevas secciones para Trazabilidad y similares */}
        {capacidades && capacidades.length > 0 && <>
          {capacidadesTitulo && <h4 style={{margin:'1.5em 0 .9em 0', fontWeight:800}}>{capacidadesTitulo}</h4>}
          <ul style={{margin: 0, paddingLeft: '1.3em', marginBottom:'1.5em'}}>
            {capacidades.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </>}
        {beneficios && beneficios.length > 0 && <>
          {beneficiosTitulo && <h4 style={{margin:'1.5em 0 .9em 0', fontWeight:800}}>{beneficiosTitulo}</h4>}
          <ul style={{margin: 0, paddingLeft: '1.3em', marginBottom:'1.5em'}}>
            {beneficios.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </>}
        {evolucion && <p style={{marginTop:'.7em', color:'#444', fontStyle:'italic'}}>{evolucion}</p>}
        { cta && <p style={{textAlign:'center', fontWeight:800, fontSize:'1.03rem', margin:'2em 0 1em 0', letterSpacing:'.01em'}}>{cta}</p>}

        {/* 7. CTA bold centrado */}
        {catalogoCta &&
          <p style={{
            textAlign:'center',
            fontWeight:800,
            fontSize: '1.05rem',
            margin: '2em 0 1em 0',
            letterSpacing: '.01em',
          }}>{catalogoCta}</p>
        }
      </div>
    );
  };

  return (
    <section className="services" id="servicios">
      <div className="services__bg-shape" />
      <div className="container">
        <div className="services__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('services.tag')}</span>
          <h2 className="section-title">
            {t('services.title1')} <span>{t('services.titleSpan')}</span><br />
            {t('services.title2')}
          </h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="services__card"
              style={{ '--accent': s.color }}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              data-aos-duration="800"
            >
              <div className="services__card-img-wrap">
                <img
                  src={s.img}
                  alt={s.title}
                  className="services__card-img"
                  loading="lazy"
                />
              </div>
              <div className="services__card-body">
                <div className="services__card-icon">{s.icon}</div>
                <span className="services__card-tag">{s.tag}</span>
                <h3 className="services__card-title">{s.title}</h3>
                {/* Precio en la ficha (si existe) */}
                  {s.title === 'Sensores Inteligentes' ? (
                    <div style={{ display:'flex', justifyContent:'start', alignItems:'center', margin:'0.8em 0em 1.3em 5em' }}>
                    
                      <span style={{color:'#222', fontWeight:600, fontSize:'.99em', marginRight:'0.3em'}}>
                        desde
                      </span>
                      <span style={{ background:'#111', color:'#fff', fontWeight:900, fontSize:'0.87em', minWidth:'83px', padding:'0.14em 1em', borderRadius: '13px', textAlign:'center', letterSpacing: '.02em', boxShadow: '0 2px 8px #0001', display:'inline-block', marginRight:'0.5em' }}>
                        700 USD
                      </span>
                      
                    </div>
                  ) : (
                    s.details && typeof s.details === 'object' && (s.details.price || s.details.precio) && (
                      <div style={{ display:'flex', justifyContent:'start', alignItems:'center', margin:'0.8em 0 1.3em 3.5em'}}>
                        <span style={{ background:'#111', color:'#fff', fontWeight:900, fontSize:'0.87em', minWidth:'83px', padding:'0.14em 1em', borderRadius: '13px', textAlign:'center', letterSpacing: '.02em', boxShadow: '0 2px 8px #0001', display:'inline-block', marginRight:'0.5em' }}>
                          {[...(s.details.price || s.details.precio).split(' ')].filter(p => /^[\d,.]+$|^USD$/i.test(p)).join(' ')}
                        </span>
                        {[...(s.details.price || s.details.precio).split(' ')].filter(p => !/^([\d,.]+|USD)$/i.test(p)).join(' ') && (
                          <span style={{color:'#222', fontWeight:600, fontSize:'.99em'}}>
                            {[...(s.details.price || s.details.precio).split(' ')].filter(p => !/^([\d,.]+|USD)$/i.test(p)).join(' ')}
                          </span>
                        )}
                      </div>
                    )
                  )}
                <p className="services__card-text">{s.text}</p>
                <button
                  className="services__card-btn"
                  onClick={() => setSelected(s)}
                  aria-label={`${t('services.detailsBtn')}: ${s.title}`}
                >
                  {t('services.detailsBtn')}
                </button>
              </div>
              <div className="services__card-line" />
            </div>
          ))}
        </div>
      </div>

      {/* Service detail modal */}
      {selected && (
        <Modal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          ariaLabel={`${t('services.detailsBtn')}: ${selected.title}`}
          closeLabel={t('services.modalClose')}
        >
          <img
            src={selected.img}
            alt={selected.title}
            className="modal-img"
          />
          <span className="modal-tag">{selected.tag}</span>
          {/* Renderiza componente especializado si aplica */}
          {selected.details && typeof selected.details === 'object' && (
            selected.title === 'Trazabilidad Operativa' ? <TrazabilidadDetalle data={selected.details} />
              : selected.title === 'Análisis Satelital' ? <SatelitalDetalle data={selected.details} />
              : renderDetails(selected.details)
          )}
        </Modal>
      )}
    </section>
  )
}

