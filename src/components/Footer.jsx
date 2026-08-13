import React from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

/* hrefs stay here; labels come from i18n (footer.links) */
const empresaHrefs = ['#nosotros', '#servicios', '#galeria', '#aliados', '#']
const legalHrefs = ['#', '#', '#']

const socials = [
 /* { icon: <FaFacebook />,  href: '#', label: 'Facebook'  },*/
  { icon: <FaInstagram />, href: 'https://www.instagram.com/orus.agro', label: 'Instagram' },
  { icon: <FaLinkedin />,  href: 'https://www.linkedin.com/company/orus-agriculture/', label: 'LinkedIn'  },
  /*{ icon: <FaTwitter />,   href: '#', label: 'Twitter'   },*/
  /*{ icon: <FaYoutube />,   href: '#', label: 'YouTube'   },*/
]

export default function Footer() {
  const { t } = useTranslation()
  const empresaLinks = [
    t('footer.links.nosotros'), t('footer.links.servicios'),
    t('footer.links.galeria'), t('footer.links.aliados'), t('footer.links.blog'),
  ].map((label, i) => ({ label, href: empresaHrefs[i] }))
  const legalLinks = [
    t('footer.links.privacidad'), t('footer.links.terminos'), t('footer.links.cookies'),
  ].map((label, i) => ({ label, href: legalHrefs[i] }))

  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/img/logos/AgricultureNegro.png" alt="ORUS Agriculture" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">{t('footer.tagline')}</p>
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
          <h4>{t('footer.empresa')}</h4>
          <ul>
            {empresaLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t('footer.legal')}</h4>
          <ul>
            {legalLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4>{t('footer.newsletter')}</h4>
          <p>{t('footer.newsletterText')}</p>
          <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder={t('footer.newsletterPlaceholder')} required autoComplete="email" />
            <button type="submit" className="btn btn-primary">{t('footer.newsletterBtn')}</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} ORUS Agriculture. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
