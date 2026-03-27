/* ═══════════════════════════════════════
   PROJECTS — projects.js

   Sahələr:
     name    — layihənin adı
     desc    — qısa açıqlama
     tags    — texnologiyalar (array)
     github  — GitHub linki (və ya null)
     live    — canlı demo linki (və ya null)
     star    — true olarsa "Featured" badge göstərilir
═══════════════════════════════════════ */

const PROJECTS = [
  {
    name:   "Portfolio Website",
    desc:   "Şəxsi portfolio saytı. Multi-page struktur, glassmorphism dizayn, dinamik blog sistemi.",
    tags:   ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/muhammedalakbarli",
    live:   null,
    star:   true
  },
  // {
  //   name:   "Layihə Adı",
  //   desc:   "Qısa açıqlama.",
  //   tags:   ["Python", "Flask"],
  //   github: "https://github.com/muhammedalakbarli/repo-adi",
  //   live:   "https://canli-link.com",
  //   star:   false
  // },
];

/* ─── aşağını dəyişmə ─── */

function renderProjects() {
  const grid = document.getElementById('projects-grid');

  if (!PROJECTS.length) {
    grid.innerHTML = `<p class="empty-msg">${t('projects_empty')}</p>`;
    return;
  }

  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="card proj-card fade-in" style="animation-delay:${i * 0.08}s">
      ${p.image ? `<img class="proj-image" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
      ${p.star ? '<span class="featured-badge">Featured</span>' : ''}
      <div class="proj-name">${p.name}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">
        ${p.tags.map(tag => `<span class="proj-tag">${tag}</span>`).join('')}
      </div>
      <div class="proj-links">
        ${p.github ? `<a href="${p.github}" target="_blank" class="proj-link">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>` : ''}
        ${p.live ? `<a href="${p.live}" target="_blank" class="proj-link proj-live">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live
        </a>` : ''}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
