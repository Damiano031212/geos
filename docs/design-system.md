# Geos — Design system

Fonte di verità per i token. Ricavato dal documento "Design system essenziale" del Figma. Dove manca un valore c'è `TODO(geos)`: misuralo dai PNG in `docs/design/` e marcalo come provvisorio.

Naming CSS: `--color-<gruppo>-<livello>`, `--space-<n>`, `--radius-<n>`, `--shadow-<n>`, `--gradient-<nome>`, `--duration-<nome>`, `--ease-<nome>`. Tutto in `src/styles/tokens.css` dentro `@theme`.

## 1. Colori

| Gruppo | Token | Hex |
|---|---|---|
| Primary | `primary-darker` | `#133051` |
| | `primary-dark` | `#283b5b` |
| | `primary-medium` | `#394766` |
| | `primary-light` | `#4b5573` |
| | `primary-lighter` | `#5e6580` |
| Secondary | `secondary-darker` | `#5897df` |
| | `secondary-medium` | `#78abe4` |
| Tertiary | `tertiary-darker` | `#cde8f1` |
| | `tertiary-medium` | `#deeff5` |
| | `tertiary-light` | `#e7f2f7` |
| | `tertiary-lighter` | `#eff6f8` |
| Base | `white` | `#fafafa` (mai `#fff`) |
| | `black` | `#0e0e0e` |
| Grigi | `gray-50` | `#f2f2f2` |
| | `gray-100` | `#e6e6e6` |
| | `gray-300` | `#b3b3b3` |
| | `gray-400` | `#999999` |
| | `gray-700` | `#4d4d4d` |
| | `gray-800` | `#333333` |
| | `gray-950` | `#121212` |
| Promossi (provvisori) | `sky-100` | `#deedff` |
| | `azure-300` | `#5d9ee9` |
| | `mist-100` | `#f1f5fa` |

Trasparenze: `white-10`, `white-20`, `black-10`, `black-20`, `primary-darker-90`, `overlay-20` → **TODO(geos)** (in `UI.md`, non disponibile). Stimale dai frame e marcale provvisorie.

Colore errore: **TODO(geos)** — rosso saturo nel frame degli input (non in palette). Crea `--color-error` e usalo per bordo, messaggio e icona.

**Fuori palette, da non usare:** `#131927`, `#343330`, `#fff`.

**Contrasto:** bianco `#fafafa` su `#5897df` ≈ 2,9:1; `#133051` su `#5897df` ≈ 4,3:1. Entrambi sotto 4,5:1 per testo piccolo. Vedi `CLAUDE.md` §8.

## 2. Gradienti

| Token | Definizione | Uso noto |
|---|---|---|
| `inverse-blue` | `to left, #5897df, #133051` | |
| `blue` | `to left, #133051, #5897df` | pulsanti con icona (variante gradiente), card "#1 dal 2025" (chiaro a sinistra → scuro a destra: verifica quale dei due combacia) |
| `sky-blue` | `to bottom, #deedff 0%, #fafafa 53.38%` | pannello testo card del carosello |
| `light-blue` | `to bottom, #5897df 0%, #fafafa 70.673%` | CTA finale + footer |
| `dark` | `to right, #133051 34.615%, #0e0e0e` | sezione form; voci accordion mobile |
| `wordmark` | `to left, #133051, #5d9ee9` | testo/logo "geos" |

Il gradiente **verticale** quasi-nero → blu scuro della sezione "Una suite completa" non è tra i token: aggiungilo come `dark-vertical` (TODO(geos): confermare con chi ha disegnato).

## 3. Tipografia

Titoli: **Cabinet Grotesk**. Testo: **DM Sans**. Nient'altro.

| Ruolo | Famiglia | Dimensione / line-height | Note |
|---|---|---|---|
| `huge` | Cabinet Grotesk | 96 / 120 | titolo hero (il frame mostra ≈ 120 di interlinea) |
| `title-huge-tight` | Cabinet Grotesk | 96 / 96 | CTA finale / footer |
| `h1` | Cabinet Grotesk | 82 / 68 | ⚠ line-height < font-size: verifica a vista |
| `h2` | Cabinet Grotesk | 56 / 52 | ⚠ idem |
| `h3` | Cabinet Grotesk | 32 / 32 | |
| `h4` | Cabinet Grotesk | 24 / 24 | |
| `tab-title` | Cabinet Grotesk 400 | 24 / 32,2 | solo desktop (tab "Come funziona") |
| `button` | Cabinet Grotesk **Bold** | 20 | classe `geo-button-text` |
| `body-huge` | DM Sans | 24 / 34 | |
| `body-lg` | DM Sans | 18 / 26 | |
| `body-md` | DM Sans | 16 / 20 (bold 16 / 22) | mobile regular 14 / 18 |
| `body-sm` | DM Sans | 14 / 20 | |
| `label-lg` | DM Sans | 14 / 16 | |
| `label-md` | DM Sans | 12 / 14 | |

Esistono 17 classi `geo-*` in `_typography.scss`. Se il file è nel repo, riusa i nomi; altrimenti definisci le classi con gli stessi nomi dei ruoli sopra (`geo-huge`, `geo-h1`, … `geo-label-md`).

