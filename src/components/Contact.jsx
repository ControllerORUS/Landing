import React, { useState } from 'react'
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
