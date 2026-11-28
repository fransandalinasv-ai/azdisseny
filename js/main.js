/* =========================================================
   AZDISSENY — Interactive Kinetic Studio Engine
   Ken Burns Hero + Live Progress, Continuous Kinetic Strip,
   Bolet Spotlight, 2nd-Image Hover Crossfade, Typographic
   Capabilities, Mobile Drawer, Bilingual EN/ES & Modals
   ========================================================= */

'use strict';

(function () {
  const CFG = window.AZ_CONFIG;
  const HERO_INTERVAL_MS = 5000;
  let currentLang = localStorage.getItem('az_lang') || 'en';
  let heroSlideIdx = 0;
  let heroTimer = null;
  let heroPaused = false;
  let revealObserver = null;

  /* -------------------------------------------------------
     HELPERS
  ------------------------------------------------------- */
  function getByPath(obj, path) {
    return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : ''), obj);
  }

  function formatIndex(idx, total) {
    const a = String(idx + 1).padStart(2, '0');
    const b = String(total).padStart(2, '0');
    return `${a} / ${b}`;
  }

  function buildKineticButtonMarkup(label, withArrow = false) {
    const arrow = withArrow ? ' <span class="btn-kinetic__arrow" aria-hidden="true">→</span>' : '';
    return `<span class="btn-kinetic__slot"><span class="btn-kinetic__top">${label}</span><span class="btn-kinetic__bot" aria-hidden="true">${label}</span></span>${arrow}`;
  }

  function enhanceKineticButtons(root = document) {
    root.querySelectorAll('.btn-kinetic').forEach((btn) => {
      if (btn.querySelector('.btn-kinetic__slot')) return;
      const withArrow = btn.hasAttribute('data-arrow');
      const label = btn.textContent.trim();
      btn.innerHTML = buildKineticButtonMarkup(label, withArrow);
    });
  }

  /* -------------------------------------------------------
     FULL-HEIGHT MOBILE DRAWER
  ------------------------------------------------------- */
  function setMobileDrawerState(open) {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggle || !drawer) return;
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
  }

  function closeMobileDrawer() {
    setMobileDrawerState(false);
  }

  function initMobileDrawer() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      const opening = !drawer.classList.contains('is-open');
      setMobileDrawerState(opening);
    });

    drawer.querySelectorAll('a, [data-open-contact]').forEach((el) => {
      el.addEventListener('click', closeMobileDrawer);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMobileDrawer();
    });
  }

  /* -------------------------------------------------------
     HERO SHOWCASE FRAME (KEN BURNS + LIVE PROGRESS BAR)
  ------------------------------------------------------- */
  function restartHeroProgress() {
    const fill = document.getElementById('hero-progress-fill');
    if (!fill) return;
    fill.classList.remove('is-running');
    void fill.offsetWidth;
    fill.classList.add('is-running');
  }

  function updateHeroUI(animateCaption = false) {
    const slidesEl = document.getElementById('hero-slides');
    const dotsEl = document.getElementById('hero-indicators');
    const counterEl = document.getElementById('hero-counter');
    const captionEl = document.getElementById('hero-caption');
    if (!slidesEl || !dotsEl) return;

    const slideData = CFG.heroSlides[heroSlideIdx];
    slidesEl.querySelectorAll('.hero-slide').forEach((el, i) => {
      const active = i === heroSlideIdx;
      el.classList.remove('is-active');
      if (active) {
        void el.offsetWidth;
        el.classList.add('is-active');
      }
    });

    dotsEl.querySelectorAll('.hero-dot').forEach((el, i) => {
      const active = i === heroSlideIdx;
      el.classList.toggle('is-active', active);
      el.setAttribute('aria-selected', String(active));
    });

    if (counterEl) {
      counterEl.textContent = formatIndex(heroSlideIdx, CFG.heroSlides.length);
    }

    if (captionEl && slideData && slideData.caption) {
      const nextText = slideData.caption[currentLang] || slideData.caption.en;
      if (animateCaption) {
        captionEl.classList.add('is-swapping');
        setTimeout(() => {
          captionEl.textContent = nextText;
          captionEl.classList.remove('is-swapping');
        }, 140);
      } else {
        captionEl.textContent = nextText;
      }
    }

    restartHeroProgress();
  }

  function startHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      if (heroPaused) return;
      heroSlideIdx = (heroSlideIdx + 1) % CFG.heroSlides.length;
      updateHeroUI(true);
    }, HERO_INTERVAL_MS);
  }

  function goToHeroSlide(idx) {
    const total = CFG.heroSlides.length;
    heroSlideIdx = ((idx % total) + total) % total;
    updateHeroUI(true);
    startHeroTimer();
  }

  function initHero() {
    const slidesEl = document.getElementById('hero-slides');
    const dotsEl = document.getElementById('hero-indicators');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const showcase = document.getElementById('hero-showcase');
    if (!slidesEl || !dotsEl) return;

    slidesEl.innerHTML = CFG.heroSlides.map((s, i) => {
      const isContain = s.fit === 'contain';
      const slideCls = isContain ? 'hero-slide hero-slide--contain' : 'hero-slide';
      const fitStyle = isContain ? 'object-fit:contain;padding:14px;' : 'object-fit:cover;';
      const posStyle = s.position ? `object-position:${s.position};` : '';
      const bgStyle = s.bg ? ` style="background:${s.bg}"` : '';
      return `
        <div class="${slideCls} ${i === heroSlideIdx ? 'is-active' : ''}"${bgStyle}>
          <img src="${s.src}" alt="${s.alt}" style="${fitStyle}${posStyle}">
        </div>
      `;
    }).join('');

    dotsEl.innerHTML = CFG.heroSlides.map((_, i) => `
      <button type="button" class="hero-dot ${i === heroSlideIdx ? 'is-active' : ''}" data-hero-dot="${i}" role="tab" aria-label="Slide ${i + 1}" aria-selected="${i === heroSlideIdx}"></button>
    `).join('');

    dotsEl.querySelectorAll('[data-hero-dot]').forEach((dot) => {
      dot.addEventListener('click', () => goToHeroSlide(Number(dot.dataset.heroDot)));
    });

    if (prevBtn) prevBtn.addEventListener('click', () => goToHeroSlide(heroSlideIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToHeroSlide(heroSlideIdx + 1));

    if (showcase) {
      const setPaused = (paused) => {
        heroPaused = paused;
        showcase.classList.toggle('is-paused', paused);
      };
      showcase.addEventListener('mouseenter', () => setPaused(true));
      showcase.addEventListener('mouseleave', () => setPaused(false));
      showcase.addEventListener('focusin', () => setPaused(true));
      showcase.addEventListener('focusout', () => setPaused(false));
    }

    updateHeroUI(false);
    startHeroTimer();
  }

  /* -------------------------------------------------------
     CONTINUOUS MONOCHROME KINETIC STRIP
  ------------------------------------------------------- */
  function renderKineticStrip(dict) {
    const track = document.getElementById('kinetic-track');
    if (!track || !dict.kineticItems) return;
    const groupHTML = `
      <div class="kinetic-strip__group">
        ${dict.kineticItems.map((item) => `<span>${item}</span><span class="kinetic-strip__sep">/</span>`).join('')}
      </div>
    `;
    track.innerHTML = groupHTML + groupHTML;
  }

  /* -------------------------------------------------------
     01 / PHYSICAL PRODUCTS (BOLET SPOTLIGHT + 3 KINETIC CARDS)
  ------------------------------------------------------- */
  function featuredHardwareHTML(p, dict) {
    const tags = p.featuredTags || p.tags.slice(0, 3);
    const posStyle = p.coverPosition ? ` style="object-position:${p.coverPosition}"` : '';
    return `
      <article class="featured-work reveal">
        <div class="featured-work__media" data-open-project="${p.id}" role="button" tabindex="0" aria-label="${p.title}">
          <img class="featured-work__img" src="${p.cover}" alt="${p.title}"${posStyle}>
        </div>
        <div class="featured-work__body">
          <div class="featured-work__top">
            <span class="featured-badge">${dict.work.featuredBadge}</span>
            <div class="featured-work__meta">${p.meta}</div>
            <h3 class="featured-work__title">${p.title}</h3>
            <p class="featured-work__summary">${p.summary}</p>
            <div class="featured-work__tags">
              ${tags.map((t) => `<span class="chip">${t}</span>`).join('')}
            </div>
          </div>
          <div class="featured-work__footer">
            <button type="button" class="btn btn--primary btn-kinetic" data-open-project="${p.id}" data-arrow>
              ${buildKineticButtonMarkup(dict.work.featuredCta, true)}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function mediaBadgeHTML() {
    return `
      <span class="media-badge" aria-hidden="true">
        <span class="media-badge__slot">
          <span class="media-badge__a">01 / 02</span>
          <span class="media-badge__b">02 / 02</span>
        </span>
      </span>
    `;
  }

  function hardwareCardHTML(p, delayIdx, viewLabel) {
    const hasHover = Boolean(p.hoverCover);
    const cardClass = hasHover ? 'work-card has-hover reveal' : 'work-card reveal';
    const posStyle = p.coverPosition ? ` style="object-position:${p.coverPosition}"` : '';
    const hoverPosStyle = p.hoverPosition ? ` style="object-position:${p.hoverPosition}"` : '';
    const hoverMarkup = hasHover ? `
      <div class="card-hover-layer">
        <img src="${p.hoverCover}" alt="" loading="lazy"${hoverPosStyle}>
      </div>
      ${mediaBadgeHTML()}
    ` : '';

    return `
      <button type="button" class="${cardClass}" style="transition-delay:${delayIdx * 75}ms" data-open-project="${p.id}">
        <div class="work-card__media">
          <img class="work-card__img work-card__img--primary" src="${p.cover}" alt="${p.title}" loading="lazy"${posStyle}>
          ${hoverMarkup}
        </div>
        <div class="work-card__body">
          <div class="work-card__meta">${p.meta}</div>
          <h3 class="work-card__title">${p.title}</h3>
          <p class="work-card__summary">${p.summary}</p>
          <span class="work-card__link">${viewLabel} <span class="work-card__arrow" aria-hidden="true">→</span></span>
        </div>
      </button>
    `;
  }

  /* -------------------------------------------------------
     02 / SOFTWARE, APPS & APPLIED AI (DARK GRAPHITE CARDS)
  ------------------------------------------------------- */
  function softwareCardHTML(p, delayIdx, viewLabel) {
    const hasHover = Boolean(p.hoverCover);
    const isContain = p.coverFit === 'contain';
    const cardClass = hasHover ? 'lab-card has-hover reveal' : 'lab-card reveal';
    const imgClass = isContain
      ? 'lab-card__img lab-card__img--primary lab-card__img--contain'
      : 'lab-card__img lab-card__img--primary';
    const posStyle = !isContain && p.coverPosition ? ` style="object-position:${p.coverPosition}"` : '';
    const bgStyle = p.coverBg ? ` style="background:${p.coverBg}"` : '';

    let hoverMarkup = '';
    if (hasHover) {
      const hoverContain = p.hoverFit === 'contain';
      const hoverLayerCls = hoverContain ? 'card-hover-layer card-hover-layer--contain' : 'card-hover-layer';
      const hoverBg = p.hoverBg ? ` style="background:${p.hoverBg}"` : '';
      const hoverPos = !hoverContain && p.hoverPosition ? ` style="object-position:${p.hoverPosition}"` : '';
      hoverMarkup = `
        <div class="${hoverLayerCls}"${hoverBg}>
          <img src="${p.hoverCover}" alt="" loading="lazy"${hoverPos}>
        </div>
        ${mediaBadgeHTML()}
      `;
    }

    return `
      <button type="button" class="${cardClass}" style="transition-delay:${delayIdx * 70}ms" data-open-project="${p.id}">
        <div class="lab-card__media"${bgStyle}>
          <img class="${imgClass}" src="${p.cover}" alt="${p.title}" loading="lazy"${posStyle}>
          ${hoverMarkup}
        </div>
        <div class="lab-card__body">
          <div class="lab-card__meta">${p.meta}</div>
          <h3 class="lab-card__title">${p.title}</h3>
          <p class="lab-card__summary">${p.summary}</p>
          <span class="lab-card__link">${viewLabel} <span class="lab-card__arrow" aria-hidden="true">→</span></span>
        </div>
      </button>
    `;
  }

  /* -------------------------------------------------------
     03 / CAPABILITIES (100% TYPOGRAPHIC — ZERO PHOTOS)
  ------------------------------------------------------- */
  function renderServices(dict) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = dict.services.pillars.map((p, i) => `
      <article class="service-card reveal" style="transition-delay:${i * 75}ms">
        <div class="service-card__head">
          <span class="service-card__num">${p.num}</span>
          <span class="service-card__index">0${i + 1} / 03</span>
        </div>
        <h3 class="service-card__title">${p.title}</h3>
        <p class="service-card__desc">${p.desc}</p>
        <div class="service-card__chips">
          ${p.chips.map((c) => `<span class="chip">${c}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  /* -------------------------------------------------------
     RENDER ALL GRIDS
  ------------------------------------------------------- */
  function renderGrids(dict) {
    const hwFeatured = document.getElementById('hardware-featured');
    const hwGrid = document.getElementById('hardware-grid');
    const swGrid = document.getElementById('software-grid');
    const procGrid = document.getElementById('process-grid');

    const featuredProj = dict.hardwareProjects.find((p) => p.featured) || dict.hardwareProjects[0];
    const otherHardware = dict.hardwareProjects.filter((p) => p.id !== featuredProj.id);

    if (hwFeatured && featuredProj) {
      hwFeatured.innerHTML = featuredHardwareHTML(featuredProj, dict);
    }

    if (hwGrid) {
      hwGrid.innerHTML = otherHardware
        .map((p, i) => hardwareCardHTML(p, i, dict.work.viewProject))
        .join('');
    }

    if (swGrid) {
      const cards = dict.softwareProjects
        .map((p, i) => softwareCardHTML(p, i, dict.lab.viewProject))
        .join('');
      const ctaCard = `
        <div class="lab-card lab-card--cta reveal" style="transition-delay:${dict.softwareProjects.length * 70}ms">
          <div class="lab-cta__top">
            <span class="lab-cta__eyebrow">${dict.mystery.eyebrow}</span>
            <h3 class="lab-cta__title">${dict.mystery.title}</h3>
            <p class="lab-cta__desc">${dict.mystery.desc}</p>
          </div>
          <div class="lab-cta__bottom">
            <button type="button" class="btn btn--light btn-kinetic" data-open-contact>
              ${buildKineticButtonMarkup(dict.mystery.cta, false)}
            </button>
          </div>
        </div>
      `;
      swGrid.innerHTML = cards + ctaCard;
    }

    if (procGrid) {
      procGrid.innerHTML = dict.process.steps.map((s, i) => `
        <div class="process-step reveal" style="transition-delay:${i * 75}ms">
          <span class="process-step__num">${s.num}</span>
          <h3 class="process-step__title">${s.title}</h3>
          <p class="process-step__desc">${s.desc}</p>
        </div>
      `).join('');
    }
  }

  /* -------------------------------------------------------
     SCROLL REVEAL (SAFE ON INITIAL LOAD & EN/ES SWITCH)
  ------------------------------------------------------- */
  function initScrollReveal() {
    if (revealObserver) revealObserver.disconnect();
    const els = document.querySelectorAll('.reveal');
    const thresholdY = window.innerHeight * 0.98;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px 40px 0px' });

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < thresholdY) {
        el.classList.add('is-visible');
      } else {
        revealObserver.observe(el);
      }
    });
  }

  /* -------------------------------------------------------
     MODALS (Project, Contact, Legal)
  ------------------------------------------------------- */
  function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('hidden');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('hidden');
    el.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.modal:not(.hidden)')) {
      document.body.classList.remove('modal-open');
    }
  }

  function openProjectDetail(projectId) {
    const dict = CFG.i18n[currentLang];
    const all = [...dict.hardwareProjects, ...dict.softwareProjects];
    const proj = all.find((p) => p.id === projectId);
    if (!proj) return;

    const galleryClasses = ['proj-modal__gallery'];
    if (proj.galleryLayout === 'portrait') galleryClasses.push('proj-modal__gallery--portrait');
    if (proj.galleryLayout === 'landscape') galleryClasses.push('proj-modal__gallery--landscape');
    if (proj.gallery.length === 1) galleryClasses.push('proj-modal__gallery--single');
    if (proj.galleryLayout === 'portrait' && proj.gallery.length === 5) {
      galleryClasses.push('proj-modal__gallery--row5');
    }

    const itemClass = proj.zone === 'digital' ? 'gallery-item gallery-item--dark' : 'gallery-item';

    const body = document.getElementById('project-modal-body');
    body.innerHTML = `
      <div class="proj-modal__header">
        <span class="eyebrow">${proj.meta}</span>
        <h2 class="proj-modal__title">${proj.title}</h2>
        <p class="proj-modal__desc">${proj.description}</p>
        <div class="proj-modal__tags">
          ${proj.tags.map((t) => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>

      <div class="${galleryClasses.join(' ')}">
        ${proj.gallery.map((src) => `<button type="button" class="${itemClass}" data-zoom-img="${src}" aria-label="${proj.title}"><img src="${src}" alt="${proj.title}" loading="lazy"></button>`).join('')}
      </div>

      <div class="proj-modal__highlights">
        ${proj.highlights.map((h) => `
          <div class="highlight-box">
            <div class="highlight-box__title">${h.title}</div>
            <div class="highlight-box__text">${h.text}</div>
          </div>
        `).join('')}
      </div>

      <div class="proj-modal__footer">
        <span class="eyebrow" style="margin:0">${dict.modal.specsLabel}</span>
        <button type="button" class="btn btn--primary btn-kinetic" data-open-contact-from-project>
          ${buildKineticButtonMarkup(dict.modal.buildSimilar, false)}
        </button>
      </div>
    `;

    body.querySelector('[data-open-contact-from-project]').addEventListener('click', () => {
      closeModal('project-modal');
      openContactModal();
    });
    openModal('project-modal');
  }

  function openContactModal() {
    const m = CFG.i18n[currentLang].modal;
    const body = document.getElementById('contact-modal-body');
    body.innerHTML = `
      <span class="eyebrow">AZDISSENY · A-Z DISSENY, SL</span>
      <h2 class="proj-modal__title" style="font-size:28px">${m.contactTitle}</h2>
      <p class="proj-modal__desc" style="margin-bottom:0">${m.contactSub}</p>

      <form class="form-stack" id="az-contact-form">
        <div class="form-field">
          <label for="az-name">${m.name}</label>
          <input id="az-name" name="name" type="text" required placeholder="${m.namePh}">
        </div>
        <div class="form-field">
          <label for="az-email">${m.email}</label>
          <input id="az-email" name="email" type="email" required placeholder="${m.emailPh}">
        </div>
        <div class="form-field">
          <label for="az-area">${m.area}</label>
          <select id="az-area" name="area">
            ${m.areas.map((a) => `<option value="${a}">${a}</option>`).join('')}
          </select>
        </div>
        <div class="form-field">
          <label for="az-msg">${m.message}</label>
          <textarea id="az-msg" name="message" rows="4" required placeholder="${m.messagePh}"></textarea>
        </div>
        <label class="form-privacy">
          <input type="checkbox" required>
          <span>${m.privacyPrefix} <button type="button" data-open-legal="privacidad">${m.privacyLink}</button>.</span>
        </label>
        <p class="form-rgpd-note">${m.rgpdNote}</p>
        <div class="form-status" id="az-form-status"></div>
        <button type="submit" class="btn btn--primary btn-kinetic" id="az-form-submit">
          ${buildKineticButtonMarkup(m.submit, false)}
        </button>
      </form>
    `;

    const form = document.getElementById('az-contact-form');
    const status = document.getElementById('az-form-status');
    const submitBtn = document.getElementById('az-form-submit');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = m.sending;
      status.className = 'form-status';
      try {
        const res = await fetch(CFG.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        status.textContent = m.success;
        status.classList.add('is-success');
        form.reset();
      } catch (err) {
        status.textContent = m.error;
        status.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = buildKineticButtonMarkup(m.submit, false);
      }
    });

    openModal('contact-modal');
  }

  function openLegalModal(tabKey = 'aviso') {
    const body = document.getElementById('legal-modal-body');
    const keys = Object.keys(CFG.legal);

    const renderTab = (active) => {
      body.innerHTML = `
        <span class="eyebrow">A-Z DISSENY, SL · NIF B60369329</span>
        <div class="legal-tabs">
          ${keys.map((k) => `<button type="button" class="legal-tab ${k === active ? 'is-active' : ''}" data-legal-switch="${k}">${CFG.legal[k].label}</button>`).join('')}
        </div>
        <div class="legal-body">${CFG.legal[active].html}</div>
      `;
      body.querySelectorAll('[data-legal-switch]').forEach((btn) => {
        btn.addEventListener('click', () => renderTab(btn.dataset.legalSwitch));
      });
    };
    renderTab(keys.includes(tabKey) ? tabKey : 'aviso');
    openModal('legal-modal');
  }

  /* -------------------------------------------------------
     LIGHTBOX CLICK-TO-ZOOM
  ------------------------------------------------------- */
  function openLightbox(src, alt) {
    let box = document.getElementById('img-lightbox');
    if (!box) {
      box = document.createElement('div');
      box.id = 'img-lightbox';
      box.className = 'img-lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.innerHTML = `
        <button type="button" class="img-lightbox__close" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <img class="img-lightbox__img" src="" alt="">
      `;
      box.addEventListener('click', (ev) => {
        if (ev.target === box || ev.target.closest('.img-lightbox__close')) {
          box.classList.remove('is-open');
        }
      });
      document.body.appendChild(box);
    }
    const img = box.querySelector('.img-lightbox__img');
    img.src = src;
    img.alt = alt;
    box.classList.add('is-open');
  }

  /* -------------------------------------------------------
     APPLY LANGUAGE & FULL RENDER
  ------------------------------------------------------- */
  function setLanguage(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem('az_lang', currentLang);
    document.documentElement.lang = currentLang;

    const dict = CFG.i18n[currentLang];

    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18n);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-btn]').forEach((el) => {
      const val = getByPath(dict, el.dataset.i18nBtn);
      if (val) {
        const withArrow = el.hasAttribute('data-arrow');
        el.innerHTML = buildKineticButtonMarkup(val, withArrow);
      }
    });

    updateHeroUI(false);
    renderKineticStrip(dict);
    renderGrids(dict);
    renderServices(dict);
    enhanceKineticButtons(document);
    initScrollReveal();
  }

  /* -------------------------------------------------------
     GLOBAL EVENT DELEGATION
  ------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      setLanguage(langBtn.dataset.lang);
      return;
    }

    const projBtn = e.target.closest('[data-open-project]');
    if (projBtn) {
      openProjectDetail(projBtn.dataset.openProject);
      return;
    }

    if (e.target.closest('[data-open-contact]')) {
      openContactModal();
      return;
    }

    const legalBtn = e.target.closest('[data-open-legal]');
    if (legalBtn) {
      openLegalModal(legalBtn.dataset.openLegal);
      return;
    }

    const closeBtn = e.target.closest('[data-close-modal]');
    if (closeBtn) {
      closeModal(closeBtn.dataset.closeModal);
      return;
    }

    const zoomBtn = e.target.closest('[data-zoom-img]');
    if (zoomBtn) {
      openLightbox(zoomBtn.dataset.zoomImg, zoomBtn.getAttribute('aria-label') || '');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const roleProj = e.target.closest('[role="button"][data-open-project]');
      if (roleProj) {
        e.preventDefault();
        openProjectDetail(roleProj.dataset.openProject);
        return;
      }
    }

    if (e.key === 'Escape') {
      const box = document.getElementById('img-lightbox');
      if (box && box.classList.contains('is-open')) {
        box.classList.remove('is-open');
        return;
      }
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && drawer.classList.contains('is-open')) {
        closeMobileDrawer();
        return;
      }
      document.querySelectorAll('.modal:not(.hidden)').forEach((m) => closeModal(m.id));
    }
  });

  /* -------------------------------------------------------
     BOOT
  ------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initMobileDrawer();
    initHero();
    setLanguage(currentLang);
  });
})();
