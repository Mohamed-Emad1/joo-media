/* ==========================================================================
   Navigation — sticky navbar, mobile menu, active link highlight
   ========================================================================== */

(function () {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");
  const links = navLinks ? navLinks.querySelectorAll("a") : [];
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  function toggleMenu(forceClose) {
    const shouldClose = forceClose === true || navLinks.classList.contains("is-open");
    navLinks.classList.toggle("is-open", !shouldClose);
    navOverlay.classList.toggle("is-open", !shouldClose);
    hamburger.classList.toggle("is-open", !shouldClose);
    document.body.style.overflow = !shouldClose ? "hidden" : "";
  }

  function setActiveLink() {
    const scrollPos = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0];

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    });

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  }

  window.addEventListener("scroll", () => {
    onScroll();
    setActiveLink();
  });

  hamburger?.addEventListener("click", () => toggleMenu());
  navOverlay?.addEventListener("click", () => toggleMenu(true));

  links.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  onScroll();
  setActiveLink();
})();
