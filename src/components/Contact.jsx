import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim())                        e.name    = t('contact.validationName')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.validationEmail')
    if (!form.message.trim())                     e.message = t('contact.validationMessage')
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      } else {
        // EmailJS not configured (missing .env): simulate success so the UI is
        // testable locally, but no email is actually sent. Loud warning so this
        // is never mistaken for a working deployment.
        console.warn(
          '[Contact] EmailJS no está configurado (faltan VITE_EMAILJS_* en .env). ' +
          'El mensaje NO se envió a ningún correo real, solo se simuló el éxito en la UI.'
        )
        await new Promise(r => setTimeout(r, 800))
      }
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('contact.tag')}</span>
          <h2 className="section-title">
            {t('contact.title1')} <span>{t('contact.titleSpan')}</span><br />
            {t('contact.title2')}
          </h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact__grid">
          {/* Info panel */}
          <div className="contact__info" data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">
            <h3>{t('contact.infoTitle')}</h3>
            <p>{t('contact.infoText')}</p>

            <ul className="contact__list">
              <li>
                <FaMapMarkerAlt className="contact__icon" />
                <span>{t('contact.location')}</span>
              </li>
              <li>
                <FaEnvelope className="contact__icon" />
                <span>controller@orusglobal.com</span>
              </li>
              <li>
                <FaWhatsapp className="contact__icon contact__icon--whatsapp" />
                <a href="https://wa.me/573203407431" target="_blank" rel="noopener noreferrer">
                  {t('contact.phone')}
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
          <div className="contact__form-wrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            {status === 'success' ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>{t('contact.successTitle')}</h3>
                <p>{t('contact.successText')}</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  {t('contact.successBtn')}
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact__form" onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <div className="contact__error-banner">{t('contact.errorText')}</div>
                )}

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name">{t('contact.labelName')}</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder={t('contact.placeholderName')}
                      value={form.name} onChange={handleChange}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      autoComplete="name"
                    />
                    {errors.name && <span id="err-name" className="contact__field-error">{errors.name}</span>}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">{t('contact.labelEmail')}</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder={t('contact.placeholderEmail')}
                      value={form.email} onChange={handleChange}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      autoComplete="email"
                    />
                    {errors.email && <span id="err-email" className="contact__field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="subject">{t('contact.labelSubject')}</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder={t('contact.placeholderSubject')}
                    value={form.subject} onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">{t('contact.labelMessage')}</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder={t('contact.placeholderMessage')}
                    value={form.message} onChange={handleChange}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                  {errors.message && <span id="err-message" className="contact__field-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.submitBtn')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
