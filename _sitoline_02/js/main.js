/* =====================================================
   LINELIFE – MAIN JAVASCRIPT
   ===================================================== */

'use strict';

/* ─── LANGUAGE TOGGLE ─────────────────────────────── */
let currentLang = 'it';

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-it]').forEach(el => {
    const text = lang === 'it' ? el.dataset.it : el.dataset.en;
    if (text !== undefined) el.textContent = text;
  });
  document.getElementById('langLabel').textContent = lang === 'it' ? 'IT' : 'EN';
  localStorage.setItem('ll_lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'it' ? 'en' : 'it');
});

// Restore saved language
const savedLang = localStorage.getItem('ll_lang');
if (savedLang && savedLang !== 'it') applyLanguage(savedLang);


/* ─── NAVBAR SCROLL ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


/* ─── HAMBURGER MENU ──────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu on link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});


/* ─── ACTIVE NAV LINK (Intersection Observer) ─────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.navbar__nav a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));


/* ─── STATS LOADER ────────────────────────────────── */
async function loadStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return; // non siamo nella HOME
  try {
    const res  = await fetch('tables/stats?limit=10&sort=sort_order');
    const data = await res.json();
    const rows = data.data || [];

    if (!rows.length) {
      grid.innerHTML = '<p style="color:rgba(255,255,255,.4);text-align:center;padding:16px;grid-column:1/-1">Statistiche non ancora disponibili.</p>';
      return;
    }

    grid.innerHTML = rows.map(row => {
      const label = currentLang === 'en' ? (row.label_en || row.label) : row.label;
      const val   = row.value && row.value !== '0' ? row.value : null;

      return `
        <div class="stat-item">
          <div class="stat-item__icon"><i class="fa-solid ${row.icon}"></i></div>
          <div class="stat-item__value ${val ? '' : 'no-data'}">${val ? val : '—'}</div>
          <div class="stat-item__label">${label}</div>
        </div>`;
    }).join('');
  } catch (err) {
    console.warn('Stats load error:', err);
    grid.innerHTML = '<p style="color:rgba(255,255,255,.3);text-align:center;padding:16px;grid-column:1/-1">—</p>';
  }
}

loadStats();

// Re-apply labels after language toggle
document.getElementById('langToggle').addEventListener('click', () => {
  // slight delay so currentLang is updated first
  setTimeout(loadStats, 60);
});


/* ─── EVENT FILTER ────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const eventCards  = document.querySelectorAll('#eventsGrid .card--event');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    eventCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = '';
        card.style.animation = 'fadeIn .35s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


/* ─── SCHOOL SEARCH ───────────────────────────────── */
const schoolInput = document.getElementById('schoolSearch');
if (schoolInput) {
  schoolInput.addEventListener('input', () => {
    const q = schoolInput.value.toLowerCase();
    document.querySelectorAll('.school-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}


/* ─── SCROLL REVEAL (lightweight) ────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.card, .travel-card, .school-card, .academy-card, .market-cat, .org-feature, .comm-feat, .stat-item, .recruiting-panel'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});


/* ─── COUNTER ANIMATION ──────────────────────────── */
function animateCounter(el, target) {
  const isNumeric = /^[\d,+.]+$/.test(target);
  if (!isNumeric) { el.textContent = target; return; }

  const suffix   = target.replace(/[\d.,]/g, '');
  const numStr   = target.replace(/[^\d.]/g, '');
  const num      = parseFloat(numStr);
  if (isNaN(num)) { el.textContent = target; return; }

  let start = 0;
  const duration = 1800;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * num);
    el.textContent = current.toLocaleString('it-IT') + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Observe stats section to trigger counters
const statsSection = document.getElementById('stats');
if (statsSection) {
  const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.stat-item__value:not(.no-data)').forEach(el => {
        animateCounter(el, el.textContent);
      });
      counterObserver.disconnect();
    }
  }, { threshold: 0.5 });
  counterObserver.observe(statsSection);
}
