import React, { useState } from 'react'
import './Gallery.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=80', alt: 'Campo al atardecer', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', alt: 'Tomates frescos' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Lavanda en flor' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', alt: 'Tractor en operación' },
  { src: 'https://images.unsplash.com/photo-1532246420286-127bcd803104?w=900&q=80', alt: 'Vista aérea de cultivos', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80', alt: 'Invernadero moderno' },
  { src: 'https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?w=600&q=80', alt: 'Drone de campo' },
  { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80', alt: 'Cosecha de granos' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="gallery__header">
          <span className="section-tag">Galería</span>
          <h2 className="section-title">Nuestro campo, <span>nuestra pasión</span></h2>
          <p className="section-subtitle">
            Imágenes de los proyectos, cultivos y operaciones que hacen posible el trabajo de ORUS Agriculture.
          </p>
        </div>

        <div className="gallery__grid">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`gallery__item${p.span === 'wide' ? ' gallery__item--wide' : ''}`}
              onClick={() => setLightbox(p)}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-zoom">⤢</span>
                <span className="gallery__item-caption">{p.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery__lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery__lb-close" aria-label="Cerrar">✕</button>
          <img src={lightbox.src.replace('w=600', 'w=1200').replace('w=900', 'w=1400')} alt={lightbox.alt} />
          <p className="gallery__lb-caption">{lightbox.alt}</p>
        </div>
      )}
    </section>
  )
}
