/* =====================================================
   CAUNTRYLIFE EVENTI – eventi.js
   Filtri, viste, calendario, modale dettaglio
   ===================================================== */

'use strict';

/* ─── DATI EVENTI ────────────────────────────────── */
const EVENTS_DATA = [
  // ── 2025 ────────────────────────────────────────
  {
    id: 1,
    title: '2ª Edizione Festa Country',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-06-20',
    dateDisplay: '20 Giugno 2026',
    time: 'Dalle 17:00',
    duration: '1 giorno',
    location: 'Motta Visconti (MI)',
    region: 'Lombardia',
    organizer: 'Pro Loco & Azienda Agricola Accadì',
    patron: '',
    contacts: '',
    image: 'https://www.genspark.ai/api/files/s/L2TWBfO6',
    tickets: 'Info in loco',
    chips: ['Musica & Balli con DJ', 'Barbeque Americano', 'Giochi a tema'],
    chipIcons: ['fa-music', 'fa-fire-burner', 'fa-gamepad'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: '🔥 Imminente', cls: 'ev-badge--imminent' }],
    desc: 'La 2ª Edizione della Festa Country a Motta Visconti è un evento imperdibile organizzato dalla Pro Loco locale insieme all\'Azienda Agricola Accadì. Una giornata ricca di musica country e balli con DJ, un autentico barbeque americano e divertentissimi giochi a tema per adulti e bambini. Il tutto in un\'atmosfera western genuina nel cuore della Lombardia.'
  },
  {
    id: 5,
    title: 'Oktoberwest Country Festival',
    type: 'raduno',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-10-25',
    dateDisplay: '25 Ottobre 2026',
    time: 'Coming Soon',
    duration: '1 giorno',
    location: 'Palazzetto dello Sport, Cornaredo (MI)',
    region: 'Lombardia',
    organizer: 'Oktoberwest Country Festival',
    patron: '',
    contacts: '',
    image: 'https://www.genspark.ai/api/files/s/c6QDvHiq',
    tickets: 'Coming Soon',
    chips: ['Country Music', 'Line Dance', 'Coming Soon'],
    chipIcons: ['fa-hat-cowboy', 'fa-person-walking', 'fa-hourglass-half'],
    badges: [{ label: 'Raduno', cls: 'ev-badge--raduno' }, { label: '🍂 Autunno', cls: 'ev-badge--sea' }],
    desc: 'L\'Oktoberwest Country Festival torna al Palazzetto dello Sport di Cornaredo per una grande festa autunnale a tema western. Balli, musica country e tanta energia in un evento che unisce appassionati di line dance da tutta la Lombardia. Dettagli programma e biglietti in arrivo.'
  },
  {
    id: 6,
    title: 'All for Christmas! Country Schools United',
    type: 'raduno',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-12-06',
    dateDisplay: '6 Dicembre 2026',
    time: 'Coming Soon',
    duration: '1 giorno',
    location: 'Palazzetto dello Sport, Cornaredo (MI)',
    region: 'Lombardia',
    organizer: 'Country Schools United',
    patron: '',
    contacts: '',
    image: 'https://www.genspark.ai/api/files/s/gBl4EKSm',
    tickets: 'Coming Soon',
    chips: ['Natale Country', 'Scuole Unite', 'Line Dance'],
    chipIcons: ['fa-star', 'fa-school', 'fa-person-walking'],
    badges: [{ label: 'Raduno', cls: 'ev-badge--raduno' }, { label: '🎄 Natale', cls: 'ev-badge--imminent' }],
    desc: 'All for Christmas! è il grande raduno natalizio organizzato da Country Schools United, che riunisce le migliori scuole di ballo country d\'Italia al Palazzetto dello Sport di Cornaredo. Una serata magica di line dance in atmosfera natalizia, con le scuole associate che si esibiscono insieme per celebrare le feste in grande stile.'
  },
  // ── 2026 ────────────────────────────────────────
  {
    id: 7,
    title: 'Jesolo Country Festival',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-06-19',
    dateDisplay: '19–21 Giugno 2026',
    time: 'Dom 21 Giu ore 18:00 (Kangoo Fit)',
    duration: '3 giorni',
    location: 'Piazza Milano, Jesolo (VE)',
    region: 'Veneto',
    organizer: 'Comitato Milano',
    patron: 'Città di Jesolo',
    contacts: 'Kangoo Fit Verona (Facebook & Instagram)',
    image: 'https://www.genspark.ai/api/files/s/dPqKgkDE',
    tickets: 'Ingresso libero',
    chips: ['Live Music: Sticash', 'West DJ · DJ Eros · DJ Flavio', 'Ingresso Libero'],
    chipIcons: ['fa-guitar', 'fa-headphones', 'fa-ticket'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: '🎵 Live Music', cls: 'ev-badge--linedance' }],
    desc: 'Il Jesolo Country Festival torna a Piazza Milano con tre giorni di musica country live e balli all\'aperto. Sul palco il live di Sticash, i DJ set di West DJ, Mister DJ, DJ Eros e DJ Flavio. Partecipano le scuole Desperados, Country Mania, Urban Country, Western Company Country Dance, Lions Country Dance e Glorida Catalan Creations. Domenica 21 giugno ore 18:00 special Kangoo Fit Verona. Ingresso libero, organizzato da Comitato Milano con il patrocinio della Città di Jesolo.'
  },
  {
    id: 2,
    title: 'Valsassina Country Festival',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-07-10',
    dateDisplay: '10–12 Luglio 2026',
    time: 'Info sul sito ufficiale',
    duration: '3 giorni',
    location: 'Valsassina, LC',
    region: 'Lombardia',
    organizer: 'Valsassina Country Festival®',
    patron: '',
    contacts: 'Ticket ingresso: info sul sito',
    image: 'https://www.genspark.ai/api/files/s/Kqbbpax9',
    tickets: 'Ticket ingresso: info sul sito ufficiale',
    chips: ['Montagna', 'Line Dance', '11ª Edizione'],
    chipIcons: ['fa-mountain', 'fa-person-walking', 'fa-star'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: '11ª Ed.', cls: 'ev-badge--edition' }],
    desc: 'L\'11ª edizione del Valsassina Country Festival torna tra le meravigliose montagne della Valsassina con tre giorni di musica country, line dance e cultura western. Uno degli appuntamenti più attesi dagli appassionati lombardi e non solo. Per acquistare i biglietti e ricevere tutte le informazioni sul programma, consultare il sito ufficiale dell\'evento. Ph: Catalano Giuseppe.'
  },
  {
    id: 8,
    title: 'Bud & Terence Festival 2026',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-07-12',
    dateDisplay: 'Domenica 12 Luglio 2026',
    time: 'Dalle 11:00',
    duration: '1 giorno',
    location: 'Area Feste Via Primo Maggio, Cassano Magnago (VA)',
    region: 'Lombardia',
    organizer: 'James Tex Western / Friends & Fan',
    patron: '',
    contacts: '📱 @friendsandfan_ (IG) · @friendsandfan (FB)',
    image: 'https://www.genspark.ai/api/files/s/PK31WudT',
    tickets: 'Ingresso gratuito',
    chips: ['Los Gringos Live Western Show', 'Sparatorie dal vivo', 'Ingresso gratuito'],
    chipIcons: ['fa-hat-cowboy', 'fa-gun', 'fa-ticket'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: '🤠 Free', cls: 'ev-badge--imminent' }],
    desc: 'Il Bud & Terence Festival 2026 celebra i leggendari film western con un\'atmosfera autentica e coinvolgente. Protagonisti Los Gringos - Live Western Show, che porteranno sul palco scene western e sparatorie dal vivo ispirate ai celebri film di Bud Spencer e Terence Hill. Ingresso gratuito. Organizzato da James Tex Western con Friends & Fan. Seguici su @friendsandfan_'
  },
  {
    id: 3,
    title: 'Blue Salento Country Fest',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-09-05',
    dateDisplay: '5 Settembre 2026',
    time: 'Info prenotazioni',
    duration: '1 giorno',
    location: 'Melendugno, Salento (LE)',
    region: 'Puglia',
    organizer: 'Associazione Quinta Musa APS',
    patron: 'Comune di Melendugno',
    contacts: '📞 328 4666339 · 389 0946525',
    image: 'https://www.genspark.ai/api/files/s/6hTghy3Q',
    tickets: 'Per info e prenotazioni: 328 4666339 oppure 389 0946525',
    chips: ['Salento', 'Country Music', 'Line Dance'],
    chipIcons: ['fa-water', 'fa-hat-cowboy', 'fa-person-walking'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: '🌊 Mare', cls: 'ev-badge--sea' }],
    desc: 'Il Blue Salento Country Fest porta la magia della musica country e della line dance sulle coste meravigliose del Salento. Organizzato dall\'Associazione Quinta Musa APS con il patrocinio del Comune di Melendugno, questo evento è l\'appuntamento imperdibile dell\'estate pugliese per tutti gli appassionati del genere country. Per informazioni e prenotazioni contattare i numeri 328 4666339 oppure 389 0946525.'
  },
  {
    id: 4,
    title: 'Round-Up Country Festival',
    type: 'festival',
    country: 'it',
    level: 'all',
    year: 2026,
    date: '2026-11-13',
    dateDisplay: '13–15 Novembre 2026',
    time: 'Info in arrivo',
    duration: '3 giorni',
    location: 'Cremona Fiere, Cremona (CR)',
    region: 'Lombardia',
    organizer: 'Round-Up Country Festival',
    patron: '',
    contacts: '',
    image: 'https://www.genspark.ai/api/files/s/ConRVcSW',
    tickets: 'Info biglietti in arrivo',
    chips: ['Country Music', 'Line Dance', '3 giorni'],
    chipIcons: ['fa-guitar', 'fa-people-line', 'fa-calendar-week'],
    badges: [{ label: 'Festival', cls: 'ev-badge--festival' }, { label: 'Line Dance', cls: 'ev-badge--linedance' }],
    desc: 'Il Round-Up Country Festival è il festival italiano dedicato interamente alla Country Line Dance. Tre giorni intensi di spettacoli, workshop, competizioni e tanto divertimento nella storica cornice di Cremona Fiere. Un evento che riunisce ballerini, istruttori e appassionati da tutta Italia e dall\'Europa per celebrare la line dance in tutte le sue forme.'
  }
];


