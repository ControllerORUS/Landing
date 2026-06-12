import React, { useState, useEffect } from 'react'
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
          className={`navbar__hamburger${open ? ' active' : ''}`}
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
