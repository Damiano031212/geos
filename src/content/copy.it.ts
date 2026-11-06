/**
 * Copy e dati in italiano. I componenti non contengono testo: il sito deve poter essere tradotto
 * senza toccarli. Testi definitivi da docs/sections.md.
 */

export interface Link {
  label: string;
  /** Senza href il link non si rende come <a> (nessun link rotto). */
  href?: string;
}

export const site = {
  name: 'Geos',
  // TODO(geos): title e meta description definitivi (bozza da validare).
};

export const nav = {
  label: 'Principale',
  logoAlt: 'Geos, torna in cima alla pagina',
  openMenu: 'Apri menu',
  closeMenu: 'Chiudi menu',
  links: [
    { label: 'Funzionalità', href: '#come-funziona' },
    { label: 'Servizi', href: '#suite' },
    { label: 'Prezzi', href: '#piani' },
  ] satisfies Link[],
  cta: { label: 'Richiedi una Demo', href: '#demo' },
};

export const footer = {
  label: 'Piè di pagina',
  logoAlt: 'Geos',
  tagline: 'Il software gestionale per agenti immobiliari',
  columns: [
    {
      title: 'Prodotto',
      links: [
        { label: 'Funzionalità', href: '#come-funziona' },
        { label: 'Prezzi', href: '#piani' },
        { label: 'Demo', href: '#demo' },
      ],
    },
    {
      title: 'Azienda',
      links: [
        // TODO(geos): destinazione di "Contatti" (nessun contatto disponibile).
        { label: 'Contatti' },
      ],
    },
    {
      title: 'Legale',
      links: [
        // TODO(geos): le pagine Privacy Policy e Termini di Servizio non esistono ancora.
        { label: 'Privacy Policy' },
        { label: 'Termini di Servizio' },
      ],
    },
  ] as { title: string; links: Link[] }[],
};

export const finalCta = {
  chip: 'Ottimizza il tuo tempo con noi',
  title: 'Vuoi vedere Geos in azione?',
  text: 'Scopri come Geos semplifica la gestione della tua agenzia, ogni giorno.',
  cta: { label: 'Richiedi una demo', href: '#demo' },
};
