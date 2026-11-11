export function deckPreview(color) {
  return `<svg class="deck-preview" viewBox="0 0 640 600" role="img" aria-label="Shematski primjer palube u odabranoj kombinaciji boja" style="--deck-top:${color.preview.top};--deck-bottom:${color.preview.bottom}">
  <defs>
    <linearGradient id="hull" x1="0" x2="1"><stop stop-color="#9aaba8"/><stop offset=".12" stop-color="#edece4"/><stop offset=".5" stop-color="#fffef5"/><stop offset=".9" stop-color="#cfdbd5"/><stop offset="1" stop-color="#748984"/></linearGradient>
    <linearGradient id="glass" x2=".2" y2="1"><stop stop-color="#718f8c"/><stop offset="1" stop-color="#152c2e"/></linearGradient>
    <pattern id="deck-lines" width="31" height="31" patternUnits="userSpaceOnUse"><rect width="31" height="31" class="deck-top"/><path d="M1 0v31" class="deck-groove" stroke-width="3"/><path d="M8 0v31m8-31v31m8-31v31" stroke="#fff" stroke-opacity=".045"/></pattern>
    <pattern id="deck-camo" width="115" height="115" patternUnits="userSpaceOnUse"><image data-camo-image width="115" height="115" href="assets/images/colors/nc-21-texture.webp"/></pattern>
    <filter id="boat-shadow" x="-50%" y="-20%" width="200%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="15" flood-color="#000" flood-opacity=".45"/></filter>
  </defs>
  <g fill="none" stroke="#a6bdb2" stroke-opacity=".1"><path d="M40 150h560M40 300h560M40 450h560M160 40v510M320 40v510M480 40v510"/><ellipse cx="320" cy="300" rx="245" ry="240"/><ellipse cx="320" cy="300" rx="210" ry="205"/></g>
  <g filter="url(#boat-shadow)"><path d="M320 30C230 75 164 177 157 305L150 520Q320 552 490 520L483 305C476 177 410 75 320 30Z" fill="url(#hull)" stroke="#a5b6b1" stroke-width="2"/>
  <g class="deck-panels" fill="url(#deck-lines)" stroke-width="4" stroke-linejoin="round">
    <path d="M320 59C257 95 218 148 196 211Q320 184 444 211C422 148 383 95 320 59Z"/>
    <path d="M193 231l-12 115h35l7-120Z"/><path d="M447 231l12 115h-35l-7-120Z"/>
    <path d="M180 365h45v126h-49Z"/><path d="M460 365h-45v126h49Z"/>
    <path d="M243 380h154v112H243Z"/>
    <path d="M175 508h290v14q-145 18-290 0Z"/>
  </g>
  <path d="M241 225Q320 201 399 225L405 351H235Z" fill="#e0e7de" stroke="#98aaa3" stroke-width="2"/>
  <path d="M249 235Q320 214 391 235L395 278H245Z" fill="url(#glass)" stroke="#859b96" stroke-width="3"/>
  <path d="M320 220v56" stroke="#dfe5de" stroke-width="3"/>
  <rect x="253" y="294" width="43" height="50" rx="9" fill="#faf6e9" stroke="#b2bdb4" stroke-width="2"/>
  <rect x="346" y="294" width="43" height="50" rx="9" fill="#faf6e9" stroke="#b2bdb4" stroke-width="2"/>
  <path d="M250 361h140" stroke="#889d93" stroke-width="5"/>
  <path d="M291 153l29-32 29 32-29 31Z" fill="none" class="deck-groove" stroke-width="2"/>
  <path d="M320 132v41m-20-20h40" class="deck-groove" stroke-width="2"/>
  <rect x="260" y="397" width="120" height="77" rx="4" fill="none" class="deck-groove" stroke-width="2"/>
  <path d="M309 404h22" stroke="#becac1" stroke-width="4"/>
  <path d="M173 214C193 135 247 71 320 25C393 71 447 135 467 214" fill="none" stroke="#dbe6df" stroke-width="3"/>
  </g>
  <g fill="#acbbb2" font-family="Arial,sans-serif" font-size="10" letter-spacing="2"><text x="40" y="65">PRAMAC ↑</text><text x="40" y="565">STUDIO BOJA / CROTEAK</text><text x="600" y="565" text-anchor="end">SHEMATSKI PRIKAZ</text></g></svg>`;
}

