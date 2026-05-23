/* ====================================================
   Jalapão Infinity — interactions
   ==================================================== */

// ---------- DATA ----------
const PACKAGES = [
  {
    id: 1,
    img: 'assets/plano1.jpg',
    badge: 'Essencial',
    kicker: 'Pacote 1',
    title: '3 dias / 2 noites',
    meta: ['10 atrativos', 'Saídas semanais'],
    featured: false,
    benefits: [
      'Cânion Sussuapara',
      'Comunidade Quilombola',
      'Prainha do Rio Novo',
      'Serra do Espírito Santo',
      'Lagoa do Jacaré',
      'Dunas',
      'Fervedouro do Ceiça',
      'Cachoeira da Formiga',
      'Fervedouro Buritizinho',
      'Fervedouros Macaúbas',
      'Fervedouro Bela Vista',
      'Serra da Catedral'
    ],
    wa: 'Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20de%2003%20dias%20e%202%20noites!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?'
  },
  {
    id: 2,
    img: 'assets/plano2.jpg',
    badge: 'Com lagoa',
    kicker: 'Pacote 2',
    title: '3 dias / 2 noites · com Lagoa do Japonês',
    meta: ['12 atrativos', 'Inclui Pedra Furada'],
    featured: true,
    benefits: [
      'Lagoa do Japonês',
      'Tirolesa (Opcional)',
      'Pedra Furada',
      'Cânion Sussuapara',
      'Comunidade Quilombola',
      'Prainha do Rio Novo',
      'Serra do Espírito Santo',
      'Lagoa do Jacaré',
      'Dunas',
      'Fervedouro Buritis',
      'Cachoeira da Formiga',
      'Fervedouro Bela Vista'
    ],
    wa: 'Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20de%2003%20dias%20e%202%20noites%20com%20lagoa!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?'
  },
  {
    id: 3,
    img: 'assets/plano3.jpg',
    badge: 'Mais vendido',
    kicker: 'Pacote 3',
    title: '4 dias / 3 noites · com Lagoa do Japonês',
    meta: ['15+ atrativos', 'Roteiro completo'],
    featured: false,
    benefits: [
      'Lagoa do Japonês',
      'Tirolesa (Opcional)',
      'Pedra Furada',
      'Cânion Sussuapara',
      'Comunidade Quilombola',
      'Prainha do Rio Novo',
      'Serra do Espírito Santo',
      'Lagoa do Jacaré',
      'Dunas',
      'Fervedouro Buritis',
      'Fervedouro do Ceiça',
      'Cachoeira da Formiga',
      'Fervedouro Buritizinho',
      'Fervedouro Macaúbas',
      'Fervedouro Bela Vista',
      'Serra da Catedral'
    ],
    wa: 'Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20de%2004%20dias%20e%203%20noites%20com%20lagoa!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?'
  },
  {
    id: 4,
    img: 'assets/plano4.jpg',
    badge: 'Imersão',
    kicker: 'Pacote 4',
    title: '5 dias / 4 noites',
    meta: ['20+ atrativos', 'Poço Encantado'],
    featured: false,
    benefits: [
      'Lagoa do Japonês',
      'Tirolesa (Opcional)',
      'Pedra Furada',
      'Cânion Sussuapara',
      'Comunidade Quilombola',
      'Prainha do Rio Novo',
      'Serra do Espírito Santo',
      'Lagoa do Jacaré',
      'Dunas',
      'Fervedouro Buritis',
      'Nascer do sol',
      'Fervedouro Rio Sono',
      'Cachoeira da Formiga',
      'Fervedouro Buritizinho',
      'Fervedouro Ceiça',
      'Fervedouro Macaúbas',
      'Fervedouro noturno',
      'Fervedouro Bela Vista',
      'Serra da Catedral',
      'Poço Encantado'
    ],
    wa: 'Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20de%2005%20dias%20e%204%20noites!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?'
  },
  {
    id: 5,
    img: 'assets/plano5.jpg',
    badge: 'Completo',
    kicker: 'Pacote 5',
    title: '6 dias / 5 noites',
    meta: ['25+ atrativos', 'Cachoeiras + Rapel'],
    featured: false,
    benefits: [
      'Lagoa do Japonês',
      'Tirolesa (Opcional)',
      'Pedra Furada',
      'Cânion Sussuapara',
      'Comunidade Quilombola',
      'Prainha do Rio Novo',
      'Serra do Espírito Santo',
      'Lagoa do Jacaré',
      'Dunas',
      'Fervedouro Buritis',
      'Fervedouro Rio Sono',
      'Cachoeira da Formiga',
      'Fervedouro Buritizinho',
      'Fervedouro Ceiça',
      'Fervedouro Macaúbas',
      'Fervedouro Bela Vista',
      'Serra da Catedral',
      'Poço Encantado',
      'Cachoeira Escorrega Macaco',
      'Cachoeira da Roncadeira',
      'Rapel (Opcional)',
      'Cachoeira do Elvison'
    ],
    wa: 'Ol%C3%A1,%20tenho%20interesse%20no%20pacote%20de%2006%20dias%20e%205%20noites!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?'
  },
  {
    id: 6,
    img: 'assets/hero-7.webp',
    badge: 'Sob medida',
    kicker: 'Roteiro privado',
    title: 'Pacotes personalizados',
    meta: ['Grupos & famílias', 'Roteiro flexível'],
    featured: false,
    benefits: [
      'Monte o roteiro com nossos especialistas',
      'Saídas em datas exclusivas',
      'Atendimento dedicado',
      'Veículo e guia particulares',
      'Hospedagem premium opcional',
      'Experiências gastronômicas extras'
    ],
    wa: 'Ol%C3%A1,%20gostaria%20de%20um%20roteiro%20personalizado.%20Poderia%20me%20ajudar?'
  }
];

