# Project State

## Current Position

Milestone: Milestone 3 — Post-Launch
Phase: 05 complete — PAUL pause
Status: Site is LIVE at collinphan.com — GitHub Pages + Spaceship DNS
Last activity: 2026-08-08 — Phase 05 complete; PAUL pause

## Loop Position

```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ✓        ✓     [Phase 01 — Projects + About scaffold + Contact icons]
  ✓        ✓        ✓     [Phase 02 — Content fill + layout overhaul + nav/tweaks upgrades]
  ✓        ✓        ✓     [Phase 03 — Code review fixes + pre-launch polish]
  ✓        ✓        ✓     [Phase 04 — Deploy: GitHub + GitHub Pages + Spaceship DNS]
  ✓        ✓        ✓     [Phase 05 — Post-launch cleanup + content updates]
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
| collinphan.com GitHub link: github.com/collin-ai/collinphan.com | Fixed Phase 05 — was a `<span>` placeholder |
| Settings gear in nav pill | Cleaner than floating button |
| GitHub Pages instead of Vercel | Simpler; no third-party account needed; free |
| Repo is public | Required for GitHub Pages free tier |
| DNS via Spaceship A records + CNAME | 4 A records to GitHub IPs; www CNAME to collin-ai.github.io |
| Resume bullet labels: no bold | Only role titles and rotation subheadings should be bold |
| Live Server preview required before every push | GitHub Pages is live — push = publish; catch regressions locally |

## Session Continuity

Last session: 2026-08-08
Stopped at: Phase 05 complete; PAUL pause
Next action: Phase 06 — TBD (user-driven content updates, Lighthouse audit deferred from Phase 05)
Resume file: `.paul/HANDOFF-2026-08-08-phase05.md`

## Tooling Setup

| Tool | Location | Purpose |
|------|----------|---------|
| PAUL v1.0 | Claude Projects/ | Plan-Apply-Unify loop |
| CARL | Claude Projects/ | Dynamic rule injection |

## Workflow Rules

- **Always preview in Live Server before pushing.** GitHub Pages is the live site — push = publish. Catch visual regressions locally first.

## File Structure

```
CollinPhan.com Personal Website/
  .paul/
    STATE.md              ← this file
    ROADMAP.md
    PROJECT.md
    HANDOFF-2026-08-08-phase04.md
    HANDOFF-2026-08-08-phase05.md  ← current handoff
    phases/
      01/ → 01-PLAN.md, 01-SUMMARY.md
      02/ → 02-SUMMARY.md
  index.html              ← single-scroll site
  assets/
    styles.css
    site.js
  Photos/
    Pfp.jpeg              ← profile photo (used in About section)
  uploads/
    Blob Resume.pdf
    Pfp.heic              ← original HEIC (unused, safe to delete)
  vercel.json
  README.md
```

---
*Updated: 2026-08-08*