/* ─── STATO FILTRI ───────────────────────────────── */
let currentView = 'grid';
let activeFilters = { search: '', type: 'all', country: 'all', level: 'all', year: 'all' };
let calCurrentDate = new Date(2026, 5, 1); // Giugno 2026


/* ─── ELEMENTI DOM ───────────────────────────────── */
const evGrid          = document.getElementById('evGrid');
const evList          = document.getElementById('evList');
const evCalendarView  = document.getElementById('evCalendarView');
const noResults       = document.getElementById('noResults');
const countVisible    = document.getElementById('countVisible');

const searchInput     = document.getElementById('searchInput');
const clearSearch     = document.getElementById('clearSearch');
const filterType      = document.getElementById('filterType');
const filterCountry   = document.getElementById('filterCountry');
const filterLevel     = document.getElementById('filterLevel');
const filterYear      = document.getElementById('filterYear');
const resetBtns       = document.querySelectorAll('#resetFilters, #resetFilters2');

const viewGrid        = document.getElementById('viewGrid');
const viewList        = document.getElementById('viewList');
const viewCalendar    = document.getElementById('viewCalendar');

const evModalOverlay  = document.getElementById('evModalOverlay');
const evModalContent  = document.getElementById('evModalContent');
const evModalClose    = document.getElementById('evModalClose');


