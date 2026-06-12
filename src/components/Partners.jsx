import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './Partners.css'

/* Partner logos using real images */
const BASE = '/img/empresas/drive-download-20260516T150311Z-3-001/'
const partners = [
  { name: 'Universidad de los Andes',    img: `${BASE}Uniandes.png` },
  { name: 'Universidad de St. Gallen',   img: `${BASE}University_of_St._Gallen_logo_english.png` },
  { name: 'Cámara de Comercio de Bogotá',img: `${BASE}Cámara_de_Comercio_de_Bogotá_logo.svg.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-6.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-7.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-8.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-9.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-10.png` },
  { name: 'Aliado estratégico',          img: `${BASE}image-11.png` },
]

export default function Partners() {
  return (
    <section className="partners" id="aliados">
      <div className="container">
        <div className="partners__header">
          <span className="section-tag">Nuestros aliados</span>
          <h2 className="section-title">Empresas que <span>confían</span> en ORUS</h2>
          <p className="section-subtitle">
            Una red de socios estratégicos que fortalece nuestro ecosistema y amplía el impacto de cada proyecto agrícola.
          </p>
        </div>
      </div>

      {/* Infinite marquee carousel */}
      <div className="partners__carousel-wrap">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          slidesPerView="auto"
          allowTouchMove={true}
          className="partners__swiper"
        >
          {[...partners, ...partners].map((p, i) => (
            <SwiperSlide key={i} className="partners__slide">
              <div className="partners__card">
                <div className="partners__img-wrap">
                  <img src={p.img} alt={p.name} />
                </div>
                <span className="partners__name">{p.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="partners__fade partners__fade--left" />
        <div className="partners__fade partners__fade--right" />
      </div>

      <div className="container">
        <p className="partners__cta-text">
          ¿Tu empresa quiere ser parte del ecosistema ORUS?{' '}
          <a href="#contacto" className="partners__cta-link">Contáctanos →</a>
        </p>
      </div>
    </section>
  )
}
