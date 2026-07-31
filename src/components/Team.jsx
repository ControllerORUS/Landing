import React from 'react'
import { useTranslation } from 'react-i18next'
import './Team.css'
import { FaLinkedin } from 'react-icons/fa'

/* Static data that doesn't change with language (img, linkedin).
 * The profile link always displays the fixed label "LinkedIn". */
const teamMeta = [
  {
    img: '/img/Equipo/Daniel.png',
    linkedin: 'https://linkedin.com/in/danielpc76',
  },
  {
    img: '/img/Equipo/Gabriel.jpeg',
    linkedin: 'https://linkedin.com/in/gabriel-dicelis-ramos',
  },
  {
    img: '/img/Equipo/Sebas.jpg',
    linkedin: 'https://linkedin.com/in/sebastianrubi',
  },
  {
    img: '/img/Equipo/Santiago.jpeg',
    linkedin: 'https://www.linkedin.com/in/santiago-gomez-duque-a566323a1/',
  },
  {
    img: '/img/Equipo/DavidC.jpg',
    linkedin: 'https://www.linkedin.com/in/david-cantor-a5472230a/',
  },
  {
    img: '/img/Equipo/MateoJ.jpg',
    linkedin: 'https://www.linkedin.com/in/mateo-jaimes-rinc%C3%B3n-090741381/',
  },
  {
    img: '/img/Equipo/DanielG.jpg',
    linkedin: 'https://www.linkedin.com/in/danielgomezavila/',
  },
  {
    img: '/img/Equipo/MartinP.jpg',
    linkedin: 'https://www.linkedin.com/in/marperpe-007602204/',
  },
]

export default function Team() {
  const { t } = useTranslation()
  const membersText = t('team.members', { returnObjects: true })
  const team = membersText.map((m, i) => ({ ...teamMeta[i], ...m }))

  return (
    <section className="team" id="equipo">
      <div className="container">
        <div className="team__header" data-aos="fade-up" data-aos-duration="900">
          <span className="section-tag">{t('team.tag')}</span>
          <h2 className="section-title">
            {t('team.title1')} <span>{t('team.titleSpan')}</span>
          </h2>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div className="team__grid">
          {team.map((member, i) => (
            <div key={i} className="team__card" data-aos="fade-up" data-aos-delay={i * 100} data-aos-duration="800">
              <div className="team__avatar-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="team__avatar"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="team__avatar-placeholder" style={{ display: 'none' }}>
                  {member.name?.charAt(0)}
                </div>
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                {member.role && <p className="team__role">{member.role}</p>}
                {member.education && <p className="team__education">{member.education}</p>}
                {member.university && <p className="team__university">({member.university})</p>}
                {member.bio && <p className="team__bio">{member.bio}</p>}
                {member.linkedin && member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    className="team__linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Group photo — TODO: add photo to /img/Equipo/equipo-grupo.jpg */}
        <div className="team__group-wrap" data-aos="fade-up" data-aos-duration="900">
          <img
            src="/img/Equipo/equipo-grupo.jpg"
            alt="Equipo ORUS completo"
            className="team__group-photo"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}
