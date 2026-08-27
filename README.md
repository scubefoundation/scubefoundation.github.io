# S Cube Foundation — Website

Website for **S Cube Foundation**, a community-focused non-profit in Dharwad, Karnataka.
Built as a simple, fast, professional static site — no build tools required.

> Tagline: *Serving with Purpose. Transforming Lives.*

**🌐 Live site:** https://scubefoundation.github.io
**Hosting:** GitHub Pages (free, global CDN, auto-HTTPS). **Cost:** ₹0.

### How to update the live site
Edit files locally, then:
```bash
git add -A
git commit -m "Describe your change"
git push
```
GitHub Pages rebuilds automatically in ~1 minute. That's the whole deploy process.

---

## How to view it

**Just double-click `index.html`** — it opens in any web browser. That's it.

(For the embedded Google Map and best results, you can also serve it locally:
`python3 -m http.server` from this folder, then open http://localhost:8000)

## Project structure

```
S-Cube-Foundation-Website/
├── index.html          # The homepage (all sections live here)
├── css/styles.css      # All styling — colours, fonts, layout, responsive rules
├── js/main.js          # Hero slider, mobile menu, animated counters
├── assets/
│   ├── logo/           # Logo (currently a placeholder SVG — replace with the real one)
│   ├── images/         # Hero, about & initiative photos (placeholders — replace with real photos)
│   └── icons/          # Icons
├── content-source.md   # All website text, from the requirements doc — edit text here
└── README.md           # This file
```

## How to customise (common edits)

- **Text:** open `index.html` and edit directly, or update `content-source.md` first as your reference.
- **Contact details:** search `index.html` for `XXXXX`, `info@scubefoundation.org`, and the address —
  replace with the real phone, email, and address. The Google Map is set to "Dharwad, Karnataka";
  update the `iframe` `src` to the exact location.
- **Colours:** open `css/styles.css` and edit the variables at the very top (`:root { ... }`) —
  e.g. `--blue`, `--navy`, `--accent`.
- **Logo:** drop the real logo into `assets/logo/` and update the `src` in `index.html`
  (`assets/logo/logo.svg`). PNG/SVG both fine.
- **Photos:** drop real photos into `assets/images/` and replace the placeholder filenames referenced
  in `index.html` (e.g. `hero-1.svg`, `about.svg`, `init-tree.svg`). Keep similar aspect ratios
  (hero ≈ 16:9, initiatives ≈ 16:10, about ≈ 4:3) for a clean fit.
- **Social links:** replace the `href="#"` on the social icons (top bar and footer) with real URLs.

## Sections on the homepage

Header · Hero · Who We Are (About + Mission/Vision) · Focus Areas (7 cards) · Our Impact (stats) ·
Featured Initiatives · Partners · Get Involved · Contact + Footer.

## Deploying (when ready)

Any static host works — no server needed:
- **Netlify / Vercel:** drag-and-drop this folder, or connect a Git repo.
- **GitHub Pages:** push to a repo, enable Pages on the branch.
- **Any shared hosting / cPanel:** upload the folder contents to `public_html`.

## Status

**v1 — Homepage, with real assets.**
- ✅ Real logo in header + as favicon (`assets/logo/logo.png`)
- ✅ Real S Cube Foundation event photos in hero, About, and all 5 Featured Initiatives
- ✅ Real contact details: phones +91 81972 76461 / +91 91087 61999, email info@scubefoundation.org
- ⏳ Still to confirm: full street **address** (currently "Dharwad, Karnataka, India") and the exact
  **Google Map pin**; **social media links** (currently `#`); a transparent-background logo for the
  footer.

All 14 original photos are preserved in `assets/images/gallery/` for use on future inner pages.

**Next (v2):** inner pages (About, individual Focus-Area pages, Get Involved forms), a working
contact form, a photo gallery, and deployment to a live link.
