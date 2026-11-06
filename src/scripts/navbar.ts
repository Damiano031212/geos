/**
 * Navbar: menu mobile (aria-expanded, Esc, click su link / fuori) e hide-on-scroll.
 * Nessuna dipendenza. Listener `scroll` passivo con requestAnimationFrame.
 */

const THRESHOLD = 8; // px di scroll minimo per nascondere/mostrare, evita tremolii
const DESKTOP = '(min-width: 1024px)'; // TODO: tenere allineato a --breakpoint-lg

const navbar = document.querySelector<HTMLElement>('[data-navbar]');
const toggle = navbar?.querySelector<HTMLButtonElement>('[data-navbar-toggle]');

if (navbar && toggle) {
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute(
      'aria-label',
      (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '',
    );
    navbar.toggleAttribute('data-open', open);
    if (open) navbar.removeAttribute('data-hidden');
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  navbar.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('.navbar__menu a')) setOpen(false);
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !navbar.contains(e.target as Node)) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia(DESKTOP).addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });

  // Hide on scroll: giù nasconde, su mostra, in cima sempre visibile, mai con il menu aperto.
  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const delta = y - lastY;
    if (y <= 0 || isOpen()) {
      navbar.removeAttribute('data-hidden');
    } else if (Math.abs(delta) >= THRESHOLD) {
      navbar.toggleAttribute('data-hidden', delta > 0);
    } else {
      return; // sotto soglia: non aggiornare lastY, così lo scroll lento si accumula
    }
    lastY = y;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}
