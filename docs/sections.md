# Geos — Specifiche per sezione

Ordine della pagina e id delle ancore. Token e componenti: `docs/design-system.md`. Frame di riferimento: desktop 1920 (grid 12 col, margini 32, gutter 20), mobile 375 (grid 4 col, margini 12, gutter 12).

| # | Sezione | id | Container desktop | Sfondo |
|---|---|---|---|---|
| 0 | Navbar | — | pill centrata | `white` |
| 1 | Hero | `#hero` | 12 col | foto + overlay |
| 2 | Per chi è pensato | `#per-chi` | 8 col (3–10) | `white` |
| 3 | I numeri parlano da soli | `#numeri` | 8 col | `primary-darker` |
| 4 | Tutto il necessario (carosello) | `#tutto-il-necessario` | card attiva 8 col | `white` |
| 5 | Come funziona Geos | `#come-funziona` | 12 col | foto + overlay |
| 6 | Una suite completa pensata per te | `#suite` | 8 col | gradiente verticale quasi nero → blu scuro |
| 7 | I nostri piani | `#piani` | 8 col | `tertiary-lighter` |
| 8 | Form di contatto | `#demo` | card 10 col (2–11) | gradiente `dark` |
| 9 | CTA finale + Footer | `#cta` | 12 col | gradiente `light-blue` |

**Pattern a pannelli:** le sezioni 8 e 9 hanno gli angoli superiori arrotondati (≈ 40) e si sovrappongono alla precedente con margine negativo (≈ −40) rivelando lo sfondo sotto gli angoli. La sezione 3 ha angoli inferiori arrotondati (≈ 40). Verifica a vista l'effetto desktop e mobile.

Mappa icone (`assets/icons`): `house` (card Agenzie), `user` (card Agenti), `users-three` (card Configurazioni), `calendar` (Agenda), `globe` (Sito vetrina), `chat-circle-text-24` (Conversazioni), `chat-circle-text-20` (link WhatsApp), `arrow-right` (pulsanti), `arrow-down-fill` (select, accordion), `caret-circle-left/right` (carosello), `list` (hamburger), `x` (chiudi menu).

---

## 0. Navbar

**Layout.** Pill `white` flottante, centrata in alto sopra il contenuto (≈ 600 px di larghezza a 1920). Contenuto desktop: logo geos · Funzionalità · Servizi · Prezzi · divisore verticale · CTA "Richiedi una Demo" (variante Navbar, outline, raggio 12).
Mobile: pill a larghezza piena (margini 12) con logo a sinistra e hamburger (`list`) a destra. Aperta, **la stessa pill si espande verso il basso**: logo + `x`, tre link in colonna, linea divisoria, CTA a tutta larghezza.

**Link (ancore):**
- Funzionalità → `#come-funziona` (titolo "Come funziona Geos")
- Servizi → `#suite` ("Una suite completa pensata per te")
- Prezzi → `#piani` ("I nostri piani")
- Richiedi una Demo → `#demo` (form di contatto)

**Comportamento.**
- Si **nasconde allo scroll verso il basso** e **riappare allo scroll verso l'alto**. In cima alla pagina è sempre visibile.
- Non si nasconde mentre il menu mobile è aperto.
- Soglia piccola (≈ 8 px) per evitare tremolii; listener `scroll` passivo con `requestAnimationFrame`.
- Scroll fluido sulle ancore con `scroll-margin-top` per non finire sotto la navbar.
- Menu mobile: si chiude con `Esc`, al click su un link e al click fuori.

**A11y.** `<nav aria-label="Principale">`, `button` hamburger con `aria-expanded` e `aria-controls`, etichette "Apri menu"/"Chiudi menu".

---

## 1. Hero

**Layout.**
- Desktop: contenitore a **12 colonne** con margine 32 su tutti i lati e raggio ampio, alto quanto il viewport (**`100svh`**, minimo 560 px, nessun massimo). Foto di sfondo `hero.webp` (`hero-2x.webp` per schermi densi) con overlay scuro. Dentro: H1 centrato, sottotitolo, CTA (variante Secondary, fondo `white`), e in basso la striscia dei loghi **sovrapposta alla foto**.
- Mobile: contenitore con margini 12 e raggio ampio; H1, sottotitolo e CTA centrati. La striscia dei loghi sta **sotto** il contenitore, ma **hero e striscia stanno insieme nella stessa schermata** (`100svh`, la hero occupa lo spazio restante).
- Titolo: `huge` (96/120 desktop; mobile da misurare). Verifica l'interlinea a vista (vedi nota in design system).