export function palettePage({catalog,button,whatsapp,escape}) {
  const first=catalog.colors[0];
  return `<section class="page-intro palette-intro"><div class="wrap"><span class="eyebrow">CroTeak / Studio boja</span><h1>Vaša paluba.<br><em>Vaša kombinacija.</em></h1><div class="palette-intro-row"><p class="lead">Od toplih teak tonova do izraženih kontrasta. Istražite stvarne uzorke i pogledajte kako kombinacija mijenja karakter palube.</p><span class="catalog-count"><strong>24</strong> kataloške kombinacije</span></div></div></section>
  <section class="section palette-section" id="paleta"><div class="wrap palette-layout">
    <div class="palette-selector"><div class="palette-section-title"><h2>Odaberite uzorak.</h2><span data-color-count>24 kombinacije</span></div>
      <div class="palette-filters" hidden data-color-filters role="group" aria-label="Skupine boja"><button type="button" data-color-filter="all" aria-pressed="true">Sve boje</button>${['Topli tonovi','Sivi i tamni tonovi','Akcentne boje','Kamuflaža'].map(x=>`<button type="button" data-color-filter="${x}" aria-pressed="false">${x}</button>`).join('')}</div>
      <fieldset class="swatch-grid"><legend class="sr-only">Kombinacije EVA boja</legend>${catalog.colors.map((c,i)=>`<label class="swatch" data-color-family="${c.family}"><input type="radio" name="eva-color" value="${c.code}" ${i===0?'checked':''}><span class="swatch-face"><img src="${c.image}" width="${c.width}" height="${c.height}" alt="Stvarni uzorak ${c.code}: ${escape(c.name)}" loading="lazy"><span class="swatch-code">${c.code}</span><span class="swatch-name">${escape(c.label)}</span><span class="swatch-original">${escape(c.name)}</span></span></label>`).join('')}</fieldset>
      <p class="palette-source">Fotografirani fizički uzorci, povezani s originalnim šiframa kataloga. <a href="assets/images/colors/izvorni-katalog.webp" target="_blank" rel="noopener">Otvori izvorni katalog ↗</a> <a href="assets/images/colors/stvarni-uzorci.webp" target="_blank" rel="noopener">Svi fizički uzorci ↗</a></p>
    </div>
    <aside class="palette-preview" id="pregled-boje" aria-label="Pregled odabrane kombinacije"><div class="preview-topline"><span>Pregled na palubi</span><span class="preview-code" data-selected-code>NC-1</span></div>${deckPreview(first)}
      <div class="selected-color"><div class="selected-heading" role="status" aria-live="polite" aria-atomic="true"><span class="eyebrow" data-selected-label>${first.label}</span><h2 data-selected-name>${first.name}</h2></div>
      <dl class="color-layers"><div><dt>Gornji sloj</dt><dd data-layer-top>${first.top}</dd></div><div><dt>Donji sloj / linije</dt><dd data-layer-bottom>${first.bottom}</dd></div></dl>
      <p class="color-availability" data-availability>${catalog.availabilityNote}</p>
      <a class="button palette-quote" data-color-quote href="${whatsapp}">Zatražite ponudu za <span data-quote-code>NC-1</span> ↗</a>
      <p class="preview-disclaimer">${catalog.previewNote}</p></div>
    </aside>
  </div><a class="mobile-preview-link" href="#pregled-boje" data-mobile-preview hidden>Pogledajte odabir <strong data-mobile-code>NC-1</strong> ↑</a><noscript><p class="wrap scope-note">Svi uzorci su prikazani. Za promjenu boje u shematskom prikazu uključite JavaScript ili nam pošaljite šifru odabranog uzorka.</p></noscript></section>
  <section class="section palette-bottom"><div class="wrap split"><div><span class="eyebrow">Dva sloja. Jedan prepoznatljiv izgled.</span><h2>Boja daje ton.<br><em>Detalji daju karakter.</em></h2></div><div><p>Gornji sloj čini površinu obloge. CNC obradom otkriva se donji sloj koji oblikuje linije, obrube i gravure. Prikazane su kombinacije iz dostavljenog kataloga; druge kombinacije provjeravamo pojedinačno.</p><p>Za kamuflažne uzorke katalog ne navodi zasebnu boju donjeg sloja. Tu pojedinost potvrđujemo prije izrade.</p>${button('Dogovorite odabir materijala',whatsapp)}</div></div></section>
  <script type="application/json" id="color-data">${JSON.stringify(catalog).replace(/</g,'\\u003c')}</script><script src="assets/js/palette.js" defer></script>`;
}

export function paletteTeaser({catalog,link}) {
  return `<section class="section palette-teaser" id="boje"><div class="wrap"><div class="section-heading"><div><span class="eyebrow">Studio boja / 24 kataloške kombinacije</span><h2>Karakter palube<br><em>počinje bojom.</em></h2></div>${link('Istražite paletu boja','paleta-boja.html')}</div><div class="teaser-swatches">${[0,2,6,10,12,20].map(i=>{const c=catalog.colors[i];return `<a href="paleta-boja.html?boja=${c.code}" aria-label="Pogledajte ${c.code}, ${c.name}"><img src="${c.image}" alt="Stvarni uzorak ${c.name}" width="${c.width}" height="${c.height}" loading="lazy"><span>${c.code}</span><strong>${c.label}</strong></a>`}).join('')}</div><p class="palette-source">Stvarni uzorci. Originalne šifre. Interaktivni pregled na shematskoj palubi.</p></div></section>`;
}
