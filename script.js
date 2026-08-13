(() => {
  'use strict';

  /* ---------------------------------------------------
     Dynamic content — kept as data so it's easy to edit
     --------------------------------------------------- */
  const betterYouItems = [
    "Get stronger for everyday life",
    "Move with ease and confidence",
    "Increase energy and vitality",
    "Feel better in your body"
  ];

  const differenceCards = [
    {
      title: "Personalized Approach",
      desc: "Every program is built around your body, your goals and your schedule &mdash; never a one-size-fits-all plan.",
      icon: '<path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-7 16c0-3.87 3.13-7 7-7s7 3.13 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    },
    {
      title: "Accountability &amp; Support",
      desc: "We check in, track your progress and keep you moving forward, even on the days motivation runs low.",
      icon: '<path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19c0-2.76 2.69-5 6-5s6 2.24 6 5M14 14c3.31 0 6 2.24 6 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    },
    {
      title: "Real-World Results",
      desc: "Stronger body, better life. Our members see change that shows up outside the gym, not just on paper.",
      icon: '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      title: "Expert Coaches",
      desc: "Certified trainers who know how to coach every fitness level safely, from your very first session on.",
      icon: '<path d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>'
    }
  ];

  /* ---------------------------------------------------
     Render check list
     --------------------------------------------------- */
  const listEl = document.getElementById('betterYouList');
  if (listEl) {
    listEl.innerHTML = betterYouItems.map(item => `<li>${item}</li>`).join('');
  }

  /* ---------------------------------------------------
     Render difference cards
     --------------------------------------------------- */
  const gridEl = document.getElementById('diffGrid');
  if (gridEl) {
    gridEl.innerHTML = differenceCards.map(card => `
      <div class="diff-card">
        <div class="diff-icon"><svg viewBox="0 0 24 24">${card.icon}</svg></div>
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      </div>
    `).join('');
  }

  /* ---------------------------------------------------
     Mobile navigation
     --------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------
     Header shadow on scroll
     --------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 12
        ? '0 8px 24px -12px rgba(0,0,0,.5)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------
     Lead form validation
     --------------------------------------------------- */
  const form = document.getElementById('leadForm');
  const successEl = document.getElementById('formSuccess');

  const validators = {
    fullName: value => value.trim().length >= 2 ? '' : 'Please enter your full name.',
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Enter a valid email address.',
    phone: value => value.replace(/\D/g, '').length >= 10 ? '' : 'Enter a valid phone number.'
  };

  const setError = (field, message) => {
    const errEl = document.getElementById(`err-${field}`);
    if (errEl) errEl.textContent = message;
    const input = document.getElementById(field);
    if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  if (form) {
    Object.keys(validators).forEach(field => {
      const input = document.getElementById(field);
      if (!input) return;
      input.addEventListener('blur', () => setError(field, validators[field](input.value)));
      input.addEventListener('input', () => {
        if (input.getAttribute('aria-invalid') === 'true') {
          setError(field, validators[field](input.value));
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      Object.keys(validators).forEach(field => {
        const input = document.getElementById(field);
        const message = validators[field](input.value);
        setError(field, message);
        if (message) hasError = true;
      });

      if (hasError) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      form.hidden = true;
      if (successEl) successEl.hidden = false;
    });
  }

  /* ---------------------------------------------------
     Scroll reveal
     --------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.diff-card, .better-copy, .better-media, .testimonial-inner, .stat-item'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1)';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, (i % 4) * 80);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  }

  /* ---------------------------------------------------
     Footer year
     --------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
