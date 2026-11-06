# Geos — sito marketing (landing page one-page)

Contesto per Claude Code. Leggi questo file per intero prima di scrivere codice, poi i due documenti collegati:

- `docs/design-system.md` — token, tipografia, griglia, componenti, stati, motion, accessibilità
- `docs/sections.md` — specifiche di ogni sezione (layout desktop/mobile, interazioni, copy definitivo, asset)
- `docs/design/` — PNG di layout desktop (frame 1920) e mobile (frame 375), uno per sezione, nominati per sezione (vedi `docs/design/README.md`): sono la fonte di verità visiva
- `docs/OPEN.md` — checklist dei punti aperti e degli asset mancanti
- `docs/source/` — documenti originali di Figma, solo riferimento (i testi corretti sono in `docs/sections.md`)

## 1. Progetto

**Geos** vende un gestionale per agenti immobiliari (agenti singoli e agenzie strutturate): immobili, clienti, agenda, incroci domanda/offerta, pubblicazione sui portali, sito vetrina, messaggi.

Il sito è una **landing page one-page in italiano**. Ha un solo obiettivo: portare alla **richiesta di una demo** (form di contatto in fondo alla pagina). Ogni pulsante "Richiedi una demo" è un'ancora verso il form.

Tono del copy: professionale, diretto, concreto, dai del "tu". Il copy è già definitivo (vedi `docs/sections.md`): non riscriverlo e non inventarne di nuovo.

## 2. Requisiti non negoziabili

1. **Responsive**, mobile-first. Design forniti solo a 375 e 1920: tutto ciò che sta in mezzo è fluido.
2. **Performante**: obiettivo Lighthouse mobile ≥ 95 su Performance, Accessibility, Best Practices, SEO. LCP < 2,5 s, CLS < 0,1, INP < 200 ms. JavaScript di pagina < 30 KB gzip (esclusi gli script di terze parti caricati su richiesta).
3. **Approccio design system**: nessun colore, font-size, spaziatura, raggio, ombra o durata hardcoded nei componenti. Si usano solo i token di `src/styles/tokens.css`. Se un valore serve e non c'è un token, **crealo** (e documentalo in `docs/design-system.md`), non scrivere il valore a mano.
4. **Accessibile**: WCAG 2.1 AA. Focus visibile ovunque, navigazione da tastiera completa, `prefers-reduced-motion` rispettato.
5. **Non inventare contatti o dati.** Nel progetto non esistono email, numeri di telefono, numero WhatsApp, indirizzi, pagine legali, dominio. Dove servono, usa variabili d'ambiente o un segnaposto marcato `TODO(geos):` (vedi §9). Mai valori plausibili ma finti.

## 3. Stack (scelte fatte)

- **Astro** + **TypeScript** (strict). Output statico; un solo endpoint serverless per il form.
- **Tailwind CSS v4** con i token in CSS custom properties dichiarate in `@theme`. Le classi tipografiche semantiche (`geo-*`) sono definite in `src/styles/typography.css` come utility/component layer. Se nel repo esiste già una base SCSS (`_typography.scss`), **riusa quei nomi di classe** e non duplicare.
- **JavaScript minimo**: niente framework UI. Le parti interattive (navbar, marquee, carosello, tab/accordion, select prezzi, stepper, form) sono piccoli moduli vanilla TS caricati come island Astro (`client:visible` o `client:idle`), non librerie.
- **Immagini**: `astro:assets` (`<Image>`/`<Picture>`) con AVIF/WebP, `srcset`, `sizes`, `width`/`height` espliciti. Le immagini sorgente stanno in `src/assets/img/` (non in `public/`), così Astro le ottimizza. Hero in `loading="eager"` + `fetchpriority="high"`; tutto il resto `loading="lazy"` + `decoding="async"`.
- **Font self-hosted**: Cabinet Grotesk (titoli) e DM Sans (testo), solo **woff2** (converti/sottoinsiemi Latin + accenti italiani se mancano), `font-display: swap`, preload dei due variabili, fallback con `size-adjust` per evitare CLS. **Melodrama NON va caricato** (serve solo al logo, che arriva come SVG).
- **Icone**: SVG in `src/assets/icons/`, inline con `currentColor` (normalizza `fill`/`stroke`). Niente librerie di icone.
- **Hosting/adapter**: da decidere (Vercel o Cloudflare Pages). Scrivi l'endpoint in modo agnostico e non committare adapter finché non è deciso.
- **Anti-spam form**: honeypot + Cloudflare Turnstile (script caricato solo quando il form entra in viewport o riceve focus).
- **Qualità**: ESLint + Prettier, `astro check`, Lighthouse CI con budget, axe in CI (se pratico).

