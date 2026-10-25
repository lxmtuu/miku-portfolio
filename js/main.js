/* ============================================================
   MAIN — router chuyển cảnh sân khấu, song ngữ Anh – Việt (VI / EN),
          carousel trượt kéo dự án, hiệu ứng spotlight 3D, piano mini, lightbox
   ============================================================ */
(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* ---------- Quản lý Ngôn ngữ (VI / EN) ---------- */
  let currentLang = 'vi';
  try {
    const saved = localStorage.getItem('miku-lang');
    if (saved === 'en' || saved === 'vi') currentLang = saved;
  } catch (e) {}

  function t(key) {
    const dict = (window.I18N && window.I18N[currentLang]) || (window.I18N && window.I18N.vi) || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  function pick(obj, field) {
    if (!obj) return '';
    if (currentLang === 'en' && obj[field + '_en'] !== undefined) return obj[field + '_en'];
    return obj[field];
  }

  /* ---------- Icon mạng xã hội & nền tảng dev (SVG inline) ---------- */
  const ICONS = {
    facebook: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.4" fill="currentColor" stroke="none"/></svg>',
    discord: '<svg viewBox="0 0 24 24"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.08.08 0 0 0-.08-.04c-1.71.3-3.35.81-4.88 1.52a.07.07 0 0 0-.04.03C.53 9.05-.32 13.58.1 18.06c0 .02.01.04.03.06a19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1-.01-.12c.13-.1.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.64-1.87.89a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6.02-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    wakatime: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9.5"/><path d="M12 7v5l3.5 2.2"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.75a5.76 5.76 0 1 0 5.02 5.7V8.9a7.35 7.35 0 0 0 4.3 1.38V7.2a4.28 4.28 0 0 1-3.33-1.38z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.24 3.6-6.24 3.6z"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/></svg>',
    email: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3.5 6.5 8.5 7 8.5-7"/></svg>'
  };

  const ROUTE_META = {
    vi: {
      home:    { stage: 'STAGE 01', label: 'TRANG CHỦ ✦',        title: 'Lê Xuân Minh Tú (Yami) ✦ Fullstack Developer & Software Engineer' },
      about:   { stage: 'STAGE 02', label: 'HỒ SƠ & CV 💻',       title: 'Hồ sơ & CV ✦ Lê Xuân Minh Tú (Yami)' },
      gallery: { stage: 'STAGE 03', label: 'DỰ ÁN TIÊU BIỂU 🚀',  title: 'Dự án Tiêu biểu ✦ Lê Xuân Minh Tú (Yami)' },
      hobbies: { stage: 'STAGE 04', label: 'SỞ THÍCH & ĐAM MÊ ✨', title: 'Sở thích ✦ Lê Xuân Minh Tú (Yami)' },
      contact: { stage: 'STAGE 05', label: 'KẾT NỐI & HỢP TÁC 💌', title: 'Liên hệ & Hợp tác ✦ Lê Xuân Minh Tú (Yami)' }
    },
    en: {
      home:    { stage: 'STAGE 01', label: 'HOME STAGE ✦',         title: 'Lê Xuân Minh Tú (Yami) ✦ Fullstack Developer & Software Engineer' },
      about:   { stage: 'STAGE 02', label: 'PROFILE & CV 💻',      title: 'Profile & CV ✦ Lê Xuân Minh Tú (Yami)' },
      gallery: { stage: 'STAGE 03', label: 'FEATURED PROJECTS 🚀', title: 'Featured Projects ✦ Lê Xuân Minh Tú (Yami)' },
      hobbies: { stage: 'STAGE 04', label: 'HOBBIES & PASSIONS ✨', title: 'Hobbies ✦ Lê Xuân Minh Tú (Yami)' },
      contact: { stage: 'STAGE 05', label: 'CONNECT & COLLAB 💌',  title: 'Contact & Collaborate ✦ Lê Xuân Minh Tú (Yami)' }
    }
  };

  function getRouteMeta(route) {
    const map = ROUTE_META[currentLang] || ROUTE_META.vi;
    return map[route] || map.home;
  }

  /* ---------- Điền nội dung từ config (hỗ trợ VI / EN) ---------- */
  function fillConfig() {
    $$('.foot-sub, .orbit-note').forEach(el => el.remove());

    const grid = $('#social-grid');
    if (grid && window.SITE) {
      grid.innerHTML = SITE.socials.map((s, idx) => {
        const isMail = s.url.startsWith('mailto:');
        const attrs = isMail ? '' : 'target="_blank" rel="noopener"';
        const handle = pick(s, 'handle');
        return `<a class="social-btn glass ${s.net} reveal" style="--stagger:${idx}" href="${s.url}" ${attrs}>
           ${ICONS[s.net] || ICONS.email}
           <div>${s.label}<small>${handle}</small></div>
         </a>`;
      }).join('');
      const mail = SITE.socials.find(s => s.net === 'email');
      if (mail) {
        const a = $('#mail-link');
        if (a) { a.href = mail.url; a.textContent = mail.handle; }
      }
    }

    // ★ 1. Sở thích: Chơi nhạc cụ (Instruments)
    const instGrid = $('#instrument-grid');
    if (instGrid && window.SITE && Array.isArray(SITE.instruments)) {
      instGrid.innerHTML = SITE.instruments.map((inst, idx) => {
        const name = pick(inst, 'name');
        const tag = pick(inst, 'tag');
        const desc = pick(inst, 'desc');
        const details = pick(inst, 'details') || [];
        const chips = pick(inst, 'chips') || [];
        return `
        <article class="glass card hobby-card instrument-card reveal" style="--stagger:${idx}">
          <div class="inst-head">
            <div class="h-ico">${inst.icon}</div>
            <span class="tag">${tag}</span>
          </div>
          <h3>${name}</h3>
          <p class="inst-desc">${desc}</p>
          ${Array.isArray(details) && details.length ? `
            <ul class="p-highlights inst-list">
              ${details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="p-tech">${chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
        </article>`;
      }).join('');
    }

    // ★ 2. Sở thích: Gu nghe nhạc (Music Taste)
    const tasteGrid = $('#music-taste-grid');
    if (tasteGrid && window.SITE && Array.isArray(SITE.musicTaste)) {
      tasteGrid.innerHTML = SITE.musicTaste.map((m, idx) => `
        <div class="glass card taste-card reveal" style="--stagger:${idx}">
          <div class="taste-top">
            <span class="taste-ico">${m.icon}</span>
            <span class="taste-vibe">${pick(m, 'vibe')}</span>
          </div>
          <h4>${pick(m, 'genre')}</h4>
          <p class="taste-artists">🎧 ${m.artists}</p>
          <p class="taste-desc">${pick(m, 'desc')}</p>
        </div>`).join('');
    }

    const zoomTxt = t('hobbies.zoomBadge');

    // ★ 3. Sở thích: Bộ sưu tập Anime (Visual Cards có hình ảnh từng bộ)
    const animeGrid = $('#anime-grid');
    if (animeGrid && window.SITE && Array.isArray(SITE.anime)) {
      animeGrid.innerHTML = SITE.anime.map((a, idx) => {
        const item = typeof a === 'string'
          ? { title: a, genre: '🌸 Anime', desc: '', img: 'assets/img/anime-room.jpg' }
          : a;
        const num = String(idx + 1).padStart(2, '0');
        const title = pick(item, 'title');
        const genre = pick(item, 'genre');
        const desc = pick(item, 'desc');
        return `
        <article class="glass card anime-card reveal" style="--stagger:${idx}" data-anime-id="${item.id || idx}">
          <div class="anime-thumb" data-lightbox="${title} ✦ ${genre}">
            <img src="${item.img}" alt="${title}" loading="lazy">
            <span class="anime-num">#${num}</span>
            <span class="anime-genre">${genre}</span>
            <span class="anime-zoom">${zoomTxt}</span>
          </div>
          <div class="anime-body">
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
        </article>`;
      }).join('');
    }

    // ★ 4. Sở thích: Góc Chơi Game (Visual Cards có hình ảnh từng tựa game)
    const gameGrid = $('#game-grid');
    if (gameGrid && window.SITE && Array.isArray(SITE.games)) {
      gameGrid.innerHTML = SITE.games.map((g, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        const title = pick(g, 'title');
        const genre = pick(g, 'genre');
        const desc = pick(g, 'desc');
        return `
        <article class="glass card anime-card game-card reveal" style="--stagger:${idx}" data-game-id="${g.id || idx}">
          <div class="anime-thumb" data-lightbox="${title} ✦ ${genre}">
            <img src="${g.img}" alt="${title}" loading="lazy">
            <span class="anime-num">#${num}</span>
            <span class="anime-genre">${genre}</span>
            <span class="anime-zoom">${zoomTxt}</span>
          </div>
          <div class="anime-body">
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
        </article>`;
      }).join('');
    }

    // ★ Dự án / sản phẩm chuyên sâu
    const pgrid = $('#project-grid');
    if (pgrid && window.SITE) {
      const repoDef = t('gallery.repoDefault');
      const relLbl = t('gallery.releaseBtn');
      const demoLbl = t('gallery.demoBtn');
      pgrid.innerHTML = SITE.projects.map((p, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        const title = pick(p, 'title');
        const badge = pick(p, 'badge');
        const desc = pick(p, 'desc');
        const highlights = pick(p, 'highlights') || [];
        const repoLabel = pick(p, 'repoLabel') || repoDef;
        return `
        <article class="glass card project-card reveal" style="--stagger:${idx}" data-category="${p.category || 'all'}" data-index="${idx}">
          <span class="p-num">${num}</span>
          <div class="p-top">
            <div class="p-ico-wrap"><span class="p-ico">${p.icon}</span></div>
            <div class="p-badges">
              ${badge ? `<span class="p-badge">${badge}</span>` : ''}
              <span class="p-year">${p.year}</span>
            </div>
          </div>
          <h3>${title}</h3>
          <p class="p-desc">${desc}</p>
          ${Array.isArray(highlights) && highlights.length ? `
            <ul class="p-highlights">
              ${highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          ` : ''}
          <div class="p-tech">${p.tech.map(tc => `<span class="chip">${tc.trim()}</span>`).join('')}</div>
          <div class="p-links">
            <a class="p-btn" href="${p.repo}" target="_blank" rel="noopener" draggable="false">${repoLabel}</a>
            ${p.release ? `<a class="p-btn demo" href="${p.release}" target="_blank" rel="noopener" draggable="false">${relLbl}</a>` : ''}
            ${p.demo ? `<a class="p-btn demo" href="${p.demo}" target="_blank" rel="noopener" draggable="false">${demoLbl}</a>` : ''}
          </div>
        </article>`;
      }).join('');
    }

    // ★ Nhóm kỹ năng chuyên môn
    const sg = $('#skill-groups');
    if (sg && window.SITE) {
      sg.innerHTML = SITE.skillGroups.map(g => `
        <div class="skill-group">
          <h4>${pick(g, 'title')}</h4>
          ${g.items.map(s => `
            <div class="skill" data-level="${s.level}">
              <div class="skill-head"><span>${s.name}</span><span>${s.level}%</span></div>
              <div class="bar"><i></i></div>
            </div>`).join('')}
        </div>`).join('');
    }

    // ★ Timeline hành trình
    const tl = $('#timeline');
    if (tl && window.SITE) {
      tl.innerHTML = SITE.timeline.map(tm => `
        <div class="t-item">
          <span class="t-dot"></span>
          <div class="t-body">
            <span class="t-year">${pick(tm, 'year')}</span>
            <h4>${tm.tag} ${pick(tm, 'title')}</h4>
            <p>${pick(tm, 'desc')}</p>
          </div>
        </div>`).join('');
    }
  }

  /* ---------- Sân khấu Dự án: Trượt kéo (Drag-to-Scroll Carousel) + Bộ lọc + Xem Lưới ---------- */
  let refreshCarouselRef = null;

  function projectShowcase() {
    const vp = $('#project-viewport'),
          grid = $('#project-grid'),
          prevBtn = $('#proj-prev'),
          nextBtn = $('#proj-next'),
          viewBtn = $('#view-toggle'),
          dotsBox = $('#carousel-dots'),
          progBar = $('#carousel-bar'),
          footer = $('#carousel-footer'),
          navBox = $('#carousel-nav'),
          hint = $('#drag-hint');
    if (!vp || !grid) return;

    let isCarousel = true;
    let isDown = false, startX = 0, scrollStart = 0, draggedDist = 0;
    let velX = 0, lastX = 0, lastT = 0, rafId = null;

    function visibleCards() {
      return $$('#project-grid .project-card:not(.hidden-card)');
    }

    function buildDots() {
      if (!dotsBox) return;
      const cards = visibleCards();
      dotsBox.innerHTML = cards.map((_, i) =>
        `<button type="button" class="c-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Slide ${i + 1}"></button>`
      ).join('');
      dotsBox.querySelectorAll('.c-dot').forEach(d => {
        d.addEventListener('click', () => scrollToCard(parseInt(d.dataset.idx, 10)));
      });
    }

    function scrollToCard(idx) {
      const cards = visibleCards();
      if (!cards.length) return;
      const clamped = Math.max(0, Math.min(cards.length - 1, idx));
      const target = cards[clamped];
      const left = target.offsetLeft - (vp.clientWidth - target.offsetWidth) / 2;
      vp.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }

    function activeCardIndex() {
      const cards = visibleCards();
      if (!cards.length) return 0;
      const center = vp.scrollLeft + vp.clientWidth / 2;
      let best = 0, minD = Infinity;
      cards.forEach((c, i) => {
        const cc = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cc - center);
        if (d < minD) { minD = d; best = i; }
      });
      return best;
    }

    function updateCarouselUI() {
      if (!isCarousel) return;
      const maxScroll = Math.max(1, vp.scrollWidth - vp.clientWidth);
      const pct = Math.min(100, Math.max(0, (vp.scrollLeft / maxScroll) * 100));
      if (progBar) progBar.style.width = (vp.scrollWidth <= vp.clientWidth ? 100 : Math.max(12, pct)) + '%';

      const idx = activeCardIndex();
      if (dotsBox) {
        dotsBox.querySelectorAll('.c-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
      }
      visibleCards().forEach((c, i) => c.classList.toggle('active-slide', i === idx));
    }

    function updateViewBtnText() {
      if (!viewBtn) return;
      viewBtn.innerHTML = isCarousel
        ? `<span class="v-ico">⊞</span> <span class="v-txt">${t('gallery.viewGrid')}</span>`
        : `<span class="v-ico">🎠</span> <span class="v-txt">${t('gallery.viewCarousel')}</span>`;
    }

    // Kéo chuột trượt ngang có quán tính (Inertial Drag-to-Scroll)
    function stopMomentum() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    function startMomentum() {
      stopMomentum();
      function step() {
        if (Math.abs(velX) < 0.35) {
          vp.classList.remove('no-snap');
          updateCarouselUI();
          return;
        }
        vp.scrollLeft -= velX;
        velX *= 0.92;
        updateCarouselUI();
        rafId = requestAnimationFrame(step);
      }
      rafId = requestAnimationFrame(step);
    }

    vp.addEventListener('pointerdown', e => {
      if (!isCarousel) return;
      if (e.target.closest('a, button')) return;
      isDown = true;
      draggedDist = 0;
      startX = e.clientX;
      lastX = e.clientX;
      lastT = performance.now();
      velX = 0;
      scrollStart = vp.scrollLeft;
      stopMomentum();
      vp.classList.add('is-dragging', 'no-snap');
      try { vp.setPointerCapture(e.pointerId); } catch (err) {}
    });

    vp.addEventListener('pointermove', e => {
      if (!isDown || !isCarousel) return;
      const dx = e.clientX - startX;
      draggedDist = Math.max(draggedDist, Math.abs(dx));
      vp.scrollLeft = scrollStart - dx;

      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      velX = ((e.clientX - lastX) / dt) * 15;
      lastX = e.clientX;
      lastT = now;
      updateCarouselUI();
    });

    function endDrag(e) {
      if (!isDown) return;
      isDown = false;
      vp.classList.remove('is-dragging');
      try { if (e && e.pointerId !== undefined) vp.releasePointerCapture(e.pointerId); } catch (err) {}
      if (Math.abs(velX) > 1.2) {
        startMomentum();
      } else {
        vp.classList.remove('no-snap');
        updateCarouselUI();
      }
    }

    vp.addEventListener('pointerup', endDrag);
    vp.addEventListener('pointercancel', endDrag);
    vp.addEventListener('pointerleave', endDrag);

    vp.addEventListener('click', e => {
      if (draggedDist > 10) {
        e.preventDefault();
        e.stopPropagation();
        draggedDist = 0;
      }
    }, true);

    vp.addEventListener('wheel', e => {
      if (!isCarousel) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const atStart = vp.scrollLeft <= 2 && e.deltaY < 0;
        const atEnd = vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 2 && e.deltaY > 0;
        if (!atStart && !atEnd) {
          e.preventDefault();
          vp.scrollLeft += e.deltaY * 0.95;
        }
      }
    }, { passive: false });

    vp.addEventListener('scroll', updateCarouselUI, { passive: true });
    addEventListener('resize', updateCarouselUI);

    if (prevBtn) prevBtn.addEventListener('click', () => scrollToCard(activeCardIndex() - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollToCard(activeCardIndex() + 1));

    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        isCarousel = !isCarousel;
        vp.classList.toggle('carousel-mode', isCarousel);
        vp.classList.toggle('grid-mode', !isCarousel);
        if (footer) footer.style.display = isCarousel ? '' : 'none';
        if (navBox) navBox.style.display = isCarousel ? '' : 'none';
        if (hint) hint.style.display = isCarousel ? '' : 'none';
        updateViewBtnText();
        if (isCarousel) {
          setTimeout(updateCarouselUI, 60);
        } else {
          visibleCards().forEach(c => c.classList.remove('active-slide'));
        }
      });
    }

    function applyFilter(f, animate) {
      let visIdx = 0;
      $$('#project-grid .project-card').forEach(card => {
        const match = f === 'all' || card.dataset.category === f;
        card.classList.toggle('hidden-card', !match);
        if (match) {
          card.style.setProperty('--stagger', visIdx++);
          card.classList.add('visible');
          if (animate) {
            card.classList.remove('card-pop');
            void card.offsetWidth;
            card.classList.add('card-pop');
          }
        }
      });
      if (animate) vp.scrollTo({ left: 0, behavior: 'smooth' });
      buildDots();
      setTimeout(updateCarouselUI, 80);
    }

    const filterBtns = $$('.project-filters .filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const f = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.toggle('active', b === btn));
        applyFilter(f, true);
      });
    });

    refreshCarouselRef = filterKey => {
      updateViewBtnText();
      applyFilter(filterKey || 'all', false);
    };

    buildDots();
    setTimeout(updateCarouselUI, 100);
  }

  /* ---------- Sao chép Email ---------- */
  function copyEmail() {
    const btn = $('#copy-mail');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const email = btn.dataset.email || 'lexuanminhtufw@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      btn.textContent = t('contact.copiedBtn');
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = t('contact.copyBtn');
        btn.classList.remove('copied');
      }, 2200);
    });
  }

  /* ---------- Router (chuyển trang sân khấu đa lớp + hiệu ứng vào trang) ---------- */
  const ROUTES = ['home', 'about', 'gallery', 'hobbies', 'contact'];
  let current = null, transitioning = false, pendingRoute = null;

  function triggerPageEntrance(pageEl) {
    if (!pageEl) return;
    const items = pageEl.querySelectorAll('.card, .anime-strip, .social-btn, .hero-text > *, .hero-avatar');
    items.forEach((el, i) => {
      el.style.setProperty('--stagger', Math.min(i, 10));
      el.classList.add('visible');
    });
    pageEl.querySelectorAll('.skill').forEach(sk => {
      const bar = sk.querySelector('.bar i');
      if (bar) {
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = sk.dataset.level + '%'; }, 120);
      }
    });
  }

  function switchPage(route) {
    current = route;
    document.body.dataset.page = route;
    const meta = getRouteMeta(route);
    document.title = meta.title;
    $$('.page').forEach(p => {
      const isAct = p.id === 'page-' + route;
      p.classList.toggle('active', isAct);
      if (isAct) triggerPageEntrance(p);
    });
    $$('.bg-layer').forEach(b => b.classList.toggle('active', b.dataset.bg === route));
    $$('#nav-links a').forEach(a => a.classList.toggle('active', a.dataset.route === route));
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('resize'));
  }

  function navigate(route) {
    if (!ROUTES.includes(route)) route = 'home';
    if (transitioning) {
      pendingRoute = route;
      return;
    }
    if (route === current) return;
    transitioning = true;
    pendingRoute = null;

    const meta = getRouteMeta(route);
    const stEl = $('#pt-stage'), tiEl = $('#pt-title');
    if (stEl) stEl.textContent = meta.stage;
    if (tiEl) tiEl.textContent = meta.label;

    const ov = $('#page-transition');
    ov.classList.remove('cover-out');
    void ov.offsetWidth;
    ov.classList.add('cover-in');

    setTimeout(() => {
      const target = pendingRoute || route;
      pendingRoute = null;
      const targetMeta = getRouteMeta(target);
      if (stEl) stEl.textContent = targetMeta.stage;
      if (tiEl) tiEl.textContent = targetMeta.label;

      switchPage(target);
      ov.classList.remove('cover-in');
      ov.classList.add('cover-out');

      setTimeout(() => {
        ov.classList.remove('cover-out');
        transitioning = false;
        if (pendingRoute && pendingRoute !== current) {
          const next = pendingRoute;
          pendingRoute = null;
          navigate(next);
        }
      }, 540);
    }, 520);
  }

  /* ---------- Typewriter ---------- */
  function typewriter() {
    const el = $('#typewriter');
    if (!el || !window.SITE) return;
    let li = 0, ci = 0, deleting = false;
    function getLines() {
      if (Array.isArray(SITE.typelines)) return SITE.typelines;
      return (SITE.typelines && (SITE.typelines[currentLang] || SITE.typelines.vi)) || ['Fullstack Developer'];
    }
    (function tick() {
      const lines = getLines();
      const line = lines[li % lines.length] || '';
      el.textContent = line.slice(0, ci);
      if (!deleting) {
        if (ci < line.length) { ci++; setTimeout(tick, 65); }
        else { deleting = true; setTimeout(tick, 1600); }
      } else {
        if (ci > 0) { ci--; setTimeout(tick, 30); }
        else { deleting = false; li = (li + 1) % lines.length; setTimeout(tick, 350); }
      }
    })();
  }

  /* ---------- Hạt nốt nhạc bay ---------- */
  function particles() {
    const cv = $('#particles'), c = cv.getContext('2d');
    let W, H, pts = [];
    const GLYPHS = ['♪', '♫', '♩', '♬', '✦'];
    const COLORS = ['95,251,241', '255,123,172', '184,255,249', '225,40,133'];
    function resize() {
      W = cv.width = innerWidth; H = cv.height = innerHeight;
      const n = Math.min(46, Math.floor(W / 30));
      pts = Array.from({ length: n }, () => spawn(true));
    }
    function spawn(init) {
      const note = Math.random() < .55;
      return {
        note, x: Math.random() * W, y: init ? Math.random() * H : H + 20,
        r: note ? 10 + Math.random() * 14 : 1 + Math.random() * 2.4,
        v: .25 + Math.random() * .7, sway: Math.random() * 2 * Math.PI,
        sw: .004 + Math.random() * .01, g: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        col: COLORS[Math.floor(Math.random() * COLORS.length)], a: .25 + Math.random() * .5
      };
    }
    let mx = 0;
    addEventListener('mousemove', e => { mx = (e.clientX / W - .5); });
    function frame() {
      c.clearRect(0, 0, W, H);
      pts.forEach((p, i) => {
        p.y -= p.v; p.sway += p.sw;
        const x = p.x + Math.sin(p.sway) * 26 + mx * -30 * p.v;
        if (p.y < -30) pts[i] = spawn(false);
        if (p.note) {
          c.font = p.r + 'px sans-serif';
          c.fillStyle = `rgba(${p.col},${p.a})`;
          c.shadowColor = `rgba(${p.col},.8)`; c.shadowBlur = 10;
          c.fillText(p.g, x, p.y);
          c.shadowBlur = 0;
        } else {
          c.beginPath(); c.arc(x, p.y, p.r, 0, 7);
          c.fillStyle = `rgba(${p.col},${p.a})`;
          c.shadowColor = `rgba(${p.col},.9)`; c.shadowBlur = 8;
          c.fill(); c.shadowBlur = 0;
        }
      });
      requestAnimationFrame(frame);
    }
    addEventListener('resize', resize);
    resize(); frame();
  }

  /* ---------- Con trỏ tùy chỉnh ---------- */
  function cursor() {
    if (matchMedia('(hover: none)').matches) return;
    const dot = $('#cursor-dot'), ring = $('#cursor-ring');
    let x = -100, y = -100, rx = -100, ry = -100;
    addEventListener('mousemove', e => {
      x = e.clientX; y = e.clientY;
      const hot = e.target.closest('a, button, .g-item, [data-lightbox], .key, input');
      ring.classList.toggle('big', !!hot);
    });
    (function loop() {
      rx += (x - rx) * .16; ry += (y - ry) * .16;
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px, ${ry - ring.offsetHeight / 2}px)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Hiện dần + thanh kỹ năng ---------- */
  function reveals() {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        en.target.querySelectorAll('.skill').forEach(sk => {
          const bar = sk.querySelector('.bar i');
          if (bar) bar.style.width = sk.dataset.level + '%';
        });
        io.unobserve(en.target);
      }
    }), { threshold: .12 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  /* ---------- Spotlight theo chuột + Nghiêng thẻ 3D mượt ---------- */
  function tilt() {
    if (matchMedia('(hover: none)').matches) return;
    $$('.card').forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = '1';
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty('--mx', x + 'px');
        card.style.setProperty('--my', y + 'px');
      });
    });

    $$('.hobby-card, .project-card, .taste-card, .anime-card').forEach(card => {
      if (card.dataset.tilt3dBound) return;
      card.dataset.tilt3dBound = '1';
      card.addEventListener('mousemove', e => {
        if (card.closest('.is-dragging')) return;
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.transition = 'box-shadow .35s ease, border-color .35s';
        card.style.transform = `translateY(-7px) perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = '';
        card.style.transform = '';
      });
    });
  }

  /* ---------- Chuyển đổi ngôn ngữ tức thì (Hot-Swappable VI / EN) ---------- */
  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'vi';
    try { localStorage.setItem('miku-lang', currentLang); } catch (e) {}
    document.documentElement.lang = currentLang;

    const langBtn = $('#lang-toggle');
    if (langBtn) {
      langBtn.title = t('nav.langTitle');
      langBtn.querySelectorAll('.lang-opt').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
      });
    }

    $$('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    $$('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    const activeFilterBtn = $('.project-filters .filter-btn.active');
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';

    fillConfig();
    reveals();
    tilt();

    if (refreshCarouselRef) refreshCarouselRef(activeFilter);
    if (current) {
      const meta = getRouteMeta(current);
      document.title = meta.title;
      triggerPageEntrance($('#page-' + current));
    }
  }

  function initLangToggle() {
    const langBtn = $('#lang-toggle');
    if (!langBtn) return;
    langBtn.addEventListener('click', e => {
      const opt = e.target.closest('.lang-opt');
      if (opt && opt.dataset.lang) {
        if (opt.dataset.lang !== currentLang) applyLanguage(opt.dataset.lang);
      } else {
        applyLanguage(currentLang === 'vi' ? 'en' : 'vi');
      }
    });
  }

  /* ---------- Piano mini (4 âm sắc, 3 bản nhạc mẫu, bàn phím & hiển thị tần số) ---------- */
  function piano() {
    const box = $('#piano');
    if (!box) return;
    const NOTES = ['♪', '♫', '♬', '♩'];
    const keyMap = new Map();
    const noteDisplay = $('#piano-note-display');
    let currentTone = 'piano';

    const toneBtns = $$('.tone-btn');
    toneBtns.forEach(tb => {
      tb.addEventListener('click', () => {
        currentTone = tb.dataset.tone || 'piano';
        toneBtns.forEach(b => b.classList.toggle('active', b === tb));
        if (noteDisplay) {
          const prefix = currentLang === 'en' ? '♪ Timbre: ' : '♪ Âm sắc: ';
          noteDisplay.textContent = prefix + tb.textContent.trim();
        }
      });
    });

    function triggerKey(k, holdMs) {
      if (!k) return;
      const midi = parseInt(k.dataset.midi, 10);
      const noteName = k.dataset.note || k.getAttribute('aria-label') || 'Note';
      const hz = (440 * Math.pow(2, (midi - 69) / 12)).toFixed(1);
      if (noteDisplay) {
        const prefix = currentLang === 'en' ? '♪ Note ' : '♪ Nốt ';
        noteDisplay.textContent = `${prefix}${noteName} • ${hz} Hz`;
        noteDisplay.classList.add('active');
        clearTimeout(noteDisplay._t);
        noteDisplay._t = setTimeout(() => noteDisplay.classList.remove('active'), 600);
      }
      if (window.Music) Music.playKey(midi, currentTone);
      k.classList.add('pressed');
      const n = document.createElement('span');
      n.className = 'float-note';
      n.textContent = NOTES[Math.floor(Math.random() * NOTES.length)];
      n.style.left = (k.offsetLeft + k.offsetWidth / 2) + 'px';
      n.style.top = (k.offsetHeight * .38) + 'px';
      box.appendChild(n);
      setTimeout(() => n.remove(), 1000);
      if (holdMs) {
        setTimeout(() => k.classList.remove('pressed'), holdMs);
      }
    }

    box.querySelectorAll('.key').forEach(k => {
      if (k.dataset.key) keyMap.set(k.dataset.key.toLowerCase(), k);
      k.addEventListener('pointerdown', e => {
        e.preventDefault();
        triggerKey(k, 0);
      });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev =>
        k.addEventListener(ev, () => k.classList.remove('pressed'))
      );
    });

    addEventListener('keydown', e => {
      if (document.body.dataset.page !== 'hobbies') return;
      if (e.repeat || e.ctrlKey || e.altKey || e.metaKey) return;
      if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      const k = keyMap.get(e.key.toLowerCase());
      if (k) {
        e.preventDefault();
        triggerKey(k, 0);
      }
    });
    addEventListener('keyup', e => {
      const k = keyMap.get(e.key.toLowerCase());
      if (k) k.classList.remove('pressed');
    });

    // 3 Giai điệu mẫu tự chơi
    const demoBtn = $('#piano-demo'), songSel = $('#piano-song');
    const SONGS = {
      starlight: [
        [64, 250], [67, 250], [72, 360], [71, 250], [69, 320], [67, 320], [64, 400],
        [65, 250], [69, 250], [67, 340], [64, 250], [62, 480],
        [64, 250], [67, 250], [72, 360], [71, 250], [69, 300], [71, 280], [72, 650]
      ],
      sakura: [
        [69, 320], [71, 320], [72, 540], [69, 320], [71, 320], [72, 540],
        [69, 260], [72, 260], [71, 280], [69, 280], [64, 340], [65, 340], [64, 620]
      ],
      ballad: [
        [60, 280], [64, 280], [67, 280], [71, 460], [69, 280], [67, 280], [64, 460],
        [65, 280], [69, 280], [72, 420], [71, 280], [67, 280], [69, 640]
      ]
    };

    if (demoBtn) {
      let demoTimers = [], demoRunning = false;

      function stopDemo() {
        demoTimers.forEach(tm => clearTimeout(tm));
        demoTimers = [];
        demoRunning = false;
        demoBtn.textContent = t('hobbies.demoPlay');
        demoBtn.classList.remove('playing');
      }

      demoBtn.addEventListener('click', () => {
        if (demoRunning) { stopDemo(); return; }
        demoRunning = true;
        demoBtn.textContent = t('hobbies.demoStop');
        demoBtn.classList.add('playing');
        const seq = SONGS[songSel ? songSel.value : 'starlight'] || SONGS.starlight;
        let delay = 0;
        seq.forEach(([midi, dur]) => {
          const tm = setTimeout(() => {
            if (!demoRunning) return;
            const k = box.querySelector(`.key[data-midi="${midi}"]`);
            triggerKey(k, Math.max(150, dur - 45));
          }, delay);
          demoTimers.push(tm);
          delay += dur;
        });
        demoTimers.push(setTimeout(stopDemo, delay + 150));
      });
    }

    // Đồng bộ đĩa than Miku Turntable với trình phát nhạc nền
    const vinylStage = $('#vinyl-stage'), vinylBtn = $('#vinyl-play-btn'), mainToggle = $('#music-toggle');
    function syncVinyl() {
      const on = window.Music && Music.isPlaying && Music.isPlaying();
      if (vinylStage) vinylStage.classList.toggle('playing', !!on);
      if (vinylBtn) vinylBtn.textContent = on ? t('hobbies.vinylPlaying') : t('hobbies.vinylPlay');
    }
    if (vinylBtn) {
      vinylBtn.addEventListener('click', () => {
        if (window.Music && Music.toggle) Music.toggle();
        setTimeout(syncVinyl, 60);
      });
    }
    if (mainToggle) mainToggle.addEventListener('click', () => setTimeout(syncVinyl, 60));
    setInterval(syncVinyl, 800);
  }

  /* ---------- Lightbox (sử dụng Event Delegation cho mọi thẻ ảnh) ---------- */
  function lightbox() {
    const lb = $('#lightbox'), img = $('#lightbox-img'), cap = $('#lightbox-cap');
    if (!lb || !img) return;
    document.addEventListener('click', e => {
      const el = e.target.closest('.g-item, [data-lightbox]');
      if (!el) return;
      const targetImg = el.querySelector('img.active') || (el.tagName === 'IMG' ? el : el.querySelector('img'));
      if (!targetImg) return;
      img.src = targetImg.src;
      img.alt = targetImg.alt || 'Lightbox Image';
      cap.textContent = targetImg.dataset.cap || el.dataset.lightbox || el.dataset.cap || targetImg.alt || '';
      lb.classList.add('open');
      lb.setAttribute('aria-hidden', 'false');
    });
    const close = () => {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
    };
    $('#lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Menu mobile ---------- */
  function mobileNav() {
    const tBtn = $('#nav-toggle'), links = $('#nav-links'), nav = $('#navbar');
    const setOpen = open => {
      tBtn.classList.toggle('open', open);
      links.classList.toggle('open', open);
      tBtn.setAttribute('aria-expanded', String(open));
    };
    tBtn.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', e => {
      if (links.classList.contains('open') && nav && !nav.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- Hoa anh đào rơi + burst khi click ---------- */
  function fxLayer() {
    const cv = $('#fx'), c = cv.getContext('2d');
    let W, H, petals = [], bursts = [];
    const GL = ['♪', '♫', '✦'];
    function newPetal(init) {
      return {
        x: Math.random() * W, y: init ? Math.random() * H : -24,
        s: 5 + Math.random() * 7, v: .6 + Math.random() * 1.1,
        rot: Math.random() * Math.PI, vr: (Math.random() - .5) * .05,
        sway: Math.random() * 6.28, sw: .01 + Math.random() * .02,
        pink: Math.random() < .7
      };
    }
    function resize() {
      W = cv.width = innerWidth; H = cv.height = innerHeight;
      petals = Array.from({ length: Math.min(26, Math.floor(W / 55)) }, () => newPetal(true));
    }
    addEventListener('resize', resize);
    addEventListener('click', e => {
      for (let i = 0; i < 12; i++) {
        const a = Math.random() * 6.28, sp = 1 + Math.random() * 3;
        bursts.push({
          x: e.clientX, y: e.clientY, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1,
          life: 1, note: Math.random() < .4, g: GL[(Math.random() * 3) | 0],
          col: Math.random() < .5 ? '95,251,241' : '255,123,172'
        });
      }
    });
    function frame() {
      c.clearRect(0, 0, W, H);
      petals.forEach((p, i) => {
        p.y += p.v; p.sway += p.sw; p.rot += p.vr;
        if (p.y > H + 26) petals[i] = newPetal(false);
        const x = p.x + Math.sin(p.sway) * 30;
        c.save(); c.translate(x, p.y); c.rotate(p.rot);
        c.fillStyle = p.pink ? 'rgba(255,123,172,.5)' : 'rgba(184,255,249,.45)';
        c.beginPath(); c.ellipse(0, 0, p.s, p.s * .55, 0, 0, 6.29); c.fill();
        c.restore();
      });
      bursts = bursts.filter(b => b.life > 0);
      bursts.forEach(b => {
        b.x += b.vx; b.y += b.vy; b.vy += .06; b.life -= .025;
        c.fillStyle = `rgba(${b.col},${Math.max(b.life, 0)})`;
        if (b.note) { c.font = '14px sans-serif'; c.fillText(b.g, b.x, b.y); }
        else { c.beginPath(); c.arc(b.x, b.y, 2.2 * b.life, 0, 6.29); c.fill(); }
      });
      requestAnimationFrame(frame);
    }
    resize(); frame();
  }

  /* ---------- Thanh tiến trình cuộn ---------- */
  function scrollProgress() {
    const bar = $('#scroll-progress');
    if (!bar) return;
    const upd = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - innerHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    addEventListener('scroll', upd, { passive: true });
    addEventListener('resize', upd);
    upd();
  }

  /* ---------- Visualizer nhảy theo nhạc ---------- */
  function viz() {
    const cv = $('#viz');
    if (!cv) return;
    const c = cv.getContext('2d');
    const data = new Uint8Array(32);
    (function loop() {
      requestAnimationFrame(loop);
      c.clearRect(0, 0, cv.width, cv.height);
      const an = window.Music && Music.analyser ? Music.analyser() : null;
      if (an) an.getByteFrequencyData(data); else data.fill(0);
      const n = 24, bw = cv.width / n;
      for (let i = 0; i < n; i++) {
        const v = data[i] / 255;
        const h = Math.max(3, v * (cv.height - 4));
        c.fillStyle = i % 2 ? 'rgba(255,123,172,.9)' : 'rgba(95,251,241,.9)';
        c.fillRect(i * bw + 1, cv.height - h, bw - 2, h);
      }
    })();
  }

  /* ---------- Avatar hero nghiêng theo chuột ---------- */
  function heroTilt() {
    if (matchMedia('(hover: none)').matches) return;
    const hero = $('.hero'), img = $('.hero-avatar img');
    if (!hero || !img) return;
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      img.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
    });
    hero.addEventListener('mouseleave', () => { img.style.transform = ''; });
  }

  /* ---------- Intro khởi động phong cách Miku ---------- */
  function intro() {
    const loader = $('#loader');
    if (!loader) return;
    const line = $('#boot-line'), num = $('#load-num'),
          fill = $('#load-fill'), flash = $('.loader-flash');
    const reduced = false;
    const LINES = currentLang === 'en'
      ? [
          'HATSUNE MIKU SYSTEM v3.9 ♪',
          '> loading stage melodies…',
          '> tuning grand piano… 🎹',
          '> connecting hearts… 💙',
          '> IKU YO —— 39!'
        ]
      : [
          'HATSUNE MIKU SYSTEM v3.9 ♪',
          '> đang nạp giai điệu…',
          '> lên dây đàn piano… 🎹',
          '> kết nối trái tim… 💙',
          '> IKU YO —— 39!'
        ];
    const TOTAL_CHARS = LINES.join('').length;
    let li = 0, ci = 0, typed = 0, prog = 0, finished = false;

    const setProg = p => { prog = Math.min(100, p); num.textContent = Math.round(prog); fill.style.width = prog + '%'; };

    const skip = () => finish();

    function finish() {
      if (finished) return;
      finished = true;
      loader.removeEventListener('click', skip);
      removeEventListener('keydown', skip);
      setProg(100);
      const d = reduced ? 0 : 1;
      setTimeout(() => flash.classList.add('show'), 120 * d);
      setTimeout(() => loader.classList.add('opening'), 950 * d);
      setTimeout(() => loader.classList.add('done'), 2150 * d);
    }

    loader.addEventListener('click', skip);
    addEventListener('keydown', skip);

    if (reduced) { finish(); return; }

    (function type() {
      if (finished) return;
      const text = LINES[li];
      line.textContent = text.slice(0, ci);
      if (ci < text.length) {
        ci++; typed++;
        setProg((typed / TOTAL_CHARS) * 90);
        setTimeout(type, 30);
      } else {
        li++; ci = 0;
        if (li < LINES.length) setTimeout(type, 420);
        else {
          const ramp = setInterval(() => {
            if (finished) return clearInterval(ramp);
            setProg(prog + 2);
            if (prog >= 100) { clearInterval(ramp); setTimeout(finish, 450); }
          }, 50);
        }
      }
    })();

    setTimeout(finish, 12000);
  }

  /* ---------- Khởi động ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    applyLanguage(currentLang);
    projectShowcase();
    copyEmail();
    typewriter();
    particles();
    fxLayer();
    scrollProgress();
    viz();
    heroTilt();
    cursor();
    reveals();
    tilt();
    piano();
    lightbox();
    mobileNav();

    const initial = (location.hash.replace('#', '') || 'home');
    switchPage(ROUTES.includes(initial) ? initial : 'home');
    addEventListener('hashchange', () => navigate(location.hash.replace('#', '') || 'home'));

    intro();
  });
})();
