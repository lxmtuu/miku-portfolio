/* ============================================================
   MUSIC ENGINE — nhạc nền tự động phát (MP3 / Web Audio Synth) + piano mini
   Tự động bật nhạc nền khi vào trang (hoặc ngay ở tương tác đầu tiên nếu trình duyệt chặn autoplay).
   ============================================================ */
(function () {
  'use strict';

  const BPM = 96, SPB = 60 / BPM, LOOP_STEPS = 64; // 32 phách, mỗi phách 2 step
  let ctx = null, master = null, sfx = null, delaySend = null, noiseBuf = null, analyser = null;
  let lastKeyAt = 0;
  let playing = false, fileMode = true, audioEl = null, mediaSrc = null;
  let customSrc = null, customName = '', pendingFileSrc = 'assets/audio/bgm.mp3';
  let stepIdx = 0, nextStepTime = 0, timer = null;
  let volume = 0.6;
  let autoUnlockArmed = false;

  /* ---------- Bảng nhạc (soạn tay, vòng lặp 8 ô nhịp) ---------- */
  const CHORDS = [
    { pad: [60, 64, 67], bass: 48, arp: [60, 64, 67, 72] }, // C
    { pad: [59, 62, 67], bass: 43, arp: [62, 67, 71, 74] }, // G
    { pad: [57, 60, 64], bass: 45, arp: [64, 69, 72, 76] }, // Am
    { pad: [57, 60, 65], bass: 41, arp: [65, 69, 72, 77] }, // F
    { pad: [60, 64, 67], bass: 48, arp: [60, 64, 67, 72] }, // C
    { pad: [59, 62, 67], bass: 43, arp: [62, 67, 71, 74] }, // G
    { pad: [57, 60, 64], bass: 45, arp: [64, 69, 72, 76] }, // Am
    { pad: [59, 62, 67], bass: 43, arp: [62, 67, 71, 74] }  // G (dẫn về)
  ];
  const MELODY = [
    [76, 0, 1], [79, 1, .5], [76, 1.5, .5], [72, 2, 1], [74, 3, 1],
    [76, 4, 1.5], [74, 5.5, .5], [71, 6, 2],
    [72, 8, 1], [74, 9, .5], [76, 9.5, .5], [81, 10, 1], [79, 11, 1],
    [77, 12, 1.5], [76, 13.5, .5], [74, 14, 1], [72, 15, 1],
    [76, 16, 1], [79, 17, .5], [81, 17.5, .5], [79, 18, 1], [76, 19, 1],
    [74, 20, 1.5], [71, 21.5, .5], [67, 22, 2],
    [69, 24, 1], [72, 25, 1], [76, 26, 1], [74, 27, 1],
    [72, 28, 1], [74, 29, 1], [71, 30, 2]
  ];
  const melMap = new Map();
  MELODY.forEach(([m, b, d]) => {
    const s = b * 2;
    if (!melMap.has(s)) melMap.set(s, []);
    melMap.get(s).push([m, d]);
  });
  const ARP_PATTERN = [0, 2, 1, 3, 0, 2, 1, 3];
  const BELLS = [84, 88, 91, 93, 96];

  const freq = m => 440 * Math.pow(2, (m - 69) / 12);

  /* ---------- Khởi tạo AudioContext ---------- */
  function ensureCtx() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);

    // analyser để visualizer nhảy theo nhạc
    analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = .8;
    master.connect(analyser);

    // echo nhẹ tạo không gian
    const delay = ctx.createDelay(2);
    delay.delayTime.value = SPB * 0.75;
    const fb = ctx.createGain(); fb.gain.value = 0.32;
    const wet = ctx.createGain(); wet.gain.value = 0.25;
    delay.connect(fb); fb.connect(delay);
    delay.connect(wet); wet.connect(master);
    delaySend = ctx.createGain(); delaySend.gain.value = 1;
    delaySend.connect(delay);

    // ngõ ra riêng cho hiệu ứng piano — không bị tắt theo nhạc nền
    sfx = ctx.createGain();
    sfx.gain.value = volume;
    sfx.connect(ctx.destination);
    sfx.connect(delaySend);
    sfx.connect(analyser);

    // noise buffer cho trống
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return ctx;
  }

  function connectAudioToGraph() {
    if (!audioEl || mediaSrc) return;
    ensureCtx();
    if (ctx.state === 'running') {
      try {
        audioEl.volume = 1;
        mediaSrc = ctx.createMediaElementSource(audioEl);
        mediaSrc.connect(master);
        mediaSrc.connect(delaySend);
      } catch (e) { /* đã kết nối hoặc trình duyệt không cho phép */ }
    }
  }

  /* ---------- Các "nhạc cụ" tổng hợp ---------- */
  function osc(type, f, t, peak, attack, decay, sendDelay, dest) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    o.connect(g); g.connect(dest || master);
    if (sendDelay) g.connect(delaySend);
    o.start(t); o.stop(t + attack + decay + 0.1);
  }
  const lead  = (m, t, dur) => { osc('triangle', freq(m), t, .16, .02, Math.max(dur * SPB, .18), true); osc('sine', freq(m) * 2, t, .04, .02, Math.max(dur * SPB * .7, .12), true); };
  const pluck = (m, t) => osc('triangle', freq(m), t, .055, .005, .22, true);
  const pad   = (m, t, dur) => osc('sine', freq(m), t, .038, .5, dur * SPB + .8, false);
  const bassN = (m, t) => osc('sine', freq(m), t, .17, .01, 1.6 * SPB, false);
  const bell  = (m, t) => osc('sine', freq(m), t, .05, .005, 1.2, true);

  function kick(t) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(42, t + .12);
    g.gain.setValueAtTime(.32, t);
    g.gain.exponentialRampToValueAtTime(.0001, t + .14);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + .2);
  }
  function noiseHit(t, type, f, peak, decay) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    const flt = ctx.createBiquadFilter(); flt.type = type; flt.frequency.value = f;
    const g = ctx.createGain();
    g.gain.setValueAtTime(peak, t);
    g.gain.exponentialRampToValueAtTime(.0001, t + decay);
    s.connect(flt); flt.connect(g); g.connect(master);
    s.start(t); s.stop(t + decay + .05);
  }

  /* ---------- Bộ lên lịch ---------- */
  function scheduleStep(step, t) {
    const beat = step / 2, bar = Math.floor(beat / 4), chord = CHORDS[bar];
    const isBeat = step % 2 === 0, beatInBar = beat % 4;

    noiseHit(t, 'highpass', 7500, isBeat ? .028 : .045, .04);                       // hi-hat
    if (isBeat && (beatInBar === 0 || beatInBar === 2)) kick(t);                   // kick
    if (isBeat && (beatInBar === 1 || beatInBar === 3)) noiseHit(t, 'bandpass', 1900, .07, .12); // snare
    if (isBeat && beatInBar === 0) {                                               // pad + bass
      chord.pad.forEach(m => pad(m, t, 4));
      bassN(chord.bass, t);
    }
    if (isBeat && beatInBar === 2) bassN(chord.bass, t);
    pluck(chord.arp[ARP_PATTERN[step % 8]] + (step % 8 >= 4 ? 12 : 0), t);         // arpeggio
    const evs = melMap.get(step);                                                  // giai điệu chính
    if (evs) evs.forEach(([m, d]) => lead(m, t, d));
    if (step === 0 && bar % 2 === 1) bell(BELLS[Math.floor(Math.random() * BELLS.length)], t + SPB);
  }

  function stopSynthTimer() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function pump() {
    if (!playing || fileMode || !ctx) return;
    while (nextStepTime < ctx.currentTime + 0.4) {
      scheduleStep(stepIdx, nextStepTime);
      stepIdx = (stepIdx + 1) % LOOP_STEPS;
      nextStepTime += SPB / 2;
    }
  }

  /* ---------- File nhạc (bgm.mp3 hoặc file người dùng chọn) ---------- */
  function useAudioElement(src) {
    stopSynthTimer();
    if (!audioEl) {
      audioEl = new Audio();
      audioEl.loop = true;
      audioEl.preload = 'auto';
      audioEl.volume = volume;
      audioEl.addEventListener('error', () => {
        // nếu không tải được file mp3 thì tự chuyển về Synth
        if (!customSrc) {
          fileMode = false;
          setLabel('♪ Miku Synth BGM');
          if (playing) start();
        }
      });
    }
    if (audioEl.src !== src && !audioEl.src.endsWith(src)) {
      audioEl.src = src;
    }
    fileMode = true;
  }

  /* ---------- Điều khiển ---------- */
  function start() {
    ensureCtx();
    const resumePromise = ctx.resume ? ctx.resume().catch(() => {}) : Promise.resolve();
    master.gain.setTargetAtTime(volume, ctx.currentTime, .1);

    if (fileMode && audioEl) {
      stopSynthTimer();
      if (!mediaSrc) audioEl.volume = volume;
      const playPromise = audioEl.play();
      if (playPromise && typeof playPromise.then === 'function') {
        return playPromise.then(() => {
          playing = true;
          resumePromise.then(() => connectAudioToGraph());
          return true;
        }).catch(() => {
          playing = false;
          return false;
        });
      }
      playing = true;
      return Promise.resolve(true);
    } else {
      if (audioEl) audioEl.pause();
      return resumePromise.then(() => {
        if (ctx.state !== 'running') {
          playing = false;
          return false;
        }
        playing = true;
        stepIdx = 0;
        nextStepTime = ctx.currentTime + 0.1;
        stopSynthTimer();
        timer = setInterval(pump, 100);
        pump();
        return true;
      });
    }
  }

  function stop() {
    playing = false;
    stopSynthTimer();
    if (audioEl) audioEl.pause();
    if (ctx) {
      master.gain.setTargetAtTime(0.0001, ctx.currentTime, .12);
      // chỉ suspend khi không ai gõ piano ngay sau đó (giữ tiếng phím ngân trọn)
      setTimeout(() => { if (!playing && ctx && Date.now() - lastKeyAt > 400) ctx.suspend(); }, 450);
    }
  }

  function setVolume(v) {
    volume = v;
    if (audioEl && !mediaSrc) audioEl.volume = v;
    if (ctx) {
      sfx.gain.setTargetAtTime(v, ctx.currentTime, .08);
      if (playing) master.gain.setTargetAtTime(v, ctx.currentTime, .08);
    }
  }

  /* ---------- Phím piano mini (dùng chung engine, hỗ trợ nhiều âm sắc) ---------- */
  function playKey(midi, tone) {
    ensureCtx();
    ctx.resume();
    connectAudioToGraph();
    lastKeyAt = Date.now();
    const t = ctx.currentTime;
    const f = freq(midi);
    const mode = tone || 'piano';

    if (mode === 'musicbox') {
      osc('sine', f * 2, t, .18, .003, 1.6, true, sfx);
      osc('triangle', f * 4, t, .06, .002, .7, true, sfx);
      osc('sine', f, t, .08, .005, 1.1, false, sfx);
    } else if (mode === 'guitar') {
      osc('sawtooth', f, t, .14, .004, .95, true, sfx);
      osc('triangle', f * 2, t, .08, .004, .55, true, sfx);
      osc('sine', f / 2, t, .07, .006, .7, false, sfx);
    } else if (mode === 'synth8bit') {
      osc('square', f, t, .11, .002, .48, true, sfx);
      osc('square', f * 2, t, .04, .002, .3, true, sfx);
    } else {
      // Crystal Piano (mặc định)
      osc('triangle', f, t, .22, .005, 1.3, true, sfx);
      osc('sine', f * 2, t, .07, .005, .8, true, sfx);
      osc('sine', f / 2, t, .05, .005, .6, false, sfx);
    }
  }

  /* ---------- Gắn UI ---------- */
  const $ = s => document.querySelector(s);
  function setLabel(txt) { const el = $('#track-label'); if (el) el.textContent = txt; }

  // sessionStorage an toàn
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  let tryAutoPlayRef = () => {};

  document.addEventListener('DOMContentLoaded', () => {
    const player = $('#music-player'), btn = $('#music-toggle'), panel = $('#music-panel'),
          gear = $('#music-settings'), vol = $('#music-vol'),
          modeBtn = $('#btn-mode'), up = $('#btn-upload'), fin = $('#file-input');

    const savedVol = store.get('miku-vol');
    if (savedVol !== null) {
      const parsed = parseFloat(savedVol);
      if (!Number.isNaN(parsed)) {
        volume = Math.min(1, Math.max(0, parsed));
        vol.value = Math.round(volume * 100);
      }
    }

    function updateModeUI() {
      if (!modeBtn) return;
      if (fileMode) {
        modeBtn.textContent = '🎹';
        modeBtn.title = 'Chuyển sang nhạc Miku Synth (Web Audio)';
      } else {
        modeBtn.textContent = '🎵';
        modeBtn.title = 'Chuyển sang nhạc MP3';
      }
    }

    // Khởi tạo chế độ nhạc mặc định (ưu tiên MP3 bgm.mp3 trừ khi người dùng chọn Synth)
    if (store.get('miku-mode') === 'synth') {
      fileMode = false;
      setLabel('♪ Miku Synth BGM');
    } else {
      useAudioElement(pendingFileSrc);
      setLabel('♪ Miku Stage BGM (MP3)');
    }
    updateModeUI();

    const UNLOCK_EVENTS = ['pointerdown', 'touchstart', 'keydown', 'click'];

    function disarmAutoUnlock() {
      if (!autoUnlockArmed) return;
      autoUnlockArmed = false;
      UNLOCK_EVENTS.forEach(ev => window.removeEventListener(ev, onFirstGesture, true));
    }

    function onFirstGesture(e) {
      // Nếu người dùng bấm trực tiếp vào nút bật/tắt nhạc thì để sự kiện click của nút đó tự xử lý
      if (e && e.target && e.target.closest && e.target.closest('#music-toggle')) {
        disarmAutoUnlock();
        return;
      }
      if (store.get('miku-music-manual-off') === '1' || playing) {
        disarmAutoUnlock();
        return;
      }
      start().then(ok => {
        if (ok) {
          btn.classList.remove('hint');
          btn.classList.add('playing');
          disarmAutoUnlock();
        }
      });
    }

    function tryAutoPlay() {
      if (store.get('miku-music-manual-off') === '1' || playing) return;
      start().then(ok => {
        if (ok) {
          btn.classList.remove('hint');
          btn.classList.add('playing');
          disarmAutoUnlock();
        } else {
          // Trình duyệt yêu cầu tương tác đầu tiên mới mở khóa âm thanh → tự bật ngay khi chạm/click bất kỳ đâu
          btn.classList.add('hint');
          if (!autoUnlockArmed) {
            autoUnlockArmed = true;
            UNLOCK_EVENTS.forEach(ev => window.addEventListener(ev, onFirstGesture, { capture: true, passive: true }));
          }
        }
      });
    }
    tryAutoPlayRef = tryAutoPlay;

    // Tự động bật nhạc ngay khi vào trang
    tryAutoPlay();

    btn.addEventListener('click', () => {
      disarmAutoUnlock();
      btn.classList.remove('hint');
      if (playing) {
        stop();
        btn.classList.remove('playing');
        store.set('miku-music-manual-off', '1');
      } else {
        store.set('miku-music-manual-off', '0');
        if (pendingFileSrc && !fileMode && !customSrc && store.get('miku-mode') !== 'synth') {
          useAudioElement(pendingFileSrc);
          setLabel('♪ Miku Stage BGM (MP3)');
        }
        updateModeUI();
        start().then(ok => {
          if (ok) {
            btn.classList.add('playing');
          }
        });
      }
    });

    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        const wasPlaying = playing;
        if (wasPlaying) stop();
        if (fileMode) {
          fileMode = false;
          store.set('miku-mode', 'synth');
          setLabel('♪ Miku Synth BGM');
        } else {
          const src = customSrc || pendingFileSrc || 'assets/audio/bgm.mp3';
          useAudioElement(src);
          store.set('miku-mode', 'mp3');
          setLabel(customName ? '♪ ' + customName : '♪ Miku Stage BGM (MP3)');
        }
        updateModeUI();
        if (wasPlaying) {
          start().then(ok => { if (ok) btn.classList.add('playing'); });
        }
      });
    }

    gear.addEventListener('click', () => panel.classList.toggle('open'));

    // đóng bảng cài đặt nhạc khi click ra ngoài
    document.addEventListener('click', e => {
      if (panel.classList.contains('open') && player && !player.contains(e.target)) {
        panel.classList.remove('open');
      }
    });

    vol.addEventListener('input', () => {
      setVolume(vol.value / 100);
      store.set('miku-vol', String(vol.value / 100));
    });

    up.addEventListener('click', () => fin.click());
    fin.addEventListener('change', () => {
      const f = fin.files[0];
      if (!f) return;
      if (customSrc) URL.revokeObjectURL(customSrc);
      customSrc = URL.createObjectURL(f);
      customName = f.name;
      if (playing) stop();
      useAudioElement(customSrc);
      store.set('miku-mode', 'mp3');
      store.set('miku-music-manual-off', '0');
      setLabel('♪ ' + f.name);
      updateModeUI();
      start().then(ok => {
        if (ok) {
          btn.classList.add('playing');
        }
      });
    });
  });

  window.Music = {
    playKey,
    isPlaying: () => playing,
    analyser: () => analyser,
    tryAutoPlay: () => tryAutoPlayRef(),
    toggle: () => { const b = $('#music-toggle'); if (b) b.click(); }
  };
})();
