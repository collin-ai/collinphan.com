# Phase 02 — SUMMARY

## Files Changed

| File | Changes |
|------|---------|
| `index.html` | About bio filled; photo src fixed; resume restructured (two-col + social icons); projects flattened + reordered + Marc CT added; quote + sub updated; all section eyebrows removed; email updated; expand button updated; gear added to nav; Bloom toggle added to tweaks |
| `assets/styles.css` | Resume two-col split; accent-color name watermark + social icons; project-row styles; resume entry hover; bloom-paused rule; bloom-off rule; sticky eyebrow CSS reverted to simple; nav__tweaks styles; nav__expand redesigned; nav__collapse hidden when collapsed |
| `assets/site.js` | Nav default-collapsed; smooth-scroll offset fixed; scroll-spy rootMargin + buffer fixed; bloom-pause on resume hover; BLOOM_KEY + persistent bloom toggle; buildTweaksToggle replaced with nav button; theme + bloom handlers in buildTweaks/sync |

---

## What Was Done

### Content
- About photo: `uploads/Pfp.heic` → `Photos/Pfp.jpeg`
- About bio: 3 real paragraphs filled in
- Email everywhere: `collin.ai.assistant@gmail.com` → `collindphan@gmail.com`

### Resume Layout
- Two-column split: COLLIN / PHAN watermark (accent color, 30% opacity) on left; resume content (max-width 680px) on right
- Social icon links (email, LinkedIn, GitHub) under the name watermark — desktop only, accent-colored
- Resume entry hover: accent left-border + tinted background (Brittany-style)
- Print: name col + extra split padding collapsed cleanly

### Projects
- Accordion `<details>` removed; replaced with flat `project-row` list
- Quote: "Shrinking the distance between deciding and doing"
- Sub paragraph: updated to match user's new copy
- Order: 001 8BitPitch · 002 Marc CT Model Page · 003 collinphan.com
- Marc CT Model Page added with live link

### Nav
- Collapsed by default (localStorage default flipped from `=== "1"` to `!== "0"`)
- Smooth-scroll offset fixed: uses `--header-h` instead of `-8`
- Scroll-spy fixed: `rootMargin` -40% → -10%, removed `+80` height buffer (was causing Projects to be skipped)
- `nav__collapse` hidden when already collapsed (bug fix)
- `nav__expand` redesigned: chevron replaces hamburger; `scaleX(-1)` flip on hover
- Settings gear (`nav__tweaks`) added to nav pill; replaces old floating bottom-right button

### Tweaks Panel
- Background group removed
- Theme (Light / Dark) group added
- Bloom (On / Off) group added — persists via localStorage; `html[data-bloom="off"]` CSS rule

### Removed
- All four `section__eyebrow` elements (About, Resume, Projects, Contact) deleted from HTML
- Sticky eyebrow CSS reverted to simple non-sticky label style

---

## Deviations from Plan

- Section eyebrows deleted entirely (user decision mid-session — preferred clean sections without labels)
- Tweaks panel kept and expanded (earlier STATE.md noted "remove before launch" — that decision is now reversed)
- `--section-px` variable doesn't exist; eyebrow sticky approach was abandoned when user removed them anyway

## Key Decisions Made This Session

| Decision | Reason |
|----------|--------|
| Keep tweaks panel for public launch | User extended it; now contains theme, accent, bloom, font |
| Bloom pause on resume hover | Prevents glow distraction while reading resume |
| Flat project rows instead of accordion | User preferred cleaner look; accordion placeholders were stale |
| Nav gear replaces floating gear button | Cleaner UX — everything in the nav pill |
| collinphan.com GitHub row has no link yet | Will be set in Milestone 3 after deploy |

---

## Placeholders Remaining

- `collinphan.com` project row GitHub link (TBD after Milestone 3 deploy)
- Print layout not re-tested since two-column restructure — should be checked in Phase 03

---
*Written: 2026-05-17*
