/* ==========================================================================
   Animations — scroll reveal, back-to-top, button ripple
   ========================================================================== */

(function () {
  /* ---- Scroll reveal via IntersectionObserver ---- */
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-scale, .reveal-left, .reveal-right, .stagger"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---- Back to top ---- */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (backToTop) {
      backToTop.classList.toggle("is-visible", window.scrollY > 500);
    }
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Button ripple effect ---- */
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
})();
