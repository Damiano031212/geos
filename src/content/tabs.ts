/** Tab (desktop) e voci accordion (mobile) di "Come funziona Geos": una sola fonte dati. */
import immobili from '../assets/img/feature-immobili.webp';
import clienti from '../assets/img/feature-clienti.webp';
import incroci from '../assets/img/feature-incroci.webp';
import collaborazioni from '../assets/img/feature-collaborazioni.webp';

export interface TabItem {
  id: string;
  label: string;
  tag: string;
  title: string;
  /** Paragrafi; i segmenti con `strong` sono in grassetto. */
  paragraphs: { text: string; strong?: boolean }[][];
  image: ImageMetadata;
  imageAlt: string;
}

export const tabs: TabItem[] = [
  {
    id: 'immobili',
    label: 'Immobili',
    tag: 'Immobili',
    title: 'Gestisci e pubblica i tuoi annunci direttamente da Geos',
    paragraphs: [
      [
        {
          text: 'Carica i dettagli dell’immobile sul gestionale e, con un clic, pubblicalo sui principali portali immobiliari.',
        },
      ],
      [
        { text: 'Niente doppi inserimenti, niente copia e incolla', strong: true },
        { text: ' da un sito all’altro.' },
      ],
    ],
    image: immobili,
    imageAlt: 'Schermata Immobili di Geos con elenco annunci e filtri',
  },
  {
    id: 'clienti',
    label: 'Clienti',
    tag: 'Clienti',
    title: 'Ogni richiesta cliente, in un solo posto',
    paragraphs: [
      [
        { text: 'Registra ogni richiesta di acquisto o affitto ' },
        { text: 'appena arriva', strong: true },
        { text: '.' },
      ],
      [
        { text: 'Organizzala per ' },
        { text: 'stato', strong: true },
        { text: ', ' },
        { text: 'priorità', strong: true },
        { text: ' o ' },
        { text: 'tipologia', strong: true },
        { text: ' di immobile cercato.' },
      ],
    ],
    image: clienti,
    imageAlt: 'Schermata Clienti di Geos con tabella delle richieste',
  },
  {
    id: 'incroci',
    label: 'Incroci interni',
    tag: 'Incroci',
    title: 'Trova subito l’immobile giusto per ogni richiesta',
    paragraphs: [
      [
        {
          text: 'Gli incroci interni servono a cercare solamente dentro il tuo database personale:',
        },
      ],
      [{ text: 'incrociano le richieste con gli immobili che hai registrato tu, e viceversa.' }],
    ],
    image: incroci,
    imageAlt: 'Schermata Incroci di Geos con elenco degli incroci per cliente',
  },
  {
    id: 'collaborazioni',
    label: 'Collaborazioni',
    tag: 'Collaborazioni',
    title: 'Database vuoto? Nessun problema: espandi la ricerca sui portali esterni',
    paragraphs: [
      [
        {
          text: 'Non fermarti ai limiti del tuo archivio interno. Quando un immobile non è presente nel tuo database, il software ti permette di ampliare istantaneamente la ricerca sui principali portali immobiliari (Idealista, Immobiliare.it, Wikicasa e Casafari).',
        },
      ],
    ],
    image: collaborazioni,
    imageAlt: 'Schermata Collaborazioni di Geos con risultati dai portali esterni',
  },
];
