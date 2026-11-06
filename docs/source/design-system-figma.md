6. Design system essenziale


Palette ($palette)
Gruppo	Token	Hex
Primary	darker / dark / medium / light / lighter	
#133051 / 
#283b5b / 
#394766 / 
#4b5573 / 
#5e6580
Secondary	darker / medium	
#5897df / 
#78abe4
Tertiary	darker / medium / light / lighter	
#cde8f1 / 
#deeff5 / 
#e7f2f7 / 
#eff6f8
Bianco / nero	white / black	
#fafafa / 
#0e0e0e
Grigi	50 / 100 / 300 / 400 / 700 / 800 / 950	
#f2f2f2 / 
#e6e6e6 / 
#b3b3b3 / 
#999999 / 
#4d4d4d / 
#333333 / 
#121212
Promossi (voluti dal designer)	sky-100 / azure-300 / mist-100	
#deedff / 
#5d9ee9 / 
#f1f5fa
Trasparenze	white-10, white-20, black-10, black-20, primary-darker-90, overlay-20	vedi UI.md

Il bianco del sito è 
#fafafa, non #fff. 
#131927 e 
#343330 esistono nel Figma ma non sono usati dalle sezioni: fuori palette. I nomi dei token promossi sono proposte di Claude Code, approvate come provvisorie.

Gradienti ($gradients)
inverse-blue: to left, #5897df, #133051
blue: to left, #133051, #5897df
sky-blue: to bottom, #deedff 0%, #fafafa 53.38%
light-blue (footer): to bottom, #5897df 0%, #fafafa 70.673%
dark: to right, #133051 34.615%, #0e0e0e
gradiente del wordmark: to left, #133051, #5d9ee9
Tipografia

Cabinet Grotesk (titoli): huge 96/120, h1 82/68, h2 56/52, h3 32/32, h4 24/24, button 20 Bold. DM Sans (testo): body-huge 24/34, lg 18/26, md 16/20 (bold 16/22), sm 14/20, label-lg 14/16, label-md 12/14. Extra: title-huge-tight (96/96, footer), tab-title (Cabinet Grotesk 400, 24/32,2, solo desktop). I valori mobile e le classi geo-* (17) sono in _typography.scss e UI.md; body-md-regular mobile è 14/18. H1 e H2 desktop (82/68 e 56/52) hanno line-height minore del font-size: da verificare a vista sulla hero. geo-button-text è la classe tipografica dei bottoni (rinominata da geo-button).

Altro
Spacing (px, dopo arrotondamento): 4, 8, 12, 16, 20, 24, 32, 48, 64 con alias per i nomi Figma (sm = md = 12, lg = xl = 16).
Raggi: radius-12 (CTA navbar), 20, 24, 28, 32, 36, 40.
Ombre: 6 token shadow-* (nessuna usata dall'Header).
Gutter 20; altri gap: 12 (card mobile), 36 (footer), 18 (form).