/* ─── FILTRO PRINCIPALE ──────────────────────────── */
function getFilteredItems() {
  const q = activeFilters.search.toLowerCase().trim();
  return EVENTS_DATA.filter(ev => {
    if (activeFilters.type !== 'all' && ev.type !== activeFilters.type) return false;
    if (activeFilters.country !== 'all' && ev.country !== activeFilters.country) return false;
    if (activeFilters.level !== 'all' && ev.level !== activeFilters.level && ev.level !== 'all') return false;
    if (activeFilters.year !== 'all' && ev.year !== parseInt(activeFilters.year)) return false;
    if (q) {
      const hay = `${ev.title} ${ev.location} ${ev.region} ${ev.organizer} ${ev.desc}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function applyFilters() {
  const filtered = getFilteredItems();
  const ids = filtered.map(e => e.id);

  // Aggiorna contatore
  if (countVisible) countVisible.textContent = ids.length;

  // Grid view
  evGrid.querySelectorAll('.ev-card').forEach(card => {
    const id = parseInt(card.querySelector('.ev-detail-btn')?.dataset.id);
    card.style.display = ids.includes(id) ? '' : 'none';
  });

  // List view
  evList.querySelectorAll('.ev-list-item').forEach(item => {
    const btn = item.querySelector('.ev-detail-btn');
    const id = btn ? parseInt(btn.dataset.id) : null;
    item.style.display = ids.includes(id) ? '' : 'none';
  });

  // No results
  noResults.classList.toggle('hidden', ids.length > 0);
}


/* ─── LISTENERS FILTRI ───────────────────────────── */
searchInput.addEventListener('input', () => {
  activeFilters.search = searchInput.value;
  clearSearch.style.opacity = searchInput.value ? '1' : '0';
  applyFilters();
});

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  activeFilters.search = '';
  clearSearch.style.opacity = '0';
  applyFilters();
});

filterType.addEventListener('change', () => { activeFilters.type = filterType.value; applyFilters(); });
filterCountry.addEventListener('change', () => { activeFilters.country = filterCountry.value; applyFilters(); });
filterLevel.addEventListener('change', () => { activeFilters.level = filterLevel.value; applyFilters(); });
filterYear.addEventListener('change', () => { activeFilters.year = filterYear.value; applyFilters(); });

resetBtns.forEach(btn => btn.addEventListener('click', resetFilters));

function resetFilters() {
  searchInput.value = '';
  filterType.value = 'all';
  filterCountry.value = 'all';
  filterLevel.value = 'all';
  filterYear.value = 'all';
  activeFilters = { search: '', type: 'all', country: 'all', level: 'all', year: 'all' };
  clearSearch.style.opacity = '0';
  applyFilters();
}


/* ─── CAMBIO VISTA ───────────────────────────────── */
function switchView(view) {
  currentView = view;

  evGrid.classList.toggle('hidden', view !== 'grid');
  evList.classList.toggle('hidden', view !== 'list');
  evCalendarView.classList.toggle('hidden', view !== 'calendar');

  viewGrid.classList.toggle('active', view === 'grid');
  viewList.classList.toggle('active', view === 'list');
  viewCalendar.classList.toggle('active', view === 'calendar');

  if (view === 'calendar') renderCalendar();
}

viewGrid.addEventListener('click', () => switchView('grid'));
viewList.addEventListener('click', () => switchView('list'));
viewCalendar.addEventListener('click', () => switchView('calendar'));


/* ─── CALENDARIO ─────────────────────────────────── */
const MONTHS_IT = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                   'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
const DAYS_IT   = ['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];

function renderCalendar() {
  const calGrid  = document.getElementById('calGrid');
  const calLabel = document.getElementById('calMonthLabel');
  const year  = calCurrentDate.getFullYear();
  const month = calCurrentDate.getMonth();

  calLabel.textContent = `${MONTHS_IT[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay(); // 0=Dom
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = (firstDay === 0) ? 6 : firstDay - 1; // Lun=0

  // Raccoglie eventi di questo mese
  const monthEvents = {};
  EVENTS_DATA.forEach(ev => {
    const d = new Date(ev.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      // Gestione eventi multi-giorno
      const endDate = getEventEndDate(ev);
      for (let day = d.getDate(); day <= endDate; day++) {
        if (!monthEvents[day]) monthEvents[day] = [];
        monthEvents[day].push(ev);
      }
    }
  });

  let html = DAYS_IT.map(d => `<div class="cal-header">${d}</div>`).join('');

  // Celle vuote
  for (let i = 0; i < offset; i++) html += '<div class="cal-day cal-day--empty"></div>';

  const today = new Date();
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year);
    const evs = monthEvents[d] || [];
    let cls = 'cal-day';
    if (isToday) cls += ' cal-day--today';
    if (evs.length) cls += ' cal-day--has-event';

    const tooltip = evs.map(e => e.title).join(', ');
    html += `<div class="${cls}" data-day="${d}" title="${tooltip}">
      ${d}
      ${evs.length ? '<div class="cal-day__dot"></div>' : ''}
    </div>`;
  }

  calGrid.innerHTML = html;

  // Click su giorno con evento → mostra primo evento del giorno
  calGrid.querySelectorAll('.cal-day--has-event').forEach(cell => {
    cell.addEventListener('click', () => {
      const day = parseInt(cell.dataset.day);
      const ev = EVENTS_DATA.find(e => {
        const d = new Date(e.date);
        const end = getEventEndDate(e);
        return d.getFullYear() === year && d.getMonth() === month
          && d.getDate() <= day && end >= day;
      });
      if (ev) openModal(ev.id);
    });
  });
}

function getEventEndDate(ev) {
  const d = new Date(ev.date);
  if (ev.duration === '3 giorni') return d.getDate() + 2;
  return d.getDate();
}

document.getElementById('calPrev').addEventListener('click', () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() - 1);
  renderCalendar();
});
document.getElementById('calNext').addEventListener('click', () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() + 1);
  renderCalendar();
});


