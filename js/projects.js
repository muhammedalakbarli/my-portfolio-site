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
    name:   "Chevir — Sign Language Translator",
    desc:   "Real-time translation between Azerbaijani Sign Language and text. Sign recognition from hand, body and face landmarks (trained on the AzSLD dataset) and text-to-sign through a 3D avatar — all in the browser.",
    tags:   ["Machine Learning", "MediaPipe", "JavaScript", "Three.js", "Vite"],
    github: "https://github.com/Chevir-App-Development-Team/chevir-app-vers-1.0",
    live:   "https://chevirapp.com",
    star:   true
  },
  {
    name:   "Imparo — Adaptive Learning Platform",
    desc:   "Adaptive learning platform for Azerbaijani schoolchildren (grades 1–8): a 154-skill knowledge graph, per-skill mastery model, personalised practice and spaced repetition.",
    tags:   ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare Workers"],
    github: "https://github.com/muhammedalakbarli/imparo",
    live:   "https://imparo.app",
    star:   true
  },
  {
    name:   "SIHA — UAV AI Vision System",
    desc:   "Real-time computer-vision system for drones: object detection, HUD overlay, target tracking, geofencing, and MAVLink ground-control integration.",
    tags:   ["Python", "Computer Vision", "OpenCV", "MAVLink", "Docker"],
    github: "https://github.com/muhammedalakbarli/SIHA",
    live:   null,
    star:   true
  },
  {
    name:   "cvault — Vulnerability Triage CLI",
    desc:   "Scans a project's dependencies and ranks CVEs by real-world exploitation (CISA KEV + FIRST EPSS), with exact upgrade recommendations. Powered by NVD and OSV.dev.",
    tags:   ["Python", "Security", "CLI", "NVD / OSV"],
    github: "https://github.com/muhammedalakbarli/cvault",
    live:   null,
    star:   true
  },
  {
    name:   "RocketShield — Air Defense Simulation",
    desc:   "Physics-accurate multi-layer air-defense simulation featuring Proportional Navigation guidance, a 9-state Kalman filter, and threat-prioritization AI.",
    tags:   ["JavaScript", "Simulation", "Kalman Filter", "Canvas"],
    github: "https://github.com/muhammedalakbarli/RocketShield",
    live:   null,
    star:   false
  },
  {
    name:   "OnkoDestek — Charity Platform",
    desc:   "Transparent charity platform connecting donors with oncology patients in Azerbaijan, with verified campaigns and donation tracking.",
    tags:   ["Next.js", "TypeScript", "Vercel"],
    github: "https://github.com/muhammedalakbarli/onkodestek",
    live:   "https://onkodestek.vercel.app",
    star:   false
  },
  {
    name:   "FluxSalesBot — AI Sales Assistant",
    desc:   "AI sales assistant for SMEs in Azerbaijan. Automates customer support, order handling, and real-time inventory via Google Sheets — 24/7 in Azerbaijani.",
    tags:   ["Python", "Claude API", "Telegram Bot API", "Google Sheets"],
    github: "https://github.com/muhammedalakbarli/FluxSalesBot",
    live:   null,
    star:   false
  },
  {
    name:   "Browser Presenter",
    desc:   "Browser extension for presenting: draw annotations over any page and drive a virtual mouse from the keyboard. Works in Chrome, Edge, Brave, Opera and Firefox.",
    tags:   ["JavaScript", "Browser Extension"],
    github: "https://github.com/muhammedalakbarli/browser-presenter",
    live:   null,
    star:   false
  },
  {
    name:   "Blog Scraper API",
    desc:   "Dockerized web-scraping API built with FastAPI and PostgreSQL, following a clean, modular service-layer architecture.",
    tags:   ["Python", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/muhammedalakbarli/blog-scraper",
    live:   null,
    star:   false
  },
  {
    name:   "Touchless Control Suite",
    desc:   "Control the mouse with hand gestures and face tracking in real time using MediaPipe and OpenCV.",
    tags:   ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
    github: "https://github.com/muhammedalakbarli/touchless-control-suite",
    live:   null,
    star:   false
  },
  {
    name:   "InvestX Dashboard",
    desc:   "Responsive investment-analytics dashboard with a modular SCSS architecture and interactive data widgets.",
    tags:   ["JavaScript", "SCSS", "Dashboard UI"],
    github: "https://github.com/muhammedalakbarli/investx-dashboard",
    live:   "https://investx-dashboard.vercel.app",
    star:   false
  },
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
