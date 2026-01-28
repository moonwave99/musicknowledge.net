const NAV_SCROLL_THRESHOLD = 100;

window.addEventListener("DOMContentLoaded", init);

function init() {
  const nav = document.querySelector(".nav");
  const navToggler = document.querySelector(".navToggler");
  navToggler.addEventListener("click", () =>
    document.body.classList.toggle("isNavOpen"),
  );

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > NAV_SCROLL_THRESHOLD);
    document.body.classList.remove("isNavOpen");
  });
}
