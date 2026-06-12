import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaLeaf } from 'react-icons/fa'

const links = {
  empresa: [
    { label: 'Nosotros',    href: '#nosotros'  },
    { label: 'Servicios',   href: '#servicios' },
    { label: 'Galería',     href: '#galeria'   },
    { label: 'Aliados',     href: '#aliados'   },
    { label: 'Blog',        href: '#'          },
  ],
  legal: [
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos de uso',        href: '#' },
    { label: 'Cookies',                href: '#' },
  ],
}

const socials = [
  { icon: <FaFacebook />,  href: '#', label: 'Facebook'  },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaLinkedin />,  href: '#', label: 'LinkedIn'  },
  { icon: <FaTwitter />,   href: '#', label: 'Twitter'   },
  { icon: <FaYoutube />,   href: '#', label: 'YouTube'   },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/img/logos/AgricultureNegro.png" alt="ORUS Agriculture" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Innovación agrícola sostenible para transformar el campo latinoamericano.
          </p>
          <div className="footer__socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer__social-btn" target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4>Empresa</h4>
          <ul>
            {links.empresa.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <ul>
            {links.legal.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4>Newsletter Agrícola</h4>
          <p>Recibe tendencias, novedades y consejos del campo directo en tu correo.</p>
          <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="tu@correo.com" required autoComplete="email" />
            <button type="submit" className="btn btn-primary">Suscribir</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} ORUS Agriculture. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