const TESTIMONIALS = [
  {
    name: 'Marina F.',
    initials: 'M',
    role: 'Viajou em julho · São Paulo',
    stars: 5,
    text: '"Foi a melhor viagem que fiz em anos. Guias muito atenciosos, comida incrível e cada paisagem mais surreal que a outra. Já estou planejando voltar com a família toda."'
  },
  {
    name: 'Rafael C.',
    initials: 'R',
    role: 'Pacote 5 dias · Curitiba',
    stars: 5,
    text: '"Organização impecável do começo ao fim. A Toyota nunca falhou, dormimos bem, comemos melhor ainda. A Lagoa do Japonês me deixou sem palavras."'
  },
  {
    name: 'Beatriz N.',
    initials: 'B',
    role: 'Grupo de amigas · Belo Horizonte',
    stars: 5,
    text: '"Fomos em 8 amigas e a equipe da Jalapão Infinity tornou tudo simples. Tudo realmente incluso, sem sustos no final. Recomendo de olhos fechados."'
  },
  {
    name: 'Diego A.',
    initials: 'D',
    role: 'Lua de mel · Recife',
    stars: 5,
    text: '"Escolhemos para a nossa lua de mel e foi acerto absoluto. O pôr do sol da Pedra Furada e a Cachoeira da Formiga ficaram marcados pra sempre."'
  }
];

// ---------- HEADER SCROLL ----------
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- MOBILE NAV ----------
const menuToggle = document.getElementById('menu-toggle');
const drawer = document.getElementById('mobile-drawer');
menuToggle.addEventListener('click', () => {
  drawer.classList.toggle('is-open');
});
drawer.addEventListener('click', e => {
  if (e.target.tagName === 'A') drawer.classList.remove('is-open');
});

// ---------- HERO SLIDESHOW ----------
const slides = [...document.querySelectorAll('.hero-slide')];
const pager = document.getElementById('hero-pager');
let activeSlide = 0;
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', `Slide ${i + 1}`);
  if (i === 0) b.classList.add('is-active');
  b.addEventListener('click', () => setSlide(i));
  pager.appendChild(b);
});
function setSlide(i){
  slides[activeSlide].classList.remove('is-active');
  pager.children[activeSlide].classList.remove('is-active');
  activeSlide = (i + slides.length) % slides.length;
  slides[activeSlide].classList.add('is-active');
  pager.children[activeSlide].classList.add('is-active');
}
setInterval(() => setSlide(activeSlide + 1), 5500);

// ---------- PACKAGES RENDER ----------
const grid = document.getElementById('pacotes-grid');
grid.innerHTML = PACKAGES.map((p, i) => `
  <article class="pacote-card ${p.featured ? 'is-featured' : ''}">
    <div class="pacote-img" style="background-image:url('${p.img}')">
      <span class="pacote-badge">${p.badge}</span>
    </div>
    <div class="pacote-body">
      <p class="pacote-kicker">${p.kicker}</p>
      <h3 class="pacote-title">${p.title}</h3>
      <div class="pacote-meta">
        ${p.meta.map(m => `<span>• ${m}</span>`).join('')}
      </div>
      <button class="pacote-toggle" aria-expanded="false" data-target="bens-${p.id}">
        Ver benefícios inclusos
      </button>
      <ul class="pacote-bens" id="bens-${p.id}">
        ${p.benefits.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <a class="btn btn-primary pacote-cta" href="https://api.whatsapp.com/send?phone=5563992878000&text=${p.wa}">
        Compre agora
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </article>
`).join('');

grid.addEventListener('click', e => {
  const btn = e.target.closest('.pacote-toggle');
  if (!btn) return;
  const target = document.getElementById(btn.dataset.target);
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !open);
  target.classList.toggle('is-open', !open);
  btn.firstChild.textContent = open ? 'Ver benefícios inclusos' : 'Ocultar benefícios';
});