Comandi attesi in `package.json`: `dev`, `build`, `preview`, `check` (astro check + tsc), `lint`, `lighthouse`. Non inventare altri script senza motivo.

## 4. Struttura del repository

```
src/
  assets/
    img/            # sorgenti WebP/SVG (da assets.zip → assets/img)
    icons/          # SVG (da assets.zip → assets/icons)
    fonts/          # woff2 (convertiti)
  components/
    ui/             # Button, Tag, Chip, IconTile, Card, SelectPill, Input, Stepper, AvatarStack, Tabs, Accordion, Marquee, ScrollRow, Carousel
    sections/       # Hero, ForWhom, Numbers, Features, HowItWorks, Suite, Plans, DemoForm, FinalCta
    layout/         # Navbar, Footer, Container, Section
  content/          # copy e dati (it): copy.it.ts, plans.ts, features.ts, tabs.ts
  scripts/          # moduli TS interattivi
  styles/           # tokens.css, typography.css, global.css
  pages/
    index.astro
    design-system.astro   # galleria di token e componenti, noindex, non linkata
    api/demo.ts           # endpoint form (TODO destinazione)
public/
  favicon.svg
docs/               # questi documenti + design/ (PNG dei layout)
```

Tutto il copy e i dati (prezzi, card, tab) vivono in `src/content/`, non dentro i componenti: il sito è solo italiano per ora, ma deve poter essere tradotto in seguito senza toccare i componenti.

## 5. Regole di design system (riassunto, dettagli in `docs/design-system.md`)

- Il bianco del sito è **`#fafafa`**, mai `#fff`. Il nero è `#0e0e0e`.
- `#131927` e `#343330` esistono nel Figma ma sono **fuori palette**: non usarli.
- Token "promossi" `sky-100`, `azure-300`, `mist-100`: nomi **provvisori**.
- Griglia: desktop 12 colonne, margini 32, gutter 20 (frame 1920); mobile 4 colonne, margini 12, gutter 12 (frame 375). Tre container: a 12 colonne, a 8 colonne (colonne 3-10) e a 10 colonne (colonne 2-11). Vedi sezioni per sapere quale usare.
- Pulsanti e campi: stati completi (default, hover, pressed, focus, disabled; errore per i campi). L'effetto "goccia" sulla freccia solo con `@media (hover: hover)`.
- Titoli in Cabinet Grotesk, testo in DM Sans. Nessun altro font.
- `text-wrap: balance` sui titoli; **niente `<br>` manuali** nei titoli (il design ha a capo diversi tra desktop e mobile).

## 6. Responsive

Mobile-first. Breakpoint (propongo, da validare a vista): `md` 768, `lg` 1024, `xl` 1440.

- `< 768`: layout mobile del design (375).
- `768–1023`: **non c'è un design tablet**. Usa il layout mobile con margini 32 e le righe a scroll orizzontale; le card dei piani possono andare su 2 colonne solo se resta pulito. Segnala a chi ti ha dato il design ciò che non ti convince.
- `≥ 1024`: layout desktop. Tab "Come funziona" al posto dell'accordion da qui in su.
- `1024–1439`: gli offset laterali dei container a 8 colonne vanno ridotti (1 colonna per lato invece di 2), altrimenti la griglia bento delle sezioni 2, 3 e 7 diventa troppo stretta. È una proposta: verifica a vista a 1024, 1280 e 1440.
- `> 1920`: il contenuto resta centrato con `max-width` 1920. (TODO(geos): confermare, non è stato specificato.)
- Tipografia fluida tra 375 e 1920 con `clamp()` partendo dai valori del design system.
- Tocchi: aree cliccabili ≥ 44 px su mobile.

