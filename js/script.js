const mobileNav = document.querySelector(".header__main-nav");
const mobileNavOpen = document.querySelector(".mobile-nav__open");

mobileNavOpen.addEventListener("click", () => {
  mobileNavOpen.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
