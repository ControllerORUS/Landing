const fs = require('fs');

const fix = t => t
  // Vocales con tilde
  .replace(/Ã¡/g,'á').replace(/Ã©/g,'é').replace(/Ã­/g,'í').replace(/Ã³/g,'ó').replace(/Ãº/g,'ú')
  .replace(/Ã /g,'À').replace(/Ã¨/g,'è').replace(/Ã¬/g,'ì').replace(/Ã²/g,'ò').replace(/Ã¹/g,'ù')
  .replace(/Ã„/g,'Ä').replace(/Ã‰/g,'É').replace(/Ã/g,'Í').replace(/Ã"/g,'Ó').replace(/Ãš/g,'Ú')
  .replace(/Ã±/g,'ñ').replace(/Ã'/g,'Ñ')
  .replace(/Â¡/g,'¡').replace(/Â¿/g,'¿')
  .replace(/â€"/g,'–').replace(/â€œ/g,'"').replace(/â€/g,'"')
  .replace(/â†'/g,'→').replace(/Â·/g,'·');

const files = [
  'src/components/Services.jsx',
  'src/components/About.jsx',
  'src/components/Contact.jsx',
  'src/components/Footer.jsx',
  'src/components/Navbar.jsx',
  'src/components/Partners.jsx',
  'src/components/Hero.jsx',
];

for (const f of files) {
  try {
    const orig = fs.readFileSync(f, 'utf8');
    const fixed = fix(orig);
    if (fixed !== orig) {
      fs.writeFileSync(f, fixed, 'utf8');
      console.log('fixed:', f);
    } else {
      console.log('clean:', f);
    }
  } catch(e) {
    console.log('skip:', f, e.message);
  }
}
console.log('done');