**Copy.**
- H1: "Creato da agenti immobiliari per agenti immobiliari"
- Sottotitolo: "Il gestionale immobiliare che incrocia domanda, offerta e portali esterni in un click."
- CTA: "Richiedi una demo" → `#demo`

**Striscia loghi (marquee).**
- Scorre **in loop continuo** con **dissolvenza alle due estremità** (maschera sfumata).
- Contenuto: Immobiliare.it · Wikicasa · idealista · Immobiliare.it · Wikicasa (ripetuti per un loop senza salti: duplica la lista e anima `translateX` fino a −50%).
- In pausa quando non è visibile (IntersectionObserver); ferma con `prefers-reduced-motion`.
- Desktop: loghi bianchi semitrasparenti sulla foto. Mobile: loghi in tessere quadrate arrotondate chiare su sfondo pagina. Dettagli esatti dagli SVG in arrivo.
- A11y: la lista originale è leggibile (`aria-label="Portali integrati"`), il duplicato è `aria-hidden`.

**Asset.** `hero.webp`, `hero-2x.webp`. **MANCANO** loghi dei portali e logo geos (SVG): placeholder.

---

## 2. Per chi è pensato

**Layout desktop.**
- Container 8 colonne. Intestazione a sinistra: titolo + sottotitolo (sottotitolo largo ≈ 7 col).
- Griglia bento a **3 colonne** (gap 20): Card A (foto) occupa l'altezza di tutta la griglia nella prima colonna; Card B e Card C affiancate in alto; Card D su 2 colonne in basso.
- **Card A:** foto di sfondo (`per-chi-e-pensato.webp`) con gradiente scuro sotto il testo; tag in basso sopra il titolo; testo bianco.
- **Card B:** gradiente blu, testo chiaro; in alto IconTile bianco (`house`) + tag a destra; chip impilate in basso.
- **Card C:** sfondo azzurro chiaro con bordo sottile; IconTile `secondary-darker` (`user`) + tag; chip in basso.
- **Card D:** sfondo `tertiary-lighter` con bordo; IconTile `tertiary-darker` (`users-three`) + tag; AvatarStack (AM, LG, MR, +12) in basso a destra, decorativo.

**Layout mobile.** Titolo e sottotitolo a sinistra (margine 12). Le 4 card in **una riga a scroll orizzontale nativo** (`ScrollRow`: `overflow-x: auto`, `scroll-snap-type: x mandatory`), senza frecce né pallini, scrollbar nascosta. Ogni card quasi a tutta larghezza così la successiva si vede a destra. Ordine A, B, C, D.

**Interazioni.** Nessuna oltre allo scroll.

**Copy.**
- Titolo: "Per chi è pensato"
- Sottotitolo: "Geos cresce con il tuo business: dalla gestione quotidiana del singolo agente alla visione d'insieme di un'agenzia strutturata."
- **A** — tag "Un'unica piattaforma" · titolo "Più tempo alle relazioni, meno alle attività ripetitive." · testo "Tutto ciò che serve per lavorare meglio, senza cambiare il tuo metodo."
- **B** — tag "Team da 4+ persone" · titolo "Agenzie strutturate" · testo "Ruoli, permessi e risultati sempre sotto controllo. Coordina il team e trasforma ogni dato in una decisione più rapida." · chip "Controllo centralizzato", "Performance in tempo reale"
- **C** — tag "Professionisti singoli" · titolo "Agenti indipendenti" · testo "Automatizza il lavoro operativo e mantieni immobili, clienti e appuntamenti ordinati in un solo spazio." · chip "Setup immediato", "Zero attività duplicate"
- **D** — tag "Infinite configurazioni" · titolo "Una piattaforma che si adatta, non il contrario." · testo "Configura flussi, accessi e strumenti seguendo la crescita della tua realtà immobiliare."

(I tag nel design sono in parte minuscoli: nel sito tutti con iniziale maiuscola per coerenza.)

**Asset.** `per-chi-e-pensato.webp` (la versione mobile è la stessa ritagliata con `object-position`).

---

## 3. I numeri parlano da soli