Controlla sempre a **375, 768, 1024, 1440, 1920** prima di considerare finita una sezione.

## 7. Performance — regole operative

- La hero è l'elemento LCP: immagine ottimizzata, `fetchpriority="high"`, precarica il font dei titoli, niente JS prima del paint.
- Nessuna animazione che causi layout (usa `transform`/`opacity`). Tutti i blocchi con immagini o contenuto dinamico riservano lo spazio (aspect-ratio) → CLS ≈ 0.
- `backdrop-filter: blur` è richiesto sulla card di testo di "Come funziona". Usalo con `@supports` e un colore pieno semitrasparente come fallback; evita di sovrapporre più blur nello stesso viewport.
- Marquee dei loghi: solo CSS, in pausa fuori viewport (IntersectionObserver) e con `prefers-reduced-motion`.
- Terze parti: solo Turnstile, caricato su richiesta. Nessun analytics o cookie finché non viene deciso (TODO(geos)).
- Le immagini nei componenti nascosti (es. accordion mobile vs. tab desktop) devono essere `loading="lazy"` così non vengono scaricate.

## 8. Accessibilità e SEO — regole operative

- `<html lang="it">`. Struttura: `header`/`nav`, `main`, `footer`; un solo `h1` (hero), `h2` per le sezioni, `h3` per le card.
- Link "Vai al contenuto" come primo elemento focalizzabile.
- Navbar: `aria-expanded`/`aria-controls` sul menu mobile, `Esc` chiude; non si nasconde mentre è aperto.
- Tab: pattern `tablist/tab/tabpanel` con frecce, Home, End. Accordion: `button` + `aria-expanded` + `aria-controls`.
- Carosello: regione `aria-roledescription="carousel"`, card non attive `inert`, pulsanti con etichette in italiano.
- Elementi decorativi (avatar AM/LG/MR, simbolo grande del footer, SVG white-noise, duplicati del marquee) → `aria-hidden="true"`; mockup → `alt` descrittivo breve.
- Form: label visibili (il placeholder non è una label), errori associati con `aria-describedby`, riepilogo errori annunciato, stato di invio con `aria-live`.
- **Contrasto**: testi piccoli bianchi su `#5897df` hanno contrasto ≈ 2,9:1 (non passa AA per testo normale). Il design lo usa nel banner "Testato sul campo", nel gradiente blu della card "Agenzie strutturate" e nel banner "Prezzi chiari". Per i testi sotto i 24 px usa la parte scura del gradiente o segnala il problema: non cambiare i colori in autonomia.
- SEO: `<title>` e `meta description` (bozza nel file di copy, da validare), Open Graph, `canonical`, `sitemap`, `robots`, JSON-LD (TODO dopo la scelta del dominio). La pagina `/design-system` è `noindex`.

## 9. Punti aperti — `TODO(geos):` (non decidere da solo)

Marca nel codice con un commento `TODO(geos): …`. L'elenco aggiornato dei punti aperti è in `docs/OPEN.md` (esiste già: aggiungi le voci nuove, spunta quelle chiuse).

**Contatti e legale**
- Destinatario e canale del form (email, CRM, webhook): **non esistono**. Endpoint configurabile con `DEMO_FORM_WEBHOOK_URL` (+ `DEMO_FORM_RECIPIENT`). Nessun valore di default.
- Numero/URL WhatsApp: `PUBLIC_WHATSAPP_URL`. Se manca, in build segnala un warning e non rendere un link rotto.
- Link "Contatti", "Privacy Policy", "Termini di Servizio" nel footer: non hanno ancora destinazione.
- Consenso privacy nel form: **proposta** (non nel design): checkbox obbligatoria "Ho letto la Privacy Policy" sotto i campi. In attesa di conferma.
- Dominio, hosting, analytics, cookie banner, lingue aggiuntive: non decisi.