/* ─── MODALE DETTAGLIO ───────────────────────────── */
function openModal(id) {
  const ev = EVENTS_DATA.find(e => e.id === id);
  if (!ev) return;

  const badgesHtml = ev.badges.map(b =>
    `<span class="ev-badge ${b.cls}">${b.label}</span>`
  ).join('');

  const chipsHtml = ev.chips.map((c, i) =>
    `<span class="ev-chip"><i class="fa-solid ${ev.chipIcons[i]}"></i> ${c}</span>`
  ).join('');

  evModalContent.innerHTML = `
    <img class="ev-modal__hero-img" src="${ev.image}" alt="${ev.title}" />
    <div class="ev-modal__badges">${badgesHtml}</div>
    <h2 class="ev-modal__title">${ev.title}</h2>

    <div class="ev-modal__meta">
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-calendar-days"></i>
        <div><strong>Data</strong>${ev.dateDisplay}</div>
      </div>
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-clock"></i>
        <div><strong>Orario</strong>${ev.time}</div>
      </div>
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-location-dot"></i>
        <div><strong>Location</strong>${ev.location}</div>
      </div>
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-calendar-week"></i>
        <div><strong>Durata</strong>${ev.duration}</div>
      </div>
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-building"></i>
        <div><strong>Organizzatore</strong>${ev.organizer}</div>
      </div>
      ${ev.patron ? `
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-award"></i>
        <div><strong>Patrocinio</strong>${ev.patron}</div>
      </div>` : ''}
      ${ev.contacts ? `
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-phone"></i>
        <div><strong>Contatti</strong>${ev.contacts}</div>
      </div>` : ''}
      <div class="ev-modal__meta-item">
        <i class="fa-solid fa-ticket"></i>
        <div><strong>Biglietti</strong>${ev.tickets}</div>
      </div>
    </div>

    <p class="ev-modal__desc">${ev.desc}</p>

    <div class="ev-modal__chips">${chipsHtml}</div>

    <div class="ev-modal__cta">
      <button class="btn btn-primary btn-lg">
        <i class="fa-solid fa-ticket"></i> Acquista Biglietti
      </button>
      <button class="btn btn-outline-brown">
        <i class="fa-regular fa-bookmark"></i> Salva evento
      </button>
      <button class="btn btn-outline-brown">
        <i class="fa-solid fa-share-nodes"></i> Condividi
      </button>
    </div>
  `;

  evModalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  evModalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

evModalClose.addEventListener('click', closeModal);
evModalOverlay.addEventListener('click', e => { if (e.target === evModalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Delegazione click su pulsanti "Dettagli"
document.addEventListener('click', e => {
  const btn = e.target.closest('.ev-detail-btn');
  if (btn) openModal(parseInt(btn.dataset.id));
});


/* ─── SORT BY DATE ───────────────────────────────── */
// Gli eventi in griglia e lista sono già ordinati cronologicamente nel DOM


/* ─── INIT ───────────────────────────────────────── */
clearSearch.style.opacity = '0';
applyFilters();
