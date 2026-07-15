/* ─── i18n ─────────────────────────────────────────────── */

const translations = {
  es: {
    navAbout:           'Sobre mí',
    navExperience:      'Experiencia',
    navSkills:          'Habilidades',
    navProjects:        'Trabajo destacado',
    navContent:         'Contenido',
    navContact:         'Contacto',
    heroLabel:          'Estrategia de contenido · EdTech',
    heroTagline:        'Estratega de contenido con fluencia tecnológica. Diseña programas, lidera producción multimedia y traduce lo técnico en aprendizaje.',
    aboutTitle:         'Sobre mí',
    expTitle:           'Experiencia',
    skillsTitle:        'Habilidades',
    skillsMedia:        'Producción Multimedia',
    skillsInstructional:'Diseño Instruccional',
    skillsAI:           'IA Generativa',
    skillsPM:           'Productividad y Gestión',
    skillsUX:           'UX/UI',
    skillsWeb:          'Web (literacy técnica)',
    inProgress:         '(en proceso)',
    projectsTitle:      'Trabajo Destacado',
    badgePersonal:      'Proyecto personal',
    badgeWork:          'Trabajo profesional',
    contentTitle:       'Contenido',
    videoSectionTitle:  'Video',
    blogSectionTitle:   'Blog y Escritura',
    comingSoonVideo:    'Próximamente',
    comingSoonVideoSub: 'Contenido en producción — reel educativo y piezas de video',
    comingSoonBlog:     'Próximamente',
    comingSoonBlogSub:  'Artículos sobre estrategia de contenido, EdTech y producción multimedia',
  },
  en: {
    navAbout:           'About',
    navExperience:      'Experience',
    navSkills:          'Skills',
    navProjects:        'Featured Work',
    navContent:         'Content',
    navContact:         'Contact',
    heroLabel:          'Content Strategy · EdTech',
    heroTagline:        'Content strategist with technological fluency. Designs programs, leads multimedia production, and turns technical complexity into learning.',
    aboutTitle:         'About',
    expTitle:           'Experience',
    skillsTitle:        'Skills',
    skillsMedia:        'Multimedia Production',
    skillsInstructional:'Instructional Design',
    skillsAI:           'Generative AI',
    skillsPM:           'Productivity & Management',
    skillsUX:           'UX/UI',
    skillsWeb:          'Web (technical literacy)',
    inProgress:         '(in progress)',
    projectsTitle:      'Featured Work',
    badgePersonal:      'Personal project',
    badgeWork:          'Professional work',
    contentTitle:       'Content',
    videoSectionTitle:  'Video',
    blogSectionTitle:   'Blog & Writing',
    comingSoonVideo:    'Coming Soon',
    comingSoonVideoSub: 'Content in production — educational reel and video pieces',
    comingSoonBlog:     'Coming Soon',
    comingSoonBlogSub:  'Articles on content strategy, EdTech, and multimedia production',
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;

  // Update short text via data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Toggle long content blocks via data-lang
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.dataset.lang === lang ? '' : 'none';
  });

  // Update toggle button state
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  // Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
}

function toggleLang() {
  setLang(currentLang === 'es' ? 'en' : 'es');
}

/* ─── Navbar scroll shadow ─────────────────────────────── */

function initNavScroll() {
  const nav = document.getElementById('main-nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ─── Mobile hamburger ─────────────────────────────────── */

function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

/* ─── Init ─────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  setLang('es'); // default language
});
