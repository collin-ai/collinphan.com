/* ============================================================
   Collin Phan — single-scroll site behavior
   - Theme toggle (persisted)
   - Sticky nav with scroll-spy indicator
   - Collapse / expand nav (tucks into right corner)
   - Smooth-scroll on nav clicks
   - Cursor follower
   - Tweaks (font / accent / background)
   ============================================================ */
(function () {
  "use strict";

  const THEME_KEY = "cp_theme";
  const HERO_FONT_KEY = "cp_hero_font";
  const ACCENT_KEY = "cp_accent";
  const COLLAPSE_KEY = "cp_nav_collapsed";
  const BLOOM_KEY = "cp_bloom";

  function lsGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch {} }

  const root = document.documentElement;

  function applyAccent(name) {
    const accents = {
      blue:    { c: "oklch(0.62 0.18 250)", soft: "oklch(0.92 0.05 250)", pill: "oklch(0.78 0.14 250)", glow: "oklch(0.62 0.18 250 / 0.38)" },
      teal:    { c: "oklch(0.62 0.13 195)", soft: "oklch(0.92 0.05 195)", pill: "oklch(0.78 0.12 195)", glow: "oklch(0.62 0.13 195 / 0.38)" },
      violet:  { c: "oklch(0.58 0.20 290)", soft: "oklch(0.92 0.05 290)", pill: "oklch(0.78 0.14 290)", glow: "oklch(0.58 0.20 290 / 0.38)" },
      amber:   { c: "oklch(0.72 0.16 75)",  soft: "oklch(0.94 0.06 75)",  pill: "oklch(0.82 0.14 75)",  glow: "oklch(0.72 0.16 75 / 0.40)" },
      rose:    { c: "oklch(0.62 0.18 15)",  soft: "oklch(0.92 0.05 15)",  pill: "oklch(0.78 0.14 15)",  glow: "oklch(0.62 0.18 15 / 0.38)" }
    };
    const a = accents[name] || accents.blue;
    root.style.setProperty("--accent", a.c);
    root.style.setProperty("--accent-soft", a.soft);
    root.style.setProperty("--pill-active", a.pill);
    root.style.setProperty("--cursor-glow", a.glow);
    const hueMap = { blue: 245, teal: 195, violet: 290, amber: 75, rose: 15 };
    const h = hueMap[name] || 245;
    if (root.getAttribute("data-theme") === "dark") {
      root.style.setProperty("--bg-grad-1", `oklch(0.34 0.12 ${h})`);
      root.style.setProperty("--bg-grad-2", `oklch(0.18 0.08 ${h})`);
    } else {
      root.style.setProperty("--bg-grad-1", `oklch(0.92 0.06 ${h})`);
      root.style.setProperty("--bg-grad-2", `oklch(0.95 0.03 ${h})`);
    }
  }

  function applyStored() {
    const theme = lsGet(THEME_KEY) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-hero-font", lsGet(HERO_FONT_KEY) || "grotesk");
    const accent = lsGet(ACCENT_KEY) || "blue";
    root.setAttribute("data-accent", accent);
    applyAccent(accent);
    root.setAttribute("data-bloom", lsGet(BLOOM_KEY) || "on");
  }
  applyStored();

  function themeIcon(theme) {
    if (theme === "dark") {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>`;
  }

  function buildNav() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const nav = header.querySelector(".nav");
    const items = nav.querySelector(".nav__items");
    const indicator = nav.querySelector(".nav__indicator");
    const themeBtn = nav.querySelector(".nav__theme");
    const collapseBtn = nav.querySelector(".nav__collapse");
    const expandBtn = nav.querySelector(".nav__expand");
    const links = [...items.querySelectorAll(".nav__link")];

    function setActive(id) {
      links.forEach(l => l.classList.toggle("is-active", l.dataset.target === id));
      paintIndicator();
    }
    function paintIndicator() {
      const active = items.querySelector(".nav__link.is-active");
      if (!active || !indicator) return;
      const itemsBox = items.getBoundingClientRect();
      const aBox = active.getBoundingClientRect();
      indicator.style.width = aBox.width + "px";
      indicator.style.transform = `translateX(${aBox.left - itemsBox.left}px)`;
      indicator.classList.add("is-ready");
    }

    requestAnimationFrame(() => requestAnimationFrame(paintIndicator));
    window.addEventListener("resize", paintIndicator);

    // Theme toggle
    if (themeBtn) {
      themeBtn.innerHTML = themeIcon(root.getAttribute("data-theme"));
      themeBtn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        lsSet(THEME_KEY, next);
        applyAccent(lsGet(ACCENT_KEY) || "blue");
        themeBtn.innerHTML = themeIcon(next);
      });
    }

    // Smooth-scroll on link clicks
    links.forEach(l => {
      l.addEventListener("click", (e) => {
        const target = l.dataset.target;
        const el = document.getElementById(target);
        if (!el) return;
        e.preventDefault();
        const hh = parseInt(getComputedStyle(root).getPropertyValue("--header-h")) || 84;
        const top = el.getBoundingClientRect().top + window.scrollY - hh;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });

    // Collapse / expand
    function setCollapsed(collapsed) {
      header.classList.toggle("is-collapsed", collapsed);
      lsSet(COLLAPSE_KEY, collapsed ? "1" : "0");
      // Re-paint indicator after layout settles (it's hidden when collapsed but we recompute on expand)
      if (!collapsed) requestAnimationFrame(() => requestAnimationFrame(paintIndicator));
    }
    if (collapseBtn) collapseBtn.addEventListener("click", () => setCollapsed(true));
    if (expandBtn)   expandBtn.addEventListener("click",   () => setCollapsed(false));
    setCollapsed(lsGet(COLLAPSE_KEY) === "1");

    // Scroll-spy via IntersectionObserver
    const sections = links.map(l => document.getElementById(l.dataset.target)).filter(Boolean);
    const headerH = parseInt(getComputedStyle(root).getPropertyValue("--header-h")) || 84;
    let visible = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        visible.set(e.target.id, e.intersectionRatio);
      });
      // Pick the section whose top is just past the header (closest to top of viewport from below)
      let bestId = null;
      let bestDist = Infinity;
      sections.forEach(s => {
        const r = s.getBoundingClientRect();
        // Distance of section top from just below header line
        const dist = Math.abs(r.top - headerH);
        // Prefer sections currently overlapping the band below header
        if (r.top - headerH <= 1 && r.bottom > headerH && dist < bestDist) {
          bestDist = dist;
          bestId = s.id;
        }
      });
      // Fallback: top-most visible section
      if (!bestId) {
        let topmost = Infinity;
        sections.forEach(s => {
          const r = s.getBoundingClientRect();
          if (r.bottom > headerH && r.top < topmost) {
            topmost = r.top;
            bestId = s.id;
          }
        });
      }
      if (bestId) setActive(bestId);
    }, {
      rootMargin: `-${headerH + 1}px 0px -10% 0px`,
      threshold: [0, 0.01, 0.25, 0.5, 0.75, 1]
    });
    sections.forEach(s => io.observe(s));

    // Initial active by hash or first
    const initial = (location.hash || "").replace("#", "") || links[0].dataset.target;
    setActive(initial);
    if (location.hash) {
      // Let the browser settle, then nudge for sticky offset
      setTimeout(() => {
        const el = document.getElementById(initial);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 8;
          window.scrollTo({ top, behavior: "auto" });
        }
      }, 50);
    }
  }

  function buildCursor() {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const el = document.createElement("div");
    el.className = "cursor-glow";
    document.body.appendChild(el);
    let tx = 0, ty = 0, x = 0, y = 0, raf = null;
    document.addEventListener("mousemove", (e) => {
      tx = e.clientX; ty = e.clientY;
      el.classList.add("is-visible");
      if (!raf) raf = requestAnimationFrame(loop);
    });
    document.addEventListener("mouseleave", () => el.classList.remove("is-visible"));
    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) raf = requestAnimationFrame(loop);
      else raf = null;
    }
  }

  function buildTweaks() {
    const panel = document.querySelector(".tweaks");
    if (!panel) return;
    panel.querySelectorAll("[data-tweak='font']").forEach((b) => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-value");
        root.setAttribute("data-hero-font", v);
        lsSet(HERO_FONT_KEY, v);
        sync();
      });
    });
    panel.querySelectorAll("[data-tweak='accent']").forEach((b) => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-value");
        applyAccent(v);
        lsSet(ACCENT_KEY, v);
        root.setAttribute("data-accent", v);
        sync();
      });
    });
    panel.querySelectorAll("[data-tweak='theme']").forEach((b) => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-value");
        root.setAttribute("data-theme", v);
        lsSet(THEME_KEY, v);
        applyAccent(lsGet(ACCENT_KEY) || "blue");
        const themeBtn = document.querySelector(".nav__theme");
        if (themeBtn) themeBtn.innerHTML = themeIcon(v);
        sync();
      });
    });
    panel.querySelectorAll("[data-tweak='bloom']").forEach((b) => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-value");
        root.setAttribute("data-bloom", v);
        lsSet(BLOOM_KEY, v);
        sync();
      });
    });
    const close = panel.querySelector(".tweaks__close");
    if (close) close.addEventListener("click", () => document.body.classList.remove("tweaks-on"));
    function sync() {
      panel.querySelectorAll("[data-tweak]").forEach((b) => {
        const t = b.getAttribute("data-tweak");
        const v = b.getAttribute("data-value");
        let cur;
        if (t === "font")        cur = root.getAttribute("data-hero-font");
        else if (t === "accent") cur = root.getAttribute("data-accent");
        else if (t === "theme")  cur = root.getAttribute("data-theme");
        else if (t === "bloom")  cur = root.getAttribute("data-bloom");
        b.classList.toggle("is-active", v === cur);
      });
    }
    sync();
  }

  function buildTweaksToggle() {
    const btn = document.querySelector(".nav__tweaks");
    if (!btn) return;
    btn.addEventListener("click", () => document.body.classList.toggle("tweaks-on"));
  }

  function buildMailto() {
    const e = atob("Y29sbGluZHBoYW5AZ21haWwuY29t");
    document.querySelectorAll("[data-mailto]").forEach(el => { el.href = "mailto:" + e; });
    document.querySelectorAll("[data-mailto-text]").forEach(el => { el.textContent = e; });
  }

  function buildBloomPause() {
    const resume = document.getElementById("resume");
    if (!resume) return;
    resume.addEventListener("mouseenter", () => document.body.classList.add("bloom-paused"));
    resume.addEventListener("mouseleave", () => document.body.classList.remove("bloom-paused"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildNav();
    buildCursor();
    buildTweaks();
    buildTweaksToggle();
    buildBloomPause();
    buildMailto();
  });
})();