**Valori mobile: TODO(geos)** (in `UI.md`). Misurali dal PNG mobile a 375 e usa `clamp()` per interpolare fino ai valori desktop a 1920. Marca come provvisori.

Regole: `text-wrap: balance` sui titoli, niente `<br>` manuali, pesi dichiarati solo quelli usati (variabile: un solo file per famiglia).

## 4. Spaziatura, raggi, ombre

- **Spaziatura (px):** 4, 8, 12, 16, 20, 24, 32, 48, 64. Alias dei nomi Figma: `sm = md = 12`, `lg = xl = 16`.
- **Gutter** 20 desktop, 12 mobile. Altri gap: 12 (card mobile), 36 (footer), 18 (form).
- **Raggi:** `radius-12` (CTA navbar, campi), 20, 24, 28, 32, 36, 40. Pill = `9999px`.
- **Ombre:** 6 token `shadow-*` → **TODO(geos)** (`UI.md`). Usate in modo leggero su card dei piani e carosello.

## 5. Griglia e container

| Frame | Colonne | Margini | Gutter |
|---|---|---|---|
| Desktop 1920 | 12 | 32 | 20 |
| Mobile 375 | 4 | 12 | 12 |

Larghezza colonna a 1920: (1920 − 2·32 − 11·20) / 12 ≈ **136,33 px**. Definisci `--col` come `(100% − 2·margin − 11·gutter) / 12` così tutto resta fluido.

Container (tutti centrati, `max-width` 1920):

| Nome | Colonne | Larghezza a 1920 | Sezioni |
|---|---|---|---|
| `container-12` | 1–12 | 1856 | Hero, Come funziona, CTA finale/footer |
| `container-10` | 2–11 | ≈ 1414 | Form (card) |
| `container-8` | 3–10 | 1232 (da x = 344 a x = 1576) | Per chi è pensato, Numeri, Tutto il necessario (card attiva), Suite, Piani |

Mobile: sempre margini 12 a larghezza piena (container-12 = container-10 = container-8).

Tra 1024 e 1439 riduci l'offset di `container-8` a 1 colonna per lato (proposta, verifica a vista). Sotto 1024 usa il layout mobile con margini 32 (768–1023).

Le sotto-griglie dei bento (3 colonne di ≈ 398 px con gap 20 nelle sezioni 3; 2 colonne nella 7) vivono **dentro** il container e non coincidono con le colonne del frame.

## 6. Componenti

Costruiscili tutti prima delle sezioni e mostrali in `/design-system` (noindex) con ogni stato.

### Button
Famiglie (desktop e mobile, mobile più piccolo):

| Variante | Fondo | Uso |
|---|---|---|
| **Primary** | `primary-darker`, testo `white` | piani, CTA su fondi chiari |
| **Not filled** | trasparente, testo `white` | su fondi scuri |
| **Secondary** | `white` (`#fafafa`), testo `primary-darker` | CTA hero (su foto) |
| **Navbar** | bordo `primary-darker`, testo `primary-darker`, raggio 12 (non pill), sfondo `white` | CTA navbar |
| **Con icona** | come Primary, freccia a destra (`arrow-right`) | CTA delle card, form, CTA finale |
| **Con icona, gradiente** | `blue` (scuro a sinistra → blu a destra) | carosello, form |

Stati (letti dallo spec dei pulsanti; i colori esatti sono approssimati → verifica con i frame):

| Stato | Primary | Not filled (su scuro) | Secondary |
|---|---|---|---|
| Default | `primary-darker` | testo bianco, nessun fondo | `white` |
| Hover | `primary-lighter` | bordo bianco | bordo `primary-darker` |
| Pressed | `primary-medium` | riempimento `white`, testo scuro | riempimento `primary-darker`, testo bianco |
| Focus | colore pressed + **doppio anello** (anello interno, spazio, anello esterno) | pressed + doppio anello | `primary-lighter` + testo bianco |
| Disabled | `gray-300`, testo attenuato | contorno attenuato | fondo e testo molto attenuati |

**Effetto goccia (solo pulsanti con icona):** all'hover la freccia, dentro un cerchio, si allontana verso destra come una goccia, ma resta collegata al pulsante da un "collo" che si assottiglia (mai separata del tutto). All'uscita l'animazione si inverte fino al default.
- Implementazione: transizioni CSS (non keyframe), così l'inversione parte dalla posizione corrente. ≈ 350 ms, easing morbido.
- Il box del pulsante **non cambia dimensione**: la goccia sporge fuori (nessun layout shift).
- Solo con `@media (hover: hover)`. Con `prefers-reduced-motion`: solo cambio di colore, istantaneo.
- Pressed: goccia ancora estesa, colori più scuri. Focus: doppio anello, **senza** goccia. Disabled: grigio, senza goccia.
- Variante gradiente: all'hover il cerchio con la freccia diventa `azure-300`.
- Collo e raggi: confronta con i frame quando costruisci il componente.

