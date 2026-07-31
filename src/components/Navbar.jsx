import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#inicio')

  const links = [
    { href: '#inicio',    label: t('nav.inicio')    },
    { href: '#nosotros',  label: t('nav.nosotros')  },
    { href: '#orion',     label: t('nav.orion')     },
    { href: '#servicios', label: t('nav.servicios') },
    { href: '#equipo',    label: t('nav.equipo')    },
    { href: '#galeria',   label: t('nav.galeria')   },
    { href: '#aliados',   label: t('nav.aliados')   },
    { href: '#contacto',  label: t('nav.contacto')  },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setActive(href)
    setOpen(false)
  }

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('orus_lang', next)
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__logo" onClick={() => handleLink('#inicio')}>
          <img src="/img/logos/AgricultureNegro.png" alt="ORUS Agriculture logo" />
        </a>

        <nav className={`navbar__nav${open ? ' open' : ''}`}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`navbar__link${active === l.href ? ' active' : ''}`}
              onClick={() => handleLink(l.href)}
            >
              {l.label}
            </a>
          ))}
          <button
            className="navbar__lang"
            onClick={toggleLang}
            aria-label={t('nav.langLabel')}
          >
            {t('nav.langToggle')}
          </button>
          <a
            href="https://orion.orusagro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            {t('nav.cta')}
          </a>
        </nav>

        <button
          className={`navbar__hamburger${open ? ' active' : ''}`}
          aria-label={t('nav.menuLabel')}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className="navbar__backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}
