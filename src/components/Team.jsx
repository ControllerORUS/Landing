import React from 'react'
import './Team.css'
import { FaLinkedin } from 'react-icons/fa'

const team = [
  {
    name: 'Daniel Peña',
    role: 'CEO',
    education: 'BE. Ing. Electrónica · ME. Microelectrónica',
    university: 'Universidad de los Andes',
    img: '/img/Equipo/Daniel.png',
    linkedin: 'https://linkedin.com/in/danielpc76',
    linkedinLabel: 'danielpc76',
  },
  {
    name: 'Gabriel Dicelis',
    role: 'CTO',
    education: 'BE. Ing. Sistemas',
    university: 'Universidad de los Andes',
    img: '/img/Equipo/Gabriel.jpeg',
    linkedin: 'https://linkedin.com/in/gabriel-dicelis-ramos',
    linkedinLabel: 'gabriel-dicelis-ramos',
  },
  {
    name: 'Sebastian Rubi',
    role: 'CFO',
    education: 'BSc. Economía',
    university: 'Universidad Nacional',
    img: '/img/Equipo/Sebas.jpg',
    linkedin: 'https://linkedin.com/in/sebastianrubi',
    linkedinLabel: 'sebastianrubi',
  },
  {
    name: 'Santiago Gómez',
    role: 'Desarrollo de Software',
    education: 'Tecnólogo en Desarrollo de Software',
    university: 'SENA',
    img: '/img/Equipo/Santiago.jpeg',
    linkedin: '#',
    linkedinLabel: null,
  },
]

export default function Team() {
  return (
    <section className="team" id="equipo">
      <div className="container">
        <div className="team__header">
          <span className="section-tag">El equipo</span>
          <h2 className="section-title">Las personas detrás de <span>ORUS</span></h2>
          <p className="section-subtitle">
            Un equipo multidisciplinar colombiano que combina ingeniería, agronomía y emprendimiento para transformar el campo.
          </p>
        </div>

        <div className="team__grid">
          {team.map((member, i) => (
            <div key={i} className="team__card">
              <div className="team__avatar-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="team__avatar"
                />
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <p className="team__role">{member.role}</p>
                <p className="team__education">{member.education}</p>
                <p className="team__university">({member.university})</p>
                {member.linkedinLabel && (
                  <a
                    href={member.linkedin}
                    className="team__linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                    {member.linkedinLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
