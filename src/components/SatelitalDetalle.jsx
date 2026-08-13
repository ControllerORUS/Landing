import React from 'react'

export default function SatelitalDetalle({ data }) {
  // Todos los índices van en grilla 2xN
  const indices = data.indices || [];

  return (
    <div>
      {/* Texto descriptivo */}
      <p style={{ marginBottom: 18, whiteSpace: 'pre-line' }}>{data.parrafo}</p>
      {/* Precio */}
      {data.precio && (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', marginBottom: '1.6em'}}>
          <span style={{ background:'#111', color:'#fff', fontWeight:900, fontSize:'1.14em', minWidth:'92px', padding:'0.18em 1.05em', borderRadius: '17px', textAlign:'center', letterSpacing: '.02em', boxShadow: '0 2px 8px #0001', display:'inline-block' }}>
            {[...data.precio.split(' ')].filter(p => /^[\d,.]+$|^USD$/i.test(p)).join(' ')}
          </span>
          {[...data.precio.split(' ')].filter(p => !/^([\d,.]+|USD)$/i.test(p)).join(' ') && (
            <span style={{marginLeft:'0.6em', color:'#222', fontWeight:600, fontSize:'.99em'}}>
              {[...data.precio.split(' ')].filter(p => !/^([\d,.]+|USD)$/i.test(p)).join(' ')}
            </span>
          )}
        </div>
      )}
      {/* Grilla de índices multiespectrales */}
      {indices.length > 0 && (
        <>
          <h4 style={{marginBottom: '.95em', fontWeight:800}}>{data.indicesTitulo || 'Índices Multiespectrales'}</h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '2em'
          }}>
            {indices.map((indice, idx) => (
              <div key={idx} style={{
                padding:'1em 1em',
                border:'1px solid #afb5aeff',
                background:'none',
                borderRadius:'10px',
                boxShadow:'none'
              }}>
                <div style={{
                  display:'inline-block',
                  background:'var(--accent, #22c55e)', color:'#fff', fontWeight:900, fontSize:'1.04em',
                  borderRadius:'7px', padding:'0.13em 1.1em', marginBottom:'0.38em', letterSpacing:'.01em',
                  textAlign:'center'
                }}>{indice.nombre}</div>
                <div style={{fontWeight:400, fontSize:'.97em', color:'#222', marginTop:'0.48em'}}>{indice.descripcion}</div>
              </div>
            ))}
          </div>
        </>
      )}
      {/* Caracteristicas y Beneficios dos columnas */}
      {(data.caracteristicas && data.caracteristicas.length > 0 || data.beneficios && data.beneficios.length > 0) && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: data.caracteristicas && data.caracteristicas.length > 0 && data.beneficios && data.beneficios.length > 0 ? '1fr 1fr' : '1fr',
          gap: '2rem',
          marginBottom: '2em',
        }}>
          {data.caracteristicas && data.caracteristicas.length > 0 && (
            <div>
              <h4 style={{marginBottom:'.6em', fontWeight:800}}>{data.caracteristicasTitulo || 'Características'}</h4>
              <ul>
                {data.caracteristicas.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          )}
          {data.beneficios && data.beneficios.length > 0 && (
            <div>
              <h4 style={{marginBottom:'.6em', fontWeight:800}}>{data.beneficiosTitulo || 'Beneficios'}</h4>
              <ul>
                {data.beneficios.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
      {/* Footer/Texto final */}
      {data.evolucion && (
        <div style={{ margin: '1.6em 0', color: '#555', fontStyle: 'italic' }}>{data.evolucion}</div>
      )}
      {/* CTA */}
      {data.cta && (
        <div style={{
          textAlign: 'center',
          fontWeight: 800,
          fontSize: '1.04em',
          margin: '2em 0 0.5em 0'
        }}>{data.cta}</div>
      )}
    </div>
  )
}
