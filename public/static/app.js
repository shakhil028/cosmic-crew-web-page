/* ═══════════════════════════════════════════════════════
   COSMIC CREW DEVELOPMENT — interactions
   ═══════════════════════════════════════════════════════ */
(() => {
  'use strict';

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ───── starfield canvas ───── */
  const canvas = document.getElementById('starfield');
  if (canvas && !reduce) {
    const ctx = canvas.getContext('2d', { alpha: true });
    let w = 0, h = 0, dpr = 1;
    let stars = [];
    let shooting = [];
    let rafId = null;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(w * h / 6800, 260));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.35 + 0.25,
        a: Math.random() * 0.6 + 0.15,
        tw: Math.random() * 0.022 + 0.004,
        ph: Math.random() * Math.PI * 2,
        vy: Math.random() * 0.045 + 0.012,
        warm: Math.random() > 0.72
      }));
    };

    const paint = (t) => {
      ctx.clearRect(0, 0, w, h);

      // stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.ph += s.tw;
        s.y += s.vy;
        if (s.y > h + 2) { s.y = -2; s.x = Math.random() * w; }

        const alpha = s.a + Math.sin(s.ph) * 0.32;
        const a = alpha < 0.03 ? 0.03 : alpha > 0.95 ? 0.95 : alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.warm
          ? `rgba(255, 226, 190, ${a})`
          : `rgba(226, 232, 255, ${a})`;
        ctx.fill();

        // rare sparkle cross on the brightest stars
        if (s.r > 1.25) {
          ctx.strokeStyle = s.warm
            ? `rgba(255, 214, 170, ${a * 0.42})`
            : `rgba(220, 228, 255, ${a * 0.4})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 3.4, s.y);
          ctx.lineTo(s.x + s.r * 3.4, s.y);
          ctx.moveTo(s.x, s.y - s.r * 3.4);
          ctx.lineTo(s.x, s.y + s.r * 3.4);
          ctx.stroke();
        }
      }

      // shooting stars
      if (Math.random() < 0.0035 && shooting.length < 2) {
        shooting.push({
          x: Math.random() * w * 0.75,
          y: Math.random() * h * 0.42,
          vx: 3.6 + Math.random() * 2.6,
          vy: 1.5 + Math.random() * 1.1,
          life: 1
        });
      }
      shooting = shooting.filter((sh) => {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 0.0085;
        if (sh.life <= 0) return false;

        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 20, sh.y - sh.vy * 20);
        grad.addColorStop(0, `rgba(255, 236, 205, ${sh.life * 0.9})`);
        grad.addColorStop(0.35, `rgba(244, 118, 28, ${sh.life * 0.5})`);
        grad.addColorStop(1, 'rgba(244, 118, 28, 0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 20, sh.y - sh.vy * 20);
        ctx.stroke();
        return true;
      });

      rafId = requestAnimationFrame(paint);
    };

    build();
    paint(0);

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 180);
    });

    // pause when tab hidden to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = null;
      } else if (!rafId) {
        rafId = requestAnimationFrame(paint);
      }
    });
  }

  /* ───── nav scroll state + progress bar ───── */
  const nav = document.getElementById('nav');
  const bar = document.getElementById('scrollBar');
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY || 0;
    if (nav) nav.classList.toggle('scrolled', y > 30);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      bar.style.width = pct.toFixed(2) + '%';
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* ───── mobile menu ───── */
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');

  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = !menu.classList.contains('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ───── scroll reveal ───── */
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));

    // hero reveals fire immediately (staggered)
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('shown'));
    });
  } else {
    revealEls.forEach((el) => el.classList.add('shown'));
  }

  /* ───── holo card bars on view ───── */
  const holo = document.querySelector('.holo-card');
  if (holo && 'IntersectionObserver' in window) {
    const hio = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) {
        holo.classList.add('in');
        hio.disconnect();
      }
    }, { threshold: 0.4 });
    hio.observe(holo);
  }

  /* ───── animated counters ───── */
  const counters = Array.from(document.querySelectorAll('[data-count]'));
  const runCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    if (reduce) { el.textContent = String(target); return; }
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach(runCounter);
  }

  /* ───── cursor glow + card spotlight + tilt ───── */
  const glow = document.getElementById('cursorGlow');
  if (fine) {
    document.body.classList.add('has-pointer');
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    let cx = gx, cy = gy;

    window.addEventListener('pointermove', (e) => {
      gx = e.clientX;
      gy = e.clientY;
    }, { passive: true });

    const loop = () => {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      if (glow) glow.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    };
    if (!reduce) loop();

    // spotlight follow on cards
    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });

    // 3D tilt
    if (!reduce) {
      document.querySelectorAll('[data-tilt]').forEach((el) => {
        let rect = null;
        const strength = el.classList.contains('work-item') ? 3.2 : 5;

        el.addEventListener('pointerenter', () => { rect = el.getBoundingClientRect(); });
        el.addEventListener('pointermove', (e) => {
          if (!rect) rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          el.style.transform =
            `perspective(1100px) rotateX(${(-py * strength).toFixed(2)}deg) ` +
            `rotateY(${(px * strength).toFixed(2)}deg) translateY(-4px)`;
        });
        el.addEventListener('pointerleave', () => {
          rect = null;
          el.style.transform = '';
        });
      });
    }
  }

  /* ───── magnetic buttons ───── */
  if (fine && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - r.left - r.width / 2) * 0.16;
        const my = (e.clientY - r.top - r.height / 2) * 0.26;
        el.style.transform = `translate(${mx.toFixed(2)}px, ${my.toFixed(2)}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ───── year ───── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ───── crew application form ───── */
  const form = document.getElementById('crewForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (form && status && submitBtn) {
    const setStatus = (msg, type) => {
      status.textContent = msg;
      status.className = 'form-status' + (type ? ' ' + type : '');
    };

    const validate = () => {
      let ok = true;
      form.querySelectorAll('[required]').forEach((input) => {
        const field = input.closest('.field');
        let bad = false;
        if (!input.value.trim()) bad = true;
        else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) bad = true;
        field.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      return ok;
    };

    form.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('input', () => {
        const field = input.closest('.field');
        if (field && field.classList.contains('invalid')) field.classList.remove('invalid');
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) {
        setStatus('Please check the highlighted fields.', 'err');
        return;
      }

      const payload = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        role: form.role.value,
        link: form.link.value.trim(),
        message: form.message.value.trim()
      };

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      setStatus('Transmitting…', '');

      try {
        const res = await fetch('/api/apply', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));

        if (!res.ok || !data.ok) {
          throw new Error(data.error || 'Transmission failed. Try again.');
        }

        submitBtn.classList.remove('loading');
        submitBtn.classList.add('sent');
        submitBtn.querySelector('.btn-label').textContent = 'Signal received';
        setStatus('Transmission received — we reply within 5 working days.', 'ok');
        form.reset();

        setTimeout(() => {
          submitBtn.classList.remove('sent');
          submitBtn.querySelector('.btn-label').textContent = 'Send transmission';
          submitBtn.disabled = false;
        }, 4200);
      } catch (err) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        setStatus(err.message || 'Something went wrong. Try again.', 'err');
      }
    });
  }

  /* ───── active nav link highlight ───── */
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navAnchors.forEach((a) => {
          const active = a.getAttribute('href') === `#${id}`;
          a.style.color = active ? 'var(--cream)' : '';
        });
      });
    }, { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' });
    sections.forEach((s) => sio.observe(s));
  }
})();