**Form**
- Stati di invio (in corso, successo, errore) non progettati: implementa la versione minima descritta in `docs/sections.md` (§ Form) e segnalala come provvisoria.
- Valore iniziale e minimo del campo "Dimensione Azienda" (proposta: iniziale 1, minimo 1).

**Prezzi**
- Il selettore utenti **cambia prezzo mensile e annuale** (annuale = mensile × 12). La tabella reale non c'è: Team = 10 € per utente (3–10 utenti, default 3) è confermato dal copy; **Agenzia**: l'unico dato certo è 25 utenti = 180 €. Le altre opzioni (30, 40, 50 utenti) sono segnaposto a 7,20 € per utente. Tutto in `src/content/plans.ts` con `TODO(geos)`.
- Nota dell'asterisco su "Attivazione 100€ *": testo provvisorio "* Costo una tantum, da pagare solo all'attivazione." (da validare con Geos) e posizione nella pagina da definire.
- Claim di marketing ("+99%", "#1 dal 2025", "+80%", "40 ore") sono nel design: il cliente deve poterli dimostrare. Non modificarli, ma non rafforzarli.

**Asset mancanti** (usa un placeholder neutro e visibile in sviluppo, mai un finto logo). Quando arrivano, saranno in questi percorsi esatti:
- Logo **geos** (wordmark + simbolo) → `src/assets/logo/geos-logo.svg` — navbar e footer.
- **Loghi dei portali** → `src/assets/logo/portali/immobiliare-it.svg`, `wikicasa.svg`, `idealista.svg` — marquee della hero.
- Export di **Sito vetrina** e **Conversazioni** → `src/assets/img/suite-sito-vetrina.webp`, `src/assets/img/suite-conversazioni.webp` (c'è solo `suite-agenda.webp`).
- **Simbolo geos grande** decorativo → `src/assets/img/footer-simbolo.svg`.
- Versioni mobile delle immagini (tranne hero e form, che hanno 2x): ritaglia con `object-fit`/`object-position` finché non arrivano.

Controlla se il file esiste prima di usare il placeholder: se è già nel percorso, usalo.

**Design system**
- `UI.md` non è disponibile: mancano valori tipografici mobile, trasparenze (`white-10`, `white-20`, `black-10`, `black-20`, `primary-darker-90`, `overlay-20`) e le 6 ombre `shadow-*`. Misura dai PNG e marca i valori come provvisori.
- Token errore (rosso dei campi) da definire; nel frame è un rosso saturo.
- Line-height di H1 (82/68) e H2 (56/52) minore del font-size: verifica a vista sulla hero.

## 10. Come lavorare (ordine consigliato)

1. Setup progetto, token, font, tipografia, container/griglia, pagina `/design-system`.
2. Componenti `ui/` con tutti gli stati (Button con effetto goccia, Tag, Chip, IconTile, Card, SelectPill, Input/Stepper, AvatarStack).
3. Layout: Navbar (hide on scroll, menu mobile), Footer, Section/Container.
4. Sezioni nell'ordine della pagina: Hero → Per chi è pensato → Numeri → Tutto il necessario → Come funziona → Suite → Piani → Form → CTA finale + Footer.
5. Form + endpoint (con Turnstile, honeypot, validazione server).
6. Passata finale: performance (Lighthouse), accessibilità (axe + tastiera), SEO, confronto visivo con i PNG a 375 e 1920.

Dopo ogni sezione: fai uno screenshot a 375 e 1920, confrontalo con i PNG in `docs/design/`, elenca le differenze rimaste. Non dichiarare "finito" una sezione che non hai guardato.

## 11. Cosa NON fare

- Non usare valori hardcoded al posto dei token; non usare `#fff`.
- Non inventare email, telefoni, numeri WhatsApp, indirizzi, URL, nomi di clienti, testimonianze, prezzi.
- Non aggiungere librerie UI/animazione (GSAP, Framer, Swiper, ecc.) senza chiedere.
- Non caricare Melodrama né altri font.
- Non modificare copy, prezzi o claim.
- Non usare `<br>` nei titoli; non nascondere con `display:none` contenuti che servono agli screen reader.
- Non scaricare asset da internet: tutto ciò che serve è in `assets.zip` o è elencato come mancante.
