# Brief imagini — bowenbogdan

## Identitate vizuală (pentru orice imagine nouă)
- **Paletă:** verde pădure profund (`#1C3A30` / `#16271F`), bej cald / bone (`#EDEFE9`), accent miere/chihlimbar (`#BE8A3E`).
- **Mood:** calm, cald, premium, editorial. Lumină naturală blândă, plante, in/textil moale, lemn. Genul „spa de lux / editorial wellness".
- **Tratament:** culori naturale calde (NU alb-negru). Fără text, fără logo-uri, fără watermark.
- Imaginile noi stau lângă camere de tratament + naturi statice deja generate, în aceeași paletă — consistența contează.

## CHEATSHEET — toate sloturile de poze

Total: **6 sloturi distincte de poză** (+ diploma = gata, + OG = auto-generat). Doar **1 e gol** acum (portretul). Restul sunt deja umplute cu imagini generate care arată bine — pot fi înlocuite opțional cu poze reale.

| # | Slot | Apare pe | Fișier (în `public/images/`) | Acum | Raport | Pixeli | Prioritate |
|---|---|---|---|---|---|---|---|
| 1 | **Portret Bogdan** | Acasă (Despre) + `/despre` | `bogdan-placeholder.jpg` → `bogdan.jpg` | **GOL** (slot rezervat) | **3:4 vertical** | 1200×1600 | 🔴 **Obligatoriu** |
| 2 | **Hero** (fundal full-bleed, întunecat de overlay) | Acasă (sus) | `hero-v2.jpg` | cameră generată | **3:2 orizontal** | 1800×1200 | 🟡 Opțional (bonus mare dacă e Bogdan/cabinetul real) |
| 3 | **„Ce este Bowen"** | Acasă | `session-v2.jpg` | natură statică generată | **4:5 vertical** | 1200×1500 | 🟢 Opțional |
| 4 | **„Cum se simte" (bento)** | Acasă | `feel-v2.jpg` | natură statică generată | **4:5 vertical** | 1200×1500 | 🟢 Opțional |
| 5 | **Locație Zalău** | Acasă (Locații) + `/contact` | `room-v2.jpg` | cameră generată | **16:10 orizontal** | 1280×800 | 🟢 Opțional (cabinetul real) |
| 6 | **Locație Șimleu** | Acasă (Locații) + `/contact` | — (hartă Google) | hartă reală ✅ | 16:10 | 1280×800 | ⚪ Doar dacă vrei poză în loc de hartă |
| — | **Diplomă** | Acasă (Despre, la click) | `diploma-bowtech.webp` | **reală** ✅ | 3:4 | — | ✅ gata |
| — | **OG image** (share social) | meta (FB/WhatsApp) | `og-image.jpg` | auto din hero | 1.91:1 | 1200×630 | auto (îl regenerez dacă schimbi hero) |

**Fără poze (corect așa):** Trust badges, Statistici, „Pentru cine", „3 pași", FAQ, CTA final, toate Subpage-hero-urile (gradient), pagina `/ce-este-bowen` (carduri cu iconițe).

## Unde am PUTEA adăuga poze (dacă vrei mai mult, nu e necesar)
- **Testimoniale** — acum sunt inițiale în cerc. Poze reale de clienți (cu acordul lor) ar crește încrederea. Pătrat 1:1, ~400×400.
- **`/ce-este-bowen`** — momentan doar iconițe; un cadru real de ședință ar încălzi pagina. 4:5 sau 16:9.
- **Galerie „cabinet"** — opțional, 2-4 poze din cabinet, dacă vrei o secțiune nouă.

## Răspuns scurt la „mai trebuie?"
**Strict necesar: 1 poză** — portretul lui Bogdan (slot #1). Atât. Restul site-ului e complet și arată bine cu imaginile generate. Sloturile 2-5 sunt upgrade-uri opționale (înlocuiești o imagine generată cu una reală), iar 6 + testimonialele sunt „nice to have".

> Notă tehnică: în `constants.ts → IMAGES` există 4 intrări nefolosite (`clinic1`, `clinic2`, `locationSimleu`, `locationZalau`) — rămase din varianta veche, nu se afișează nicăieri. Le pot șterge la curățenie.

---

## PROMPT pentru celălalt chat (generator de prompturi Nano Banana 2)

> Lipește textul de mai jos într-un chat nou, împreună cu pozele reale ale lui Bogdan. Acel chat îți va da, pentru fiecare poză, un prompt gata de pus în Nano Banana 2 (cu poza ca input) ca s-o transforme în imagine de site.

```
Ești un specialist în art direction + prompturi pentru editarea de imagini cu Nano Banana 2 (Gemini 3 Pro Image). Scopul tău: pentru fiecare fotografie reală pe care ți-o dau (poze cu Bogdan, terapeut Bowen, făcute pe telefon), să-mi dai UN prompt de editare gata de copiat în Nano Banana 2, care transformă poza într-o imagine profesională, gata de folosit pe un site de terapie Bowen.

REGULA #1, absolută: păstrează identitatea și fața reală a persoanei din poză NESCHIMBATE. Trebuie să rămână clar aceeași persoană (Bogdan). NU schimba trăsăturile, NU „înfrumuseța" până devine alt om, NU genera o față nouă. Editezi doar: lumina, fundalul, încadrarea/crop, curățarea distragerilor, gradarea culorii și atmosfera. Rezultat natural și autentic, nu plasticat/over-retușat.

Brand & estetică (aplică-le în fiecare prompt):
- Paletă: verde pădure profund, bej cald/crem, accent miere/chihlimbar. Tonuri calde, naturale (NU alb-negru).
- Mood: calm, cald, premium, editorial wellness. Lumină naturală blândă (de fereastră), plante verzi, textil/in moale, lemn, cabinet curat și liniștit.
- Fără text, fără logo-uri, fără watermark. Fără elemente kitsch sau aglomerate.

Procedură:
1. Pentru fiecare poză, întreabă-mă scurt PENTRU CE SLOT e (sau deduci din conținut): „portret Despre (3:4 vertical)", „hero (16:10 orizontal)", „ședință (4:5 vertical)", „cabinet/locație (16:10 orizontal)".
2. Apoi dă-mi promptul de editare Nano Banana 2, în ENGLEZĂ, structurat clar: ce să păstreze (fața/identitatea, postura reală), ce să modifice (fundal → cabinet wellness în paleta brandului; lumină naturală caldă; curățenie; gradare verde-pădure + bej + miere), crop-ul la raportul slotului, și „no text, no logos, photorealistic, natural skin, preserve the person's identity".
3. Adaugă mereu la final: aspect ratio țintă + „output 2K, sharp, professional editorial wellness photography".

Format răspuns pentru fiecare poză:
- **Slot:** …
- **Prompt Nano Banana 2:** „…" (în engleză, gata de copiat)
- **Notă crop:** (dacă poza trebuie tăiată la raportul țintă)

Începe prin a-mi cere să-ți trimit prima poză și să-ți spun pentru ce slot e.
```
