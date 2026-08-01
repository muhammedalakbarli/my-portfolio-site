/* ═══════════════════════════════════════
   MEDIUM → BLOG inteqrasiyası — fetch-medium.js

   Medium-da yeni yazı paylaşdıqda avtomatik olaraq
   bu səhifədə görünür. Heç bir əl ilə əlavə lazım deyil.

   Brauzer birbaşa Medium feed-inə çıxa bilmədiyi üçün (CORS)
   canlı CORS-proxy-lər vasitəsilə oxunur. Hər dəfə cache-bust
   edilir ki, YENİ yazılar dərhal görünsün (keş gecikməsi olmasın).
   Bir proxy cavab verməsə, növbəti sınanır.

   İstifadəçi adını dəyişmək üçün MEDIUM_USER-i redaktə et.
═══════════════════════════════════════ */

const MEDIUM_USER = '@mahammad.alakbarli';
const MEDIUM_FEED = `https://medium.com/feed/${MEDIUM_USER}`;

let _mediumLoaded = false;

function _mediumStripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

function _mediumDate(s) {
  if (!s) return '';
  // rss2json "2026-04-05 19:27:25" formatını da, RSS RFC-822 formatını da dəstəklə
  const norm = /^\d{4}-\d{2}-\d{2} /.test(s) ? s.replace(' ', 'T') : s;
  const d = new Date(norm);
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function _mediumParseXml(xmlString) {
  const xml = new DOMParser().parseFromString(xmlString, 'text/xml');
  if (xml.querySelector('parsererror')) return [];
  return [...xml.querySelectorAll('item')].map(item => ({
    title:      item.querySelector('title')?.textContent || '',
    link:       item.querySelector('link')?.textContent || '',
    pubDate:    item.querySelector('pubDate')?.textContent || '',
    categories: [...item.querySelectorAll('category')].map(c => c.textContent),
    contentHtml: item.getElementsByTagName('content:encoded')[0]?.textContent
                 || item.querySelector('description')?.textContent || '',
  }));
}

function _mediumRender(items) {
  items.forEach((it, i) => {
    const text = _mediumStripHtml(it.contentHtml);
    const excerpt = text.slice(0, 150).trim() + (text.length > 150 ? '…' : '');
    const cat = Array.isArray(it.categories) && it.categories[0];
    const tag = cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Medium';
    POSTS.push({
      id:      3000 + i,
      date:    _mediumDate(it.pubDate),
      tag,
      title:   it.title || '',
      excerpt,
      content: it.contentHtml || '',
      html:    true,          // content HTML-dir (mətn deyil)
      link:    it.link || null,
    });
  });
  renderPosts();
}

async function fetchAndRenderMedium() {
  if (_mediumLoaded) return;
  const enc  = encodeURIComponent(MEDIUM_FEED);
  const bust = Date.now();

  // Sıra ilə sınanan mənbələr — canlı olanlar öndədir
  const sources = [
    { url: `https://api.allorigins.win/raw?url=${enc}&t=${bust}`, kind: 'xml' },
    { url: `https://api.allorigins.win/get?url=${enc}&t=${bust}`, kind: 'wrapped' },
    { url: `https://api.rss2json.com/v1/api.json?rss_url=${enc}&_=${bust}`, kind: 'json' },
  ];

  for (const src of sources) {
    try {
      const res = await fetch(src.url);
      if (!res.ok) continue;

      let items = [];
      if (src.kind === 'json') {
        const data = await res.json();
        if (data.status !== 'ok' || !Array.isArray(data.items) || !data.items.length) continue;
        items = data.items.map(it => ({
          title:       it.title,
          link:        it.link,
          pubDate:     it.pubDate,
          categories:  it.categories,
          contentHtml: it.content || it.description || '',
        }));
      } else {
        const raw = src.kind === 'wrapped' ? (await res.json()).contents : await res.text();
        items = _mediumParseXml(raw);
      }

      if (!items.length) continue;
      _mediumRender(items);
      _mediumLoaded = true;
      return;
    } catch (err) {
      /* bu mənbə uğursuz oldu — növbətini sına */
    }
  }
  console.warn('Medium: heç bir proxy cavab vermədi.');
}

document.addEventListener('DOMContentLoaded', fetchAndRenderMedium);
