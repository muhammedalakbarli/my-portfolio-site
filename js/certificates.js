/* ═══════════════════════════════════════
   CERTIFICATES — certificates.js

   Sahələr:
     name    — sertifikatın adı
     issuer  — kim tərəfindən verilib
     date    — tarix (məs. "2024" və ya "Mar 2024")
     link    — sertifikata link (və ya null)
     icon    — emoji və ya simvol (seçimlə)
═══════════════════════════════════════ */

const CERTIFICATES = [
  // {
  //   name:   "Full-Stack Web Development",
  //   issuer: "Holberton School",
  //   date:   "2024",
  //   link:   "https://...",
  //   icon:   "◈"
  // },
];

/* ─── aşağını dəyişmə ─── */

function renderCerts() {
  const grid = document.getElementById('certs-grid');

  if (!CERTIFICATES.length) {
    grid.innerHTML = `<p class="empty-msg">${t('certs_empty')}</p>`;
    return;
  }

  grid.innerHTML = CERTIFICATES.map((c, i) => `
    <div class="card cert-card fade-in" style="animation-delay:${i * 0.07}s"
      ${c.link ? `onclick="window.open('${c.link}','_blank')" style="cursor:pointer"` : ''}>
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
