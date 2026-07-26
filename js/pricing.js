/* ==========================================================================
   Pricing — tab switching between reels / content / education panels
   ========================================================================== */

(function () {
  const tabs = document.querySelectorAll(".pricing-tab");
  const panels = document.querySelectorAll(".pricing-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panels.forEach((panel) =>
        panel.classList.toggle("is-active", panel.dataset.panel === target)
      );

      panels.forEach((panel) => {
        if (panel.dataset.panel === target) {
          panel
            .querySelectorAll(".reveal, .stagger")
            .forEach((el) => el.classList.add("is-visible"));
        }
      });
    });
  });
})();
