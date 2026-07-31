import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import './Gallery.css'
import { FaTractor, FaBriefcase, FaChalkboardTeacher, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

/*
 * Categorías de la galería. Cada una agrupa varias fotos que se navegan
 * dentro del modal. Rutas en TODO: agregar los archivos reales en las
 * carpetas indicadas (mismo nombre, numeradas).
 */
const categoriesMeta = [
  {
    key: 'ferias',
    icon: <FaTractor />,
    // TODO: agregar fotos reales en /img/Galeria/ferias/1.jpg, 2.jpg, 3.jpg...
    photos: ['/img/Galeria/ferias/1.jpg', '/img/Galeria/ferias/2.jpg', '/img/Galeria/ferias/3.jpg'],
  },
  {
    key: 'eventos',
    icon: <FaBriefcase />,
    // TODO: agregar fotos reales en /img/Galeria/eventos/1.jpg, 2.jpg...
    photos: ['/img/Galeria/eventos/1.jpg', '/img/Galeria/eventos/2.jpg'],
  },
  {
    key: 'capacitaciones',
    icon: <FaChalkboardTeacher />,
    // TODO: agregar fotos reales en /img/Galeria/capacitaciones/1.jpg, 2.jpg...
    photos: ['/img/Galeria/capacitaciones/1.jpg', '/img/Galeria/capacitaciones/2.jpg'],
  },
]

function CategoryCover({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="gallery__cover-placeholder" aria-hidden="true">📷</div>
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

function ModalImage({ src, alt }) {
  const { t } = useTranslation()
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="gallery__modal-placeholder">
        <span>📷</span>
        <p>{t('gallery.photoPending')}</p>
      </div>
    )
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} />
}

export default function Gallery() {
  const { t } = useTranslation()
  const categoriesText = t('gallery.categories', { returnObjects: true })
  const categories = categoriesMeta.map((c, i) => ({ ...c, ...categoriesText[i] }))

  const [openCat, setOpenCat] = useState(null) // index into `categories`
  const [photoIndex, setPhotoIndex] = useState(0)

  const openCategory = (i) => { setOpenCat(i); setPhotoIndex(0) }
  const close = useCallback(() => setOpenCat(null), [])
  const next = useCallback(() => {
    setPhotoIndex((i) => (i + 1) % categories[openCat].photos.length)
  }, [openCat, categories])
  const prev = useCallback(() => {
    setPhotoIndex((i) => (i - 1 + categories[openCat].photos.length) % categories[openCat].photos.length)
  }, [openCat, categories])

  useEffect(() => {
    if (openCat === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openCat, close, next, prev])

  const active = openCat !== null ? categories[openCat] : null

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="gallery__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('gallery.tag')}</span>
          <h2 className="section-title">
            {t('gallery.title1')} <span>{t('gallery.titleSpan')}</span>
          </h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </div>

        <div className="gallery__grid">
          {categories.map((c, i) => (
            <button
              key={c.key}
              type="button"
              className="gallery__item"
              onClick={() => openCategory(i)}
              data-aos="zoom-in"
              data-aos-delay={i * 60}
              data-aos-duration="700"
              aria-label={`${t('gallery.openLabel')}: ${c.title}`}
            >
              <CategoryCover src={c.photos[0]} alt={c.title} />
              <div className="gallery__item-overlay">
                <span className="gallery__item-icon">{c.icon}</span>
                <span className="gallery__item-caption">{c.title}</span>
                <span className="gallery__item-count">{c.photos.length} {t('gallery.photosLabel')}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Category modal with photo navigation */}
      {active && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <button className="gallery__lb-close" aria-label={t('gallery.closeLabel')} onClick={close}>✕</button>

          <h3 className="gallery__lb-title">{active.title}</h3>

          <div className="gallery__lb-stage">
            {active.photos.length > 1 && (
              <button className="gallery__lb-nav gallery__lb-nav--prev" aria-label={t('gallery.prevLabel')} onClick={prev}>
                <FaChevronLeft />
              </button>
            )}

            <ModalImage key={`${openCat}-${photoIndex}`} src={active.photos[photoIndex]} alt={`${active.title} ${photoIndex + 1}`} />

            {active.photos.length > 1 && (
              <button className="gallery__lb-nav gallery__lb-nav--next" aria-label={t('gallery.nextLabel')} onClick={next}>
                <FaChevronRight />
              </button>
            )}
          </div>

          <p className="gallery__lb-caption">{photoIndex + 1} / {active.photos.length}</p>
        </div>
      )}
    </section>
  )
}