// ---------- TESTIMONIALS ----------
const track = document.getElementById('testimonial-track');
const dots = document.getElementById('t-dots');
track.innerHTML = TESTIMONIALS.map(t => `
  <div class="testimonial-card">
    <div class="t-avatar">${t.initials}</div>
    <div class="t-body">
      <p>${t.text}</p>
      <div class="t-meta">
        <span class="stars">${'★'.repeat(t.stars)}</span>
        <span class="t-name">${t.name}</span>
        <span>· ${t.role}</span>
      </div>
    </div>
  </div>
`).join('');
TESTIMONIALS.forEach((_, i) => {
  const d = document.createElement('button');
  d.setAttribute('aria-label', `Depoimento ${i + 1}`);
  if (i === 0) d.classList.add('is-active');
  d.addEventListener('click', () => setTestimonial(i));
  dots.appendChild(d);
});
let activeT = 0;
function setTestimonial(i){
  activeT = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  track.style.transform = `translateX(-${activeT * 100}%)`;
  [...dots.children].forEach((d, idx) => d.classList.toggle('is-active', idx === activeT));
}
document.querySelector('.t-prev').addEventListener('click', () => setTestimonial(activeT - 1));
document.querySelector('.t-next').addEventListener('click', () => setTestimonial(activeT + 1));
setInterval(() => setTestimonial(activeT + 1), 7000);

// ---------- YEAR ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ====================================================
// TWEAKS PANEL
// ====================================================
const tweaks = { ...window.TWEAK_DEFAULTS };
function applyTweaks(){
  document.body.dataset.palette = tweaks.palette;
  document.body.dataset.headingFont = tweaks.headingFont;
  document.body.dataset.hideWa = (!tweaks.showFloatingWa).toString();
}
applyTweaks();

function setTweak(key, val){
  tweaks[key] = val;
  applyTweaks();
  try{
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  } catch (e){}
}

function buildPanel(){
  const existing = document.getElementById('tweaks-panel');
  if (existing) return existing;
  const panel = document.createElement('div');
  panel.id = 'tweaks-panel';
  panel.className = 'tweaks-panel';
  panel.innerHTML = `
    <button class="tweaks-close" aria-label="Fechar">×</button>
    <h3>Tweaks</h3>
    <div class="row">
      <label>Paleta</label>
      <div class="swatches" data-key="palette">
        <button data-val="terracotta" title="Terracota" style="background:linear-gradient(135deg,#C2552A,#F4EADD)"></button>
        <button data-val="dune" title="Duna" style="background:linear-gradient(135deg,#D89A4A,#F2DCB2)"></button>
        <button data-val="forest" title="Cerrado" style="background:linear-gradient(135deg,#3F6B47,#B7CFB1)"></button>
        <button data-val="midnight" title="Noite" style="background:linear-gradient(135deg,#241B14,#E8A86B)"></button>
      </div>
    </div>
    <div class="row">
      <label>Tipografia dos títulos</label>
      <select data-key="headingFont">
        <option value="Fraunces">Fraunces (serifa)</option>
        <option value="Montserrat">Montserrat (sans)</option>
        <option value="Inter">Inter (geométrica)</option>
      </select>
    </div>
    <div class="row toggle">
      <label>Botão flutuante WhatsApp</label>
      <input type="checkbox" data-key="showFloatingWa" />
    </div>
  `;
  document.body.appendChild(panel);

  // wire palette
  panel.querySelectorAll('.swatches button').forEach(b => {
    if (b.dataset.val === tweaks.palette) b.classList.add('is-active');
    b.addEventListener('click', () => {
      panel.querySelectorAll('.swatches button').forEach(x => x.classList.remove('is-active'));
      b.classList.add('is-active');
      setTweak('palette', b.dataset.val);
    });
  });
  // wire select
  const sel = panel.querySelector('select');
  sel.value = tweaks.headingFont;
  sel.addEventListener('change', () => setTweak('headingFont', sel.value));
  // toggle
  const cb = panel.querySelector('input[type=checkbox]');
  cb.checked = !!tweaks.showFloatingWa;
  cb.addEventListener('change', () => setTweak('showFloatingWa', cb.checked));
  // close
  panel.querySelector('.tweaks-close').addEventListener('click', () => {
    panel.classList.remove('is-open');
    try{ window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e){}
  });
  return panel;
}

window.addEventListener('message', e => {
  const data = e.data;
  if (!data || !data.type) return;
  if (data.type === '__activate_edit_mode'){
    const p = buildPanel();
    p.classList.add('is-open');
  }
  if (data.type === '__deactivate_edit_mode'){
    const p = document.getElementById('tweaks-panel');
    if (p) p.classList.remove('is-open');
  }
});
try{
  window.parent.postMessage({ type: '__edit_mode_available' }, '*');
} catch (e){}
