# Punti aperti

Aggiorna questa lista mentre lavori: aggiungi le voci nuove e spunta quelle chiuse. Nel codice, ogni punto è marcato `TODO(geos):`.

## Asset da ricevere
- [ ] Logo geos → `src/assets/logo/geos-logo.svg`
- [ ] Loghi portali → `src/assets/logo/portali/immobiliare-it.svg`, `wikicasa.svg`, `idealista.svg`
- [ ] Export Sito vetrina → `src/assets/img/suite-sito-vetrina.webp`
- [ ] Export Conversazioni → `src/assets/img/suite-conversazioni.webp`
- [ ] Simbolo grande footer → `src/assets/img/footer-simbolo.svg`
- [ ] Versioni mobile delle immagini (tranne hero e form, che hanno 2x)

## Contatti e legale
- [ ] Destinatario/canale del form (`DEMO_FORM_WEBHOOK_URL`, `DEMO_FORM_RECIPIENT`)
- [ ] Numero/URL WhatsApp (`PUBLIC_WHATSAPP_URL`)
- [ ] Destinazione dei link Contatti, Privacy Policy, Termini di Servizio
- [ ] Consenso privacy nel form (proposta: checkbox obbligatoria)
- [ ] Dominio, hosting/adapter, analytics, cookie banner, lingue

