import React from 'react'
import './Reviews.css'
import { useTranslation } from 'react-i18next'
import { FaStar, FaRegStar } from 'react-icons/fa'

/* ── Config: edit reviews here, not inline in JSX ── */
const reviewsData = [
  {
    name: 'Carlos Mendoza',
    role: 'Productor agrícola',
    company: 'Finca La Esperanza',
    photo: null, // TODO: /img/reviews/carlos.jpg
    rating: 5,
    text: 'Con ORUS pudimos reducir el consumo de agua en más del 40% y detectar problemas en nuestros cultivos antes de que se volvieran pérdidas. La plataforma ORION es increíblemente fácil de usar.',
  },
  {
    name: 'Ana Rodríguez',
    role: 'Ingeniera Agrónoma',
    company: 'AgroConsulting SAS',
    photo: null, // TODO: /img/reviews/ana.jpg
    rating: 5,
    text: 'El agente de IA me ahorra horas de análisis cada semana. Las recomendaciones son precisas y los reportes automáticos le dan a mis clientes la confianza que necesitan para invertir en tecnología.',
  },
  {
    name: 'Luis Fernando Torres',
    role: 'Director de Operaciones',
    company: 'Exportadora Verde',
    photo: null, // TODO: /img/reviews/luis.jpg
    rating: 5,
    text: 'La trazabilidad que ofrece ORUS fue clave para que pudiéramos certificar nuestra operación para exportación. El soporte del equipo es excepcional y siempre están disponibles.',
  },
  {
    name: 'María Claudia Vargas',
    role: 'Gerente de Producción',
    company: 'Hacienda Los Álamos',
    photo: null, // TODO: /img/reviews/maria.jpg
    rating: 4,
    text: 'Los sensores IoT y las imágenes satelitales nos dieron una visión que nunca habíamos tenido de nuestros lotes. Detectamos variabilidad de suelos que ahora aprovechamos para fertilización diferenciada.',
  },
]

function Stars({ rating, max = 5 }) {
  return (
    <span className="reviews__stars" aria-label={`${rating} de ${max} estrellas`}>
      {Array.from({ length: max }, (_, i) =>
        i < rating
          ? <FaStar key={i} className="reviews__star reviews__star--filled" />
          : <FaRegStar key={i} className="reviews__star" />
      )}
    </span>
  )
}

export default function Reviews() {
  const { t } = useTranslation()

  return (
    <section className="reviews" id="testimonios">
      <div className="container">
        <div className="reviews__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('reviews.tag')}</span>
          <h2 className="section-title">
            {t('reviews.title1')} <span>{t('reviews.titleSpan')}</span>
          </h2>
          <p className="section-subtitle">{t('reviews.subtitle')}</p>
        </div>

        <div className="reviews__grid">
          {reviewsData.map((r, i) => (
            <div
              key={i}
              className="reviews__card"
              data-aos="fade-up"
              data-aos-delay={i * 90}
              data-aos-duration="800"
            >
              <Stars rating={r.rating} />
              <p className="reviews__text">"{r.text}"</p>
              <div className="reviews__author">
                {r.photo ? (
                  <img src={r.photo} alt={r.name} className="reviews__avatar" />
                ) : (
                  <div className="reviews__avatar reviews__avatar--placeholder">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div className="reviews__author-info">
                  <span className="reviews__author-name">{r.name}</span>
                  <span className="reviews__author-role">
                    {r.role} · {r.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
