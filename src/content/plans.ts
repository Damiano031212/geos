/**
 * Piani e prezzi: dati, non markup. Il prezzo annuale è il mensile × 12.
 * TODO(geos): la tabella reale dei prezzi non esiste.
 *  - Individual: 1 utente, 20€/mese (confermato).
 *  - Team: 10€ per utente, da 3 a 10 utenti (regola dal copy; valori da confermare).
 *  - Agenzia: confermato solo 25 utenti = 180€; 30, 40 e 50 utenti sono segnaposto a 7,20€ per utente.
 */

export interface PlanOption {
  users: number;
  monthly: number;
}

export interface Plan {
  id: 'individual' | 'team' | 'agency';
  name: string;
  badge?: string;
  description: string;
  popular?: boolean;
  /** Con una sola opzione il piano ha un utente fisso e nessun selettore. */
  options: PlanOption[];
  defaultUsers: number;
}

const perUser = (rate: number, users: number[]): PlanOption[] =>
  users.map((u) => ({ users: u, monthly: Math.round(u * rate) }));

export const plans: Plan[] = [
  {
    id: 'individual',
    name: 'Individual',
    description:
      'Accesso completo per un singolo agente. Tutte le funzionalità di Geos, nessun vincolo.',
    options: [{ users: 1, monthly: 20 }],
    defaultUsers: 1,
  },
  {
    id: 'team',
    name: 'Team',
    badge: '10€ per utente',
    description:
      'Per piccole agenzie. Tre account con gestione condivisa di immobili, richieste e portali. Espandibile fino a 10 account a €10/mese ciascuno.',
    options: perUser(10, [3, 4, 5, 6, 7, 8, 9, 10]),
    defaultUsers: 3,
  },
  {
    id: 'agency',
    name: 'Agenzia',
    badge: '7€ per utente',
    popular: true,
    description:
      'Per agenzie strutturate. Gestione centralizzata di team, immobili e portali, con controllo completo su ruoli e performance di ogni agente.',
    options: [
      { users: 25, monthly: 180 },
      { users: 30, monthly: 216 },
      { users: 40, monthly: 288 },
      { users: 50, monthly: 360 },
    ],
    defaultUsers: 25,
  },
];

export const yearly = (monthly: number) => monthly * 12;
