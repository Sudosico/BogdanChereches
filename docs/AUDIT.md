# Launch-Readiness Audit — bowenbogdan.ro

_Audited across 8 dimensions against 2026 standards (Core Web Vitals, WCAG 2.2 AA, technical SEO, conversion). All issues below were found and fixed unless marked "needs Bogdan". Verified live in a real browser._

## 1. Performance (Core Web Vitals)
- **Images reduced 23.7 MB → 1.1 MB** (95% smaller). Removed unused duplicate files; recompressed the 4 photos from ~3 MB to ~225–290 KB (1800px, q82) with no visible quality loss. This directly improves LCP and deploy/build speed. `next/image` then serves AVIF/WebP at the right size on top.
- Hero image is `priority` (LCP element). Static prerender (all routes `○ Static`).
- No layout shift: images use reserved space (`fill` + aspect), text animates via opacity/transform only.

## 2. Accessibility (WCAG 2.2 AA)
- **Reduced motion now honored** — wrapped the app in `<MotionConfig reducedMotion="user">` so every framer-motion animation drops movement for users with "reduce motion" on (WCAG 2.3.3). CSS already disabled the marquee/transitions for that preference.
- Visible keyboard focus rings (`:focus-visible`) on all interactive elements.
- Modals: `role="dialog"`, `aria-modal`, Escape-to-close, body scroll-lock.
- Alt text corrected to match the new face-less images (room / still-life, not "session").
- One `<h1>` per page; logical h2/h3 hierarchy. `lang="ro"`.

## 3. SEO
- **Created the missing `og-image.jpg`** (1200×630) — social shares were previously broken. Twitter card + OpenGraph + keywords in place.
- `LocalBusiness` (HealthAndBeautyBusiness) schema with address, geo area, `sameAs`, services; `FAQPage` schema; JSON-LD hardened against `</script>` breakout.
- `sitemap.xml` + `robots.txt` generated. Canonical URL set.

## 4. Conversion
- Single goal (WhatsApp) with pre-filled messages everywhere; personalized funnel modal; risk-reversal microcopy; social proof above the fold and at the final CTA; persistent CTA (sticky bar mobile / floating desktop / navbar); measurement-ready event tracking (`whatsapp_click` → GA4/GTM/Meta).

## 5. Content / Clarity
- **Fixed the visible dev placeholder** — Zalău card no longer shows `[ADAUGĂ ADRESA]`; now "Adresa exactă o primești când programezi pe WhatsApp" (graceful until the real address is added).
- Zero em-dashes in visible copy. Outcome-led hero subhead.

## 6. Mobile / Responsive
- No horizontal overflow at 320 / 375 / 768 / 1024 / 1280 / 1440. Hamburger ≤1024; hero fits the viewport; sticky bar is the single mobile CTA.

## 7. Technical / Security
- Security headers: CSP, `X-Frame-Options: DENY`, `nosniff`, HSTS, `Referrer-Policy`, `Permissions-Policy` (verified no CSP violations).
- All external links `rel="noopener noreferrer"`; `window.open` with `noopener`. Secrets gitignored.

## 8. UX bugs fixed
- **In-page menu links now scroll correctly.** Lenis (smooth scroll) was swallowing `#anchor` clicks; added a click interceptor that drives `lenis.scrollTo` + `scroll-margin-top` for the navbar offset. Verified: clicking nav items scrolls to the right section.
- FAQ accordion, funnel/exit modals, maps embed all verified working in a real browser.

---

## Remaining — needs Bogdan before launch (cannot be invented honestly)
1. **Real photo of Bogdan** → the About slot is a clean reserved frame.
2. **Zalău exact address** + (optionally) a Google map embed for it.
3. **Google Business Profile + real reviews** → highest-trust asset; enables honest `aggregateRating` schema.
4. **Credentials line** (certificare Bowen, ani de experiență).
5. **Pricing / packages** (optional but raises clarity + conversion).
6. **Connect GA4 or Meta Pixel** → conversion tracking activates automatically (already wired).
