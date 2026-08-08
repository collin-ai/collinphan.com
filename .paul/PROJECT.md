# collinphan.com — Personal Website

## What This Is

A personal portfolio site for Collin Phan — landing hero, resume, programming projects, and contact. Deployed as a static site on GitHub Pages at collinphan.com.

## Core Value

A professional online presence that showcases Collin's career in healthcare technology and GPO spend management, his programming projects, and serves as a contact point — all in a polished, opinionated design.

## Current State

| Attribute | Value |
|-----------|-------|
| Version | v1.0 (Live) |
| Status | Milestone 3 complete — post-launch cleanup done |
| Last Updated | 2026-08-08 |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 — single scroll page |
| Styling | CSS3 — custom design system, CSS variables, light/dark |
| Logic | Vanilla JavaScript (IIFE, no framework) |
| Hosting | GitHub Pages (static) |
| Domain | collinphan.com (DNS via Spaceship.com) |
| Repo | github.com/collin-ai/collinphan.com (public) |

## Requirements

### Milestone 1 — Content + Polish ✓

- [x] Fill in real programming projects (names, descriptions, links, tech tags, years)
- [x] Decide on contact email — collindphan@gmail.com
- [x] Integrate profile photo — Photos/Pfp.jpeg used in About section
- [x] Code review + pre-launch polish (Phase 03)
- [x] Update README for final project state

### Milestone 2 — Deploy ✓

- [x] Create GitHub repository (github.com/collin-ai/collinphan.com)
- [x] Push source to GitHub
- [x] Configure collinphan.com domain via Spaceship DNS + GitHub Pages
- [x] HTTPS enforced via GitHub Pages free SSL

### Milestone 3 — Post-Launch ✓

- [x] Fix collinphan.com project row GitHub link
- [x] Resume update — SMLDP rotations, education order, skills chips
- [x] README rewrite — PAUL framework explained for general audience
- [x] Remove bold from resume bullet labels
- [ ] Lighthouse audit on live URL — deferred from Phase 05

## Constraints

- No build step — plain HTML/CSS/JS only
- No frameworks, no npm
- Must work in Chrome, Firefox, Safari
- Print-to-PDF (Cmd+P) must render resume cleanly

## Workflow Rules

- **Always preview changes in Live Server before committing and pushing to GitHub.** GitHub Pages is the live site — a push is a publish. Visual regressions must be caught locally first.

## Out of Scope

- CMS or dynamic content
- Server-side logic
- Analytics (unless added later)
