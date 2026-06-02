# Phase 03 — PLAN
## Code Review Fixes + Pre-Launch Polish

---

## Context

Some Phase 03 work was already applied ad-hoc this session before this plan was written:
- Deleted `uploads/Pfp.heic` (unused file)
- UI tweaks: header frosting removed, nav open by default, COLLIN/PHAN brightness, icon sizes
- Resume edits: tense fixes, rotation dates added, AVAAP capitalization, "2017 to present" corrected, Loan Analyst org field cleaned up, "Storyboarding" spelling
- Contact section: removed lead paragraph, matched "Say hello." font size to projects quote

The tasks below are the remaining findings from a full code review. They don't change how the site looks — they improve deployment safety, discoverability, security, and code cleanliness.

**Tasks marked [YOU] require action in your browser or an external tool. Everything else Claude can apply.**

---

## Group A — Deployment Safety
### Do these BEFORE pushing anything to GitHub.

---

### A1 — Add `.gitignore`

**What it is:** A plain text file that tells Git which files to ignore. Git tracks every file in your project folder by default, which would include macOS junk files that your computer creates automatically.

**Why it matters:** `.DS_Store` files are created by macOS every time you open a folder in Finder. They contain private metadata about your folder (file names, icon positions). They don't belong in a public GitHub repository — they're invisible system files that serve no purpose for anyone else. Without a `.gitignore`, they'd be committed and visible to anyone who looks at your repo.

**File to create:** `.gitignore` in the project root

---

### A2 — Add `.vercelignore`

**What it is:** Same idea as `.gitignore`, but for Vercel's deployment. It tells Vercel which files in your repo to NOT publish to the internet.

**Why it matters:** Vercel deploys everything in your repo unless told otherwise. Right now, your private PAUL planning notes, session handoffs, and the Claude Design reference folder would all be publicly accessible at real URLs. For example, anyone could visit `https://collinphan.com/.paul/HANDOFF-2026-05-17.md` and read your session notes. The design folder and example images would also be live. None of that is dangerous, but it's unintentional — these are private working files.

**File to create:** `.vercelignore` in the project root

---

### A3 — Add security headers to `vercel.json`

**What they are:** HTTP headers are invisible instructions that your server sends to every visitor's browser along with the page. Certain headers are standardized security signals that browsers know how to act on.

**Why each one matters:**
- **`X-Frame-Options: DENY`** — Prevents your page from being embedded inside another website's iframe. This stops a trick called "clickjacking," where a bad actor wraps your page invisibly inside their own page to trick users into clicking things.
- **`X-Content-Type-Options: nosniff`** — Stops browsers from second-guessing what type a file is. Browsers sometimes try to "sniff" file types and can be tricked into treating a file as executable code when it shouldn't be.
- **`Referrer-Policy`** — Controls what information gets sent to external sites when a visitor clicks a link off your page. The value `strict-origin-when-cross-origin` is the safest default: it sends just your domain (not the full URL with any parameters) when going to an external site.

These don't change anything for real visitors. They're silent browser-to-browser security signals that cost nothing to add.

**File to edit:** `vercel.json`

---

## Group B — Discoverability + Polish

---

### B1 — Add Open Graph meta tags

**What they are:** Open Graph tags are special `<meta>` lines in the `<head>` of your HTML that tell apps how to display your link when shared. They were invented by Facebook and are now used by LinkedIn, Twitter/X, iMessage, Slack, WhatsApp, most ATS systems, and almost every app that shows link previews.

**Why it matters:** When you paste `collinphan.com` into LinkedIn or send it in an email, the app reads these tags to build a preview card showing your name, description, and profile photo. Without them, the preview is a blank rectangle with just the URL. For a portfolio you're actively sending to recruiters, a rich preview looks significantly more professional — it's the first impression before they even click.

**File to edit:** `index.html` — add lines to `<head>`

---

### B2 — Add a favicon

**What it is:** The small icon shown on browser tabs, bookmarks, and phone home screens.

**Why it matters:** Two reasons:
1. Visual polish — a blank tab icon looks unfinished. Seeing "CP" or a small icon signals that the site is complete and deliberate.
2. Technical — without a favicon, every browser automatically requests `/favicon.ico` on every page load. Since the file doesn't exist, Vercel returns a 404 error. This 404 shows up in your analytics and logs on every single visit, which is noisy and slightly wasteful.

**[YOU] — Step 1:** Go to favicon.io, click "Favicon from Text," type "CP", pick a style and colors that match your site (dark background, blue or white letters), and download the package. Put the `favicon.ico` file in the project root folder.

**File to edit after:** `index.html` — add `<link rel="icon">` to `<head>`

---

### B3 — Add `width` and `height` to profile photo

**What it is:** Two attributes on the `<img>` tag that tell the browser the image's dimensions before it loads.

**Why it matters:** When your page loads, the browser reads the HTML top to bottom and starts laying out the page. When it hits your `<img>` tag with no dimensions, it has to wait until the image downloads to know how much space to reserve. Until then, the About section layout is incomplete — and when the image finally arrives, everything shifts. This "layout shift" is measured by Google as a Core Web Vitals metric called CLS (Cumulative Layout Shift). A high CLS score hurts your search ranking. Adding the dimensions lets the browser reserve the right space immediately, so nothing jumps.

**File to edit:** `index.html` line 61

---

## Group C — Anti-Bot (Email Protection)

---

### C1 — JS-rendered email address

**What it is:** Moving your email address out of the raw HTML and into JavaScript so it's assembled at runtime.

