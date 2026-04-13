/* ─── i18n ─────────────────────────────────────────────── */

const translations = {
  es: {
    navAbout:       'Sobre mí',
    navExperience:  'Experiencia',
    navSkills:      'Habilidades',
    navProjects:    'Proyectos',
    navContact:     'Contacto',
    heroLabel:      'Portafolio profesional',
    heroTagline:    'Comunicador que entiende tecnología',
    aboutTitle:     'Sobre mí',
    expTitle:       'Experiencia',
    skillsTitle:    'Habilidades',
    skillsWeb:      'Desarrollo Web',
    skillsContent:  'Producción de Contenido',
    skillsAI:       'IA Generativa',
    skillsPM:       'Productividad y Gestión',
    skillsUX:       'Diseño UX/UI',
    inProgress:     '(en proceso)',
    projectsTitle:  'Proyectos',
    badgePersonal:  'Proyecto personal',
    badgeWIP:       'En progreso',
  },
  en: {
    navAbout:       'About',
    navExperience:  'Experience',
    navSkills:      'Skills',
    navProjects:    'Projects',
    navContact:     'Contact',
    heroLabel:      'Professional portfolio',
    heroTagline:    'Communicator who understands technology',
    aboutTitle:     'About',
    expTitle:       'Experience',
    skillsTitle:    'Skills',
    skillsWeb:      'Web Development',
    skillsContent:  'Content Production',
    skillsAI:       'Generative AI',
    skillsPM:       'Productivity & Project Management',
    skillsUX:       'UX/UI Design',
    inProgress:     '(in progress)',
    projectsTitle:  'Projects',
    badgePersonal:  'Personal project',
    badgeWIP:       'In progress',
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
