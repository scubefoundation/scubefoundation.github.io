# CLAUDE.md — S Cube Foundation Website

> **If you are Claude (or any AI assistant) opening this project: read this file first.**
> It gives you everything you need to continue the work confidently. A human handed you this
> project to maintain and extend. Be proactive, edit files directly, and keep the style consistent.

---

## What this project is

The official website for **S Cube Foundation** — a community-focused non-profit organization based
in **Dharwad, Karnataka, India**. Focus areas: **preventive healthcare, environment, education, and
sustainable community development.**

- **Tagline:** *Serving with Purpose. Transforming Lives.*
- **Design brief (important):** *"Make it look like a professional organization rather than a
  charity."* Clean, corporate, trustworthy. Modeled on **Akshaya Patra** and **Smile Foundation**
  (healthcare blue + white, warm accent, community warmth).
- **Live site:** https://scubefoundation.github.io
- **Code repo:** https://github.com/scubefoundation/scubefoundation.github.io (public, MIT-licensed code)

## Tech stack (deliberately simple)

Plain **HTML + CSS + vanilla JavaScript**. **No build step, no frameworks, no dependencies.** The
site opens by double-clicking `index.html` and is hosted as static files. This is intentional so it
is cheap/free to host, fast, and easy for anyone to edit. **Do not** introduce React, a bundler, npm
packages, or a build pipeline unless the owner explicitly asks.

## File structure

```
.
├── index.html            # The homepage — ALL content lives here (8 sections)
├── css/styles.css        # Design system: color tokens (:root), typography, layout, responsive
├── js/main.js            # Vanilla JS: hero slider, mobile menu, animated impact counters
├── assets/
│   ├── logo/logo.png     # Real S Cube Foundation logo (also the favicon)
│   ├── logo/logo.svg     # Fallback vector placeholder logo (not currently used)
│   ├── images/           # Photos used on the homepage (hero-*.jpg, about.jpg, init-*.jpg)
│   └── images/gallery/   # 14 original event photos (p1–p14) reserved for future inner pages
├── content-source.md     # All website copy from the client's requirements doc — edit text here
├── docs/                 # Reference material (original requirements, project history)
├── README.md             # Human-facing readme (how to view, edit, deploy)
├── CLAUDE.md             # THIS FILE — AI context
├── LICENSE               # MIT for code; NOTE: logo + photos are © S Cube Foundation, not reusable
├── .nojekyll             # Tells GitHub Pages to serve files as-is (do not delete)
└── .gitignore
```

## The 8 homepage sections (in `index.html`)

1. **Header** — sticky nav (Home, About Us, Our Work, Get Involved, Contact Us) + mobile hamburger
2. **Hero** — auto-rotating 3-slide image slider with headline + CTA buttons
3. **Who We Are** — About + Mission/Vision cards + 7 clickable Focus-Area cards
4. **Our Impact** — animated stat counters (300+ screened, 100+ trees, etc.)
5. **Featured Initiatives** — 5 cards of real events (Yoga Day, Health Camp, Tree Plantation, School
   Programme, Elderly Care)
6. **Partners & Collaborators**
7. **Get Involved** — CTA band (Volunteer / Partner / Organize a Health Camp / Contact)
8. **Contact + Footer** — address, phones, email, Google Map, social icons, quick links

## Working rules / conventions

- **Content copy** comes from the client. `content-source.md` is the source of truth for text —
  update it alongside `index.html`.
- **Colors** are CSS variables at the top of `css/styles.css` (`:root { --navy, --blue, --accent … }`).
  Change the theme there, not inline.
- **Focus-Area cards** currently link to `#` — they are placeholders for future dedicated pages.
- **Photos:** all 14 originals are in `assets/images/gallery/` for reuse on inner pages. Keep aspect
  ratios sensible (hero ≈ 16:9, cards ≈ 16:10, about ≈ 4:3); CSS uses `object-fit: cover`.
- **Accessibility & responsiveness** are already in place (semantic HTML, alt text, mobile-first
  breakpoints). Preserve them.
- The **S Cube Foundation name, logo, and photographs are the client's property** — never reuse them
  outside this project.

## Contact details (real — already in the site)

- **Phones:** +91 81972 76461 · +91 91087 61999
- **Email:** info@scubefoundation.org
- **Location:** Dharwad, Karnataka, India

## How to preview locally

Just open `index.html` in a browser. (For the Google Map embed to load, optionally run
`python3 -m http.server` in this folder and visit http://localhost:8000.)

## How to deploy / update the live site

Hosted free on **GitHub Pages** from the `main` branch of
`github.com/scubefoundation/scubefoundation.github.io`. Auto-HTTPS. To publish changes:

```bash
git add -A
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds automatically in ~1 minute → live at https://scubefoundation.github.io.
(First-time on a new machine: install GitHub CLI, run `gh auth login` as the `scubefoundation`
account, or use a git credential/token.)

## Status & roadmap

**✅ Done — v1 (homepage):** fully built, responsive, real logo + real event photos + real contact
details, deployed live and verified on desktop and mobile.

**⏳ Pending / good next tasks (v2):**
1. **Inner pages** — a full *About Us* page, 7 individual *Focus-Area* pages (Healthcare, Environment,
   Education, Women Empowerment, Youth, Elderly Care, Community Development), and an *Our Work* page.
   Reuse the header/footer markup from `index.html` and the existing CSS classes for consistency.
2. **Working contact form** — currently the buttons open email (`mailto:`). Could add a form via a
   free service (e.g. Formspree) with no backend.
3. **Photo gallery page** — use the 14 images in `assets/images/gallery/`.
4. **Social media links** — the Facebook/Instagram/LinkedIn/YouTube icons in the top bar and footer
   currently point to `#`; replace with real URLs.
5. **Exact address + Google Map pin** — currently generic "Dharwad, Karnataka."
6. **Optional custom domain** — e.g. `scubefoundation.org` (the only paid item, ~₹1,000/yr). Hosting
   stays free; point the domain's DNS at GitHub Pages and add a `CNAME` file.

See `docs/PROJECT-CONTEXT.md` for the full history of how this site was built.
