# Project State

## Current Position

Milestone: Milestone 2 — Deploy (v1.0)
Phase: 03 complete — Phase 04 (Deploy) next
Status: All pre-launch work done; Lighthouse 93; ready for GitHub + Vercel
Last activity: 2026-05-17 — Phase 03 applied and unified; PAUL pause

## Loop Position

```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ✓        ✓     [Phase 01 — Projects + About scaffold + Contact icons]
  ✓        ✓        ✓     [Phase 02 — Content fill + layout overhaul + nav/tweaks upgrades]
  ✓        ✓        ✓     [Phase 03 — Code review fixes + pre-launch polish]
  ○        ○        ○     [Phase 04 — Deploy: GitHub + Vercel + domain]
```

## Key Decisions

| Decision | Reason |
|----------|--------|
| Single-scroll page (no separate pages) | Design already built this way; simpler |
| Plain HTML/CSS/JS — no framework | No build step; easy Vercel deploy |
| Tweaks panel kept for public launch | User extended it (theme, accent, bloom, font) |
| Section order: Landing → About → Resume → Projects → Contact | About humanizes early for hiring managers |
| Flat project rows (no accordion) | Cleaner look; old accordion had stale placeholders |
| Contact email: collindphan@gmail.com | Updated this session |
| Nav label: "Projects" | Shorter label fits nav pill |
| Nav collapsed by default | User preference |
| Bloom pause on `#resume` hover | Prevents glow distraction while reading |
| Bloom persistent toggle in tweaks | User control over cursor effect |
| collinphan.com GitHub link: TBD | Will be set after Milestone 3 deploy |
| Settings gear in nav pill | Cleaner than floating button |

## Session Continuity

Last session: 2026-05-17
Stopped at: Phase 03 complete; PAUL pause
Next action: Learning session (project structure, Git, .gitignore, .vercelignore) → then Phase 04 deploy
Resume file: `.paul/HANDOFF-2026-05-17-phase03.md`

## Tooling Setup

| Tool | Location | Purpose |
|------|----------|---------|
| PAUL v1.0 | Claude Projects/ | Plan-Apply-Unify loop |
| CARL | Claude Projects/ | Dynamic rule injection |

## File Structure

```
CollinPhan.com Personal Website/
  .paul/
    STATE.md              ← this file
    ROADMAP.md
    PROJECT.md
    HANDOFF-2026-05-17.md ← current handoff
    phases/
      01/ → 01-PLAN.md, 01-SUMMARY.md
      02/ → 02-SUMMARY.md
  index.html              ← single-scroll site (485 lines)
  assets/
    styles.css            ← ~1050 lines
    site.js               ← ~290 lines
  Photos/
    Pfp.jpeg              ← profile photo (used in About section)
  uploads/
    Blob Resume.pdf
    Pfp.heic              ← original HEIC (unused, safe to delete)
  vercel.json
  README.md
```

---
*Updated: 2026-05-17*
