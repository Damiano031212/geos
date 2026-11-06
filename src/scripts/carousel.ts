/**
 * Carosello circolare: la pista ha tre insiemi di card (cloni, reali, cloni). Si scorre su quello
 * centrale; finita la transizione, se si è entrati in un insieme di cloni si salta senza animazione
 * alla card reale equivalente. Card non attive `inert`. Nessun autoplay.
 */

// TODO(geos): lo swipe col dito su mobile è una proposta aperta: disattivabile da qui.
const ENABLE_SWIPE = true;
const SWIPE_MIN = 40; // px

const root = document.querySelector<HTMLElement>('[data-carousel]');
const track = root?.querySelector<HTMLElement>('.carousel__track');

if (root && track) {
  const slides = [...track.children] as HTMLElement[];
  const n = slides.length / 3;
  let index = n;
  let busy = false;
  let busyTimer = 0;

  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  const render = () => {
    root.style.setProperty('--i', String(index));
    slides.forEach((s, k) => {
      const active = k === index;
      s.inert = !active;
      s.toggleAttribute('data-active', active);
    });
  };

  const normalize = () => {
    busy = false;
    window.clearTimeout(busyTimer);
    if (index >= n && index < 2 * n) return;
    index = (((index % n) + n) % n) + n;
    track.style.transition = 'none';
    render();
    void track.offsetWidth; // forza il reflow prima di riattivare la transizione
    track.style.transition = '';
  };

  const go = (delta: number) => {
    if (busy) return;
    busy = true;
    index += delta;
    render();
    if (reduceMotion()) normalize();
    else busyTimer = window.setTimeout(normalize, 700);
  };

  track.addEventListener('transitionend', (e) => {
    if (e.target === track && e.propertyName === 'transform') normalize();
  });

  root.querySelector('[data-prev]')?.addEventListener('click', () => go(-1));
  root.querySelector('[data-next]')?.addEventListener('click', () => go(1));

  // Click sulle card laterali (desktop): sono inert, quindi il click arriva alla pista.
  root.querySelector('.carousel__viewport')?.addEventListener('click', (e) => {
    const x = (e as MouseEvent).clientX;
    const hit = slides.findIndex((s) => {
      const r = s.getBoundingClientRect();
      return x >= r.left && x <= r.right;
    });
    if (hit !== -1 && hit !== index && Math.abs(hit - index) === 1) go(hit - index);
  });

  // Hover sulle card laterali (le card inert non ricevono :hover): evidenzia quella sotto il mouse.
  const viewport = root.querySelector<HTMLElement>('.carousel__viewport');
  if (viewport && matchMedia('(hover: hover)').matches) {
    let hovered: HTMLElement | null = null;
    const setHover = (el: HTMLElement | null) => {
      if (el === hovered) return;
      hovered?.removeAttribute('data-hover');
      el?.setAttribute('data-hover', '');
      hovered = el;
    };
    viewport.addEventListener('pointermove', (e) => {
      const hit = slides.findIndex((s) => {
        const r = s.getBoundingClientRect();
        return e.clientX >= r.left && e.clientX <= r.right;
      });
      setHover(hit !== -1 && Math.abs(hit - index) === 1 ? slides[hit] : null);
    });
    viewport.addEventListener('pointerleave', () => setHover(null));
  }

  if (ENABLE_SWIPE) {
    let startX = 0;
    track.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
    track.addEventListener(
      'touchend',
      (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) >= SWIPE_MIN) go(dx < 0 ? 1 : -1);
      },
      { passive: true },
    );
  }

  render();
  root.setAttribute('data-ready', '');
}
