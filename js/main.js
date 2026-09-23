/* ==========================================================================
   S Cube Foundation — main.js
   Vanilla JS: hero slider, mobile nav, animated impact counters, footer year.
   No external libraries.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Mobile nav toggle ---------- */
    var navToggle = document.getElementById("navToggle");
    var nav = document.getElementById("nav");
    if (navToggle && nav) {
      navToggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        navToggle.classList.toggle("is-open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      // Close menu after clicking a link (mobile)
      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          nav.classList.remove("is-open");
          navToggle.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* ---------- Hero slider ---------- */
    (function heroSlider() {
      var slides = Array.prototype.slice.call(document.querySelectorAll(".hero__slide"));
      var dotsWrap = document.getElementById("heroDots");
      var prevBtn = document.getElementById("heroPrev");
      var nextBtn = document.getElementById("heroNext");
      if (slides.length === 0) return;

      var current = 0;
      var timer = null;
      var INTERVAL = 6000;

      // Build dots
      var dots = [];
      if (dotsWrap) {
        slides.forEach(function (_, i) {
          var b = document.createElement("button");
          b.className = "hero__dot" + (i === 0 ? " is-active" : "");
          b.setAttribute("aria-label", "Go to slide " + (i + 1));
          b.addEventListener("click", function () { goTo(i); resetTimer(); });
          dotsWrap.appendChild(b);
          dots.push(b);
        });
      }

      function goTo(index) {
        slides[current].classList.remove("is-active");
        if (dots[current]) dots[current].classList.remove("is-active");
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("is-active");
        if (dots[current]) dots[current].classList.add("is-active");
      }
      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      function startTimer() {
        if (slides.length < 2) return;
        timer = setInterval(next, INTERVAL);
      }
      function resetTimer() { clearInterval(timer); startTimer(); }

      if (nextBtn) nextBtn.addEventListener("click", function () { next(); resetTimer(); });
      if (prevBtn) prevBtn.addEventListener("click", function () { prev(); resetTimer(); });

      // Pause on hover
      var heroEl = document.querySelector(".hero");
      if (heroEl) {
        heroEl.addEventListener("mouseenter", function () { clearInterval(timer); });
        heroEl.addEventListener("mouseleave", startTimer);
      }
      startTimer();
    })();

    /* ---------- Animated impact counters ---------- */
    (function counters() {
      var nums = Array.prototype.slice.call(document.querySelectorAll(".stat__num"));
      if (nums.length === 0) return;

      function animate(el) {
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var span = el.querySelector(".num");
        if (!span) return;
        var duration = 1400;
        var start = null;

        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          // easeOutCubic
          var eased = 1 - Math.pow(1 - progress, 3);
          span.textContent = Math.round(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animate(entry.target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });
        nums.forEach(function (n) { io.observe(n); });
      } else {
        nums.forEach(animate);
      }
    })();

    /* ---------- Founder's message read more/less ---------- */
    (function founderMessage() {
      var body = document.getElementById("founderBody");
      var toggle = document.getElementById("founderToggle");
      if (!body || !toggle) return;

      toggle.addEventListener("click", function () {
        var expanded = body.classList.toggle("is-expanded");
        toggle.textContent = expanded ? "Show Less ↑" : "Read Full Message ↓";
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
    })();

    /* ---------- Core values popup ---------- */
    (function coreValues() {
      var cards = Array.prototype.slice.call(document.querySelectorAll(".value-card"));
      var modal = document.getElementById("valueModal");
      if (cards.length === 0 || !modal) return;

      var iconEl = document.getElementById("valueModalIcon");
      var titleEl = document.getElementById("valueModalTitle");
      var descEl = document.getElementById("valueModalDesc");
      var closeBtn = document.getElementById("valueModalClose");
      var backdrop = document.getElementById("valueModalBackdrop");
      var lastFocused = null;

      function openModal(card) {
        lastFocused = document.activeElement;
        var icon = card.querySelector(".value-card__icon");
        var title = card.querySelector("h3");
        iconEl.textContent = icon ? icon.textContent : "";
        titleEl.textContent = title ? title.textContent : "";
        descEl.textContent = card.getAttribute("data-desc") || "";
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        closeBtn.focus();
      }
      function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        if (lastFocused && lastFocused.focus) lastFocused.focus();
      }

      cards.forEach(function (card) {
        card.addEventListener("click", function () { openModal(card); });
      });
      closeBtn.addEventListener("click", closeModal);
      backdrop.addEventListener("click", closeModal);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
      });
    })();

    /* ---------- Photo gallery page lightbox (works on any page with .photo-grid) ---------- */
    (function pageLightbox() {
      var thumbs = Array.prototype.slice.call(document.querySelectorAll(".photo-grid__item img"));
      var lightbox = document.getElementById("lightbox");
      if (thumbs.length === 0 || !lightbox) return;

      var lightboxImg = document.getElementById("lightboxImg");
      var lightboxCaption = document.getElementById("lightboxCaption");
      var lightboxCounter = document.getElementById("lightboxCounter");
      var lightboxClose = document.getElementById("lightboxClose");
      var lightboxBackdrop = document.getElementById("lightboxBackdrop");
      var lightboxPrev = document.getElementById("lightboxPrev");
      var lightboxNext = document.getElementById("lightboxNext");

      var currentIndex = 0;

      function renderLightbox() {
        var img = thumbs[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.getAttribute("data-caption") || "";
        lightboxCounter.textContent = (currentIndex + 1) + " / " + thumbs.length;
      }
      function openLightbox(index) {
        currentIndex = index;
        renderLightbox();
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
      }
      function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
      }
      function showPrev() { currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length; renderLightbox(); }
      function showNext() { currentIndex = (currentIndex + 1) % thumbs.length; renderLightbox(); }

      thumbs.forEach(function (img, index) {
        img.addEventListener("click", function () { openLightbox(index); });
      });
      lightboxClose.addEventListener("click", closeLightbox);
      lightboxBackdrop.addEventListener("click", closeLightbox);
      lightboxPrev.addEventListener("click", showPrev);
      lightboxNext.addEventListener("click", showNext);

      document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("is-open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      });
    })();

  });
})();
