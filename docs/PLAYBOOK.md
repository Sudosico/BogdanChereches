# PLAYBOOK — cum se lucrează la acest site

Ghid de operare pentru orice modificare la site-ul **Bogdan Cherecheș — Terapie Bowen**. Citește-l înainte de a schimba ceva.

---

## 0. Pe scurt (TL;DR)
- **Tot textul** stă în `src/lib/constants.ts`. ~90% din schimbări se fac acolo.
- Flux: **edit → `npm run build` → verifică în browser real → sync `D:\Downloads\bogdan` → commit → `git push origin main` → Vercel deployează singur.**
- Reguli ferme: **zero em-dash** în text vizibil, paleta forest/bone/honey, fonturile Bricolage+Inter, un singur CTA = WhatsApp.

---

## 1. Ce e proiectul
- Landing page de conversie. **Obiectiv unic: vizitatorul îi scrie lui Bogdan pe WhatsApp.**
- Stack: **Next.js (App Router)**, **Tailwind v4**, **framer-motion**, **Lenis** (smooth scroll), **shadcn/ui** (accordion, button, dialog).
- ⚠️ `AGENTS.md` zice că e o versiune de Next cu breaking changes — la nevoie citește `node_modules/next/dist/docs/`.

## 2. Unde stă fiecare lucru
| Ce | Unde |
|---|---|
| **Tot textul / conținutul** | `src/lib/constants.ts` (HERO, TRUST_STATS, WHAT_IS_BOWEN, SESSION_FEEL, WHO_CHOOSES, ABOUT, HOW_TO_START, LOCATIONS, TESTIMONIALS, FAQ_ITEMS, FINAL_CTA, FUNNEL, FOOTER, SEO, CONTACT, IMAGES) |
| Secțiuni homepage | `src/components/sections/*` |
| Componente comune | `src/components/*` (Navbar, Footer, CTAButton, FunnelModal, ReassuranceStrip, ImagePlaceholder, etc.) |
| Animații | `src/components/animations/*` |
| Pagini | `src/app/{despre,ce-este-bowen,contact,faq,confidentialitate}/page.tsx` |
| SEO/meta/schema/fonturi | `src/app/layout.tsx`, `src/lib/fonts.ts`, `src/app/sitemap.ts`, `src/app/robots.ts` |
| Config + securitate | `next.config.ts` (CSP, headers, images, `devIndicators:false`) |
| Analytics | `src/lib/analytics.ts`, `src/components/ConversionTracker.tsx`, `src/components/MarketingScripts.tsx` |
| Imagini | `public/images/` (vezi `docs/IMAGE-BRIEF.md`) |
| Stiluri/temă | `src/app/globals.css` |
| Docs interne | `docs/STRATEGY.md`, `docs/AUDIT.md`, `docs/IMAGE-BRIEF.md`, acest fișier |

## 3. Fluxul de lucru (procedura exactă)
1. **Editează** conținutul în `constants.ts` sau componenta relevantă.
2. **Build**: `npm run build` din `C:\Users\augus\Sites\bowen-bogdan`. Trebuie să fie curat, toate rutele `○ (Static)`. Dacă pică, repară înainte de push.
3. **Verifică vizual în browser REAL** (Chrome la `localhost:3000`), nu doar în tool-ul de preview.
4. **Sync** fișierele modificate și în `D:\Downloads\bogdan` (folderul de deploy de rezervă).
5. **Commit + push**: mesaj clar, terminat cu linia `Co-Authored-By: Claude ...`, apoi `git push origin main`.
6. **Vercel** deployează automat din GitHub.

## 4. Git & deploy
- Repo: **github.com/Sudosico/BogdanChereches**, branch **main**. Vercel = auto-deploy din GitHub (import, NU drag & drop).
- Commit cu `git -c core.autocrlf=false commit` ca să eviți zgomotul CRLF (avertismentele LF→CRLF sunt inofensive).
- ⚠️ În PowerShell, `git push` afișează linia `To https://github.com/...` ca eroare roșie (`NativeCommandError`) — **e doar stderr-ul lui git, push-ul reușește**. Confirmă cu `... main -> main`.
- `gh` CLI nu e instalat → folosește `git` simplu. Credential helper = `manager` (login cache-uit).
- Pentru update pe Vercel: doar push pe `main`. NU se face drag & drop la update (creează proiect nou).
- Domeniu live: temporar `*.vercel.app`; planificat `bowenbogdan.ro`. Canonical/OG/sitemap citesc `NEXT_PUBLIC_SITE_URL` (fallback `bowenbogdan.ro`).

