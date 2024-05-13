const title = document.querySelectorAll(".section");
const links = document.querySelectorAll(".link");

links[0].classList.add("active");
title[0].style.transform = "scale(1)";

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    setActiveLink(i);
  });
});

let rotateIndexOne = 0;
let rotateIndexTwo = 0;
const gears = document.querySelectorAll(".gear-scroll .fa-solid");
function showAlert() {
  // rotateIndexOne += 5;
  // rotateIndexTwo -= 50;
  // gears[0].style.transform = `rotate(${rotateIndexOne}deg)`;
  // gears[1].style.transform = `rotate(${rotateIndexTwo}deg)`;

  title.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    const home = document.querySelector("#home").getBoundingClientRect();
    const about = document.querySelector("#about").getBoundingClientRect();
    const interestsAndHobbies = document
      .querySelector(".interest-and-hobbies")
      .getBoundingClientRect();
    const imageAndText = document.querySelector(".text-image");
    const hobby = document.querySelector(".panel-one");
    imageAndText.style.transition = ".5s";

    about.top < 200
      ? (imageAndText.style.transform = "scale(1)")
      : (imageAndText.style.transform = "scale(0)");

    hobby.style.transition = ".5s";
    interestsAndHobbies.top < 300
      ? (hobby.style.transform = "scale(1)")
      : (hobby.style.transform = "scale(0)");

    if (home.top === 0) {
      document.querySelector(".side-nav").style.top = "-200px";
    } else {
      document.querySelector(".side-nav").style.top = "0px";
    }

    if (home.top === 0) {
      computer.style.transform = "skewY(-10deg)";
      keyboard.style.transform = "skew(-20deg)";
      keyboard.classList.remove("shadow");
      screen.style.transform = "skew(25deg)";
      screen.style.left = "-10px";

      keys.forEach((key) => {
        key.style.borderRight = "3px solid rgb(214, 214, 214)";
        key.style.padding = "2px 8px";
      });
    } else {
      computer.style.transform = "skewY(0deg)";
      keyboard.style.transform = "skew(0deg)";
      keyboard.classList.add("shadow");
      screen.style.transform = "skew(0deg)";
      screen.style.left = "0px";

      keys.forEach((key) => {
        key.style.borderRight = "1px solid rgb(214, 214, 214)";
        key.style.padding = "2px 9px";
      });
    }
  });

  setActiveLink(activeIndex);
}

window.addEventListener("scroll", showAlert);
