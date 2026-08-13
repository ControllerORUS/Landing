import React from 'react'

export default function TrazabilidadDetalle({ data }) {
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
      {/* Dos columnas: Características y Beneficios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2em'
      }}>
        <div>
          <h4 style={{ marginBottom: '.6em', fontWeight: 800 }}>{data.caracteristicasTitulo}</h4>
          <ul>
            {(data.caracteristicas || []).map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '.6em', fontWeight: 800 }}>{data.beneficiosTitulo || 'Beneficios'}</h4>
          <ul>
            {(data.beneficios || []).map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      {/* Footer/Texto final */}
      {data.footer && (
        <div style={{ margin: '1.6em 0', color: '#555', fontStyle: 'italic' }}>{data.footer}</div>
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
