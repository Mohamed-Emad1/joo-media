/* ==========================================================================
   Gallery — category filtering + lightbox preview
   ========================================================================== */

(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".masonry-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));

      items.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  const galleryItems = document.querySelectorAll(".gallery-item");

  [...items, ...galleryItems].forEach((item) => {
    if (item.tagName === "A" || item.classList.contains("masonry-item--soon")) return;
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      openLightbox(img.src, img.alt);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
