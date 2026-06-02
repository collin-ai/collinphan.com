# Phase 01 — PLAN: Projects Overhaul + Contact Icons + About Section

## Objective

First major content pass on the personal website. Replace all placeholder content with real structure, add two real projects as expandable accordion rows, add an About section with profile photo scaffold, and add icons to the contact section.

## Acceptance Criteria

**Given** the site opens in a browser,
**When** the user scrolls through each section,
**Then:**
- Nav shows 5 items: Landing, About, Resume, Programming Projects, Contact
- Scroll-spy highlights the correct nav item per section
- About section appears after the hero with a photo and placeholder bio
- Projects section shows the "vibe coder" philosophy paragraph and two accordion rows
- Clicking a project row expands a detail panel with 5 fields + links; clicking again collapses it
- Arrow on each project row rotates 180° when open
- Contact links show an inline SVG icon beside the label text
- Print (Cmd+P) renders only the resume; About, Projects, Contact, and header are hidden
- Dark/light toggle responds correctly across all new elements

## Tasks

| # | File | Action | Verify |
|---|------|--------|--------|
| 1 | `.paul/phases/01/01-PLAN.md` | Write this file | File exists |
| 2 | `index.html` | Add "About" nav link between Landing and Resume | 5 nav items visible |
| 3 | `index.html` | Add `#about` section after `#landing` with photo + placeholder bio | Section visible after hero |
| 4 | `assets/styles.css` | Add `.about__layout`, `.about__photo-wrap`, `.about__photo`, `.about__body` CSS | About section styled correctly |
| 5 | `index.html` | Replace placeholder projects list with 2 accordion `<details>` rows | Accordion opens/closes on click |
| 6 | `index.html` | Replace `.projects__sub` placeholder text with philosophy copy | Correct text visible |
| 7 | `assets/styles.css` | Replace old `.project`, `.project:hover`, `.project__arrow` with new accordion CSS | Hover, rotate, body layout correct |
| 8 | `index.html` | Add inline SVG icons to Email, LinkedIn, GitHub contact links | Icons visible beside labels |
| 9 | `assets/styles.css` | Update `.contact__link-kind` + add `.contact__icon` | Icons aligned inline with text |
| 10 | `assets/styles.css` | Update `@media print` to hide `#about` | Print preview excludes About |

## Boundaries

- `assets/site.js` — no changes; scroll-spy auto-detects sections via nav `data-target` attributes
- Tweaks panel — leave in place (removal is Phase 03)
- Bio text in About — placeholder only; content planned in a follow-up session
- Project detail fields (why made, learned, struggle) — placeholder only; user fills in
- This website's GitHub link — placeholder `#`; real link added after Milestone 3 deploy

## Verification Checklist

- [ ] Nav has 5 items; scroll-spy works on all 5 sections
- [ ] About section visible after hero, photo loads (or broken-image acceptable for HEIC in Chrome)
- [ ] Clicking project row 001 expands panel; clicking again collapses
- [ ] Clicking project row 002 expands panel; clicking again collapses
- [ ] Arrow rotates 180° on open, returns on close
- [ ] 8BitPitch GitHub and Live Site links open correctly in new tab
- [ ] Contact icons visible for all three links
- [ ] Dark/light toggle: all new sections respond to theme
- [ ] Print: only resume visible
- [ ] Mobile (720px): About stacks, projects simplified layout, contact icons wrap

---
*Written: 2026-05-03*
