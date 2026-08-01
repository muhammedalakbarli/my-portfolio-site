/* ═══════════════════════════════════════
   MEDIUM → BLOG inteqrasiyası — fetch-medium.js

   Medium-da yeni yazı paylaşdıqda avtomatik olaraq
   bu səhifədə görünür. Heç bir əl ilə əlavə lazım deyil.

   İstifadəçi adını dəyişmək üçün MEDIUM_USER-i redaktə et.
   Brauzer birbaşa Medium feed-inə çıxa bilmədiyi üçün (CORS)
   rss2json CORS-proxy-si vasitəsilə oxunur.
═══════════════════════════════════════ */

const MEDIUM_USER = '@mahammad.alakbarli';
const MEDIUM_FEED = `https://medium.com/feed/${MEDIUM_USER}`;
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED)}`;

function _mediumStripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

async function fetchAndRenderMedium() {
  try {
    const res = await fetch(RSS2JSON_URL);
    if (!res.ok) return;
    const data = await res.json();
    if (data.status !== 'ok' || !Array.isArray(data.items) || data.items.length === 0) return;

    data.items.forEach((item, i) => {
      const text = _mediumStripHtml(item.description || item.content);
      const excerpt = text.slice(0, 150).trim() + (text.length > 150 ? '…' : '');
      const date = item.pubDate
        ? new Date(item.pubDate.replace(' ', 'T')).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
        : '';
      const cat = Array.isArray(item.categories) && item.categories[0];
      const tag = cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Medium';

      POSTS.push({
        id:      3000 + i,
        date,
        tag,
        title:   item.title || '',
        excerpt,
        content: item.content || item.description || '',
        html:    true,           // content HTML-dir (mətn deyil)
        link:    item.link || null,
      });
    });

    renderPosts();
  } catch (err) {
    console.error('Medium yazıları gətirilərkən xəta:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderMedium);
