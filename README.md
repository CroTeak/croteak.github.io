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

Na početnoj stranici, nakon izdvojenih projekata, nalazi se sekcija `#okvirne-cijene`. Viši iznosi raspona prikazani su u zagradama. Na većim ekranima prikazuje se generirana infografika s ilustrativnim plovilima; na mobitelima pet čitljivih kartica s ilustracijama brodova i istim cijenama te poveznicom na cijelu sliku. Ispod je objašnjeno da je iznose moguće prilagoditi stvarnom opsegu projekta. Ilustrativna plovila nisu predstavljena kao završeni CroTeak radovi. Izvorni `info-cjenik.html` ostaje sačuvan i skriven iz izbornika.

## Studio boja, proces i šablone

- `data/colors.json` sadrži 24 kombinacije NC-1 do NC-24 iz vlasnikovog kataloga i fotografije fizičkih uzoraka. `name` čuva kataloški naziv, `label` hrvatski opis, `top`/`bottom` slojeve. Izvorne slike su u `assets/images/colors/`.
- `availability: null` znači da stanje nije potvrđeno. `available` ili `unavailable` smije se postaviti samo nakon potvrde vlasnika/dobavljača; uz promjenu zabilježiti datum i izvor potvrde. Trenutačno nijedna kombinacija nema potvrđeno stanje zaliha.
- `preview.top` i `preview.bottom` su približne nijanse uzete iz fotografije, samo za SVG prikaz. Kamuflaža koristi izrez stvarne teksture. Za NC-21 do NC-24 katalog ne navodi donji sloj, pa `bottom` ostaje `null`. Ne zaključivati slojeve ni raspoloživost samo iz slike.
- Nova boja dodaje se kao novi zapis s jedinstvenom originalnom šifrom, fotografijom i provjerenim nazivom. Paleta, filtri, odabir i WhatsApp upit generiraju se iz istih podataka. Poveznica `paleta-boja.html?boja=NC-13` unaprijed odabire uzorak. Prikaz palube je jasno označen kao shematska ilustracija.
- `data/process.json` definira četiri koraka. Fotografije referenciraju `data/images.json` ili stvarni projekt; video je postojeća snimka CNC obrade. Interakcija je ručna, video se ne pokreće automatski i zaustavlja se pri promjeni koraka. Fotografija gotove obloge nije označena kao fotografija samog postupka montaže.
- `data/templates.json` sadrži pet koraka vodiča i kontrolnu listu. `steps[].image` može biti `null` ili slika u standardnom obliku (`src`, `small`, `width`, `height`, `smallWidth`, `alt`, opcionalni `caption`). `video` može biti `null` ili `{ "src": "assets/media/upute.mp4" }`. Foto/video upute zasad nisu dostavljene i to je izričito navedeno na stranici.
- `data/material.json` čuva prodajni tekst i deklarirane podatke. Podlogu s 3M 9775WL potvrdio je vlasnik. Nije dostavljen ispitni izvještaj koji bi opravdao novu tvrdnju o certifikatu ili jamstvu trajnosti.
- Novi predlošci su izdvojeni u `scripts/components/`, a ponašanje u `assets/js/palette.js` i `assets/js/experience.js`. Bez vanjskih biblioteka. Uvažava se `prefers-reduced-motion`; navigacija, galerijske poveznice i tekstovi imaju osnovni prikaz bez JavaScripta.

Opće smjernice za fizičke šablone provjerene su prema [SeaDek kontrolnoj listi](https://www.seadek.com/wp-content/uploads/2023/09/4-012-Customer-Template-Checklist.pdf) i [SurfDek vodiču](https://www.surfdek.co.uk/wp-content/uploads/2023/09/surfdek_marine_templating_guide.pdf). To nisu CroTeak fotografije, certifikati ni dokazi o porijeklu materijala. Vodič traži dogovor s CroTeakom o materijalu, zazorima i slanju; nije propisana neprovjerena univerzalna tolerancija.

## Arvor i buduće usporedbe prije/poslije

Arvor 215 AS uključuje sedam fotografija gotovih obloga i detalja izrade, tri potvrđene fotografije prije te originalni digitalni dizajn. Slična dodatna fotografija gole palube nije ponovljena u galeriji gotovih radova. Cijena od **1.150 € bez postavljanja** odnosi se samo na prikazani projekt, prema potvrdi vlasnika.

Opcionalna polja projekta:

- `featured: true` izdvaja projekt na početak galerije i početne stranice, bez premještanja izvornog popisa.
- `before`: niz izvornih fotografija u standardnom obliku.
- `comparisons`: niz `{ "title": "Kokpit", "before": 0, "after": 0 }`, s indeksima fotografija u `before` i `photos`. Samo potvrđeni parovi istog plovila. Prikaz je usporedan jer fotografije nisu snimljene iz potpuno jednakog kuta.
- `design`: originalni nacrt u standardnom obliku slike.
- `price`: `{ "amount": 1150, "currency": "EUR", "installationIncluded": false, "note": "Opseg i ograničenja primjera." }`.

Opcionalno polje `story` sadrži potvrđeni opis konkretne izvedbe; ako nije navedeno, koristi se opći opis postupka bez tvrdnji o posebnim motivima i površinama. Stari projekti bez potvrđenih fotografija prije nemaju umjetno stvorenu usporedbu.


## Mobilni prikaz i ispravnost nijansi

- `assets/css/mobile.css` sadrži dorade za uske ekrane: brzi odabir uzoraka uz palubu, veće uzorke i dodirne kontrole, prikaz cijelih projektnih fotografija, mobilnu galeriju, navigaciju i čitljivije tekstove. Shema označavanja u vodiču može se zasebno pomicati bez širenja stranice.
- `data/pricing.json` uz svaki raspon ima `imageRegion` — pravokutnik ilustracije broda u postojećoj infografici. Mobilne SVG kartice koriste istu postojeću sliku; ne preuzimaju pet novih datoteka. Cijene i napomena generiraju se iz zajedničkih podataka.
- `preview.bottomSample` bilježi provjerenu regiju stvarnog uzorka za NC-1, NC-5 i NC-14. Uzorkovati točno crtu donjeg sloja, a ne površinu neposredno pokraj nje. Crna i bijela linija moraju odgovarati kataloškom nazivu. NC-20 ostaje prirodno slabo kontrastna kombinacija antracita i crne.
- Uzdužne linije nacrtane su neprekinutim SVG trakama, s diskretnim osvjetljenjem ruba. Time se izbjegavaju prekidi i poprečni spojevi ponavljanog uzorka. Materijalni uzorci i izvorne šifre nisu promijenjeni.
- Generator dodaje sadržajnu verziju CSS i JS poveznicama (`?v=...`) kako bi se nakon objave preuzeli aktualni stilovi i kontrole. Ne mijenjati generirane HTML datoteke ručno.
