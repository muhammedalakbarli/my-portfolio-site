/* ═══════════════════════════════════════
   CERTIFICATES — certificates.js

   Sahələr:
     name    — sertifikatın adı
     issuer  — kim tərəfindən verilib
     date    — tarix (məs. "2024" və ya "Mar 2024")
     link    — sertifikata link (və ya null)
     icon    — emoji və ya simvol (seçimlə)
     image   — şəkil (seçimlə; icon-un yerinə)

   Sanity-dəki sertifikatlar bu siyahıya əlavə olunur (eyni adlılar
   təkrarlanmır), sonra hamısı tarixə görə sıralanır — fetch-certificates.js.
═══════════════════════════════════════ */

const CERTIFICATES = [
  {
    name:   "Pre Security",
    issuer: "TryHackMe",
    date:   "Apr 2026",
    link:   "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-WGQ97NGTK6.pdf",
    image:  "../assets/certs/thm-pre-security.png",
  },
  {
    name:   "Build Your Portfolio Website with HTML and CSS",
    issuer: "Coursera Project Network",
    date:   "Mar 2026",
    link:   "https://www.coursera.org/account/accomplishments/records/QUL1R4AU21DJ",
    icon:   "◈",
  },
  {
    name:   "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date:   "Mar 2026",
    link:   "https://coursera.org/share/40dd77c5cf70b78fde48d58809e0bdf1",
    image:  "https://cdn.sanity.io/images/0y15vxbi/production/b704e68c2e6946f5a339ca876edeb321d6aacd8b-1065x819.png?w=400&fit=max&auto=format",
  },
  {
    name:   "Foundations of Cybersecurity",
    issuer: "Google",
    date:   "Jan 2026",
    link:   "https://coursera.org/share/47f48183c68ecd124c9e29fb283a43ab",
    image:  "https://cdn.sanity.io/images/0y15vxbi/production/7682ddd5e9e84f7dc5d48e8af74d32bfe37a0188-1060x821.png?w=400&fit=max&auto=format",
  },
  {
    name:   "Ethical Hacking with Kali Linux",
    issuer: "IBM",
    date:   "Oct 2025",
    link:   "https://coursera.org/share/5ce5e055ee4e980eadfa0bae76dca237",
    image:  "https://cdn.sanity.io/images/0y15vxbi/production/204da4315a9a72c60720d8bfc3cc2dff1e81fc45-950x738.png?w=400&fit=max&auto=format",
  },
  {
    name:   "Introduction to Ethical Hacking Principles",
    issuer: "SkillUp",
    date:   "Sep 2025",
    link:   "https://coursera.org/share/e4e3174fbc57abf20f5b40efe16cc44c",
    image:  "https://cdn.sanity.io/images/0y15vxbi/production/b5ad04db808bb168ff8feab1c15ee25e5586f6d7-953x734.png?w=400&fit=max&auto=format",
  },
];

/* ─── aşağını dəyişmə ─── */

function renderCerts() {
  const grid = document.getElementById('certs-grid');

  if (!CERTIFICATES.length) {
    grid.innerHTML = `<p class="empty-msg">${t('certs_empty')}</p>`;
    return;
  }

  grid.innerHTML = CERTIFICATES.map((c, i) => `
    <div class="card cert-card fade-in" style="animation-delay:${i * 0.07}s${c.link ? ';cursor:pointer' : ''}"
      ${c.link ? `onclick="window.open('${c.link}','_blank')"` : ''}>
      ${c.image
        ? `<img class="cert-image" src="${c.image}" alt="${c.name}" loading="lazy">`
        : `<div class="cert-icon">${c.icon || '◆'}</div>`
      }
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-date">${c.date}</div>
      ${c.link ? `<div class="cert-verify">${t('certs_verify')}</div>` : ''}
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCerts);