**Layout desktop.** Sfondo `primary-darker` a tutta larghezza con angoli inferiori arrotondati; padding verticale uguale sopra e sotto (nel frame il banner sporge sotto lo sfondo: è un errore del frame). Container 8 colonne. Titolo a sinistra, poi griglia a **3 colonne uguali** (≈ 398 px, gap 20), righe alte ≈ 300:
- Riga 1: card **+99%** (2 colonne) · card **#1 dal 2025** (1 colonna)
- Riga 2: card **UI** · card **40 ore** · card **+80%**
- Riga 3: banner **Testato sul campo** (3 colonne), testo a sinistra, illustrazione a pillole a destra

**Card.**
- **+99%:** fondo `white`; SVG `numeri-99-white-noise.svg` in alto a sinistra; numero grande in basso.
- **#1 dal 2025:** gradiente blu (chiaro a sinistra → scuro a destra), testo bianco.
- **UI:** fondo `tertiary-lighter`, screenshot incorniciato (`numeri-bento.webp`).
- **40 ore:** foto a tutta card (`numeri-40-ore.webp`) + gradiente scuro in basso per la leggibilità del testo bianco.
- **+80%:** fondo chiaro con UI in prospettiva (`numeri-80-contratti.webp`).
- **Banner:** fondo `secondary-darker`; `numeri-testato-sul-campo.webp` a destra.

**Layout mobile.** Titolo **centrato**. Colonna singola, margini 12, gap 12, ordine: +99%, #1, UI, 40 ore, +80%, banner. Nel banner testo centrato e illustrazione sotto.

**Interazioni.** Nessuna. Non animare i numeri.

**Copy.**
- Titolo: "I numeri parlano da soli"
- "+99%" — "di tempo risparmiato sulle attività ripetitive"
- "#1 dal 2025" — "a integrare tutti gli strumenti degli agenti immobiliari in un'unica piattaforma"
- UI — solo immagine (alt: "Sito vetrina di un'agenzia realizzato con Geos")
- "40 ore" — "risparmiate ogni mese, in media"
- "+80%" — "di contratti in più"
- Banner — "Testato sul campo con veri agenti immobiliari" / "Costruito insieme a chi lavora ogni giorno in agenzia."

I numeri sono grafica: nel DOM usa elementi testuali reali (non immagini).

---

## 4. Tutto il necessario (carosello)

**Layout desktop.**
- Titolo e sottotitolo **centrati**, su due righe.
- Carosello a larghezza di viewport: la **card attiva è centrata** e larga 8 colonne (≈ 1224 px a 1920); le card adiacenti sono **parzialmente visibili** ai lati (gap 20) e sporgono fino ai bordi dello schermo.
- Ogni card: contenitore `white` con raggio ampio e ombra leggera; dentro, a sinistra pannello testo con gradiente `sky-blue` (titolo, testo, CTA con icona gradiente "Richiedi una demo →" in basso), a destra un quadrato `secondary-darker` con l'illustrazione (`carousel-01…06.webp`, associate per ordine alle 6 card; verifica a vista).
- Sotto: due pulsanti circolari scuri (`caret-circle-left/right`), centrati.

**Layout mobile.** Titolo e sottotitolo centrati. Una card per volta a larghezza piena (margini 12): testo in alto, quadrato blu con illustrazione in basso. Le frecce centrate sotto. Le card adiacenti non si vedono.

**Interazione.**
- **Circolare**: dall'ultima si torna alla prima, dalla prima si va all'ultima, senza salti visibili (card clonate agli estremi o indice con modulo).
- Desktop: frecce **e** click sulle card laterali (cursore a mano).
- Mobile: **solo frecce** per ora. Lo swipe col dito è una proposta aperta: implementalo disattivabile da un flag e segnalalo.
- Nessun autoplay. Transizione ≈ 500 ms.
- Le CTA nelle card → `#demo`.

**A11y.** Regione `aria-roledescription="carousel"` con etichetta; card non attive `inert` (le loro CTA non entrano nel tab order); pulsanti "Card precedente"/"Card successiva"; con `prefers-reduced-motion` il passaggio è istantaneo. Prima card + due vicine eager, le altre lazy.

