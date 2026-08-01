/* ═══════════════════════════════════════
   MEDIUM → BLOG inteqrasiyası — fetch-medium.js

   Yazılar saytın ÖZ domenindəki statik fayldan oxunur:
   data/medium.json — heç bir üçüncü tərəf proxy, CORS və ya
   reklam-bloklayıcı problemi yoxdur.

   Bu faylı GitHub Actions avtomatik yeniləyir (hər saat + əl ilə),
   bax: scripts/medium_to_json.py və .github/workflows/medium.yml
═══════════════════════════════════════ */

function _mediumStripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

function _mediumDate(s) {
  if (!s) return '';
  const norm = /^\d{4}-\d{2}-\d{2} /.test(s) ? s.replace(' ', 'T') : s;
  const d = new Date(norm);
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

async function fetchAndRenderMedium() {
  try {
    // cache-bust ki, yenilənmiş feed dərhal gəlsin (CDN keşini keç)
    const res = await fetch('../data/medium.json?_=' + Date.now());
    if (!res.ok) return;
    const items = await res.json();
    if (!Array.isArray(items) || items.length === 0) return;

    items.forEach((it, i) => {
      const text = _mediumStripHtml(it.content);
      const excerpt = text.slice(0, 150).trim() + (text.length > 150 ? '…' : '');
      const cat = Array.isArray(it.categories) && it.categories[0];
      const tag = cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Medium';

      POSTS.push({
        id:      3000 + i,
        date:    _mediumDate(it.pubDate),
        tag,
        title:   it.title || '',
        excerpt,
        content: it.content || '',
        html:    true,          // content HTML-dir (mətn deyil)
        link:    it.link || null,
      });
    });

    renderPosts();
  } catch (err) {
    console.error('Medium yazıları gətirilərkən xəta:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderMedium);
