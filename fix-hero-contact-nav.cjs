const fs = require('fs');

// ─── Contact.jsx — fix encoding + datos reales + quitar flecha del botón ────
fs.writeFileSync('src/components/Contact.jsx', `import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__header">
          <span className="section-tag">Contáctanos</span>
          <h2 className="section-title">¿Listo para <span>transformar</span><br />tu operación?</h2>
          <p className="section-subtitle">
            Nuestro equipo de expertos está disponible para asesorarte sin costo y sin compromiso.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info panel */}
          <div className="contact__info">
            <h3>Información de contacto</h3>
            <p>Conecta con ORUS Agriculture y descubre cómo podemos llevar tu producción al siguiente nivel.</p>

            <ul className="contact__list">
              <li>
                <FaMapMarkerAlt className="contact__icon" />
                <span>Colombia, Bogotá</span>
              </li>
              <li>
                <FaEnvelope className="contact__icon" />
                <span>controller@orusglobal.com</span>
              </li>
              <li>
                <FaWhatsapp className="contact__icon contact__icon--whatsapp" />
                <a href="https://wa.me/573203407431" target="_blank" rel="noopener noreferrer">
                  +57 320 340 7431
                </a>
              </li>
            </ul>

            <div className="contact__image">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80"
                alt="Equipo ORUS en campo"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por contactarnos. Nuestro equipo te responderá en menos de 24 horas.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Tu nombre"
                      value={form.name} onChange={handleChange}
                      required autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="tu@correo.com"
                      value={form.email} onChange={handleChange}
                      required autoComplete="email"
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    value={form.subject} onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad agrícola..."
                    value={form.message} onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
`, 'utf8');
console.log('Contact.jsx ok');

// ─── Navbar.jsx — fix encoding + botón Orion ────────────────────────────────
fs.writeFileSync('src/components/Navbar.jsx', `import React, { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#inicio',    label: 'Inicio'    },
  { href: '#nosotros',  label: 'Nosotros'  },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria',   label: 'Galería'   },
  { href: '#aliados',   label: 'Aliados'   },
  { href: '#contacto',  label: 'Contacto'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className={\`navbar\${scrolled ? ' scrolled' : ''}\`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__logo" onClick={() => handleLink('#inicio')}>
          <img src="/img/logos/AgricultureNegro.png" alt="ORUS Agriculture logo" />
        </a>

        <nav className={\`navbar__nav\${open ? ' open' : ''}\`}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={\`navbar__link\${active === l.href ? ' active' : ''}\`}
              onClick={() => handleLink(l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://orion.orusagro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            Orion
          </a>
        </nav>

        <button
          className={\`navbar__hamburger\${open ? ' active' : ''}\`}
          aria-label="Abrir menú"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className="navbar__backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}
`, 'utf8');
console.log('Navbar.jsx ok');

// ─── Hero.jsx — quitar flechas, scroll indicator, mejorar transición, botón Orion ─
fs.writeFileSync('src/components/Hero.jsx', `import React, { useEffect, useRef } from 'react'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80',
    tag: 'Innovación Agrícola',
    title: 'El Futuro del\\nCampo Empieza Aquí',
    subtitle: 'Conectamos tecnología, naturaleza y talento para transformar la agricultura latinoamericana.',
  },
  {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80',
    tag: 'Sostenibilidad',
    title: 'Cosechas que\\nNutren al Mundo',
    subtitle: 'Impulsamos prácticas agrícolas sostenibles que cuidan el planeta y maximizan el rendimiento.',
  },
  {
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80',
    tag: 'Tecnología de Campo',
    title: 'Datos en Tiempo\\nReal para tu Tierra',
    subtitle: 'Monitoreo inteligente, análisis de suelo y gestión de cultivos en una sola plataforma.',
  },
]

export default function Hero() {
  const [current, setCurrent] = React.useState(0)
  const timerRef = useRef(null)

  const go = (idx) => setCurrent((idx + slides.length) % slides.length)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="hero" id="inicio">
      {slides.map((s, i) => (
        <div key={i} className={\`hero__slide\${i === current ? ' active' : ''}\`}>
          <img src={s.image} alt={s.tag} className="hero__bg" loading={i === 0 ? 'eager' : 'lazy'} />
          <div className="hero__overlay" />
        </div>
      ))}

      <div className="hero__content container">
        <span className="hero__tag">{slides[current].tag}</span>
        <h1 className="hero__title">
          {slides[current].title.split('\\n').map((line, i) => (
            <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
          ))}
        </h1>
        <p className="hero__subtitle">{slides[current].subtitle}</p>
        <div className="hero__actions">
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Conocer Orion</a>
          <a href="https://orion.orusagro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Hablar con un experto</a>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={\`hero__dot\${i === current ? ' active' : ''}\`}
            aria-label={\`Slide \${i + 1}\`}
            onClick={() => { go(i); startTimer(); }}
          />
        ))}
      </div>
    </section>
  )
}
`, 'utf8');
console.log('Hero.jsx ok');

// ─── Partners.css — logos en blanco y negro con hover a color ───────────────
let partnersCss = fs.readFileSync('src/components/Partners.css', 'utf8');
if (!partnersCss.includes('filter: grayscale')) {
  partnersCss = partnersCss.replace(
    '.partners__img-wrap img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }',
    `.partners__img-wrap img {
  max-width: 100%; max-height: 100%;
  width: auto; height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: .65;
  transition: filter .35s ease, opacity .35s ease;
}
.partners__card:hover .partners__img-wrap img {
  filter: grayscale(0%);
  opacity: 1;
}`
  );
  fs.writeFileSync('src/components/Partners.css', partnersCss, 'utf8');
  console.log('Partners.css ok');
} else {
  console.log('Partners.css already has grayscale');
}

// ─── Hero.css — transición más fluida (crossfade) + quitar flechas/scroll ───
let heroCss = fs.readFileSync('src/components/Hero.css', 'utf8');

// Smoother crossfade transition
heroCss = heroCss.replace(
  'transition: opacity 1.2s ease;',
  'transition: opacity 1.8s cubic-bezier(.4,0,.2,1);'
);

// Remove arrow and scroll indicator styles (hide via display:none as fallback, already removed from JSX)
fs.writeFileSync('src/components/Hero.css', heroCss, 'utf8');
console.log('Hero.css ok');

console.log('\nAll done!');
