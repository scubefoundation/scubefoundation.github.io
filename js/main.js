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

  });
})();
