/* ═══════════════════════════════════════
   BLOGS — blogs.js
   Yeni post əlavə etmək üçün aşağıdakı
   POSTS array-inə yeni obyekt əlavə et.
═══════════════════════════════════════ */

const POSTS = [
  // {
  //   id:      1,                         // unikal rəqəm
  //   date:    'Mar 2026',
  //   tag:     'Tech',                    // Tech | Engineering | Life | Design | AI | Other
  //   title:   'Başlıq buraya',
  //   excerpt: 'Qısa xülasə...',
  //   content: `Uzun mətn buraya.
  //
  // İkinci paraqraf (boş sətir ilə ayrılır).`
  // },
];

/* ─── aşağını dəyişmə ─── */

function renderPosts() {
  const grid  = document.getElementById('blog-grid');
  const empty = document.getElementById('blog-empty');

  if (!POSTS.length) {
    grid.innerHTML = '';
    empty.textContent = t('blogs_empty');
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = POSTS.map((p, i) => `
    <div class="card blog-card fade-in" style="animation-delay:${i * 0.07}s" onclick="openPost(${p.id})">
      <div class="blog-meta">
        <span class="blog-tag">${p.tag}</span>
        <span class="blog-date">${p.date}</span>
      </div>
      <div class="blog-title">${p.title}</div>
      <div class="blog-excerpt">${p.excerpt}</div>
      <div class="blog-more">${t('blogs_read')}</div>
    </div>
  `).join('');
}

function openPost(id) {
  const post = POSTS.find(p => p.id === id);
  if (!post) return;

  document.getElementById('blog-list').style.display   = 'none';
  document.getElementById('blog-detail').style.display = 'block';

  document.getElementById('detail-inner').innerHTML = `
    <div class="blog-meta detail-meta">
      <span class="blog-tag">${post.tag}</span>
      <span class="blog-date">${post.date}</span>
    </div>
    <div class="detail-title">${post.title}</div>
    <div class="detail-body">
      ${post.content.split(/\n\n+/).map(p => `<p>${p.replace(/\n/g,'<br>')}</p>`).join('')}
    </div>
  `;
}

function closeDetail() {
  document.getElementById('blog-list').style.display   = 'block';
  document.getElementById('blog-detail').style.display = 'none';
}

// İlkin render — fetch-blogs.js data gətirəndən sonra yenidən renderPosts() çağırır
document.addEventListener('DOMContentLoaded', renderPosts);
