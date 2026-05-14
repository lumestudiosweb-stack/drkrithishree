/* =============================================================
   Dr. Krithishree S.S. — Shared site JavaScript
   Auto-detects elements, so it runs safely on every page.
   ============================================================= */
(function () {
    "use strict";

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.addEventListener("DOMContentLoaded", function () {

        /* ---------- Mobile menu ---------- */
        var menuBtn   = document.getElementById("menuBtn");
        var closeBtn  = document.getElementById("closeMenuBtn");
        var menu      = document.getElementById("mobileMenu");
        var overlay   = document.getElementById("menuOverlay");
        function openMenu()  { if (menu) menu.classList.add("open"); if (overlay) overlay.classList.add("open"); document.body.style.overflow = "hidden"; }
        function closeMenu() { if (menu) menu.classList.remove("open"); if (overlay) overlay.classList.remove("open"); document.body.style.overflow = ""; }
        if (menuBtn)  menuBtn.addEventListener("click", openMenu);
        if (closeBtn) closeBtn.addEventListener("click", closeMenu);
        if (overlay)  overlay.addEventListener("click", closeMenu);
        if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

        /* ---------- Scroll reveals ---------- */
        var revealEls = document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-blur,.fade-in,.stagger");
        if (prefersReduced) {
            revealEls.forEach(function (el) { el.classList.add("visible"); });
        } else if ("IntersectionObserver" in window) {
            var revealObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
            revealEls.forEach(function (el) { revealObs.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add("visible"); });
        }

        /* ---------- Animated counters ---------- */
        function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
        function runCounter(el) {
            var target = parseInt(el.getAttribute("data-count"), 10);
            if (!target || el.dataset.done === "1") return;
            el.dataset.done = "1";
            if (prefersReduced) { el.textContent = target.toLocaleString("en-IN"); return; }
            var dur = 1900, start = null;
            function step(ts) {
                if (start === null) start = ts;
                var p = Math.min((ts - start) / dur, 1);
                el.textContent = Math.floor(easeOutCubic(p) * target).toLocaleString("en-IN");
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target.toLocaleString("en-IN");
            }
            requestAnimationFrame(step);
        }
        var counters = document.querySelectorAll(".counter[data-count]");
        if (counters.length && "IntersectionObserver" in window) {
            var cObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) { runCounter(entry.target); cObs.unobserve(entry.target); }
                });
            }, { threshold: 0.5 });
            counters.forEach(function (el) { cObs.observe(el); });
        } else {
            counters.forEach(runCounter);
        }

        /* ---------- Header scroll state + scroll progress ---------- */
        var header   = document.querySelector(".site-header");
        var progress = document.querySelector(".scroll-progress");
        var scrollTopBtn = document.getElementById("scrollTop");
        var ticking = false;
        function onScroll() {
            var y = window.scrollY || window.pageYOffset;
            if (header) header.classList.toggle("scrolled", y > 30);
            if (scrollTopBtn) scrollTopBtn.classList.toggle("show", y > 560);
            if (progress) {
                var h = document.documentElement.scrollHeight - window.innerHeight;
                progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
            }
            ticking = false;
        }
        window.addEventListener("scroll", function () {
            if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
        }, { passive: true });
        onScroll();
        if (scrollTopBtn) scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
        });

        /* ---------- Active nav highlight (in-page sections) ---------- */
        var navLinks = document.querySelectorAll(".site-header .nav-link");
        var sections = [];
        navLinks.forEach(function (link) {
            var href = link.getAttribute("href") || "";
            if (href.indexOf("#") === 0 && href.length > 1) {
                var s = document.getElementById(href.slice(1));
                if (s) sections.push({ link: link, el: s });
            }
        });
        if (sections.length && "IntersectionObserver" in window) {
            var navObs = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(function (l) { l.classList.remove("active"); });
                        var match = sections.find(function (s) { return s.el === entry.target; });
                        if (match) match.link.classList.add("active");
                    }
                });
            }, { threshold: 0.4, rootMargin: "-20% 0px -55% 0px" });
            sections.forEach(function (s) { navObs.observe(s.el); });
        }

        /* ---------- Hero slider ---------- */
        var slides = document.querySelectorAll(".slide");
        if (slides.length > 1) {
            var dots = document.querySelectorAll(".slider-dot");
            var idx = 0, timer;
            function show(n) {
                slides.forEach(function (s, i) { s.classList.toggle("active", i === n); });
                dots.forEach(function (d, i) { d.classList.toggle("active", i === n); });
                idx = n;
            }
            function next() { show((idx + 1) % slides.length); }
            function start() { if (!prefersReduced) timer = setInterval(next, 5500); }
            function stop() { clearInterval(timer); }
            dots.forEach(function (d, i) {
                d.addEventListener("click", function () { stop(); show(i); start(); });
            });
            show(0); start();
        }

        /* ---------- Spotlight hover (pointer-tracked glow) ---------- */
        if (!prefersReduced && window.matchMedia("(pointer: fine)").matches) {
            document.querySelectorAll(".spotlight").forEach(function (el) {
                el.addEventListener("pointermove", function (e) {
                    var r = el.getBoundingClientRect();
                    el.style.setProperty("--mx", (e.clientX - r.left) + "px");
                    el.style.setProperty("--my", (e.clientY - r.top) + "px");
                });
            });
        }

        /* ---------- Subtle parallax on [data-parallax] ---------- */
        if (!prefersReduced) {
            var parallaxEls = document.querySelectorAll("[data-parallax]");
            if (parallaxEls.length) {
                var pTicking = false;
                function parallax() {
                    var vh = window.innerHeight;
                    parallaxEls.forEach(function (el) {
                        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
                        var r = el.getBoundingClientRect();
                        var offset = (r.top + r.height / 2 - vh / 2) * speed * -1;
                        el.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
                    });
                    pTicking = false;
                }
                window.addEventListener("scroll", function () {
                    if (!pTicking) { requestAnimationFrame(parallax); pTicking = true; }
                }, { passive: true });
                parallax();
            }
        }

        /* ---------- FAQ accordion: smooth height + single-open ---------- */
        var accordions = document.querySelectorAll("details.acc");
        accordions.forEach(function (d) {
            d.addEventListener("toggle", function () {
                if (d.open) {
                    accordions.forEach(function (other) {
                        if (other !== d) other.open = false;
                    });
                }
            });
        });

        /* ---------- Appointment form (client-side only) ---------- */
        var form = document.getElementById("appointment-form");
        if (form) {
            var feedback = document.getElementById("form-feedback");
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                var name  = (form.name  && form.name.value  || "").trim();
                var phone = (form.phone && form.phone.value || "").trim();
                if (!feedback) return;
                feedback.classList.remove("hidden");
                if (!name || !phone) {
                    feedback.textContent = "Please share your name and mobile number so we can reach you.";
                    feedback.style.color = "#c0362c";
                    return;
                }
                feedback.textContent = "Thank you! Dr. Krithishree's team will reach out within one working day.";
                feedback.style.color = "#1c648e";
                form.reset();
            });
        }

        /* ---------- Carousels ---------- */
        document.querySelectorAll("[data-carousel]").forEach(function (wrap) {
            var track = wrap.querySelector(".carousel");
            var prev  = wrap.querySelector("[data-carousel-prev]");
            var next  = wrap.querySelector("[data-carousel-next]");
            if (!track) return;
            function step() {
                var s = track.querySelector(".carousel-slide");
                return s ? s.offsetWidth + 24 : 360;
            }
            function update() {
                if (prev) prev.disabled = track.scrollLeft <= 4;
                if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
            }
            if (prev) prev.addEventListener("click", function () {
                track.scrollBy({ left: -step(), behavior: prefersReduced ? "auto" : "smooth" });
            });
            if (next) next.addEventListener("click", function () {
                track.scrollBy({ left: step(), behavior: prefersReduced ? "auto" : "smooth" });
            });
            track.addEventListener("scroll", function () {
                if (!track._tk) { track._tk = true; requestAnimationFrame(function () { update(); track._tk = false; }); }
            }, { passive: true });
            window.addEventListener("resize", update, { passive: true });
            update();
        });

        /* ---------- Footer year ---------- */
        var yr = document.getElementById("year");
        if (yr) yr.textContent = new Date().getFullYear();

        /* ---------- Page-load fade ---------- */
        document.body.classList.add("loaded");
    });
})();
