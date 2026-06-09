# Bogdan Cherecheș — Terapie Bowen

Landing page de conversie pentru un practician de terapie Bowen în Zalău și Șimleu Silvaniei. Obiectivul unic: vizitatorul îi scrie lui Bogdan pe WhatsApp.

Construit cu **Next.js (App Router)**, **Tailwind CSS v4**, **framer-motion**, **Lenis**.

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm run start    # servește build-ul de producție
```

## Deploy pe Vercel

1. Urcă proiectul pe GitHub (sau importă folderul direct în Vercel).
2. În Vercel: **New Project → Import**. Framework-ul **Next.js** e detectat automat — fără configurare suplimentară.
3. (Opțional) Setează variabilele de mediu de mai jos. Dacă nu le setezi, se folosesc valorile implicite din `src/lib/constants.ts`.
4. **Deploy**. Headerele de securitate, `sitemap.xml` și `robots.txt` se aplică automat.

### Variabile de mediu (opționale)

| Variabilă | Implicit |
|-----------|----------|
| `NEXT_PUBLIC_WHATSAPP` | `https://wa.me/40748870981` |
| `NEXT_PUBLIC_MESSENGER` | `https://m.me/100083529482417` |
| `NEXT_PUBLIC_PHONE` | `+40748870981` |

Vezi `.env.example`.

## De completat înainte de lansare (date de la Bogdan)

- Poză reală cu Bogdan → înlocuiește slotul rezervat din secțiunea „Despre".
- Adresa exactă din Zalău (în `src/lib/constants.ts → LOCATIONS`).
- Recenzii reale + Google Business Profile (apoi se poate adăuga `aggregateRating` în schema din `layout.tsx`).
- Conectează **GA4** sau **Meta Pixel** → tracking-ul de conversie (`whatsapp_click`) pornește automat (vezi `src/lib/analytics.ts`).
- Înlocuiește pozele generate cu fotografii reale ale cabinetelor, dacă există.

## Documentație internă

- `docs/STRATEGY.md` — studiu de caz pe conversie + idei de servicii/subpagini.
- `docs/AUDIT.md` — audit de lansare pe 8 dimensiuni (performanță, accesibilitate, SEO etc.).