### SelectPill ("3 Utenti")
`<select>` **nativo** con aspetto a pill: bordo `primary-darker` 1–2 px, testo `primary-darker`, freccia `arrow-down-fill` a destra (`appearance: none`). Nativo = accessibile e con selettore di sistema su telefono. Stati come i pulsanti (hover, focus con anello, disabled).

### Input (campi del form)
Raggio 12, sfondo `gray-50`, testo `primary-darker`, placeholder `gray-400`.

| Stato | Aspetto |
|---|---|
| Default | fondo `gray-50` |
| Hover | fondo `gray-100` |
| Focus | fondo `gray-50` + contorno visibile 2 px `primary-darker` con piccolo offset (il frame mostra solo il cursore: l'indicatore è aggiunto per accessibilità, WCAG 2.4.7) |
| Errore | bordo 1 px `--color-error` (TODO(geos)) + messaggio sotto il campo |
| Disabled | `gray-50` con testo e bordo attenuati (durante l'invio) |

Label sopra il campo, DM Sans bold 16, asterisco sui campi obbligatori. Il placeholder non sostituisce la label.

### Stepper (Dimensione Azienda)
Tre segmenti uguali su fondo `gray-50`: `−`, valore, `+`. È un `input type="number"` con `min`, `inputmode="numeric"` e due `button` con `aria-label` ("Diminuisci", "Aumenta"). Il valore in design è grigio chiaro: valore iniziale da confermare (proposta 1, minimo 1).

### Tag (pill) e Chip
- **Tag:** pill piena `white` (su card scure/foto) o `tertiary` (su card chiare), testo `label-lg` bold, in alto a destra nelle card. Esistono varianti con bordo (badge "10€ per utente", "7€ per utente" sui piani: pill con bordo `azure-300`, testo piccolo).
- **Chip:** pill con bordo sottile e testo piccolo (`label-md`), impilate in basso nelle card B e C della sezione 2.
- **Chip "Ottimizza il tuo tempo con noi"** nella CTA finale: pill piccola con bordo `primary-darker`.

### IconTile
Quadratino 40×40 con raggio ≈ 12, icona al centro; varianti: bianco (casa), `secondary-darker` (utente), `tertiary-darker` (gruppo), traslucido scuro (agenda, sito), scuro pieno (conversazioni). Icone da `assets/icons`.

### Card
Contenitore con raggio ampio (28–40), varianti per sfondo: foto + overlay, gradiente `blue`, `tertiary` con bordo sottile, `white` + ombra (piani), gradiente `sky-blue` interno (carosello). Padding 24–32.

### AvatarStack
Cerchi 40–44 px sovrapposti (iniziali AM, LG, MR) + "+12". Decorativo: `aria-hidden`.

### Tabs / Accordion
Vedi `docs/sections.md` § Come funziona. Stessi dati, due componenti; cambio a 1024.

### Carosello e righe a scroll
- `ScrollRow`: riga a scroll orizzontale nativo con `scroll-snap-type: x mandatory`, scrollbar nascosta, card successiva visibile. Usata in sezione 2 e sezione 6 (mobile).
- `Carousel`: circolare con frecce (`caret-circle-left/right`), sezione 4.

### Marquee
Striscia di loghi con scorrimento continuo in loop e maschera sfumata ai bordi (`mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)`).

## 7. Motion (valori proposti, da affinare a vista)

| Elemento | Trigger | Animazione | Durata | Easing |
|---|---|---|---|---|
| Navbar | scroll giù / su | `translateY(-120%)` ↔ 0 | 300 ms | `cubic-bezier(.22,.61,.36,1)` |
| Menu mobile | click hamburger | espansione verso il basso della pill | 300 ms | idem |
| Marquee | continuo | `translateX(0 → −50%)` in loop | ≈ 40 s per ciclo | lineare |
| Carosello | frecce / click card laterali | `translateX` della pista | 500 ms | `cubic-bezier(.22,.61,.36,1)` |
| Tab "Come funziona" | click tab | crossfade testo + mockup | 250 ms | ease-out |
| Accordion mobile | click voce | altezza via `grid-template-rows 0fr → 1fr` | 300 ms | ease-out |
| Pulsante con icona | hover | effetto goccia | 350 ms | morbido |
| Ancore | click link | scroll fluido | — | nativo (`scroll-behavior: smooth`) |

`prefers-reduced-motion: reduce` → nessuna animazione di movimento (marquee fermo, transizioni istantanee, `scroll-behavior: auto`).

## 8. Ancore e offset

`scroll-margin-top` sulle sezioni = altezza navbar + margine (token `--nav-offset`). Id: `#per-chi`, `#numeri`, `#tutto-il-necessario`, `#come-funziona`, `#suite`, `#piani`, `#demo`.

## 9. Accessibilità trasversale

- Focus visibile ovunque: doppio anello come i pulsanti (o contorno 2 px nei campi).
- Ordine di tabulazione = ordine visivo. Link "Vai al contenuto".
- Alt dei mockup: descrittivi e brevi ("Schermata Immobili di Geos con elenco annunci e filtri"). Il testo dentro i mockup non è testo reale.
- Controlla il contrasto di ogni coppia testo/fondo nuova (vedi sezione 1).