## 5. Reguli de conținut & design (ferme)
- **ZERO em-dash (—) în text vizibil.** Folosește virgulă, punct sau paranteze. (În comentarii de cod e ok.)
- **Paletă:** forest `#1C3A30`/`#16271F`, bone `#EDEFE9`, honey `#BE8A3E`. (În cod, numele vechi `sage`/`earth`/`navy`/`ivory`/`cream` sunt remapate la astea — nu te speria.)
- **Fonturi:** Bricolage Grotesque (titluri) + Inter (text), prin `next/font`.
- **Un singur CTA: WhatsApp.** Toate link-urile WhatsApp folosesc `waLink()` (mesaj pre-completat). Click-urile sunt urmărite cu `trackContactClick(...)`.
- **Voce:** caldă, la persoana întâi pentru bio (autentic = convingător). Nu transforma bio-ul autentic în „marketing".
- Iconițe: `lucide-react`, consecvent.

## 6. Imagini
- Sloturi, rapoarte și priorități: **`docs/IMAGE-BRIEF.md`** (cheatsheet complet).
- Atmosferice (cameră/natură statică): generate cu **Flow + Nano Banana 2**, **fără fețe / fără detaliu de mâini**.
- Poze reale (Bogdan): **păstrează identitatea reală**, nu genera fețe false.
- Tratament vizual: clasa `.img-forest` (ușoară desaturare) + gradient subtil jos pentru lizibilitate.
- **Optimizare:** redimensionează la ~1800px lățime, ~225-300 KB (System.Drawing în PowerShell). Diploma e `.webp` (65 KB).
- **Cache-busting:** când înlocuiești o imagine cu ACELAȘI nume, dev/CDN servește versiunea veche. Soluție: **nume versionat** (ex. `hero-v2.jpg`) + actualizezi referința.

## 7. Analytics
- **Vercel Analytics + Speed Insights** instalate (gratis). Trebuie **activate din dashboard-ul Vercel** (tab-urile Analytics / Speed Insights).
- Eveniment de conversie: `whatsapp_click` / `messenger_click` / `phone_click`, cu eticheta locului (navbar, hero, funnel, floating, mobile-sticky). Verificat că ajunge la `window.va`.
- GA4 / Meta Pixel: opționale, prin env `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_FB_PIXEL_ID` (vezi `MarketingScripts.tsx`). CSP din `next.config.ts` permite deja domeniile Google/Meta/Vercel.

## 8. Capcane învățate (NU repeta)
- ❌ Nu folosi `-replace` cu scriptblock în PowerShell — odată a scris cod PowerShell în fișiere `.tsx`. Folosește edit normal.
- ⚠️ Tool-ul de preview throttle-uiește `requestAnimationFrame` → screenshot-urile în timpul scroll-ului dau timeout, iar `lenis.scrollTo` nu se animează. **Verifică în Chrome real.**
- ⚠️ Link-urile `#ancoră` merg doar cu Lenis activ (browser în prim-plan); reparate prin handler în `LenisProvider`.
- ℹ️ Warning npm `node-domexception ... deprecated` = inofensiv (dependență tranzitivă a `shadcn`). Nu strica build-ul încercând să-l „repari".
- `devIndicators:false` ascunde indicatorul Next din stânga-jos (oricum apare doar în dev).

## 9. Rămas de făcut (date de la Bogdan, înainte de lansare)
- 🔴 **Poză reală cu Bogdan** (portret 3:4) → slotul rezervat din „Despre".
- Adresa exactă din Zalău (`constants.ts → LOCATIONS`).
- **Google Business Profile** + recenzii reale (cel mai mare câștig pentru „bowen zalău"). Apoi se poate adăuga `aggregateRating` în schema din `layout.tsx`.
- Activare Vercel Analytics/Speed Insights din dashboard; opțional GA4/Pixel.
- Cumpărare + conectare domeniu, apoi setare `NEXT_PUBLIC_SITE_URL`.
- Curățenie: 4 intrări moarte în `IMAGES` (`clinic1/2`, `locationSimleu/Zalau`).

## 10. Comenzi utile
```bash
npm run dev      # dev local (localhost:3000)
npm run build    # build de verificare (rulează ÎNAINTE de orice push)
npm run start    # servește build-ul de producție
```
```powershell
# commit + push (din C:\Users\augus\Sites\bowen-bogdan)
git -c core.autocrlf=false commit -q -m "mesaj ... Co-Authored-By: ..."
git push origin main
```
