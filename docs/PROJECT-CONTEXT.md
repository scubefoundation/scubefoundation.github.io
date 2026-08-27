# Project Context & History — S Cube Foundation Website

This document captures **how this website came to be**, the decisions made, and where things stand —
so anyone (a developer, the client, or an AI assistant like Claude) can pick it up and continue
without losing context. For working instructions, see `../CLAUDE.md`.

---

## Origin

The client, **S Cube Foundation** (a community non-profit in Dharwad, Karnataka), provided a Word
document specifying the website they wanted (`NGO-website-requirements.docx`, in this folder). It
described an 8-section site with most of the copy pre-written, and included 5 screenshots of the
**Akshaya Patra** website as the visual reference. The explicit brief was:

> *"Make it look like a professional organization rather than a charity."*
> A blend of corporate professionalism, healthcare (blue/white), community warmth, and government-
> collaboration credibility.

## Key decisions

| Decision | Choice | Why |
|---|---|---|
| Tech stack | Plain HTML/CSS/vanilla JS, no build tools | Simple, fast, free to host, anyone can edit |
| Look & feel | Healthcare blue + white, warm amber accent | Matches Akshaya Patra reference + brief |
| Scope of v1 | Full polished homepage (all 8 sections) | Something real to see and share first |
| Assets | Client's real logo + 14 real event photos | Credibility over stock imagery |
| Hosting | GitHub Pages (free, global CDN, auto-HTTPS) | "Not a single penny," handles high traffic, open source |
| Domain | Free subdomain `scubefoundation.github.io` | Zero cost; custom domain optional later |
| Repo owner | GitHub account/org **`scubefoundation`** | Clean branded URL; client owns it |

## What was built (v1)

A complete, responsive homepage with all 8 sections from the requirements doc:
Header · Hero slider · Who We Are (About + Mission/Vision + 7 Focus-Area cards) · Our Impact
(animated counters) · Featured Initiatives (5 real events) · Partners · Get Involved · Contact +
Footer.

Real assets used:
- **Logo:** `assets/logo/logo.png` (header + favicon)
- **Hero slides:** International Yoga Day, Tree Plantation, Health Check-up Camp (with S Cube banner)
- **About:** school community programme photo (with S Cube banner)
- **Featured Initiatives:** International Yoga Day, Community Health Check-up Camp, World Environment
  Day Tree Plantation, School Health & Awareness Programme, Elderly Care & Screening Visits
- All 14 original photos preserved in `assets/images/gallery/` (named p1–p14) for future pages.

Real contact details wired in: phones +91 81972 76461 / +91 91087 61999, email
info@scubefoundation.org.

## Deployment

- Local folder made into a git repo, committed, pushed to
  `github.com/scubefoundation/scubefoundation.github.io` (public).
- GitHub Pages auto-enabled (repos named `<owner>.github.io` serve at the root URL).
- `.nojekyll` added so folders (`css/`, `js/`, `assets/`) serve as-is.
- Verified live: HTTP 200 over HTTPS, all assets load, renders correctly on desktop and mobile.
- **Result:** https://scubefoundation.github.io — free forever, zero maintenance.

To update: edit files → `git add -A && git commit -m "…" && git push` → live in ~1 minute.

## Current status

**v1 homepage is DONE and LIVE.** See `../CLAUDE.md` → "Status & roadmap" for the pending v2 items
(inner pages, contact form, gallery page, social links, exact address/map pin, optional custom
domain).

## Notes for whoever continues this

- Keep the stack simple (no frameworks/build tools) unless the client asks otherwise.
- Reuse the existing header/footer and CSS classes when adding inner pages so everything stays
  visually consistent.
- The `content-source.md` file in the project root holds all the approved copy — the single source of
  truth for wording.
- The client's name, logo, and photos are their property — do not reuse outside this project.
