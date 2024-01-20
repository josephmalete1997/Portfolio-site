const contentInner = document.querySelector(".content");
const nav = document.querySelectorAll(".side-nav a");
const progress = document.querySelector(".progress");

const menu = document.querySelector(".menu");
const inside = document.querySelectorAll(".menu-one");
const insideChild = document.querySelectorAll(".menu-inside");
const names = document.querySelector(".names");
const sideNav = document.querySelector(".side-nav");
const content = document.querySelector(".content");
const textImage = document.querySelector(".text-image");
const body = document.querySelector("body");

inside[0].style.display = "block";
inside[1].style.display = "none";

inside[0].addEventListener("click", () => {
  menu.style.left = "150px";
  names.style.marginLeft = "200px";
  sideNav.style.left = "0px";
  content.style.left = "95px";
  // textImage.style.gridTemplateColumns = "50% 70%";

  inside[0].style.display = "none";
  inside[1].style.display = "block";

  insideChild[3].style.transform = "rotate(45deg)";
  insideChild[4].style.transform = "rotate(-45deg)";
  insideChild[4].style.top = "5px";
  insideChild[5].style.display = "none";

  body.style.overflow = "hidden";
});

inside[1].addEventListener("click", () => {
  menu.style.left = "50px";
  names.style.marginLeft = "100px";
  sideNav.style.left = "-200px";
  content.style.left = "0px";
  // textImage.style.gridTemplateColumns = "40% 90%";

  inside[0].style.display = "block";
  inside[1].style.display = "none";

  body.style.overflow = "auto";
});