**Why it matters:** Spam bots crawl the internet downloading HTML files and scanning for email addresses. Your email (`collindphan@gmail.com`) currently appears 4 times in plain HTML — every basic scraper finds it immediately. The most practical defense for a static site like yours: store the email encoded in JavaScript, not in HTML. When a real visitor loads the page, their browser runs the JavaScript and inserts the email into the page normally — they see and click it just like before. But a bot that only reads HTML (the majority of harvesters) never sees the address at all.

This isn't airtight — sophisticated bots also run JavaScript — but it stops the large majority of basic email harvesters that cause spam.

**Files to edit:** `index.html` (replace email text/hrefs with data attributes), `assets/site.js` (add decoder function)

---

## Group D — Code Health (Dead Code Removal)

Dead code is code that exists in a file but no longer does anything. It doesn't break the site, but it makes the codebase larger and harder to read. All four items below are leftovers from Phase 01/02 changes.

---

### D1 — Delete dead accordion CSS (~150 lines)

**Why it's dead:** The old project accordion (`<details>`/`<summary>` HTML elements) was replaced in Phase 02 with the flat `project-row` list. All the CSS rules that styled the accordion (`.project__summary`, `.project__body`, `.project__state-badge`, etc.) were left behind. Every visitor downloads these ~150 lines of CSS even though they apply to nothing on the page.

**File to edit:** `assets/styles.css` — delete all `.project__*` rule blocks

---

### D2 — Delete dead background and eyebrow CSS

**Why it's dead:** Two leftover blocks:
- `.section__eyebrow` — styled the section label text (e.g. "ABOUT", "RESUME") that was removed in Phase 02. No HTML uses this class anymore.
- `html[data-bg="solid"]` and `html[data-bg="textured"]` — styled alternate background modes from a Background tweaks group that was removed.

**File to edit:** `assets/styles.css`

---

### D3 — Remove dead `BG_KEY` JavaScript

**Why it's dead:** `BG_KEY` is a localStorage constant for the same background-switcher that was removed. On every single page load, `applyStored()` reads this key from localStorage and sets a `data-bg` attribute on the HTML element — but nothing reads that attribute anymore. It's 2 lines of code that run for no reason.

**File to edit:** `assets/site.js`

---

### D4 — Decide on `Blob Resume.pdf`

**The situation:** The PDF file exists in `uploads/` and will be deployed to Vercel at `/uploads/Blob%20Resume.pdf`. Nothing on the site links to it. You have two reasonable options:

- **Option A — Add a download link** next to the Print button in the resume section. Good for visitors who want a file copy without printing. If you do this, rename the file to something clean like `Collin-Phan-Resume.pdf` first.
- **Option B — Delete the file.** The "Print / Save as PDF" button already covers PDF export. This keeps the repo clean.

**Your call.** Tell Claude which option and it'll be done.

---

## Group E — Robustness

---

### E1 — Wrap `localStorage` in error handling

**What it is:** A try/catch block around every call that reads or writes to localStorage.

**Why it matters:** Some browsers block access to `localStorage` entirely. This happens in:
- Safari in Private Browsing mode (common — many people browse in private when researching someone)
- Some corporate browsers with strict security settings
- Certain browser extensions

When localStorage is blocked, every call to `localStorage.getItem()` or `localStorage.setItem()` throws a JavaScript error immediately. Currently this would crash the page initialization before it finishes — the theme wouldn't apply (wrong colors on load), the nav collapse state wouldn't work, and the tweaks panel would break. A try/catch means the site still loads and works correctly; it just won't remember your visitor's preferences between visits, which is an acceptable fallback.

**File to edit:** `assets/site.js` — wrap all localStorage calls in a helper function

---

## Group F — Manual Testing [YOU]

These require your browser. Do them after Group E is applied.

---

### F1 — Print / PDF layout test

Open the site in Chrome. Scroll to the Resume section. Click "Print / Save as PDF." In the print preview, check:
- [ ] The left column (COLLIN / PHAN watermark) is hidden
- [ ] Resume content fills the full page width
- [ ] Nothing is cut off at the edges
- [ ] Text is readable at normal print size

---

### F2 — Mobile walkthrough

In Chrome, right-click anywhere → Inspect → click the phone/tablet icon at the top of the DevTools panel to enter device mode. Set the width to 390px (iPhone 14 size). Scroll through every section:
- [ ] Landing hero text fits without overflow
- [ ] About photo shows (doesn't break layout)
- [ ] Resume collapses to a single column (name column hides)
- [ ] Project rows are readable
- [ ] Nav collapsed state looks correct
- [ ] No horizontal scrollbar at any point

---

### F3 — Lighthouse audit

In Chrome DevTools, click the "Lighthouse" tab (you may need to click ">>" to find it). Select "Desktop" mode and click "Analyze page load." Share any category scoring below 80 — those are worth fixing before launch.

---

## Task Order

Group A must be completed before pushing to GitHub. Everything else can be done in any order.

```
[YOU: get favicon.ico → B2-step1]

A1 → A2 → A3
B1 → B2 → B3
C1
D1 → D2 → D3 → D4 (your call first)
E1

[YOU: F1 → F2 → F3]
```

---

## Loop Position After This Plan

```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ✓        ✓     [Phase 01]
  ✓        ✓        ✓     [Phase 02]
  ✓        ○        ○     [Phase 03 — Code review fixes + pre-launch polish]
  ○        ○        ○     [Phase 04 — Deploy: GitHub + Vercel + domain]
```

---
*Written: 2026-05-17*
