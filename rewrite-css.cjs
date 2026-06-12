const fs = require('fs');
const path = require('path');

const files = {

// ─────────────────────────────────────────────
'src/index.css': `/* ============================================================
   ORUS Agriculture - Global Styles  (Design System v2)
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --accent:      #22C55E;
  --accent-dark: #16a34a;
  --accent-light:#dcfce7;

  --green-900: #0A0A0A;
  --green-800: #0A0A0A;
  --green-600: #22C55E;
  --green-400: #22C55E;
  --green-200: #bbf7d0;
  --green-50:  #dcfce7;
  --gold:      #22C55E;

  --white:       #ffffff;
  --off-white:   #F9FAFB;
  --gray-100:    #F9FAFB;
  --gray-200:    #F3F4F6;
  --gray-300:    #E5E7EB;
  --gray-500:    #6B7280;
  --gray-700:    #374151;
  --text-dark:   #0A0A0A;
  --text-body:   #374151;

  --font-sans:  'Roboto', sans-serif;
  --font-serif: 'Roboto', sans-serif;
  --font-mono:  'Roboto Mono', monospace;

  --shadow-sm: 0 1px 4px rgba(0,0,0,.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,.08);
  --shadow-lg: 0 8px 32px rgba(0,0,0,.10);

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 9999px;

  --transition: 0.3s cubic-bezier(.25,.8,.25,1);
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  color: var(--text-dark);
  background: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a  { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
ul { list-style: none; }

.container {
  width: 90%;
  max-width: 1200px;
  margin-inline: auto;
}

.section-tag {
  display: inline-block;
  background: transparent;
  color: var(--accent-dark);
  font-size: .72rem;
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: .3em 1em;
  border-radius: var(--radius-pill);
  border: 1px solid var(--accent);
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-sans);
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-dark);
  letter-spacing: -.02em;
}

.section-title span {
  color: var(--accent);
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-body);
  max-width: 600px;
  margin-top: .75rem;
  margin-inline: auto;
  line-height: 1.7;
  text-align: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  padding: .85rem 2rem;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: .9rem;
  letter-spacing: .03em;
  transition: var(--transition);
  cursor: pointer;
  white-space: nowrap;
  border: none;
}
.btn:active { transform: scale(.97) !important; }

.btn-primary {
  background: var(--accent);
  color: var(--white);
  box-shadow: 0 4px 14px rgba(34,197,94,.3);
}
.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(34,197,94,.4);
}

.btn-outline {
  border: 1.5px solid var(--gray-300);
  color: var(--text-dark);
  background: var(--white);
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.btn-outline-light {
  border: 1.5px solid rgba(255,255,255,.7);
  color: var(--white);
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(4px);
}
.btn-outline-light:hover {
  background: var(--white);
  color: var(--text-dark);
  border-color: var(--white);
  transform: translateY(-2px);
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--gray-100); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
`,

// ─────────────────────────────────────────────
'src/components/Navbar.css': `.navbar {
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: var(--transition);
  background: rgba(255,255,255,0);
}

.navbar.scrolled {
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  padding: .7rem 0;
  border-bottom: 1px solid var(--gray-300);
  box-shadow: 0 1px 8px rgba(0,0,0,.06);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.navbar__logo img {
  height: 44px;
  width: auto;
  transition: filter .3s ease;
}
.navbar:not(.scrolled) .navbar__logo img {
  filter: brightness(0) invert(1);
}
.navbar.scrolled .navbar__logo img {
  filter: none;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar__link {
  color: var(--white);
  font-weight: 600;
  font-size: .88rem;
  letter-spacing: .03em;
  position: relative;
  opacity: .9;
  transition: opacity .2s, color .2s;
}
.navbar.scrolled .navbar__link {
  color: var(--text-dark);
  opacity: 1;
}
.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transition: width .25s;
}
.navbar__link:hover,
.navbar__link.active { opacity: 1; }
.navbar.scrolled .navbar__link:hover,
.navbar.scrolled .navbar__link.active { color: var(--accent-dark); }
.navbar__link:hover::after,
.navbar__link.active::after { width: 100%; }

.navbar__cta { padding: .5rem 1.3rem; font-size: .85rem; }

.btn-orion-nav {
  display: inline-flex;
  align-items: center;
  gap: .4em;
  padding: .5rem 1.2rem;
  background: var(--accent);
  color: var(--white) !important;
  font-weight: 700;
  font-size: .82rem;
  letter-spacing: .03em;
  border-radius: var(--radius-pill);
  transition: var(--transition);
  white-space: nowrap;
  border: none;
}
.btn-orion-nav:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(34,197,94,.35);
}
.btn-orion-nav svg { font-size: 1.05em; }

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  border-radius: 6px;
}
.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
  transform-origin: center;
}
.navbar.scrolled .navbar__hamburger span { background: var(--text-dark); }
.navbar__hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__hamburger.active span:nth-child(2) { opacity: 0; }
.navbar__hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  z-index: 999;
}

@media (max-width: 900px) {
  .navbar__hamburger { display: flex; }

  .navbar__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(320px, 85vw);
    height: 100vh;
    background: var(--white);
    border-left: 1px solid var(--gray-300);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
    transition: right .35s ease;
    z-index: 1000;
    overflow-y: auto;
  }
  .navbar__nav.open { right: 0; }

  .navbar__link { color: var(--text-dark) !important; font-size: 1.05rem; }
  .navbar__cta { width: 100%; justify-content: center; }
  .navbar__orion { width: 100%; justify-content: center; }
}
`,

// ─────────────────────────────────────────────
'src/components/Hero.css': `.hero {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}
.hero__slide.active { opacity: 1; }

.hero__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.06);
  transition: transform 6s ease;
}
.hero__slide.active .hero__bg { transform: scale(1); }

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(0,0,0,.72) 0%,
    rgba(0,0,0,.38) 55%,
    rgba(0,0,0,.10) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  color: var(--white);
  padding-top: 80px;
  max-width: 720px;
}

.hero__tag {
  display: inline-block;
  background: rgba(34,197,94,.18);
  border: 1px solid rgba(34,197,94,.5);
  color: #86efac;
  font-size: .72rem;
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: .3em 1em;
  border-radius: var(--radius-pill);
  margin-bottom: 1.2rem;
  backdrop-filter: blur(4px);
  animation: fadeUp .6s ease both;
}

.hero__title {
  font-family: var(--font-sans);
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -.03em;
  color: var(--white);
  animation: fadeUp .7s .1s ease both;
  text-shadow: 0 2px 24px rgba(0,0,0,.2);
}

.hero__subtitle {
  font-size: clamp(.95rem, 2vw, 1.2rem);
  opacity: .88;
  margin-top: 1.2rem;
  max-width: 540px;
  animation: fadeUp .7s .2s ease both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.2rem;
  animation: fadeUp .7s .3s ease both;
}

.btn-orion {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .85rem 1.8rem;
  background: var(--accent);
  color: var(--white);
  font-weight: 700;
  font-size: .95rem;
  letter-spacing: .02em;
  border-radius: var(--radius-pill);
  transition: var(--transition);
  box-shadow: 0 4px 18px rgba(34,197,94,.4);
  border: none;
  cursor: pointer;
}
.btn-orion:hover {
  background: var(--accent-dark);
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(34,197,94,.55);
}
.hero__orion-icon { font-size: 1.2em; }

.hero__social-strip {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  animation: fadeUp .7s .4s ease both;
  flex-wrap: wrap;
}
.hero__social-link {
  display: inline-flex;
  align-items: center;
  gap: .4em;
  color: rgba(255,255,255,.75);
  font-size: .82rem;
  font-weight: 600;
  letter-spacing: .04em;
  transition: color .2s;
}
.hero__social-link:hover { color: var(--accent); }
.hero__social-link svg { font-size: 1em; }
.hero__social-divider { width: 1px; height: 14px; background: rgba(255,255,255,.3); }

.hero__dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: .6rem;
  z-index: 3;
}
.hero__dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,.45);
  transition: var(--transition);
  border: none; cursor: pointer;
}
.hero__dot.active {
  background: var(--accent);
  width: 28px;
  border-radius: 5px;
}

.hero__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,.15);
  backdrop-filter: blur(6px);
  color: var(--white);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.25);
  transition: background .25s;
}
.hero__arrow:hover { background: rgba(255,255,255,.3); }
.hero__arrow--prev { left: 1.5rem; }
.hero__arrow--next { right: 1.5rem; }

.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem; right: 2rem;
  z-index: 3;
  width: 28px; height: 44px;
  border: 2px solid rgba(255,255,255,.5);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
}
.hero__scroll-dot {
  width: 5px; height: 5px;
  background: var(--white);
  border-radius: 50%;
  animation: scrollBounce 1.5s infinite;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  60%       { transform: translateY(14px); opacity: 0; }
}

@media (max-width: 600px) {
  .hero__arrow { display: none; }
  .hero__scroll-indicator { display: none; }
  .hero__actions { flex-direction: column; }
  .hero__actions .btn { width: 100%; justify-content: center; }
  .hero__social-strip { gap: .75rem; }
}
`,

// ─────────────────────────────────────────────
'src/components/About.css': `.about {
  padding: 7rem 0 5rem;
  background: var(--white);
}

.about__text .section-subtitle {
  text-align: left;
  margin-inline: 0;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 5rem;
}

.about__body {
  color: var(--text-body);
  margin-top: 1rem;
  font-size: .97rem;
  line-height: 1.75;
}

.about__stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-300);
  flex-wrap: wrap;
}

.about__orion-cta { margin-top: 2.5rem; }

.about__orion-btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-size: .95rem;
  padding: .85rem 2rem;
  border-radius: var(--radius-pill);
  background: var(--accent);
  color: var(--white);
  font-weight: 700;
  letter-spacing: .03em;
  transition: var(--transition);
  box-shadow: 0 4px 14px rgba(34,197,94,.3);
}
.about__orion-btn:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(34,197,94,.4);
}

.about__stat-num {
  display: block;
  font-family: var(--font-mono);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--accent-dark);
  line-height: 1;
}
.about__stat-label {
  font-size: .82rem;
  color: var(--text-body);
  font-weight: 600;
  letter-spacing: .04em;
  text-transform: uppercase;
  margin-top: .25rem;
  display: block;
}

.about__collage { position: relative; height: 520px; }

.about__img-main {
  position: absolute; top: 0; left: 0;
  width: 72%; height: 74%;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.about__img-main img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.about__img-main:hover img { transform: scale(1.05); }

.about__img-sm {
  position: absolute;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}
.about__img-sm img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
.about__img-sm:hover img { transform: scale(1.06); }
.about__img-sm--1 { bottom: 4%; left: 0; width: 46%; height: 34%; }
.about__img-sm--2 { top: 14%; right: 0; width: 38%; height: 52%; }

.about__badge {
  position: absolute;
  bottom: 18%; right: 2%;
  background: var(--white);
  color: var(--text-dark);
  border: 1px solid var(--gray-300);
  padding: .75rem 1.2rem;
  border-radius: var(--radius-sm);
  display: flex; align-items: center; gap: .6rem;
  font-size: .82rem; font-weight: 700; letter-spacing: .04em;
  box-shadow: var(--shadow-md);
}
.about__badge-icon { font-size: 1.1rem; color: var(--accent); }

.about__values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.about__value-card {
  background: var(--off-white);
  border-radius: var(--radius-md);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--gray-300);
}
.about__value-card:hover {
  background: var(--white);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.about__value-icon { font-size: 2rem; color: var(--accent); margin-bottom: 1rem; }
.about__value-card h3 { font-size: 1rem; font-weight: 700; color: var(--text-dark); margin-bottom: .5rem; }
.about__value-card p { font-size: .88rem; color: var(--text-body); line-height: 1.6; }

@media (max-width: 1024px) { .about__values { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 860px) {
  .about__grid { grid-template-columns: 1fr; gap: 3rem; }
  .about__collage { height: 380px; order: -1; }
}
@media (max-width: 560px) { .about__values { grid-template-columns: 1fr; } }
`,

// ─────────────────────────────────────────────
'src/components/Services.css': `.services {
  padding: 7rem 0;
  background: var(--white);
  position: relative;
  overflow: hidden;
}

.services__bg-shape {
  position: absolute;
  top: -40%; right: -15%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(34,197,94,.06) 0%, transparent 70%);
  pointer-events: none;
}

.services__header { text-align: center; margin-bottom: 4rem; }
.services__header .section-tag { border-color: var(--accent); color: var(--accent-dark); }
.services__header .section-title { color: var(--text-dark); }
.services__header .section-subtitle { color: var(--text-body); margin-inline: auto; }

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.services__card {
  background: var(--off-white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  padding: 2.2rem 1.8rem;
  position: relative; overflow: hidden;
  transition: var(--transition);
}
.services__card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform .35s ease;
}
.services__card:hover {
  background: var(--white);
  border-color: var(--accent);
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}
.services__card:hover::before { transform: scaleX(1); }

.services__card-icon { font-size: 1.8rem; color: var(--accent); margin-bottom: 1rem; }

.services__card-tag {
  font-size: .68rem;
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--accent-dark);
  display: block;
  margin-bottom: .6rem;
}

.services__card-title { color: var(--text-dark); font-size: 1.1rem; font-weight: 700; margin-bottom: .75rem; }
.services__card-text { color: var(--text-body); font-size: .9rem; line-height: 1.7; }

.services__card-line {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0; transition: opacity .4s;
}
.services__card:hover .services__card-line { opacity: 1; }

@media (max-width: 900px) { .services__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .services__grid { grid-template-columns: 1fr; } }
`,

// ─────────────────────────────────────────────
'src/components/Stats.css': `.stats {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: var(--off-white);
  border-top: 1px solid var(--gray-300);
  border-bottom: 1px solid var(--gray-300);
}

.stats__bg {
  position: absolute; inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(34,197,94,.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(34,197,94,.04) 0%, transparent 40%);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative; z-index: 1;
}

.stats__item {
  text-align: center;
  padding: 2rem 1rem;
  border-right: 1px solid var(--gray-300);
}
.stats__item:last-child { border-right: none; }

.stats__icon { font-size: 1.6rem; color: var(--accent); margin-bottom: 1rem; }

.stats__value {
  font-family: var(--font-mono);
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1;
  margin-bottom: .6rem;
}

.stats__label { font-size: .82rem; color: var(--text-body); max-width: 160px; margin-inline: auto; line-height: 1.5; }

@media (max-width: 860px) {
  .stats__grid { grid-template-columns: repeat(2, 1fr); }
  .stats__item { border-right: none; border-bottom: 1px solid var(--gray-300); }
  .stats__item:last-child, .stats__item:nth-child(3) { border-bottom: none; }
}
@media (max-width: 480px) {
  .stats__grid { grid-template-columns: 1fr; }
  .stats__item { border-bottom: 1px solid var(--gray-300); }
  .stats__item:last-child { border-bottom: none; }
}
`,

// ─────────────────────────────────────────────
'src/components/Gallery.css': `.gallery {
  padding: 7rem 0;
  background: var(--white);
}

.gallery__header { text-align: center; margin-bottom: 3.5rem; }

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 240px;
  gap: 12px;
}

.gallery__item {
  position: relative;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
}
.gallery__item--wide { grid-column: span 2; }
.gallery__item img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
.gallery__item:hover img { transform: scale(1.08); }

.gallery__item-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,.65) 0%, transparent 55%);
  opacity: 0; transition: opacity .35s;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .5rem;
}
.gallery__item:hover .gallery__item-overlay { opacity: 1; }

.gallery__item-zoom { font-size: 1.8rem; color: var(--white); line-height: 1; }
.gallery__item-caption { font-size: .82rem; color: rgba(255,255,255,.9); font-weight: 600; text-align: center; padding: 0 .5rem; }

.gallery__lightbox {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.92);
  z-index: 2000;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 2rem;
  animation: fadeIn .25s ease;
}
.gallery__lightbox img {
  max-width: min(1100px, 90vw); max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-sm);
  box-shadow: 0 32px 80px rgba(0,0,0,.5);
}
.gallery__lb-caption { color: rgba(255,255,255,.7); margin-top: 1rem; font-size: .9rem; }
.gallery__lb-close {
  position: absolute; top: 1.5rem; right: 1.5rem;
  color: var(--white); font-size: 1.5rem;
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255,255,255,.15);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .2s;
}
.gallery__lb-close:hover { background: rgba(255,255,255,.3); }

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

@media (max-width: 900px) { .gallery__grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; } }
@media (max-width: 500px) {
  .gallery__grid { grid-template-columns: 1fr; grid-auto-rows: 200px; }
  .gallery__item--wide { grid-column: span 1; }
}
`,

// ─────────────────────────────────────────────
'src/components/Partners.css': `.partners {
  padding: 7rem 0;
  background: var(--white);
}

.partners__header { text-align: center; margin-bottom: 4rem; }

.partners__carousel-wrap {
  position: relative; overflow: hidden;
  padding: 1rem 0; margin-bottom: 3rem;
}

.partners__swiper { overflow: visible !important; }
.partners__slide { width: auto !important; }

.partners__card {
  display: flex; flex-direction: column;
  align-items: center; gap: .75rem;
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  padding: 1.4rem 2rem;
  min-width: 200px;
  transition: var(--transition);
  user-select: none;
}
.partners__card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.partners__img-wrap {
  width: 140px; height: 64px;
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; padding: .5rem;
}
.partners__img-wrap img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }

.partners__name { font-size: .78rem; font-weight: 600; color: var(--text-body); text-align: center; letter-spacing: .02em; }

.partners__fade {
  position: absolute; top: 0; bottom: 0;
  width: 120px; z-index: 2; pointer-events: none;
}
.partners__fade--left { left: 0; background: linear-gradient(to right, var(--white), transparent); }
.partners__fade--right { right: 0; background: linear-gradient(to left, var(--white), transparent); }

.partners__cta-text { text-align: center; font-size: .95rem; color: var(--text-body); }
.partners__cta-link { color: var(--accent-dark); font-weight: 700; transition: color .2s; }
.partners__cta-link:hover { color: var(--accent); }
`,

// ─────────────────────────────────────────────
'src/components/Team.css': `.team {
  padding: 7rem 0;
  background: var(--off-white);
}

.team__header { text-align: center; margin-bottom: 4rem; }

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.team__card {
  background: var(--white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--gray-300);
  transition: var(--transition);
}
.team__card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.team__img-wrap { position: relative; height: 280px; overflow: hidden; }
.team__img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform .5s ease; }
.team__card:hover .team__img-wrap img { transform: scale(1.08); }

.team__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.45) 55%, transparent 100%);
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0; transition: opacity .35s ease;
}
.team__card:hover .team__overlay { opacity: 1; }

.team__bio { color: rgba(255,255,255,.9); font-size: .82rem; line-height: 1.6; margin-bottom: .9rem; }

.team__socials { display: flex; gap: .6rem; }
.team__socials a {
  width: 34px; height: 34px;
  border-radius: var(--radius-pill);
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.3);
  color: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-size: .95rem; transition: background .2s;
}
.team__socials a:hover { background: var(--accent); border-color: var(--accent); }

.team__info { padding: 1.2rem 1.4rem 1.5rem; }

.team__area {
  display: inline-flex; align-items: center; gap: .3em;
  font-size: .68rem;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: var(--accent-dark);
  margin-bottom: .5rem;
}
.team__area-icon { font-size: .9em; }

.team__name { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--text-dark); margin-bottom: .2rem; }
.team__role { font-size: .82rem; color: var(--text-body); font-weight: 400; }

.team__cta { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.team__cta p { font-size: 1.05rem; color: var(--text-body); font-weight: 500; }

@media (max-width: 640px) {
  .team__grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .team__img-wrap { height: 200px; }
}
@media (max-width: 400px) { .team__grid { grid-template-columns: 1fr; } }
`,

// ─────────────────────────────────────────────
'src/components/Contact.css': `.contact {
  padding: 7rem 0;
  background: var(--white);
}

.contact__header { text-align: center; margin-bottom: 4rem; }

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.contact__info h3 { font-size: 1.25rem; font-weight: 700; color: var(--text-dark); margin-bottom: .75rem; }
.contact__info > p { color: var(--text-body); font-size: .95rem; margin-bottom: 2rem; }

.contact__list { display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 2rem; }
.contact__list li { display: flex; align-items: flex-start; gap: 1rem; font-size: .9rem; color: var(--text-body); }
.contact__icon { color: var(--accent); font-size: 1rem; flex-shrink: 0; margin-top: .15rem; }
.contact__icon--whatsapp { color: #25d366; }
.contact__list a { color: var(--accent-dark); font-weight: 600; transition: color .2s; }
.contact__list a:hover { color: var(--accent); }

.contact__image { border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--gray-300); }
.contact__image img { width: 100%; height: 220px; object-fit: cover; transition: transform .5s ease; }
.contact__image:hover img { transform: scale(1.04); }

.contact__form-wrap {
  background: var(--off-white);
  border-radius: var(--radius-md);
  padding: 2.5rem;
  border: 1px solid var(--gray-300);
}

.contact__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }

.contact__field { display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1.2rem; }
.contact__field label { font-size: .82rem; font-weight: 700; color: var(--text-dark); letter-spacing: .02em; }
.contact__field input,
.contact__field textarea {
  padding: .75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: .92rem;
  color: var(--text-dark);
  background: var(--white);
  transition: border-color .25s, box-shadow .25s;
  resize: vertical;
}
.contact__field input:focus,
.contact__field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(34,197,94,.12);
  background: var(--white);
}

.contact__submit { width: 100%; justify-content: center; font-size: 1rem; }

.contact__success { text-align: center; padding: 3rem 1rem; }
.contact__success-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 64px; height: 64px;
  background: var(--accent-light); color: var(--accent-dark);
  font-size: 2rem; border-radius: 50%; margin-bottom: 1.5rem;
}
.contact__success h3 { color: var(--text-dark); margin-bottom: .75rem; }
.contact__success p { color: var(--text-body); margin-bottom: 2rem; }

@media (max-width: 860px) { .contact__grid { grid-template-columns: 1fr; gap: 2rem; } }
@media (max-width: 560px) {
  .contact__row { grid-template-columns: 1fr; }
  .contact__form-wrap { padding: 1.5rem; }
}
`,

// ─────────────────────────────────────────────
'src/components/Footer.css': `.footer {
  background: #0A0A0A;
  color: rgba(255,255,255,.75);
}

.footer__top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.6fr;
  gap: 3rem;
  padding: 5rem 0 3rem;
}

.footer__logo { display: flex; align-items: center; gap: .8rem; margin-bottom: 1rem; }
.footer__leaf { font-size: 2rem; color: var(--accent); }
.footer__logo span {
  font-family: var(--font-sans);
  font-weight: 900; font-size: 1.3rem;
  color: var(--white);
  line-height: 1.15; letter-spacing: .06em;
}
.footer__logo small { font-size: .6rem; letter-spacing: .18em; font-weight: 400; opacity: .7; }

.footer__tagline { font-size: .9rem; line-height: 1.65; margin-bottom: 1rem; max-width: 280px; }

.footer__orion-btn {
  display: inline-flex; align-items: center; gap: .45em;
  padding: .6rem 1.4rem;
  background: var(--accent);
  color: var(--white);
  font-weight: 700; font-size: .82rem; letter-spacing: .04em;
  border-radius: var(--radius-pill);
  margin-bottom: 1.5rem;
  transition: var(--transition);
  width: fit-content;
}
.footer__orion-btn:hover { background: var(--accent-dark); transform: translateY(-2px); }
.footer__orion-btn svg { font-size: 1.1em; }

.footer__socials { display: flex; gap: .75rem; }
.footer__social-btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.14);
  display: flex; align-items: center; justify-content: center;
  font-size: .95rem; color: rgba(255,255,255,.75);
  transition: var(--transition);
}
.footer__social-btn:hover {
  background: var(--accent); border-color: var(--accent);
  color: var(--white); transform: translateY(-3px);
}

.footer__col h4 {
  font-size: .75rem;
  font-family: var(--font-mono);
  font-weight: 700; letter-spacing: .16em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
}
.footer__col ul { display: flex; flex-direction: column; gap: .7rem; }
.footer__col a { font-size: .9rem; color: rgba(255,255,255,.6); transition: color .2s, padding-left .2s; }
.footer__col a:hover { color: var(--white); padding-left: 4px; }

.footer__newsletter h4 {
  font-size: .75rem;
  font-family: var(--font-mono);
  font-weight: 700; letter-spacing: .16em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
}
.footer__newsletter p { font-size: .88rem; margin-bottom: 1.2rem; line-height: 1.6; color: rgba(255,255,255,.6); }
.footer__newsletter-form { display: flex; gap: .6rem; flex-wrap: wrap; }
.footer__newsletter-form input {
  flex: 1; min-width: 0;
  padding: .65rem 1rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.07);
  color: var(--white);
  font-family: var(--font-sans); font-size: .88rem;
  outline: none; transition: border-color .25s;
}
.footer__newsletter-form input::placeholder { color: rgba(255,255,255,.4); }
.footer__newsletter-form input:focus { border-color: var(--accent); }
.footer__newsletter-form .btn { padding: .65rem 1.4rem; font-size: .85rem; white-space: nowrap; }

.footer__bottom {
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: .5rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255,255,255,.08);
  font-size: .82rem; color: rgba(255,255,255,.4);
}

@media (max-width: 1100px) { .footer__top { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) {
  .footer__top { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 0 2rem; }
  .footer__bottom { flex-direction: column; text-align: center; }
}
`,

// ─────────────────────────────────────────────
'src/components/SocialBar.css': `.social-bar {
  position: fixed;
  right: 0; top: 50%;
  transform: translateY(-50%);
  z-index: 900;
  display: flex; flex-direction: column; gap: 0;
}

.social-bar__btn {
  display: flex; align-items: center; gap: .6em;
  background: var(--color, var(--text-dark));
  color: var(--white);
  padding: .7rem .65rem;
  font-size: 1.1rem;
  transition: padding-right .3s ease, background .2s;
  overflow: hidden; max-width: 42px;
  white-space: nowrap; border-radius: 0; opacity: .85;
}
.social-bar__btn:first-child { border-radius: var(--radius-sm) 0 0 0; }
.social-bar__btn:last-child { border-radius: 0 0 0 var(--radius-sm); }
.social-bar__btn:hover { max-width: 160px; padding-right: 1rem; opacity: 1; background: var(--accent); }

.social-bar__label {
  font-size: .78rem; font-weight: 700; letter-spacing: .04em;
  opacity: 0; max-width: 0;
  transition: opacity .25s .05s ease, max-width .3s ease;
  pointer-events: none;
}
.social-bar__btn:hover .social-bar__label { opacity: 1; max-width: 100px; }

@media (max-width: 768px) { .social-bar { display: none; } }
`,

};

for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
  console.log('written:', file);
}
console.log('\nAll done!');
