import React from 'react'
import './SocialBar.css'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
  { icon: <FaLinkedin />,  href: 'https://linkedin.com/company/orus-agriculture', label: 'LinkedIn',  color: '#0a66c2' },
  { icon: <FaInstagram />, href: 'https://instagram.com/orusagriculture',         label: 'Instagram', color: '#e1306c' },
  { icon: <FaWhatsapp />,  href: 'https://wa.me/573000000000',                    label: 'WhatsApp',  color: '#25d366' },
  { icon: <FaTwitter />,   href: 'https://x.com/orusagriculture',                 label: 'Twitter/X', color: '#1a8cd8' },
  { icon: <FaYoutube />,   href: 'https://youtube.com/@orusagriculture',           label: 'YouTube',   color: '#ff0000' },
]

export default function SocialBar() {
  return (
    <aside className="social-bar" aria-label="Redes sociales">
      {socials.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="social-bar__btn"
          style={{ '--color': s.color }}
          title={s.label}
        >
          {s.icon}
          <span className="social-bar__label">{s.label}</span>
        </a>
      ))}
    </aside>
  )
}