**Copy.**
- Titolo: "Tutto il necessario per lavorare bene, in un unico software."
- Sottotitolo: "Geos semplifica ogni aspetto del lavoro quotidiano. Prezzo accessibile, nessun costo nascosto, abbonamento mensile che disdici quando vuoi."
- CTA di ogni card: "Richiedi una demo"
1. **Connesso ai portali esterni** — "Pubblica i tuoi immobili su Immobiliare.it, Idealista, Wikicasa e gli altri portali principali — direttamente da Geos, in un unico passaggio. Niente accessi multipli, niente copia-incolla tra piattaforme."
2. **Database immobili già pronto** — "Non devi più cercare gli immobili portale per portale: Geos ha già un database con tutti quelli presenti sul mercato. Trovi subito la corrispondenza giusta per ogni richiesta, senza perdere tempo a controllare manualmente."
3. **Prezzo accessibile** — "Un piano per agenti indipendenti e uno per agenzie strutturate, a un prezzo che non pesa sul bilancio. Nessun costo nascosto, nessun vincolo: scegli quello giusto per te, cambialo quando vuoi." (Il design ha il refuso "accessibili": usa "accessibile".)
4. **Tutto incluso** — "Clienti, immobili, agenda, portali esterni e sito vetrina: tutto in un unico posto. Non serve passare da un programma all'altro, né tenere insieme fogli excel, email e appunti sparsi qua e là."
5. **Supporto dedicato** — "Assistenza in ogni fase, dall'onboarding in avanti. Siamo qui quando serve: persone vere che rispondono subito, non risposte automatiche o ticket che restano in coda per giorni prima di una risposta." (Testo da ricontrollare sul Figma: nel file originale c'era "né risposte automatiche".)
6. **Facile da usare** — "Interfaccia intuitiva, pensata anche per chi non ha esperienza con i software. Nessuna formazione richiesta: apri Geos e capisci subito dove cliccare, senza manuali da leggere o tutorial da seguire prima di iniziare."

---

## 5. Come funziona Geos

**Layout desktop (≥ 1024).**
- Contenitore a **12 colonne**, margine 32, raggio ampio. Sfondo `come-funziona-bg.webp` con overlay scuro (token overlay: TODO).
- Titolo "Come funziona Geos" in alto a sinistra. Sotto, una **barra a pill** con i 4 tab (attivo: pill bianca; altri testo chiaro su fondo blu traslucido) e a destra la scritta non cliccabile "Funzionalità principali".
- Sotto la barra, due pannelli affiancati di **uguale altezza fissa**:
  - sinistra (≈ 450 px): card di testo con effetto vetro (**`backdrop-filter: blur`**, con fallback), contiene tag, titolo, testo;
  - destra (≈ 1075 px): frame con bordo blu scuro che contiene il mockup (`feature-*.webp`) su fondo chiaro.
- Altezza e proporzioni fisse → **nessun layout shift** al cambio di tab.

**Interazione desktop.** Click su un tab → cambia lo stato del componente (tab attivo, testo, mockup) con crossfade ≈ 250 ms. Parte dal tab "Immobili". Nessun autoplay. Pattern ARIA `tablist/tab/tabpanel`: frecce sinistra/destra, Home, End, tabindex a rotazione. Mockup del primo tab eager, gli altri lazy con precaricamento all'hover/focus del tab.

**Layout mobile (< 1024): accordion** (componente diverso, stessi dati).
- Titolo centrato; quattro voci su pillole con gradiente `dark`, raggio ≈ 28.
- Voce aperta: etichetta + freccia, linea divisoria, titolo in grassetto, testo (titolo e testi in sequenza, senza chip), mockup a larghezza piena ritagliato in alto a sinistra (`object-fit: cover`, stesso file del desktop).
- Una voce aperta alla volta; la prima aperta all'inizio; **la voce aperta si può richiudere**. Animazione altezza con `grid-template-rows` 0fr → 1fr.
- **Freccia:** convenzione standard (aperto = verso l'alto, chiuso = verso il basso). Ignora l'inversione presente nel frame.
- Chip e "Funzionalità principali" non compaiono su mobile.

**Struttura.** Una sola fonte dati (`src/content/tabs.ts`), due componenti mostrati/nascosti via CSS al breakpoint 1024; immagini del componente nascosto in lazy loading (non vengono scaricate).

**Copy** (testi in grassetto indicati con `**`).
1. Tab **Immobili** — tag "Immobili" · titolo "Gestisci e pubblica i tuoi annunci direttamente da Geos" · "Carica i dettagli dell'immobile sul gestionale e, con un clic, pubblicalo sui principali portali immobiliari." · "**Niente doppi inserimenti, niente copia e incolla** da un sito all'altro."
2. Tab **Clienti** — tag "Clienti" · titolo "Ogni richiesta cliente, in un solo posto" · "Registra ogni richiesta di acquisto o affitto **appena arriva**." · "Organizzala per **stato**, **priorità** o **tipologia** di immobile cercato."
3. Tab **Incroci interni** — tag "Incroci" · titolo "Trova subito l'immobile giusto per ogni richiesta" · "Gli incroci interni servono a cercare solamente dentro il tuo database personale:" · "incrociano le richieste con gli immobili che hai registrato tu, e viceversa."
4. Tab **Collaborazioni** — tag "Collaborazioni" · titolo "Database vuoto? Nessun problema: espandi la ricerca sui portali esterni" · "Non fermarti ai limiti del tuo archivio interno. Quando un immobile non è presente nel tuo database, il software ti permette di ampliare istantaneamente la ricerca sui principali portali immobiliari (Idealista, Immobiliare.it, Wikicasa e Casafari)." (nel frame c'è un punto fermo di troppo: è una sola frase.)

**Asset.** `come-funziona-bg.webp`, `feature-immobili.webp`, `feature-clienti.webp`, `feature-incroci.webp`, `feature-collaborazioni.webp`. Alt: es. "Schermata Immobili di Geos con elenco annunci e filtri", "…Clienti con tabella delle richieste", "…Incroci con elenco degli incroci per cliente", "…Collaborazioni con risultati dai portali esterni".

---

## 6. Una suite completa pensata per te

**Layout desktop.** Sfondo con gradiente verticale (quasi nero in alto → blu scuro in basso). Container 8 colonne. Intestazione: titolo a sinistra (due righe), testo a destra allineato al bordo del container. Griglia a **2 colonne** (≈ 760 / 450 px, gap 20): Card 1 occupa l'altezza di tutta la colonna sinistra; Card 2 e Card 3 impilate a destra.
Struttura card: IconTile in alto a sinistra + tag a pill in alto a destra, titolo, testo, immagine in basso con angoli arrotondati.
- **Card 1 Agenda:** fondo blu con titolo grande; mockup largo `suite-agenda.webp`.
- **Card 2 Sito vetrina:** fondo blu; pannello azzurro con frammento di UI (avatar MR, campanella, filtro, "Clienti") tagliato sul bordo destro.
- **Card 3 Conversazioni:** fondo `tertiary-lighter`, icona e testi scuri; mockup della chat.

**Layout mobile.** Titolo e testo a sinistra; le 3 card in riga a scroll orizzontale (`ScrollRow`, stesso componente della sezione 2), card successiva visibile. Stessa struttura interna.

**Interazioni.** Nessuna.

**Copy.**
- Titolo: "Una suite completa pensata per te."
- Testo a destra: "Ogni strumento comunica con gli altri, così le informazioni restano aggiornate e il lavoro continua senza interruzioni."
- Card 1 — tag "Agenda intelligente" · "Ogni appuntamento, sempre al posto giusto." · "Sincronizza agenda, attività e follow-up. Evita sovrapposizioni e ritrova ogni dettaglio prima dell'incontro."
- Card 2 — tag "Sito vetrina" · "Il tuo brand online, senza lavoro extra." · "Pubblica immobili e aggiornamenti dal gestionale direttamente sul tuo sito."
- Card 3 — tag "Conversazioni" · "Messaggi e clienti, nello stesso flusso." · "Rispondi, organizza e riprendi ogni conversazione senza lasciare la dashboard."

**Asset.** `suite-agenda.webp`. **MANCANO** gli export di Sito vetrina e Conversazioni (immagini WebP in arrivo): placeholder neutro.

---

## 7. I nostri piani

**Layout desktop.** Sfondo `tertiary-lighter`, container 8 colonne, titolo a sinistra. Tre card `white` (raggio ampio, ombra leggera) in 3 colonne, gap 20, **equi-alte** e con le righe allineate tra le card (usa `subgrid`): nome (+ badge) · descrizione · prezzo · sottoriga annuale · selettore (vuoto in Individual) · blocco extra · CTA · link WhatsApp.
- **Più popolare:** la card Agenzia ha una linguetta blu (`azure-300`/`secondary`) attaccata sopra con "PIÙ POPOLARE" (maiuscolo, spaziato) e bordo blu sottile; sporge sopra le altre.
- Badge a pill con bordo in alto a destra: Team "10€ per utente", Agenzia "7€ per utente".
- Sotto le card: **banner "Prezzi chiari, zero sorprese"** largo 8 colonne, fondo `secondary-darker`, `piani-prezzi-chiari.webp` a sinistra, testo a destra su 2 colonne CSS (`column-count: 2`).

**Layout mobile.** Titolo centrato; card impilate (Individual, Team, Agenzia), margini 12. La linguetta "Più popolare" dell'Agenzia è **scura** (`primary-darker`, testo bianco) invece che blu. Banner a colonna singola, titolo centrato, immagine in fondo.

**Selettore utenti (Team e Agenzia).** `<select>` nativo (`SelectPill`) con etichetta "N Utenti". **Cambia prezzo mensile e annuale** senza ricaricare; il nuovo valore è annunciato con `aria-live="polite"`. Annuale = mensile × 12. Formato come nel design: "30€/mese", "360€ all'anno" (senza separatore delle migliaia).

Dati in `src/content/plans.ts` (tutto con `TODO(geos)` dove segnato):

| Piano | Utenti | Mensile | Annuale | Stato |
|---|---|---|---|---|
| Individual | 1 (fisso, niente selettore) | 20€ | 240€ | confermato |
| Team | 3 (default) … 10 | utenti × 10€ → 30€ … 100€ | × 12 | regola 10€/utente dal copy; valori da confermare |
| Agenzia | 25 (default), 30, 40, 50 | 25 → 180€; 30 → 216€; 40 → 288€; 50 → 360€ | × 12 | **solo 25 → 180€ confermato**; gli altri sono segnaposto a 7,20€/utente |

**Blocco extra (uguale in tutti i piani).** Titolo "Per tutti i piani" (sostituisce "Per un singolo utente" del design); voci "Sito vetrina **300€**/anno" e "Attivazione **100€** \*". La nota dell'asterisco è provvisoria: "\* Costo una tantum, da pagare solo all'attivazione." (da validare con Geos); posizione nella pagina da definire (proposta: sotto la griglia delle card).

**CTA e link.** "Richiedi una demo" → `#demo`. Link "scrivici su whatsapp" con icona `chat-circle-text-20`, sottolineato; l'URL viene da `PUBLIC_WHATSAPP_URL` (**non esiste**: se manca non rendere un link rotto, segnala in build).

**Copy.**
- Titolo: "I nostri piani"
- **Individual** — "Accesso completo per un singolo agente. Tutte le funzionalità di Geos, nessun vincolo."
- **Team** — "Per piccole agenzie. Tre account con gestione condivisa di immobili, richieste e portali. Espandibile fino a 10 account a €10/mese ciascuno."
- **Agenzia** — "Per agenzie strutturate. Gestione centralizzata di team, immobili e portali, con controllo completo su ruoli e performance di ogni agente."
- Banner — titolo "Prezzi chiari, zero sorprese" · testo "Che tu lavori **da solo** o **guidi un team**, Geos ha un piano pensato per te. **Nessun costo nascosto, nessun vincolo contrattuale**: scegli il piano più adatto al tuo modo di lavorare, e cambialo quando le tue esigenze crescono."

**Edge case.** Prezzi come numeri da dati, non scritti nel markup; opzioni del select generate dai dati; valore iniziale = default del piano (anche senza JS: server-render del default).

---

## 8. Form di contatto

**Layout desktop.** Sfondo con gradiente `dark` a tutta larghezza, angoli superiori arrotondati. Titolo e sottotitolo **centrati**, in bianco. Sotto, **card `white` larga 10 colonne (2–11)**, raggio ampio, in due parti: a sinistra il form (≈ 4 colonne), a destra `form-contatto.webp` (`form-contatto-2x.webp` per schermi densi) in un riquadro con raggio.
**Mobile.** Titolo centrato (con `text-wrap: balance`, niente `<br>`); card a larghezza piena (margini 12); campi impilati; **nessuna immagine**. Sotto 1024 l'immagine è nascosta.

**Campi** (label sopra, in grassetto; placeholder = esempi):
| Campo | Obbligatorio | Tipo | Placeholder |
|---|---|---|---|
| Nome | sì | text, `autocomplete="given-name"` | Mario |
| Cognome | sì | text, `family-name` | Rossi |
| Email | sì | email, `autocomplete="email"` | nome@email.it |
| Telefono | sì | tel, `inputmode="tel"`, `autocomplete="tel"` | +39 333 543 65237 |
| Città | sì | text, `address-level2` | Milano |
| Azienda | no | text, `organization` | Geos |
| Dimensione Azienda | no | stepper numerico (− valore +) | valore iniziale da confermare (proposta 1, min 1) |

CTA: pulsante con icona gradiente "Richiedi una demo →". Stati dei campi: vedi design system §Input.

**Invio (provvisorio, non progettato).**
- Validazione nativa + messaggi in italiano sotto ogni campo; al primo errore il focus va al primo campo non valido; riepilogo annunciato (`role="alert"`).
- In corso: pulsante disabilitato con indicatore di caricamento, campi disabilitati.
- Successo: il form è sostituito nella card da un messaggio di conferma ("Grazie, ti contatteremo a breve" — testo provvisorio) con `aria-live`.
- Errore di rete/server: messaggio d'errore nella card con "Riprova"; i dati inseriti restano.
- Anti-spam: honeypot nascosto + Turnstile (caricato su richiesta). Validazione anche lato server.
- Endpoint `/api/demo` → inoltra a `DEMO_FORM_WEBHOOK_URL` (**TODO(geos)**: destinatario/CRM non esistono, nessun valore di default). Mai loggare dati personali.
- **Consenso privacy** (proposta, non nel design): checkbox obbligatoria "Ho letto la Privacy Policy" con link alla pagina (TODO: pagina inesistente). In attesa di conferma.

**Ancora.** Tutte le CTA "Richiedi una demo" (navbar, hero, card, piani, CTA finale) portano a `#demo` (la card del form, con offset sotto la navbar).

**Copy.**
- Titolo sezione: "Metti subito alla prova Geos e scopri il suo potenziale avanzato"
- Sottotitolo: "Compila il modulo in pochi istanti: ti contattiamo per mostrarti Geos in azione."
- Titolo form: "Richiedi una demo"
- Sottotitolo form: "Compila il modulo e ti contatteremo per mostrarti come funziona Geos."
- Etichette: "Nome *", "Cognome *", "Email *", "Telefono *", "Città *", "Azienda", "Dimensione Azienda"
- Alt immagine: "Schermate di Geos: impostazioni agenzia ed elenco collaboratori"

---

## 9. CTA finale + Footer

**Wrapper.** Un unico blocco con gradiente `light-blue` (da `#5897df` a `#fafafa`), angoli superiori arrotondati e sovrapposto alla sezione form (margine negativo). Dentro, due riquadri con bordo sottile e raggio ampio.

**CTA finale (desktop e mobile).** Riquadro a 12 colonne, allineato a sinistra: chip "Ottimizza il tuo tempo con noi", titolo `title-huge-tight` in `primary-darker`, testo, pulsante con icona (Primary). Lo spazio a destra del titolo resta vuoto.

**Footer.** Riquadro `white` con bordo `tertiary-darker`, 4 colonne a 1920: Brand (logo geos + "Il software gestionale per agenti immobiliari") · Prodotto · Azienda · Legale. Il **simbolo geos grande** (SVG decorativo, blu scuro con texture) sporge dal bordo inferiore a destra ed è tagliato dalla fine della pagina (`aria-hidden`).
Mobile: Brand + Prodotto + Azienda affiancati; Legale sotto; simbolo in basso a destra.

**Link.**
- Prodotto: Funzionalità → `#come-funziona` · Prezzi → `#piani` · Demo → `#demo`
- Azienda: Contatti → **TODO(geos)** (nessun contatto disponibile)
- Legale: Privacy Policy, Termini di Servizio → **TODO(geos)** (pagine inesistenti)

**Copy.**
- Chip: "Ottimizza il tuo tempo con noi"
- Titolo: "Vuoi vedere Geos in azione?"
- Testo: "Scopri come Geos semplifica la gestione della tua agenzia, ogni giorno."
- CTA: "Richiedi una demo →"
- Footer: "Il software gestionale per agenti immobiliari"; colonne "Prodotto", "Azienda", "Legale".

**Asset.** **MANCANO** logo geos e simbolo grande (SVG).
