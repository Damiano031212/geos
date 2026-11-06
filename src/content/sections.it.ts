/**
 * Copy delle sezioni in italiano (hero, per chi, numeri, carosello, suite, piani, form).
 * Navbar, footer e CTA finale sono in copy.it.ts. Testi definitivi da docs/sections.md.
 */

export const hero = {
  title: 'Creato da agenti immobiliari per agenti immobiliari',
  subtitle:
    'Il gestionale immobiliare che incrocia domanda, offerta e portali esterni in un click.',
  cta: { label: 'Richiedi una demo', href: '#demo' },
  portalsLabel: 'Portali integrati',
};

export const forWhom = {
  title: 'Per chi è pensato',
  subtitle:
    'Geos cresce con il tuo business: dalla gestione quotidiana del singolo agente alla visione d’insieme di un’agenzia strutturata.',
  a: {
    tag: 'Un’unica piattaforma',
    title: 'Più tempo alle relazioni, meno alle attività ripetitive.',
    text: 'Tutto ciò che serve per lavorare meglio, senza cambiare il tuo metodo.',
  },
  b: {
    tag: 'Team da 4+ persone',
    title: 'Agenzie strutturate',
    text: 'Ruoli, permessi e risultati sempre sotto controllo. Coordina il team e trasforma ogni dato in una decisione più rapida.',
    chips: ['Controllo centralizzato', 'Performance in tempo reale'],
  },
  c: {
    tag: 'Professionisti singoli',
    title: 'Agenti indipendenti',
    text: 'Automatizza il lavoro operativo e mantieni immobili, clienti e appuntamenti ordinati in un solo spazio.',
    chips: ['Setup immediato', 'Zero attività duplicate'],
  },
  d: {
    tag: 'Infinite configurazioni',
    title: 'Una piattaforma che si adatta, non il contrario.',
    text: 'Configura flussi, accessi e strumenti seguendo la crescita della tua realtà immobiliare.',
  },
};

// TODO(geos): i claim di marketing (+99%, #1 dal 2025, +80%, 40 ore) sono nel design: il cliente deve poterli dimostrare.
export const numbers = {
  title: 'I numeri parlano da soli',
  time: { value: '+99%', text: 'di tempo risparmiato sulle attività ripetitive' },
  first: {
    value: '#1 dal 2025',
    text: 'a integrare tutti gli strumenti degli agenti immobiliari in un’unica piattaforma',
  },
  uiAlt: 'Sito vetrina di un’agenzia realizzato con Geos',
  hours: { value: '40 ore', text: 'risparmiate ogni mese, in media' },
  contracts: { value: '+80%', text: 'di contratti in più' },
  banner: {
    title: 'Testato sul campo con veri agenti immobiliari',
    text: 'Costruito insieme a chi lavora ogni giorno in agenzia.',
  },
};

export const featuresIntro = {
  title: 'Tutto il necessario per lavorare bene, in un unico software.',
  subtitle:
    'Geos semplifica ogni aspetto del lavoro quotidiano. Prezzo accessibile, nessun costo nascosto, abbonamento mensile che disdici quando vuoi.',
  region: 'Funzionalità di Geos',
  prev: 'Card precedente',
  next: 'Card successiva',
  cta: 'Richiedi una demo',
};

export const howItWorks = {
  title: 'Come funziona Geos',
  label: 'Funzionalità principali',
  tablistLabel: 'Funzionalità',
};

export const suite = {
  title: 'Una suite completa pensata per te.',
  text: 'Ogni strumento comunica con gli altri, così le informazioni restano aggiornate e il lavoro continua senza interruzioni.',
  agenda: {
    tag: 'Agenda intelligente',
    title: 'Ogni appuntamento, sempre al posto giusto.',
    text: 'Sincronizza agenda, attività e follow-up. Evita sovrapposizioni e ritrova ogni dettaglio prima dell’incontro.',
    imageAlt: 'Anteprima di più pagine del sito vetrina di un’agenzia',
  },
  site: {
    tag: 'Sito vetrina',
    title: 'Il tuo brand online, senza lavoro extra.',
    text: 'Pubblica immobili e aggiornamenti dal gestionale direttamente sul tuo sito.',
    imageAlt: 'Barra del sito vetrina con avatar, notifiche, filtro e voce Clienti',
  },
  chat: {
    tag: 'Conversazioni',
    title: 'Messaggi e clienti, nello stesso flusso.',
    text: 'Rispondi, organizza e riprendi ogni conversazione senza lasciare la dashboard.',
    imageAlt: 'Schermata Conversazioni di Geos con elenco chat e messaggi',
  },
};

export const plansIntro = {
  title: 'I nostri piani',
  popular: 'Più popolare',
  cta: 'Richiedi una demo',
  whatsapp: 'scrivici su whatsapp',
  usersLabel: 'Numero di utenti',
  extras: {
    title: 'Per tutti i piani',
    site: { label: 'Sito vetrina', price: '300€', unit: '/anno' },
    activation: { label: 'Attivazione', price: '100€', mark: '*' },
  },
  banner: {
    title: 'Prezzi chiari, zero sorprese',
    imageAlt: '',
    /** I segmenti con `strong` sono in grassetto. */
    parts: [
      { text: 'Che tu lavori ' },
      { text: 'da solo', strong: true },
      { text: ' o ' },
      { text: 'guidi un team', strong: true },
      { text: ', Geos ha un piano pensato per te. ' },
      { text: 'Nessun costo nascosto, nessun vincolo contrattuale', strong: true },
      {
        text: ': scegli il piano più adatto al tuo modo di lavorare, e cambialo quando le tue esigenze crescono.',
      },
    ] as { text: string; strong?: boolean }[],
  },
};

export const demoForm = {
  title: 'Metti subito alla prova Geos e scopri il suo potenziale avanzato',
  subtitle: 'Compila il modulo in pochi istanti: ti contattiamo per mostrarti Geos in azione.',
  formTitle: 'Richiedi una demo',
  formSubtitle: 'Compila il modulo e ti contatteremo per mostrarti come funziona Geos.',
  submit: 'Richiedi una demo',
  imageAlt: 'Schermate di Geos: impostazioni agenzia ed elenco collaboratori',
  fields: {
    firstName: { label: 'Nome', placeholder: 'Mario' },
    lastName: { label: 'Cognome', placeholder: 'Rossi' },
    email: { label: 'Email', placeholder: 'nome@email.it' },
    phone: { label: 'Telefono', placeholder: '+39 333 543 65237' },
    city: { label: 'Città', placeholder: 'Milano' },
    company: { label: 'Azienda', placeholder: 'Geos' },
    size: { label: 'Dimensione Azienda' },
  },
};
