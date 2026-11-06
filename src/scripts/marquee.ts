/** Mette in pausa le marquee fuori dal viewport (niente animazione inutile). */
const marquees = document.querySelectorAll<HTMLElement>('[data-marquee]');

if (marquees.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      (entry.target as HTMLElement).toggleAttribute('data-paused', !entry.isIntersecting);
    }
  });
  marquees.forEach((m) => observer.observe(m));
}
