const title = document.querySelectorAll(".section");
const links = document.querySelectorAll(".link");
links[0].classList.add("active");
title[0].style.transform = "scale(1)";

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    setActiveLink(i);
  });
});

function showAlert() {
  let activeIndex = -1;

  title.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    const home = document.querySelector("#home").getBoundingClientRect();
    if (rect.top <= 0) {
      activeIndex = i;
    }
    if (home.top === 0) {
      document.querySelector(".side-nav").style.top = "-200px";
    } else {
      document.querySelector(".side-nav").style.top = "0px";
    }
  });

  setActiveLink(activeIndex);
}

window.addEventListener("scroll", showAlert);
