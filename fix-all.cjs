const fs = require('fs');

// ─── App.jsx ────────────────────────────────────────────────────────────────
fs.writeFileSync('src/App.jsx', `import React from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Services from './components/Services'
import Team     from './components/Team'
import Gallery  from './components/Gallery'
import Partners from './components/Partners'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
`, 'utf8');
console.log('App.jsx ok');

// ─── Team.jsx ────────────────────────────────────────────────────────────────
fs.writeFileSync('src/components/Team.jsx', `import React from 'react'
import './Team.css'
import { FaLinkedin } from 'react-icons/fa'
import { MdSensors } from 'react-icons/md'

const team = [
  {
    name: 'Sebastian',
    role: 'Co-Fundador',
    area: 'Estrategia & Visión',
    bio: 'Lidera la visión de ORUS para conectar el campo colombiano con tecnología de precisión.',
    img: '/img/Equipo/Sebas.jpg',
    linkedin: '#',
  },
  {
    name: 'Daniel',
    role: 'Co-Fundador',
    area: 'Hardware & Firmware',
    bio: 'Diseña los agentes IoT que monitorean cada variable crítica del cultivo en tiempo real.',
    img: '/img/Equipo/Daniel.png',
    linkedin: '#',
  },
  {
    name: 'Gabriel',
    role: 'Co-Fundador',
    area: 'Desarrollo de Software',
    bio: 'Arquitecto de la plataforma Orion que convierte datos de sensores en inteligencia agrícola accionable.',
    img: '/img/Equipo/Gabriel.jpeg',
    linkedin: '#',
  },
  {
    name: '',
    role: 'Co-Fundador',
    area: 'Por definir',
    bio: '',
    img: null,
    linkedin: '#',
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
              <div className="team__img-wrap">
                {member.img ? (
                  <img src={member.img} alt={member.name} loading="lazy" />
                ) : (
                  <div className="team__img-placeholder">
                    <span>+</span>
                    <p>Próximamente</p>
                  </div>
                )}
                {member.img && (
                  <div className="team__overlay">
                    {member.bio && <p className="team__bio">{member.bio}</p>}
                    <div className="team__socials">
                      {member.linkedin && (
                        <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="team__info">
                <span className="team__area">
                  <MdSensors className="team__area-icon" />
                  {member.area}
                </span>
                {member.name && <h3 className="team__name">{member.name}</h3>}
                <p className="team__role">{member.role}</p>
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

// ─── Team.css — add placeholder style ────────────────────────────────────────
const teamCss = fs.readFileSync('src/components/Team.css', 'utf8');
if (!teamCss.includes('team__img-placeholder')) {
  fs.appendFileSync('src/components/Team.css', `
.team__img-placeholder {
  width: 100%; height: 100%;
  background: var(--gray-200);
  border: 2px dashed var(--gray-300);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .5rem;
  color: var(--gray-500);
}
.team__img-placeholder span {
  font-size: 2.5rem; font-weight: 300; line-height: 1;
  color: var(--accent);
}
.team__img-placeholder p {
  font-size: .8rem; letter-spacing: .08em; text-transform: uppercase;
}
`, 'utf8');
}
console.log('Team.css ok');

// ─── Footer.jsx — fix logo + encoding ───────────────────────────────────────
const footerRaw = fs.readFileSync('src/components/Footer.jsx', 'utf8');
// Fix encoding artifacts
let footer = footerRaw
  .replace(/GalerÃ\u00ada/g, 'Galería')
  .replace(/GalerÃ­a/g, 'Galería')
  .replace(/PolÃtica/g, 'Política')
  .replace(/PolÃ\u00adtica/g, 'Política')
  .replace(/TÃ©rminos/g, 'Términos')
  .replace(/InnovaciÃ³n/g, 'Innovación')
  .replace(/agrÃcola/g, 'agrícola')
  .replace(/latinoamericano\./g, 'latinoamericano.');

// Fix logo: replace FaLeaf icon + text span with real image
footer = footer.replace(
  /<div className="footer__logo">\s*<FaLeaf className="footer__leaf" \/>\s*<span>ORUS<br \/><small>AGRICULTURE<\/small><\/span>\s*<\/div>/,
  `<div className="footer__logo">
            <img src="/img/logos/AgricultureNegro.png" alt="ORUS Agriculture" className="footer__logo-img" />
          </div>`
);

fs.writeFileSync('src/components/Footer.jsx', footer, 'utf8');
console.log('Footer.jsx ok');

// ─── Footer.css — add logo-img style ────────────────────────────────────────
const footerCss = fs.readFileSync('src/components/Footer.css', 'utf8');
if (!footerCss.includes('footer__logo-img')) {
  fs.writeFileSync('src/components/Footer.css',
    footerCss.replace(
      '.footer__logo {',
      `.footer__logo-img {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: .9;
}

.footer__logo {`
    ), 'utf8');
}
console.log('Footer.css ok');

// ─── Fix encoding in Hero.jsx ───────────────────────────────────────────────
const fixEncoding = (text) => text
  .replace(/InnovaciÃ³n/g, 'Innovación')
  .replace(/agrÃcola/g, 'agrícola')
  .replace(/AgrÃcola/g, 'Agrícola')
  .replace(/precisiÃ³n/g, 'precisión')
  .replace(/tecnologÃa/g, 'tecnología')
  .replace(/VisiÃ³n/g, 'Visión')
  .replace(/DiseÃ±a/g, 'Diseña')
  .replace(/crÃtica/g, 'crítica')
  .replace(/detrÃ¡s/g, 'detrás')
  .replace(/ingenierÃa/g, 'ingeniería')
  .replace(/agronomÃa/g, 'agronomía')
  .replace(/Â¿/g, '¿')
  .replace(/â†'/g, '→')
  .replace(/GalerÃa/g, 'Galería')
  .replace(/GalerÃ­a/g, 'Galería')
  .replace(/PolÃtica/g, 'Política')
  .replace(/TÃ©rminos/g, 'Términos')
  .replace(/monitoreo de/g, 'monitoreo de')
  .replace(/Colombiana/g, 'Colombiana')
  .replace(/mÃ¡s/g, 'más')
  .replace(/tambiÃ©n/g, 'también')
  .replace(/informaciÃ³n/g, 'información')
  .replace(/soluciÃ³n/g, 'solución')
  .replace(/ReducciÃ³n/g, 'Reducción')
  .replace(/satisfacciÃ³n/g, 'satisfacción')
  .replace(/ConfÃan/g, 'Confían')
  .replace(/confÃan/g, 'confían')
  .replace(/PaÃses/g, 'Países')
  .replace(/paÃses/g, 'países')
  .replace(/ProductoresX/g, 'Productores')
  .replace(/SesiÃ³n/g, 'Sesión')
  .replace(/ÃcológicO/g, 'Ecológico');

const jsxFiles = [
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Services.jsx',
  'src/components/Navbar.jsx',
  'src/components/Gallery.jsx',
  'src/components/Contact.jsx',
  'src/components/Partners.jsx',
  'src/components/Stats.jsx',
];

for (const f of jsxFiles) {
  try {
    const orig = fs.readFileSync(f, 'utf8');
    const fixed = fixEncoding(orig);
    if (fixed !== orig) {
      fs.writeFileSync(f, fixed, 'utf8');
      console.log('encoding fixed:', f);
    } else {
      console.log('no changes:', f);
    }
  } catch(e) { console.log('skip:', f); }
}

console.log('\nAll done!');
