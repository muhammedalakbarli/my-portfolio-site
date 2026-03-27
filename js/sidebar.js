/* ═══════════════════════════════════════
   SIDEBAR — sidebar.js
   Include in every page
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const pathParts = window.location.pathname.split('/');
  const inPages = pathParts[pathParts.length - 2] === 'pages';
  const p = inPages ? '' : 'pages/';
  const homeHref = inPages ? '../index.html' : 'index.html';

  const sidebar = `
<div class="bg-glow"></div>

<nav id="sidebar">
  <div class="brand">
    <div class="brand-label">Portfolio</div>
    <div class="brand-name">MAHAMMAD <span>Alakbarli</span></div>
  </div>

  <ul class="nav-links">
    <li><a href="${homeHref}"           data-page="home">
      <span class="nav-icon">⌂</span><span data-i18n="nav_home">Home</span>
    </a></li>
    <li><a href="${p}about.html"        data-page="about">
      <span class="nav-icon">◎</span><span data-i18n="nav_about">About</span>
    </a></li>
    <li><a href="${p}blogs.html"        data-page="blogs">
      <span class="nav-icon">✦</span><span data-i18n="nav_blogs">Blog</span>
    </a></li>
    <li><a href="${p}projects.html"     data-page="projects">
      <span class="nav-icon">◈</span><span data-i18n="nav_projects">Projects</span>
    </a></li>
    <li><a href="${p}certificates.html" data-page="certificates">
      <span class="nav-icon">◆</span><span data-i18n="nav_certificates">Certificates</span>
    </a></li>
    <li><a href="${p}contact.html"      data-page="contact">
      <span class="nav-icon">◇</span><span data-i18n="nav_contact">Contact</span>
    </a></li>
  </ul>

  <div class="sidebar-footer">
    <a href="https://www.linkedin.com/in/mahammad-alakbarli-3713a8351/" target="_blank" class="social-btn" title="LinkedIn">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://github.com/muhammedalakbarli" target="_blank" class="social-btn" title="GitHub">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    </a>
    <a href="https://instagram.com/muhammed.alakbarli" target="_blank" class="social-btn" title="Instagram">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    </a>
  </div>
</nav>
`;

  document.body.insertAdjacentHTML('afterbegin', sidebar);

  // Mark active nav item
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current || (current === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Language picker (fixed top-right)
  const currentLang = localStorage.getItem('lang') || 'az';
  const langPicker = `
<div id="lang-picker">
  <button id="lang-current" onclick="toggleLangMenu()" aria-haspopup="true">
    <span id="lang-label">${currentLang.toUpperCase()}</span>
    <svg width="9" height="9" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M1 1l4 4 4-4"/></svg>
  </button>
  <ul id="lang-menu">
    <li><button onclick="chooseLang('az')">AZ</button></li>
    <li><button onclick="chooseLang('en')">EN</button></li>
    <li><button onclick="chooseLang('ru')">RU</button></li>
    <li><button onclick="chooseLang('de')">DE</button></li>
  </ul>
</div>
`;
  document.body.insertAdjacentHTML('beforeend', langPicker);

  // Close menu when clicking outside
  document.addEventListener('click', e => {
    const picker = document.getElementById('lang-picker');
    if (picker && !picker.contains(e.target)) {
      picker.classList.remove('open');
    }
  });

  // Apply translations after sidebar is in the DOM
  if (typeof applyTranslations === 'function') applyTranslations();
});
