import React from 'react'
import { useTranslation } from 'react-i18next'
import './AIAgent.css'
import { FaBell, FaChartBar, FaBrain } from 'react-icons/fa'
import { MdAutoMode } from 'react-icons/md'

/* Icons stay here; texts come from i18n */
const benefitIcons = [<FaBell />, <FaChartBar />, <MdAutoMode />, <FaBrain />]

export default function AIAgent() {
  const { t } = useTranslation()
  const benefits = t('aiagent.benefits', { returnObjects: true })

  return (
    <section className="ai-agent" id="ia">
      <div className="ai-agent__bg" />
      <div className="container">

        <div className="ai-agent__layout">

          {/* ── Text + benefits column ── */}
          <div className="ai-agent__left" data-aos="fade-right" data-aos-duration="1000">
            <span className="section-tag ai-agent__tag">{t('aiagent.tag')}</span>
            <h2 className="ai-agent__title">
              {t('aiagent.title1')}<br />
              <span>{t('aiagent.titleSpan')}</span>
            </h2>
            <p className="ai-agent__desc">{t('aiagent.desc')}</p>
            <a
              href="https://wa.me/573203407431"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ai-agent__cta"
            >
              {t('aiagent.cta')}
            </a>

            <div className="ai-agent__benefits">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="ai-agent__benefit"
                  data-aos="fade-up"
                  data-aos-delay={i * 80 + 300}
                  data-aos-duration="700"
                >
                  <div className="ai-agent__benefit-icon">{benefitIcons[i]}</div>
                  <div>
                    <h3 className="ai-agent__benefit-title">{b.title}</h3>
                    <p className="ai-agent__benefit-text">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Agent demo screenshot column ── */}
          <div className="ai-agent__phone-col" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <img
              src="/img/Recursos/captura.png"
              alt={t('aiagent.whatsappAlt')}
              className="ai-agent__phone-img"
              style={{
                width: '200%',
                maxWidth: '480px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                borderRadius: '18px',
                boxShadow: '0 8px 32px #0003',
                minHeight: '420px'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div className="ai-agent__phone-placeholder" style={{ display: 'none' }}>
              <span>📱</span>
              <p>{t('aiagent.whatsappPlaceholderTitle')}</p>
              <small>{t('aiagent.whatsappPlaceholderHint')}<br />/img/Recursos/captura.png</small>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