## Prezzi
- [ ] Tabella reale prezzi Agenzia (confermato solo: 25 utenti = 180€)
- [ ] Conferma regola Team (10€ per utente, 3–10 utenti)
- [ ] Testo e posizione della nota "*" su "Attivazione 100€"
- [ ] Claim di marketing verificabili dal cliente (+99%, #1 dal 2025, +80%, 40 ore)

## Form
- [ ] Testi e aspetto degli stati di invio (in corso, successo, errore)
- [ ] Valore iniziale e minimo di "Dimensione Azienda" (proposta: 1 / 1)

## Design system
- [ ] `UI.md`: valori tipografici mobile, trasparenze, 6 ombre
- [ ] Token errore (rosso dei campi)
- [ ] Gradiente verticale `dark-vertical` (sezione Suite)
- [ ] Line-height H1/H2 (< font-size): verifica a vista
- [ ] Contrasto bianco su `#5897df` (≈ 2,9:1) per i testi piccoli
- [ ] Larghezza massima oltre 1920 px
- [ ] Layout tablet (768–1023): non progettato
- [ ] Swipe nel carosello mobile (proposta: attivo)

## Passo 1 (setup) — voci aggiunte
- [ ] Valori tipografici mobile: stimati dal frame 375 (hero ≈ 44/46), in `src/styles/tokens.css`; verificare a vista
- [ ] Peso dei titoli Cabinet Grotesk: impostato 400 (stimato dai frame); confermare
- [ ] Trasparenze, 6 ombre, `--color-error` (`#b42318`): valori provvisori in `tokens.css`
- [ ] `blue` / `inverse-blue`: la descrizione dei pulsanti con icona contraddice la tabella dei gradienti; verificare quale combacia
- [ ] `--nav-offset` (6rem) provvisorio, da misurare con la navbar reale
- [ ] Layout 768–1023 e offset container-8 a 1024–1439: da validare a vista
- [ ] Alias spaziatura `--space-*` non collegato alle utility Tailwind (`p-*`, `gap-*`): usare `p-[var(--space-16)]` o decidere un mapping
- [x] Asset trovati in `src/assets` (non sono più mancanti): logo, loghi portali (anche versioni mobile), `suite-conversazioni.webp`, simbolo footer (in `logo/`, non `img/`). `suite-sito-vetrina (2).webp` ha un nome da normalizzare

## Passo 2 (componenti) — voci aggiunte
- [ ] Pulsante con icona gradiente: nel frame è scuro a sinistra → blu a destra, cioè il token `inverse-blue` (non `blue` come scritto in design-system.md). Uso `inverse-blue`; confermare
- [ ] Effetto goccia: implementato con filtro SVG "goo" (`#geos-goo` in Base.astro) e spostamento ≈ 1,08 × altezza, blur 4 e soglia 20/-9 nel filtro; collo e raggi da confrontare con il Figma. La goccia sporge dal pulsante: lasciare spazio a destra nei layout
- [ ] Colori di disabled, di AvatarStack e di hover di SelectPill/Stepper: stimati, provvisori
- [ ] Stati hover/pressed/focus nella galleria sono reali (non forzati): si provano con mouse e tastiera
- [ ] Altezza pulsanti: 44 px mobile, 48 px desktop (il design mobile è più piccolo ma 44 è il minimo touch)
- [ ] Non ancora fatti (fuori dal passo 2): Tabs, Accordion, Marquee, ScrollRow, Carousel

## Passo 3 (layout) — voci aggiunte
- [ ] Navbar: sfondo `white` con `shadow-2` provvisoria (il pill sul bianco della pagina altrimenti non si distingue); padding e raggio (24) stimati dal frame
- [ ] `--nav-offset` (6rem) ancora provvisorio: la navbar è alta ≈ 4,5rem + 0,75rem di margine
- [ ] Footer: la card è a 12 colonne senza fill, il simbolo sta nelle colonne 8–9 della card (non copre mai i link); padding stimato dal frame 1920; "Contatti", "Privacy Policy", "Termini di Servizio" sono testo semplice finché non hanno una destinazione
- [ ] Menu mobile senza JS: non apribile (progressive enhancement non previsto)
- [ ] La home `/` ha sezioni segnaposto (hero, come-funziona, suite, piani, demo) solo per provare ancore e scroll: da sostituire nel passo 4
- [ ] CTA finale + wrapper `closing` (gradiente, angoli 40, margine negativo) fatti; bordo del riquadro, padding e titolo mobile (36px) stimati dal frame; il margine negativo si vedrà bene quando ci sarà il form scuro sopra

## Passo 4 (sezioni) — voci aggiunte
- [ ] Form: solo interfaccia. Invio (`/api/demo`, non esiste), validazione, stati di invio e anti-spam (honeypot + Turnstile) sono il passo 5. Il consenso privacy resta una proposta non confermata, non inserita
- [ ] Contrasto (bianco su `#5897df` ≈ 2,9:1): segnalato su banner "Prezzi chiari" (testo piccolo bianco, come nel design), linguetta "Più popolare" su desktop, card "#1 dal 2025" (testo piccolo sulla parte azzurra del gradiente). Anche il testo piccolo del banner "Testato sul campo" è bianco, come richiesto (≈ 2,9:1)
- [ ] Immagini Suite: nel frame la card Agenda usa l'anteprima del sito (`suite-sito-vetrina.webp`) e la card Sito vetrina la barra con avatar MR (`suite-brand.webp`): ho seguito il frame. `suite-agenda.webp` non esiste
- [ ] Carosello: immagini associate per ordine (carousel-01…06); swipe mobile attivo con flag `ENABLE_SWIPE` in `src/scripts/carousel.ts`
- [ ] Colori provvisori nuovi: `--color-overlay-photo`, `--color-glass` (Come funziona), card `mist` (Agenti indipendenti), card `suite`
- [ ] Hero: overlay solo `overlay-20`, `object-position` mobile 85% stimato; navbar posizionata a margine + 12 dal bordo (il frame desktop la mostra a ≈ 27 px dentro la hero)
- [ ] Piani: link WhatsApp non reso finché manca `PUBLIC_WHATSAPP_URL` (warning in build); nota dell'asterisco sotto le card, posizione provvisoria
- [ ] Layout 768–1023 (nessun design): mobile con margini 32; da validare a vista

## Ritocchi successivi — voci aggiunte
- [ ] WhatsApp nei piani: in sviluppo il pulsante si vede ma non è un link (segnaposto); in produzione non viene reso finché manca `PUBLIC_WHATSAPP_URL`
- [ ] Nota "* Costo una tantum…" rimossa su richiesta; resta l'asterisco accanto a "Attivazione 100€": decidere se tenerlo
- [ ] Pannello testo di "Come funziona" ora pieno (`primary-dark`), senza vetro/blur (il CLAUDE.md prevedeva `backdrop-filter`: scelta del cliente)
- [ ] CTA finale: padding superiore 32 (desktop) / 20 (mobile) sulla sezione `final-cta`, raggio del riquadro e del contenitore a gradiente esterno 40 / 32
