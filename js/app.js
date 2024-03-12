const navBtn = document.querySelector(".navbar__btn");
const main = document.querySelector(".main");
const mainOverlay = document.querySelector(".main__overlay");
const mainSections = document.querySelectorAll(".main__section");
const navMenu = document.querySelector(".nav-menu");
const navMenuLinks = document.querySelectorAll(".nav-menu__link");

let pageIndex = 0;

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  main.classList.toggle("active");
  navMenu.classList.toggle("show");
});

navMenuLinks.forEach((item, i) => {
  item.addEventListener("click", () => {
    nextSection(i);
  });
});

function nextSection(index) {
  mainOverlay.style.animation = "slide 1s linear 1";
  setTimeout(() => {
    mainSections[pageIndex].classList.remove("active");
    mainSections[index].classList.add("active");
    pageIndex = index;
  }, 500);

  setTimeout(() => {
    mainOverlay.style.animation = null;
  }, 1000);
}
