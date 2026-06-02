# collinphan.com

Personal site for Collin Phan — landing, resume, programming projects, contact.

## Stack
- Plain HTML/CSS/JS. No build step.
- Drop into Vercel as a static project; `vercel.json` enables clean URLs (`/resume` instead of `/resume.html`).

## Local dev
Open `index.html` in a browser, or run any static server:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy
1. Push to a GitHub repo.
2. Import into Vercel — zero config; framework preset = "Other".
3. Point the `collinphan.com` domain at the project.

## Files
- `index.html` — Landing (hero, oversized name, tagline)
- `resume.html` — Dense single-page CV (Cmd+P → PDF works)
- `projects.html` — Programming projects list
- `contact.html` — Contact links
- `assets/styles.css` — Shared styles (light + dark themes)
- `assets/site.js` — Theme toggle, nav indicator, page transitions, cursor follower, tweaks
- `assets/partials.js` — Injects shared nav/bg/footer/tweaks chrome into each page

## Editing
- Replace bracketed `[placeholder]` text in `resume.html` and `projects.html` with real content.
- Add real project links by changing `href="#"` on each `.project` row.
- Tweaks panel (gear icon, bottom-right) is a dev-time helper; remove the toggle button in `assets/site.js` (`buildTweaksToggle`) before going public if you don't want users to see it.

## Themes
- Light/dark toggle in the nav. Persisted via `localStorage`.
- Honors `prefers-color-scheme` on first visit.
