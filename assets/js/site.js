/* Progressive enhancement: navigation, filters and native dialog gallery. */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
function closeMenu(restoreFocus = false) {
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Otvori izbornik');
  if (restoreFocus) toggle?.focus();
}
toggle?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Zatvori izbornik' : 'Otvori izbornik');
});
nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
matchMedia('(min-width:901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
const filters = document.querySelector('[data-filters]');
if (filters) {
  filters.hidden = false;
  const cards = [...document.querySelectorAll('[data-tone]')];
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.tone !== button.dataset.filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('[data-result-count]').textContent = `Prikazano projekata: ${count}`;
  });
}
const dialog = document.querySelector('.lightbox');
if (dialog && typeof dialog.showModal === 'function') {
  const links = [...document.querySelectorAll('[data-gallery]')];
  const photo = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('[data-caption]');
  const count = dialog.querySelector('[data-photo-count]');
  const original = dialog.querySelector('[data-original]');
  const prev = dialog.querySelector('[data-prev]');
  const next = dialog.querySelector('[data-next]');
  let current = 0;
  let opener;
  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    photo.src = link.href;
    photo.alt = link.querySelector('img').alt;
    caption.textContent = photo.alt;
    count.textContent = `${current + 1} / ${links.length}`;
    original.href = link.href;
    prev.disabled = next.disabled = links.length < 2;
  }
  links.forEach((link,index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();opener = link;show(index);dialog.showModal();document.body.classList.add('locked');
  }));
  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.classList.remove('locked');opener?.focus(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) {const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();} });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {event.preventDefault();show(current - 1);}
    if (event.key === 'ArrowRight') {event.preventDefault();show(current + 1);}
  });
  let touchStart;
  photo.addEventListener('touchstart',event=>{touchStart=event.changedTouches[0].clientX;},{passive:true});
  photo.addEventListener('touchend',event=>{if(touchStart===undefined)return;const delta=event.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>55)show(current+(delta<0?1:-1));touchStart=undefined;},{passive:true});
}
