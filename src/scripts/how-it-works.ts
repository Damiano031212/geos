/** "Come funziona": tab (frecce, Home, End, crossfade) e accordion (una voce aperta, richiudibile). */

// ---- Tab ----
document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = [...root.querySelectorAll<HTMLElement>('[role="tabpanel"]')];

  const select = (i: number, focus = false) => {
    tabs.forEach((t, k) => {
      const on = k === i;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[k].toggleAttribute('data-active', on);
    });
    if (focus) tabs[i].focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    // Precarica il mockup (lazy) prima del click.
    const preload = () => panels[i].querySelector('img')?.setAttribute('loading', 'eager');
    tab.addEventListener('pointerenter', preload, { once: true });
    tab.addEventListener('focus', preload, { once: true });
    tab.addEventListener('keydown', (e) => {
      const last = tabs.length - 1;
      const keys: Record<string, number> = {
        ArrowRight: i === last ? 0 : i + 1,
        ArrowLeft: i === 0 ? last : i - 1,
        Home: 0,
        End: last,
      };
      if (e.key in keys) {
        e.preventDefault();
        select(keys[e.key], true);
      }
    });
  });
});

// ---- Accordion ----
document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((root) => {
  const items = [...root.querySelectorAll<HTMLElement>('.accordion__item')];

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('.accordion__trigger');
    trigger?.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') === 'true';
      items.forEach((other) => {
        const t = other.querySelector<HTMLButtonElement>('.accordion__trigger');
        const isThis = other === item;
        const next = isThis ? !open : false;
        t?.setAttribute('aria-expanded', String(next));
        other.toggleAttribute('data-open', next);
      });
    });
  });
});
