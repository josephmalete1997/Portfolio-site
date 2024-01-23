const contentInner = document.querySelector(".content");
const nav = document.querySelectorAll(".side-nav a");
const progress = document.querySelector(".progress");

const menu = document.querySelector(".menu");
const inside = document.querySelectorAll(".menu-one");
const insideChild = document.querySelectorAll(".menu-inside");
const header = document.querySelector(".header");
const sideNav = document.querySelector(".side-nav");
const content = document.querySelector(".content");
const textImage = document.querySelector(".text-image");
const body = document.querySelector("body");

inside[0].addEventListener("click", () => {
  header.style.marginLeft = "200px";
  sideNav.style.left = "0px";
  content.style.left = "95px";
  // textImage.style.gridTemplateColumns = "50% 70%";
  body.style.overflow = "hidden";
});

inside[1].addEventListener("click", () => {
  header.style.marginLeft = "0px";
  sideNav.style.left = "-200px";
  content.style.left = "0px";
  // textImage.style.gridTemplateColumns = "40% 90%";

  body.style.overflow = "auto";
});
