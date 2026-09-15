/* ============================================================
   MAIN — router, hiệu ứng, piano mini, lightbox, mạng xã hội
   ============================================================ */
(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* ---------- Icon mạng xã hội (SVG inline) ---------- */
  const ICONS = {
    facebook: '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.4" fill="currentColor" stroke="none"/></svg>',
    discord: '<svg viewBox="0 0 24 24"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.5 0 12.6 12.6 0 0 0-.61-1.25.08.08 0 0 0-.08-.04c-1.71.3-3.35.81-4.88 1.52a.07.07 0 0 0-.04.03C.53 9.05-.32 13.58.1 18.06c0 .02.01.04.03.06a19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1-.01-.12c.13-.1.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08.01c.12.1.25.2.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.64-1.87.89a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6.02-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.75a5.76 5.76 0 1 0 5.02 5.7V8.9a7.35 7.35 0 0 0 4.3 1.38V7.2a4.28 4.28 0 0 1-3.33-1.38z"/></svg>',
    email: '<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3.5 6.5 8.5 7 8.5-7"/></svg>'
  };

  /* ---------- Điền nội dung từ config ---------- */
  function fillConfig() {
    const grid = $('#social-grid');
    if (grid && window.SITE) {
      grid.innerHTML = SITE.socials.map(s =>
        `<a class="social-btn glass ${s.net} reveal" href="${s.url}" target="_blank" rel="noopener">
           ${ICONS[s.net] || ICONS.email}
           <div>${s.label}<small>${s.handle}</small></div>
         </a>`).join('');
      const mail = SITE.socials.find(s => s.net === 'email');
      if (mail) { const a = $('#mail-link'); a.href = mail.url; a.textContent = mail.handle; }
    }
    const chips = $('#anime-chips');
    if (chips && window.SITE) chips.innerHTML = SITE.anime.map(a => `<span class="chip">🌸 ${a}</span>`).join('');

    // ★ Dự án / sản phẩm (thay cho thư viện ảnh)
    const pgrid = $('#project-grid');
    if (pgrid && window.SITE) {
      pgrid.innerHTML = SITE.projects.map(p => `
        <div class="glass card project-card reveal">
          <div class="p-top"><span class="p-ico">${p.icon}</span><span class="p-year">${p.year}</span></div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="p-tech">${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}</div>
          <div class="p-links">
            <a class="p-btn" href="${p.repo}" target="_blank" rel="noopener">⭐ Code GitHub</a>
            ${p.demo ? `<a class="p-btn demo" href="${p.demo}" target="_blank" rel="noopener">🚀 Demo</a>` : ''}
          </div>
        </div>`).join('');
    }

    // ★ Nhóm kỹ năng fullstack
    const sg = $('#skill-groups');
    if (sg && window.SITE) {
      sg.innerHTML = SITE.skillGroups.map(g => `
        <div class="skill-group">
          <h4>${g.title}</h4>
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
      tl.innerHTML = SITE.timeline.map(t => `
        <div class="t-item">
          <span class="t-dot"></span>
          <div class="t-body">
            <span class="t-year">${t.year}</span>
            <h4>${t.tag} ${t.title}</h4>
            <p>${t.desc}</p>
          </div>
        </div>`).join('');
    }
  }

  /* ---------- Router (chuyển "trang" với hiệu ứng) ---------- */
  const ROUTES = ['home', 'about', 'hobbies', 'gallery', 'contact'];
  let current = null, transitioning = false;

  function switchPage(route) {
    current = route;
    document.body.dataset.page = route;
    $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + route));
    $$('.bg-layer').forEach(b => b.classList.toggle('active', b.dataset.bg === route));
    $$('#nav-links a').forEach(a => a.classList.toggle('active', a.dataset.route === route));
    window.scrollTo(0, 0);
  }

  function navigate(route) {
    if (!ROUTES.includes(route)) route = 'home';
    if (route === current || transitioning) return;
    transitioning = true;
    const ov = $('#page-transition');
    ov.classList.remove('cover-out');
    void ov.offsetWidth;
    ov.classList.add('cover-in');
    setTimeout(() => {
      switchPage(route);
      ov.classList.remove('cover-in');
      ov.classList.add('cover-out');
      setTimeout(() => { ov.classList.remove('cover-out'); transitioning = false; }, 460);
    }, 460);
  }

  /* ---------- Typewriter ---------- */
  function typewriter() {
    const el = $('#typewriter');
    if (!el || !window.SITE) return;
    const lines = SITE.typelines;
    let li = 0, ci = 0, deleting = false;
    (function tick() {
      const line = lines[li];
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
      const hot = e.target.closest('a, button, .g-item, .key, input');
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
    }), { threshold: .15 });
    $$('.reveal').forEach(el => io.observe(el));
  }

  /* ---------- Nghiêng thẻ 3D ---------- */
  function tilt() {
    if (matchMedia('(hover: none)').matches) return;
    $$('.hobby-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `translateY(-6px) perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Piano mini ---------- */
  function piano() {
    const box = $('#piano');
    if (!box) return;
    box.querySelectorAll('.key').forEach(k => {
      k.addEventListener('pointerdown', e => {
        e.preventDefault();
        const midi = parseInt(k.dataset.midi, 10);
        if (window.Music) Music.playKey(midi);
        k.classList.add('pressed');
        const n = document.createElement('span');
        n.className = 'float-note';
        n.textContent = ['♪', '♫', ''][Math.floor(Math.random() * 3)];
        n.style.left = (k.offsetLeft + k.offsetWidth / 2) + 'px';
        n.style.top = (k.offsetHeight * .4) + 'px';
        box.appendChild(n);
        setTimeout(() => n.remove(), 1000);
      });
      ['pointerup', 'pointerleave'].forEach(ev => k.addEventListener(ev, () => k.classList.remove('pressed')));
    });
  }

  /* ---------- Lightbox ---------- */
  function lightbox() {
    const lb = $('#lightbox'), img = $('#lightbox-img'), cap = $('#lightbox-cap');
    $$('.g-item').forEach(g => g.addEventListener('click', () => {
      img.src = g.querySelector('img').src;
      cap.textContent = g.dataset.cap || '';
      lb.classList.add('open');
    }));
    const close = () => lb.classList.remove('open');
    $('#lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- Menu mobile ---------- */
  function mobileNav() {
    const t = $('#nav-toggle'), links = $('#nav-links');
    t.addEventListener('click', () => { t.classList.toggle('open'); links.classList.toggle('open'); });
    links.addEventListener('click', e => { if (e.target.tagName === 'A') { t.classList.remove('open'); links.classList.remove('open'); } });
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
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LINES = [
      'HATSUNE MIKU SYSTEM v3.9 ♪',
      '> đang nạp giai điệu…',
      '> lên dây đàn piano… 🎹',
      '> kết nối trái tim… 💙',
      '> IKU YO —— 39!'
    ];
    const TOTAL_CHARS = LINES.join('').length;
    let li = 0, ci = 0, typed = 0, prog = 0, finished = false;

    const setProg = p => { prog = Math.min(100, p); num.textContent = Math.round(prog); fill.style.width = prog + '%'; };

    function finish() {
      if (finished) return;
      finished = true;
      setProg(100);
      const d = reduced ? 0 : 1;
      setTimeout(() => flash.classList.add('show'), 120 * d);
      setTimeout(() => loader.classList.add('opening'), 950 * d);
      setTimeout(() => loader.classList.add('done'), 2150 * d);
    }

    // bấm chuột / phím bất kỳ để bỏ qua intro
    const skip = () => finish();
    loader.addEventListener('click', skip);
    addEventListener('keydown', skip);

    if (reduced) { finish(); return; }

    // chạy chữ từng dòng — % chạy đều theo chữ (tới 90%), rồi mới lên 100%
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

    setTimeout(finish, 12000); //failsafe
  }

  /* ---------- Khởi động ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    fillConfig();
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
