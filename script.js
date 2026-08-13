(() => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const form = document.getElementById('leadForm');
  const error = document.getElementById('formError');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.replace(/\D/g, '');
      if (name.length < 2) { error.textContent = 'Please enter your full name.'; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = 'Please enter a valid email.'; return; }
      if (phone.length < 10) { error.textContent = 'Please enter a valid phone number.'; return; }
      error.textContent = '';
      form.hidden = true;
      success.hidden = false;
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
