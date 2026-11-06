/** Selettore utenti dei piani: aggiorna prezzo mensile e annuale (annuale = mensile × 12). */
document.querySelectorAll<HTMLElement>('[data-plan]').forEach((plan) => {
  const select = plan.querySelector<HTMLSelectElement>('select');
  const monthly = plan.querySelector('[data-monthly]');
  const yearly = plan.querySelector('[data-yearly]');
  if (!select || !monthly || !yearly) return;

  const options: { users: number; monthly: number }[] = JSON.parse(plan.dataset.options ?? '[]');

  select.addEventListener('change', () => {
    const opt = options.find((o) => String(o.users) === select.value);
    if (!opt) return;
    monthly.textContent = `${opt.monthly}€`;
    yearly.textContent = `${opt.monthly * 12}€`;
  });
});
