/**
 * Ingressi on-scroll (animations.css): un solo IntersectionObserver, one-shot.
 *  - [data-reveal]: aggiunge `.is-in` quando l'elemento entra in viewport. Gli elementi che entrano
 *    insieme sfalsano l'ingresso (stagger, max 5 passi).
 *  - [data-count]: count-up del numero (prefisso/suffisso invariati).
 *  - [data-monthly]/[data-yearly]: `.is-tick` quando scripts/plans.ts cambia il prezzo.
 * Con prefers-reduced-motion o senza IntersectionObserver non fa nulla di visibile:
 * il contenuto resta com'è e le animazioni CSS sono disattivate.
 */
const STEP_MS = 80;
const MAX_STEPS = 5;
const COUNT_MIN = 10; // sotto questo valore (es. "#1") il count-up non ha senso

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
const counters = [...document.querySelectorAll<HTMLElement>('[data-count]')];

function parse(text: string) {
  const m = text.match(/^(\D*)(\d+(?:[.,]\d+)?)([\s\S]*)$/);
  if (!m) return null;
  const value = parseFloat(m[2].replace(',', '.'));
  return value >= COUNT_MIN ? { prefix: m[1], value, suffix: m[3] } : null;
}

function countUp(el: HTMLElement, final: string) {
  const p = parse(final);
  if (!p) return;
  const duration = parseFloat(getComputedStyle(el).getPropertyValue('--duration-count')) || 1400;
  const t0 = performance.now();
  const tick = (now: number) => {
    const k = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - k, 3); // ease-out cubico
    el.textContent = k < 1 ? `${p.prefix}${Math.round(p.value * eased)}${p.suffix}` : final;
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (!reduce && 'IntersectionObserver' in window) {
  const finals = new Map<HTMLElement, string>();
  counters.forEach((el) => {
    const text = el.textContent ?? '';
    if (parse(text)) {
      finals.set(el, text);
      const p = parse(text)!;
      el.textContent = `${p.prefix}0${p.suffix}`; // la card è ancora nascosta: nessun flash
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      let i = 0;
      entries
        .filter((e) => e.isIntersecting)
        .forEach((e) => {
          const el = e.target as HTMLElement;
          io.unobserve(el);
          if (el.hasAttribute('data-count')) {
            const final = finals.get(el);
            if (final) countUp(el, final);
            return;
          }
          el.style.setProperty('--reveal-delay', `${Math.min(i++, MAX_STEPS) * STEP_MS}ms`);
          el.classList.add('is-in');
          // Fine ingresso: rilascia will-change e il ritardo (così gli hover restano immediati).
          const done = (ev: TransitionEvent) => {
            if (ev.target !== el) return; // ignora le transizioni dei figli (chip, avatar)
            el.removeEventListener('transitionend', done);
            el.style.removeProperty('--reveal-delay');
            el.removeAttribute('data-reveal');
          };
          el.addEventListener('transitionend', done);
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
  );
  reveals.forEach((el) => io.observe(el));
  counters.forEach((el) => io.observe(el));

  // Cambio prezzo (piani): fade breve sul numero, senza toccare il calcolo.
  const mo = new MutationObserver((records) => {
    records.forEach((r) => {
      const el = r.target as HTMLElement;
      el.classList.remove('is-tick');
      void el.offsetWidth; // riavvia l'animazione
      el.classList.add('is-tick');
      el.addEventListener('animationend', () => el.classList.remove('is-tick'), { once: true });
    });
  });
  document
    .querySelectorAll('[data-monthly], [data-yearly]')
    .forEach((el) => mo.observe(el, { childList: true }));
}
