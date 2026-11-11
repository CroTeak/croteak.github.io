/* Data-driven catalogue: no inferred stock and no arbitrary layer combinations. */
(() => {
  const source = document.querySelector('#color-data');
  if (!source) return;
  const catalog = JSON.parse(source.textContent);
  const colors = new Map(catalog.colors.map(color => [color.code, color]));
  const svg = document.querySelector('.deck-preview');
  const radios = [...document.querySelectorAll('input[name="eva-color"]')];
  const setText = (selector, value) => { document.querySelector(selector).textContent = value; };
  function select(code, updateAddress = true) {
    const color = colors.get(code);
    if (!color) return;
    radios.forEach(radio => { radio.checked = radio.value === code; });
    document.querySelectorAll('[data-quick-code]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.quickCode === code)));
    svg.style.setProperty('--deck-top', color.preview.top);
    svg.style.setProperty('--deck-bottom', color.preview.bottom);
    svg.querySelector('.deck-panels').setAttribute('fill', color.preview.texture ? 'url(#deck-camo)' : 'url(#deck-lines)');
    if (color.preview.texture) svg.querySelector('[data-camo-image]').setAttribute('href', color.preview.texture);
    svg.setAttribute('aria-label', `Shematska paluba: ${color.code}, ${color.label}. Nijanse su približne.`);
    setText('[data-selected-code]',code); setText('[data-selected-label]',color.label); setText('[data-selected-name]',color.name);
    setText('[data-layer-top]',color.top); setText('[data-layer-bottom]',color.bottom || 'Potvrđujemo pri upitu');
    setText('[data-quote-code]',code);
    setText('[data-mobile-code]',code);
    const state = color.availability;
    setText('[data-availability]',state === 'available' ? 'Potvrđeno dostupna kombinacija. Rok izrade dogovaramo pri upitu.' : state === 'unavailable' ? 'Trenutačno nedostupna kombinacija. Javite nam se za alternativu.' : catalog.availabilityNote);
    document.querySelector('[data-color-quote]').href = 'https://wa.me/385994119579?text=' + encodeURIComponent(`Pozdrav, zanima me ponuda za EVA oblogu u kombinaciji ${color.code} — ${color.name}. Model mog plovila je: `);
    if (updateAddress) { const url = new URL(location.href); url.searchParams.set('boja',code); history.replaceState(null,'',url); }
  }
  radios.forEach(radio => radio.addEventListener('change', () => select(radio.value)));
  const quickColors = document.querySelector('[data-quick-colors]');
  quickColors.hidden = false;
  quickColors.addEventListener('click', event => {
    const button = event.target.closest('[data-quick-code]');
    if (!button) return;
    // Keep the full catalogue consistent if the quick selection is outside its filter.
    const radio = radios.find(input => input.value === button.dataset.quickCode);
    if (radio.closest('label').hidden) document.querySelector('[data-color-filter="all"]').click();
    select(button.dataset.quickCode);
  });
  const filters = document.querySelector('[data-color-filters]');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-color-filter]'); if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const labels = [...document.querySelectorAll('[data-color-family]')];
    labels.forEach(label => { label.hidden = button.dataset.colorFilter !== 'all' && label.dataset.colorFamily !== button.dataset.colorFilter; });
    const visible = labels.filter(label => !label.hidden);
    setText('[data-color-count]', `Prikazano: ${visible.length} / ${colors.size}`);
    const checked = radios.find(radio => radio.checked);
    if (checked?.closest('label').hidden && visible.length) select(visible[0].querySelector('input').value);
  });
  function readAddress() { select(colors.has(new URL(location.href).searchParams.get('boja')) ? new URL(location.href).searchParams.get('boja') : catalog.colors[0].code,false); }
  readAddress(); window.addEventListener('popstate',readAddress);
  if ('IntersectionObserver' in window) {
    const preview = document.querySelector('.palette-preview');
    const selector = document.querySelector('.palette-selector');
    const seen = new Map();
    // One observer keeps both region states in sync through the same callback.
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => seen.set(entry.target,entry.isIntersecting));
      document.querySelector('[data-mobile-preview]').hidden = !seen.get(selector) || seen.get(preview);
      document.body.classList.toggle('palette-preview-visible',Boolean(seen.get(preview)));
    },{rootMargin:'-80px 0px 0px 0px'});
    observer.observe(preview); observer.observe(selector);
  }
})();
