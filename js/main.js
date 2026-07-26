/* ==========================================================================
   Main — global init (smooth scroll for anchor links)
   ========================================================================== */

(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight + 1;

      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();
