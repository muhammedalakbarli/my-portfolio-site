/* ═══════════════════════════════════════
   TEKNOFEST 2026 — teknofest.js

   Ana səhifədəki "Son xəbər" kartının vizualı:
   332 nöqtə (müraciət edən komandalar) → 22 finalçı → #3 (Chevir).
   Kart ekrana girəndə üç mərhələ ardıcıl oynayır; reduced-motion
   istifadəçiləri birbaşa son vəziyyəti görür.
═══════════════════════════════════════ */

(function () {
  const TEAMS     = 332;
  const FINALISTS = 22;
  const COLS      = 28;
  const OURS      = 4 * COLS + 15;   // 5-ci sıra, 16-cı sütun — etiket kənara sığsın

  // Deterministik PRNG (mulberry32): hər yükləmədə eyni naxış
  function rng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function build(field) {
    const rand = rng(2026);
    const finalists = new Set([OURS]);
    while (finalists.size < FINALISTS) finalists.add(Math.floor(rand() * TEAMS));
    const podium = [...finalists].filter(i => i !== OURS).slice(0, 2);

    const html = [];
    for (let i = 0; i < TEAMS; i++) {
      const row = Math.floor(i / COLS), col = i % COLS;
      let cls = 'd';
      if (finalists.has(i)) cls += ' f';
      if (podium.includes(i)) cls += ' p';
      if (i === OURS) cls += ' w';
      const style = `--d:${col * 16 + row * 26}ms;--f:${Math.floor(rand() * 420)}ms`;
      html.push(`<span class="${cls}" style="${style}">${i === OURS ? '<span class="tf-tag">Chevir</span>' : ''}</span>`);
    }
    field.innerHTML = html.join('');
  }

  function countUp(el, to, ms) {
    const t0 = performance.now();
    function tick(now) {
      const k = Math.min(1, (now - t0) / ms);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function play(spot) {
    const num = spot.querySelector('.tf-num[data-count]');
    spot.classList.add('s1');
    if (num) countUp(num, +num.dataset.count, 1100);
    setTimeout(() => spot.classList.add('s2'), 1500);
    setTimeout(() => spot.classList.add('s3'), 2900);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const spot  = document.getElementById('spotlight');
    const field = document.getElementById('tf-field');
    if (!spot || !field) return;
    build(field);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      spot.classList.add('no-anim', 's1', 's2', 's3');
      return;
    }

    const num = spot.querySelector('.tf-num[data-count]');
    if (num) num.textContent = '0';

    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect();
        play(spot);
      }
    }, { threshold: 0.35 });
    io.observe(field);
  });
})();
