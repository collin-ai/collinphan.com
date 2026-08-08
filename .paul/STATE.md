# Project State

## Current Position

Milestone: Milestone 3 — Post-Launch
Phase: 04 complete — Phase 05 (Post-deploy cleanup) next
Status: Site is LIVE at collinphan.com — GitHub Pages + Spaceship DNS
Last activity: 2026-08-08 — Phase 04 complete; PAUL pause

## Loop Position

```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ✓        ✓     [Phase 01 — Projects + About scaffold + Contact icons]
  ✓        ✓        ✓     [Phase 02 — Content fill + layout overhaul + nav/tweaks upgrades]
  ✓        ✓        ✓     [Phase 03 — Code review fixes + pre-launch polish]
  ✓        ✓        ✓     [Phase 04 — Deploy: GitHub + GitHub Pages + Spaceship DNS]
  ○        ○        ○     [Phase 05 — Post-launch cleanup + content updates]
```

## Key Decisions

| Decision | Reason |
|----------|--------|
| Single-scroll page (no separate pages) | Design already built this way; simpler |
| Plain HTML/CSS/JS — no framework | No build step; easy static deploy |
| Tweaks panel kept for public launch | User extended it (theme, accent, bloom, font) |
| Section order: Landing → About → Resume → Projects → Contact | About humanizes early for hiring managers |
| Flat project rows (no accordion) | Cleaner look; old accordion had stale placeholders |
| Contact email: collindphan@gmail.com | Updated Phase 03 |
| Nav label: "Projects" | Shorter label fits nav pill |
| Nav collapsed by default | User preference |
| Bloom pause on `#resume` hover | Prevents glow distraction while reading |
| Bloom persistent toggle in tweaks | User control over cursor effect |
| collinphan.com GitHub link: TBD | Will be set after Phase 05 |
| Settings gear in nav pill | Cleaner than floating button |
| GitHub Pages instead of Vercel | Simpler; no third-party account needed; free |
| Repo is public | Required for GitHub Pages free tier |
| DNS via Spaceship A records + CNAME | 4 A records to GitHub IPs; www CNAME to collin-ai.github.io |

## Session Continuity

Last session: 2026-08-08
Stopped at: Phase 04 complete; PAUL pause
Next action: Phase 05 — post-launch cleanup (Task 1: collinphan.com GitHub link, Task 2: Lighthouse on live URL, Task 3: resume update, Task 4: README.md explaining PAUL to a general audience)
Resume file: `.paul/HANDOFF-2026-08-08-phase04.md`

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
