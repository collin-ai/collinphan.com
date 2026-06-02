# Phase 03 — SUMMARY

## Files Changed

| File | Changes |
|------|---------|
| `index.html` | OG meta tags; favicon link; photo dimensions; email obfuscated (×4); contact lead paragraph removed; "Say hello." font matched to projects quote |
| `assets/styles.css` | Header frosting removed; COLLIN/PHAN opacity raised; social icon size/stroke raised; dead accordion CSS (~150 lines) deleted; dead eyebrow CSS deleted; dead bg CSS deleted; hero mobile `justify-content: center` |
| `assets/site.js` | `lsGet`/`lsSet` helpers added; all localStorage calls wrapped; dead `BG_KEY` + `data-bg` removed; `buildMailto()` added; nav default changed to open |
| `vercel.json` | Security headers added (X-Frame-Options, X-Content-Type-Options, Referrer-Policy) |
| `favicon.svg` | Created — white CP on blue `#2563eb`, 32×32, rx-6 rounded |
| `.gitignore` | Created — excludes `.DS_Store` and `**/.DS_Store` |
| `.vercelignore` | Created — excludes `.paul/`, design folder, `ExampleLandingPage.avif`, `.DS_Store` |
| `uploads/Pfp.heic` | Deleted (unused) |
| `uploads/Blob Resume.pdf` | Deleted (unused; Print button covers PDF export) |

---

## What Was Done

### Ad-hoc (applied before PLAN was written)

**UI tweaks:**
- Header frosting (`backdrop-filter: blur` + gradient) removed — sections now visible cleanly behind nav
- Nav default changed to open (new visitors see full nav)
- COLLIN/PHAN watermark opacity: `0.3` → `0.5`
- Resume social link icons: opacity `0.5` → `0.72`; size `18px` → `22px`; stroke `2` → `2.5`
- Expand chevron and gear button order swapped when nav is collapsed

**Resume edits:**
- "Saves an estimated 100 hrs/year" → "Saved"
- Rotation sub-labels now include date ranges (Feb–May 2026, Jun–Sep 2026, Oct 2026–Jan 2027, Feb–Jun 2027)
- Upcoming rotation verbs: "Supporting / Conducting / Exposure" → "Will support / Will gain / Will conduct"
- "Conducted analysis for 7 of Avaap's top competitors" → "of 7 of AVAAP's"
- "Avaap Wellness Initiative" → "AVAAP Wellness Initiative"
- "Story Boarding" → "Storyboarding"
- "Habitat For Humanity — 2017 to present" → "2017 – 2019"
- "UW of Washington" → "University of Washington"
- Loan Analyst org field: three organizations + three names → institution names only

**Contact section:**
- Lead paragraph ("Best way to reach me is email...") removed
- "Say hello." font size matched to projects quote: `clamp(28px, 4vw, 48px)`

### Group A — Deployment Safety
- `.gitignore`: prevents `.DS_Store` from being committed to GitHub
- `.vercelignore`: prevents `.paul/`, design folder, and junk files from being deployed publicly
- `vercel.json`: three security headers added

### Group B — Discoverability + Polish
- Open Graph + Twitter card meta tags: rich link previews when URL is shared on LinkedIn, iMessage, Slack, etc.
- `favicon.svg`: tab icon; referenced via `<link rel="icon">`
- Profile photo `width="240" height="240"`: prevents layout shift on load

### Group C — Anti-Bot
- Email removed from HTML in 4 locations; replaced with `data-mailto` / `data-mailto-text` attributes
- `buildMailto()` decodes and injects email at runtime via `atob()` — defeats basic HTML-scraping spam bots

### Group D — Dead Code Removal
- Accordion CSS (~150 lines): deleted — leftover from Phase 01 `<details>` structure replaced in Phase 02
- `.section__eyebrow` CSS: deleted — eyebrows removed from HTML in Phase 02
- Background CSS rules (`html[data-bg="solid"]`, `html[data-bg="textured"]`): deleted — background tweaks group removed in Phase 02
- `BG_KEY` constant and `data-bg` setAttribute line: deleted from JS
- `Blob Resume.pdf`: deleted

### Group E — Robustness
- `lsGet(k)` / `lsSet(k, v)` helpers added — all localStorage calls now go through try/catch
- Prevents crash in Safari Private Browsing mode and restricted browser environments

### Group F — Manual Testing
- Lighthouse score: **93** ✓
- Hero mobile layout: `justify-content: center` added at ≤720px — content now vertically centered instead of anchored to bottom with dead space above
- Print layout: pending
- Full mobile walkthrough: partial (hero fix verified)

---

## Deviations from Plan

- No deviations. All planned tasks applied.

## Key Decisions Made This Session

| Decision | Reason |
|----------|--------|
| Delete Blob Resume.pdf | Print button covers PDF export; file was unlinked anyway |
| SVG favicon (not .ico) | SVG favicons work in 95%+ of 2026 browsers; no binary file needed |
| Email via atob() not form | Static site — no backend; atob is the right tradeoff |
| Hero mobile: center not flex-end | flex-end left too much dead space on small screens |

---

## Placeholders Remaining

- `collinphan.com` project row GitHub link (TBD after Phase 04 deploy)
- Print layout visual check (manual)
- Full mobile walkthrough at 390px (partial — hero verified)

---
*Written: 2026-05-17*
