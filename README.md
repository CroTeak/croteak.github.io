# CroTeak

Statična web stranica za GitHub Pages. HTML, CSS i JavaScript bez vanjskih biblioteka, baze podataka ili paketa potrebnih za posluživanje.

## Uređivanje i generiranje

- `scripts/build.mjs`: zajednički predlošci, sadržaj stranica, navigacija, SEO i WhatsApp odredište.
- `assets/css/site.css`: responzivni dizajn i stilovi.
- `assets/js/site.js`: mobilni izbornik, filteri i pristupačna galerija s tipkovnicom.
- `data/projects.json`: projekti i fotografije, uključujući opise i odabranu naslovnu fotografiju.
- `data/images.json`: zajedničke fotografije i prikazi dizajna.
- `data/pricing.json`: okvirne cijene po duljini plovila i napomena o prilagodbi ponude. Kod izmjena cijena treba uskladiti i infografiku `assets/images/okvirne-cijene-v1.webp`.

Nakon izmjene sadržaja ili podataka pokrenuti `node scripts/build.mjs` iz korijena repozitorija. Generirane HTML stranice i sitemap spremiti zajedno s izvorima. GitHub Pages poslužuje spremne datoteke; na hostingu nije potreban Node.js.

## Novi projekt

1. Fotografije optimizirati u WebP u `assets/images/<slug>/`. Zadržati omjer stranica, pripremiti manju verziju širine do 640 px i veću širine do 1600 px. Ne povećavati manje originale.
2. Dodati zapis u `data/projects.json`: `slug`, `title`, `subtitle`, `description`, `tone` (`teak` ili `sivi`), `cover` (indeks od 0) i `photos`.
3. Za svaku fotografiju navesti `src`, `small`, `width`, `height`, `smallWidth`, smisleni `alt` i naziv izvora u `source`.
4. Pokrenuti generator i provjeriti album na mobitelu i računalu. Fotografije nisu označene prije/poslije ako za to nema potvrde.

Galerije rade i bez JavaScripta: fotografije se tada otvaraju kao poveznice. S JavaScriptom se otvara modalni pregled sa strelicama, Escape zatvaranjem, povratkom fokusa i pomicanjem dodirom. Video na Proliner stranici ima korisničke kontrole i ne pokreće se automatski.

## Sačuvani sadržaj

Izvorne fotografije, CAD slike, logotipi, Google verifikacija i `info-cjenik.html` ostaju u repozitoriju. Cjenik se ne nalazi ni u jednom novom izborniku ni u sitemapu. Stara adresa `prodim-proliner.html` i dalje preusmjerava na `proliner.html`.

Izvorna galerija (Merry Fisher 625 i Gobby Fisherman) sačuvana je u cijelosti i dopunjena novim projektima. Aktualni albumi i fotografije nalaze se u `data/projects.json`. Dvije različite izvedbe Merry Fishera 625 prikazane su u zasebnim albumima. Originalne datoteke nisu prepisane optimiziranim verzijama.

Tehničke vrijednosti EVA materijala prenesene su iz prijašnje stranice. Nije dodan novi certifikat ni jamstvo. Izostavljena je prijašnja izravna pretvorba 3000 sati UV testa u tvrdnju o 5–7 godina trajanja, jer ta veza nije potkrijepljena ispitnim izvještajem. Svojstva konkretne varijante treba potvrditi prije narudžbe.

Glavni kontaktni pozivi otvaraju WhatsApp na `+385 99 411 9579`. E-mail je prikazan kao poslovna informacija.

Na početnoj stranici, nakon izdvojenih projekata, nalazi se sekcija `#okvirne-cijene`. Viši iznosi raspona prikazani su u zagradama. Na većim ekranima prikazuje se generirana infografika s ilustrativnim plovilima; na mobitelima čitljiva HTML tablica s istim podacima i poveznicom na sliku. Ispod je objašnjeno da je iznose moguće prilagoditi stvarnom opsegu projekta. Ilustrativna plovila nisu predstavljena kao završeni CroTeak radovi. Izvorni `info-cjenik.html` ostaje sačuvan i skriven iz izbornika.
