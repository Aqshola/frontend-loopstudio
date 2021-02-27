const exit = document.querySelector("#nav-exit");
const mobileNav = document.querySelector(".nav-mobile");
const navHam = document.querySelector(".btn-ham");

console.log(navHam);

exit.addEventListener("click", () => {
  mobileNav.style.width = 0;
  mobileNav.style.transform = `translateX(-10em)`;
  mobileNav.style.visibility = "hidden";
});

navHam.addEventListener("click", () => {
  mobileNav.style.width = "100%";
  mobileNav.style.transform = `translateX(0)`;
  mobileNav.style.visibility = "visible";
});
