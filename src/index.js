const NAV_SCROLL_THRESHOLD = 100;

window.addEventListener("DOMContentLoaded", init);

function init() {
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > NAV_SCROLL_THRESHOLD);
    console.log(window.scrollY > NAV_SCROLL_THRESHOLD);
    document.body.classList.remove("isNavOpen");
  });
}
