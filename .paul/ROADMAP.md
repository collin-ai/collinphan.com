# Roadmap: collinphan.com

---

## Milestone 1 — Content + Polish (v0.2)

Status: **IN PROGRESS**

| Phase | Name | Status |
|-------|------|--------|
| 01 | Projects accordion + About scaffold + Contact icons | **DONE** |
| 02 | Content fill + layout overhaul + nav/tweaks upgrades | **DONE** |
| 03 | Code review fixes + pre-launch polish | **DONE** |

---

## Milestone 2 — Deploy (v1.0)

Status: **NOT STARTED**

| Phase | Name | Status |
|-------|------|--------|
| 04 | GitHub + Vercel + domain | Planned |

---

## Phase 03 Scope

See full plan: `.paul/phases/03/03-PLAN.md`

**Group A — Deployment safety (do first)**
- A1: Add `.gitignore` (exclude .DS_Store)
- A2: Add `.vercelignore` (exclude .paul/, design folder, junk files)
- A3: Add security headers to `vercel.json`

**Group B — Discoverability + polish**
- B1: Open Graph meta tags (rich link previews on LinkedIn etc.)
- B2: Favicon (tab icon — user must generate file first)
- B3: Profile photo `width`/`height` attributes (prevent layout shift)

**Group C — Anti-bot**
- C1: JS-rendered email (protect against spam harvesting bots)

**Group D — Dead code removal**
- D1: Delete dead accordion CSS (~150 lines)
- D2: Delete dead eyebrow + background CSS
- D3: Remove dead BG_KEY JavaScript
- D4: Decide on Blob Resume.pdf (link it or delete it — user's call)

**Group E — Robustness**
- E1: Wrap localStorage in try/catch (fixes Safari Private Mode crash)

**Group F — Manual testing [user]**
- F1: Print/PDF layout check
- F2: Mobile walkthrough at 390px
- F3: Lighthouse audit

---
