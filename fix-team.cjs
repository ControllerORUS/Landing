const fs = require('fs');

fs.writeFileSync('src/components/Team.jsx', `import React from 'react'
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
`, 'utf8');
console.log('Team.jsx ok');

fs.writeFileSync('src/components/Team.css', `.team {
  padding: 7rem 0;
  background: var(--white);
}

.team__header {
  text-align: center;
  margin-bottom: 4rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

/* Card */
.team__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
}

/* Circular photo */
.team__avatar-wrap {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--gray-300);
  transition: border-color var(--transition), box-shadow var(--transition);
  flex-shrink: 0;
}
.team__card:hover .team__avatar-wrap {
  border-color: var(--accent);
  box-shadow: 0 0 0 6px rgba(34,197,94,.12);
}

.team__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: grayscale(100%);
  transition: filter 0.4s ease, transform 0.4s ease;
}
.team__card:hover .team__avatar {
  filter: grayscale(0%);
  transform: scale(1.06);
}

/* Info */
.team__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .3rem;
}

.team__name {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0;
}

.team__role {
  font-size: .88rem;
  color: var(--text-body);
  font-weight: 400;
  margin: 0;
}

.team__education {
  font-size: .82rem;
  color: var(--text-body);
  margin-top: .5rem;
  line-height: 1.5;
}

.team__university {
  font-size: .8rem;
  color: var(--gray-500);
  margin: 0;
}

.team__linkedin {
  display: inline-flex;
  align-items: center;
  gap: .35em;
  font-size: .82rem;
  font-weight: 600;
  color: var(--accent-dark);
  margin-top: .5rem;
  transition: color .2s;
}
.team__linkedin:hover { color: var(--accent); }
.team__linkedin svg { font-size: 1em; }

/* Responsive */
@media (max-width: 1024px) {
  .team__grid { grid-template-columns: repeat(2, 1fr); gap: 3rem; }
}
@media (max-width: 560px) {
  .team__grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .team__avatar-wrap { width: 140px; height: 140px; }
}
@media (max-width: 380px) {
  .team__grid { grid-template-columns: 1fr; }
}
`, 'utf8');
console.log('Team.css ok');

// Fix encoding in other files that still have issues
const fixEncoding = (text) => text
  .replace(/VisiÃ³n/g, 'Visión').replace(/visiÃ³n/g, 'visión')
  .replace(/InnovaciÃ³n/g, 'Innovación').replace(/innovaciÃ³n/g, 'innovación')
  .replace(/precisiÃ³n/g, 'precisión').replace(/PrecisiÃ³n/g, 'Precisión')
  .replace(/tecnologÃa/g, 'tecnología').replace(/TecnologÃa/g, 'Tecnología')
  .replace(/agrÃcola/g, 'agrícola').replace(/AgrÃcola/g, 'Agrícola')
  .replace(/DiseÃ±a/g, 'Diseña').replace(/diseÃ±a/g, 'diseña')
  .replace(/crÃtica/g, 'crítica').replace(/CrÃtica/g, 'Crítica')
  .replace(/detrÃ¡s/g, 'detrás')
  .replace(/ingenierÃa/g, 'ingeniería').replace(/IngenierÃa/g, 'Ingeniería')
  .replace(/agronomÃa/g, 'agronomía')
  .replace(/Â¿/g, '¿')
  .replace(/â†'/g, '→')
  .replace(/GalerÃ\u00ada/g, 'Galería').replace(/GalerÃa/g, 'Galería').replace(/GalerÃ­a/g, 'Galería')
  .replace(/PolÃtica/g, 'Política')
  .replace(/TÃ©rminos/g, 'Términos')
  .replace(/PaÃses/g, 'Países').replace(/paÃses/g, 'países')
  .replace(/confÃan/g, 'confían').replace(/ConfÃan/g, 'Confían')
  .replace(/ReducciÃ³n/g, 'Reducción')
  .replace(/satisfacciÃ³n/g, 'satisfacción')
  .replace(/PrÃ³ximamente/g, 'Próximamente')
  .replace(/formaciÃ³n/g, 'formación')
  .replace(/soluciÃ³n/g, 'solución')
  .replace(/tambiÃ©n/g, 'también')
  .replace(/mÃ¡s/g, 'más')
  .replace(/AnÃ¡lisis/g, 'Análisis').replace(/anÃ¡lisis/g, 'análisis')
  .replace(/gestiÃ³n/g, 'gestión')
  .replace(/sistemaÃ/g, 'sistema')
  .replace(/Electrnica/g, 'Electrónica')
  .replace(/MicroelectrÃ³nica/g, 'Microelectrónica')
  .replace(/EconomÃa/g, 'Economía');

const toFix = [
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Services.jsx',
  'src/components/Navbar.jsx',
  'src/components/Gallery.jsx',
  'src/components/Contact.jsx',
  'src/components/Partners.jsx',
  'src/components/Footer.jsx',
];
for (const f of toFix) {
  try {
    const orig = fs.readFileSync(f, 'utf8');
    const fixed = fixEncoding(orig);
    if (fixed !== orig) { fs.writeFileSync(f, fixed, 'utf8'); console.log('fixed:', f); }
    else console.log('clean:', f);
  } catch(e) { console.log('skip:', f, e.message); }
}

console.log('\nDone!');
